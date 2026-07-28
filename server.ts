import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for submitting appointment requests
  app.post('/api/send-appointment', async (req, res) => {
    try {
      const { fullName, phone, email, hospital, serviceType, preferredDate, preferredTime, insurance, notes } = req.body;

      console.log('--- NUEVA SOLICITUD DE CITA ---');
      console.log(`Paciente: ${fullName}`);
      console.log(`Teléfono: ${phone}`);
      console.log(`Email Paciente: ${email}`);
      console.log(`Sede: ${hospital}`);
      console.log(`Servicio: ${serviceType}`);
      console.log(`Fecha: ${preferredDate}`);
      console.log(`Horario: ${preferredTime}`);
      console.log(`Aseguradora: ${insurance}`);
      console.log(`Notas: ${notes}`);
      console.log('-------------------------------');

      const recipientEmail = (process.env.RECIPIENT_EMAIL || 'doctorguadamuz@gmail.com').trim();
      const smtpUser = (process.env.SMTP_USER || process.env.EMAIL_USER || '').trim();
      const rawPass = process.env.SMTP_PASS || process.env.EMAIL_PASS || '';
      const smtpPass = rawPass.replace(/\s+/g, '');

      const recipientList = Array.from(new Set([
        recipientEmail,
        (process.env.SECONDARY_RECIPIENT || '').trim()
      ])).filter(Boolean);

      let emailSent = false;
      let emailError: string | null = null;

      if (smtpUser && smtpPass) {
        try {
          console.log(`Intentando enviar correo mediante SMTP (${smtpUser})...`);

          const transporterConfig: any = process.env.SMTP_HOST
            ? {
                host: process.env.SMTP_HOST,
                port: parseInt(process.env.SMTP_PORT || '587', 10),
                secure: process.env.SMTP_SECURE === 'true',
                auth: { user: smtpUser, pass: smtpPass },
              }
            : {
                service: 'gmail',
                auth: { user: smtpUser, pass: smtpPass },
              };

          const transporter = nodemailer.createTransport(transporterConfig);

          const mailOptions = {
            from: process.env.SMTP_FROM || `"Prana Neumología Web" <${smtpUser}>`,
            to: recipientList,
            replyTo: email || recipientEmail,
            subject: `🩺 Nueva Solicitud de Cita - ${fullName || 'Paciente'} (${hospital})`,
            text: `
NUEVA SOLICITUD DE CITA DESDE EL SITIO WEB - PRANA NEUMOLOGÍA

• Paciente: ${fullName || 'No especificado'}
• Teléfono: ${phone || 'No especificado'}
• Email del Paciente: ${email || 'No especificado'}
• Sede / Hospital: ${hospital || 'No especificado'}
• Tipo de Servicio: ${serviceType || 'No especificado'}
• Fecha preferida: ${preferredDate || 'Por coordinar'}
• Horario preferido: ${preferredTime || 'No especificado'}
• Aseguradora: ${insurance || 'No especificado'}
• Notas / Síntomas: ${notes || 'Ninguna'}

-- 
Enviado desde el sistema web de Prana Neumología
            `,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; background-color: #ffffff;">
                <div style="text-align: center; border-bottom: 2px solid #06b6d4; padding-bottom: 16px; margin-bottom: 20px;">
                  <h2 style="color: #0891b2; margin: 0;">Prana Neumología</h2>
                  <p style="color: #64748b; font-size: 14px; margin: 4px 0 0 0;">Nueva Solicitud de Cita Médica</p>
                </div>
                <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #334155;">
                  <tr><td style="padding: 8px 0; font-weight: bold; width: 140px;">Paciente:</td><td>${fullName || 'No especificado'}</td></tr>
                  <tr><td style="padding: 8px 0; font-weight: bold;">Teléfono:</td><td><a href="tel:${phone}">${phone || 'No especificado'}</a></td></tr>
                  <tr><td style="padding: 8px 0; font-weight: bold;">Correo:</td><td><a href="mailto:${email}">${email || 'No especificado'}</a></td></tr>
                  <tr><td style="padding: 8px 0; font-weight: bold;">Sede / Hospital:</td><td><strong>${hospital || 'No especificado'}</strong></td></tr>
                  <tr><td style="padding: 8px 0; font-weight: bold;">Servicio:</td><td>${serviceType || 'No especificado'}</td></tr>
                  <tr><td style="padding: 8px 0; font-weight: bold;">Fecha Preferida:</td><td>${preferredDate || 'Por coordinar'}</td></tr>
                  <tr><td style="padding: 8px 0; font-weight: bold;">Horario:</td><td>${preferredTime || 'No especificado'}</td></tr>
                  <tr><td style="padding: 8px 0; font-weight: bold;">Aseguradora:</td><td>${insurance || 'No especificado'}</td></tr>
                  ${notes ? `<tr><td style="padding: 8px 0; font-weight: bold;">Observaciones:</td><td>${notes}</td></tr>` : ''}
                </table>
                <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e2e8f0; text-align: center; color: #94a3b8; font-size: 12px;">
                  Solicitud registrada en el sistema web de Prana Neumología.
                </div>
              </div>
            `,
          };

          const info = await transporter.sendMail(mailOptions);
          emailSent = true;
          emailError = null;
          console.log(`Email enviado con éxito a ${recipientList.join(', ')}:`, info.response);
        } catch (err: any) {
          console.error(`Error enviando correo SMTP con ${smtpUser}:`, err?.message || err);
          emailError = err?.message || 'Error en autenticación o envío SMTP';
        }
      } else {
        console.log('SMTP no configurado en variables de entorno (definir SMTP_USER y SMTP_PASS para envío directo).');
      }

      return res.json({
        success: true,
        emailSent,
        recipient: recipientEmail,
        emailError,
        message: emailSent
          ? `Cita enviada exitosamente a ${recipientEmail}`
          : `Solicitud registrada. (Nota: Para envío automático por correo directo en servidor, configure SMTP_USER y SMTP_PASS)`,
      });
    } catch (error: any) {
      console.error('Error procesando la cita:', error);
      return res.status(500).json({ success: false, error: 'Error al procesar la cita' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
