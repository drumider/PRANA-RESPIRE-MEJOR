import nodemailer from 'nodemailer';

export default async function handler(req: any, res: any) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    const { fullName, phone, email, hospital, serviceType, preferredDate, preferredTime, insurance, notes } = body;

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
        console.log(`Email enviado con éxito por API usando ${smtpUser}:`, info.response);
      } catch (err: any) {
        console.error(`Error enviando correo con ${smtpUser}:`, err?.message || err);
        emailError = err?.message || 'Error en autenticación o envío SMTP';
      }
    } else {
      console.log('SMTP no configurado en variables de entorno (definir SMTP_USER y SMTP_PASS).');
    }

    return res.status(200).json({
      success: true,
      emailSent,
      recipient: recipientEmail,
      emailError,
      message: emailSent
        ? `Cita enviada exitosamente a ${recipientEmail}`
        : `Solicitud registrada.`,
    });
  } catch (error: any) {
    console.error('Error procesando la cita en Vercel:', error);
    return res.status(500).json({ success: false, error: 'Error al procesar la cita' });
  }
}
