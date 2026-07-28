import React, { useState } from 'react';
import { Language, AppointmentFormData } from '../types';
import { DICTIONARY, LOCATIONS, DOCTOR_EMAIL } from '../data/content';
import { X, Calendar, MapPin, Phone, User, Mail, MessageCircle, CheckCircle2, ShieldCheck, Clock, Send } from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose, lang }) => {
  const t = DICTIONARY[lang].appointmentModal;

  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phone: '',
    email: '',
    hospital: 'Hospital La Católica',
    serviceType: 'Consulta Neumología',
    preferredDate: '',
    preferredTime: 'Mañana (8:00 AM - 12:00 PM)',
    insurance: 'Particular / Ninguna',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [serverEmailSent, setServerEmailSent] = useState<boolean | null>(null);
  const [serverEmailError, setServerEmailError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleGmailWebCompose = () => {
    const subject = `Solicitud de Cita - ${formData.fullName || 'Nuevo Paciente'} (${formData.hospital})`;
    const body = 
      `Hola Dr. Randall Guadamuz,\n\n` +
      `Se ha generado una nueva solicitud de cita desde el sitio web de Prana Neumología:\n\n` +
      `• Nombre del Paciente: ${formData.fullName || 'No especificado'}\n` +
      `• Teléfono: ${formData.phone || 'No especificado'}\n` +
      `• Correo electrónico: ${formData.email || 'No especificado'}\n` +
      `• Sede / Hospital: ${formData.hospital}\n` +
      `• Tipo de Servicio: ${formData.serviceType}\n` +
      `• Fecha preferida: ${formData.preferredDate || 'Por coordinar'}\n` +
      `• Horario preferido: ${formData.preferredTime}\n` +
      `• Aseguradora: ${formData.insurance}\n` +
      `• Observaciones: ${formData.notes || 'Ninguna'}\n\n` +
      `Atentamente,\nPrana Neumología`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(DOCTOR_EMAIL)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setServerEmailSent(null);
    setServerEmailError(null);

    try {
      const response = await fetch('/api/send-appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.emailSent) {
        setServerEmailSent(true);
      } else {
        setServerEmailSent(false);
        setServerEmailError(data.emailError || null);
      }
    } catch (err: any) {
      console.error('Error enviando cita al servidor:', err);
      setServerEmailSent(false);
      setServerEmailError(err?.message || 'Error de red');
    } finally {
      setIsSending(false);
      setIsSubmitted(true);
    }
  };

  const handleWhatsAppBooking = () => {
    const text = encodeURIComponent(
      `Hola Prana Neumología! Quisiera reservar una cita:\n` +
      `- Nombre: ${formData.fullName || 'No especificado'}\n` +
      `- Sede: ${formData.hospital}\n` +
      `- Servicio: ${formData.serviceType}\n` +
      `- Fecha preferida: ${formData.preferredDate || 'Por coordinar'}\n` +
      `- Horario: ${formData.preferredTime}\n` +
      `- Aseguradora: ${formData.insurance}\n` +
      `- Teléfono: ${formData.phone}`
    );
    window.open(`https://wa.me/50688282904?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">{t.successMsg}</h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              {lang === 'es'
                ? `Hemos registrado su solicitud para ${formData.hospital}. Nos pondremos en contacto al ${formData.phone} para confirmar su espacio.`
                : `We registered your request for ${formData.hospital}. We will contact you at ${formData.phone} to confirm your appointment.`}
            </p>
            
            {serverEmailSent ? (
              <div className="bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl p-3 text-xs text-center max-w-md mx-auto flex items-center justify-center gap-2 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Correo enviado exitosamente a doctorguadamuz@gmail.com</span>
              </div>
            ) : (
              <div className="bg-amber-50 text-amber-900 border border-amber-200 rounded-xl p-3.5 text-xs text-left max-w-md mx-auto space-y-2">
                <div className="flex items-start gap-2 font-bold text-amber-800">
                  <Mail className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>El envío automático por servidor requirió confirmación manual.</span>
                </div>
                {serverEmailError && (
                  <p className="text-[11px] text-amber-700 bg-amber-100/60 p-2 rounded-lg font-mono overflow-x-auto">
                    Detalle: {serverEmailError}
                  </p>
                )}
                <p className="text-[11px] text-amber-800 font-medium">
                  Para asegurar que el doctor reciba tu solicitud de inmediato, haz clic en uno de los siguientes botones:
                </p>
              </div>
            )}

            <div className="pt-2 flex flex-col sm:flex-row flex-wrap gap-2.5 justify-center">
              {!serverEmailSent && (
                <button
                  onClick={handleGmailWebCompose}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm text-white bg-red-600 hover:bg-red-500 shadow-md transition-all cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>{lang === 'es' ? 'Abrir en Gmail' : 'Open Gmail'}</span>
                </button>
              )}

              <button
                onClick={handleWhatsAppBooking}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-500 shadow-md transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.whatsappBtn}</span>
              </button>

              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="px-5 py-3 rounded-xl font-bold text-sm text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
              >
                {t.closeBtn}
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            
            {/* Header */}
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full">
                <Calendar className="w-3.5 h-3.5" />
                <span>Atención Profesional en Costa Rica</span>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                {t.title}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm">
                {t.subtitle}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {t.nameLabel} *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Ej. María Rodríguez"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t.phoneLabel} *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Ej. 8828-2904"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t.emailLabel}
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="correo@ejemplo.com"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Hospital Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {t.hospitalLabel} *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <label className={`flex items-center gap-2 p-3 rounded-xl border cursor-pointer transition-all ${
                    formData.hospital === 'Hospital La Católica'
                      ? 'border-cyan-500 bg-cyan-50/60 text-slate-900 font-bold'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}>
                    <input
                      type="radio"
                      name="hospital"
                      value="Hospital La Católica"
                      checked={formData.hospital === 'Hospital La Católica'}
                      onChange={(e) => setFormData({ ...formData, hospital: e.target.value })}
                      className="text-cyan-600 focus:ring-cyan-500"
                    />
                    <div className="text-xs">
                      <p className="font-bold">Hospital La Católica</p>
                      <p className="text-[10px] text-slate-500">Sector 4, Piso 2, Consultorio 2</p>
                    </div>
                  </label>

                  <label className={`flex items-center gap-2 p-3 rounded-xl border cursor-pointer transition-all ${
                    formData.hospital === 'Hospital Metropolitano'
                      ? 'border-cyan-500 bg-cyan-50/60 text-slate-900 font-bold'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}>
                    <input
                      type="radio"
                      name="hospital"
                      value="Hospital Metropolitano"
                      checked={formData.hospital === 'Hospital Metropolitano'}
                      onChange={(e) => setFormData({ ...formData, hospital: e.target.value })}
                      className="text-cyan-600 focus:ring-cyan-500"
                    />
                    <div className="text-xs">
                      <p className="font-bold">Hospital Metropolitano</p>
                      <p className="text-[10px] text-slate-500">San José Centro, Piso 4, Consultorio 2</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Service & Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t.serviceLabel}
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white"
                  >
                    <option value="Consulta Neumología">Consulta Neumología General</option>
                    <option value="Espirometría / Examen">Espirometría / Examen Respiratorio</option>
                    <option value="Evaluación Deportiva">Neumología Deportiva</option>
                    <option value="Estudio de Sueño">Apnea del Sueño / Oximetría</option>
                    <option value="Segunda Opinión">Segunda Opinión Médica</option>
                    <option value="Otros">{lang === 'es' ? 'Otros' : 'Otros / Others'}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t.dateLabel}
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
              </div>

              {/* Insurance */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {t.insuranceLabel}
                </label>
                <select
                  value={formData.insurance}
                  onChange={(e) => setFormData({ ...formData, insurance: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white"
                >
                  <option value="Particular / Ninguna">Atención Particular / Privada</option>
                  <option value="INS Medical">INS Medical</option>
                  <option value="Medismart">Medismart</option>
                  <option value="Pan American Life (PALIG)">Pan American Life (PALIG)</option>
                </select>
              </div>

              {/* Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={isSending}
                  className="flex-1 py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-slate-900 hover:bg-slate-800 disabled:bg-slate-600 shadow-md cursor-pointer transition-all flex items-center justify-center gap-2"
                >
                  {isSending ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>{lang === 'es' ? 'Enviando cita...' : 'Sending...'}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-cyan-400" />
                      <span>{t.submitBtn}</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  className="inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow cursor-pointer shrink-0"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </button>
              </div>

              <p className="text-[11px] text-center text-slate-500 pt-1 flex items-center justify-center gap-1">
                <Mail className="w-3.5 h-3.5 text-cyan-600" />
                <span>
                  {lang === 'es'
                    ? 'La solicitud será enviada a doctorguadamuz@gmail.com'
                    : 'The appointment request will be sent to doctorguadamuz@gmail.com'}
                </span>
              </p>

            </form>

          </div>
        )}

      </div>
    </div>
  );
};
