import React from 'react';
import { Language } from '../types';
import { LOCATIONS, SOCIAL_LINKS } from '../data/content';
import { MapPin, Phone, Clock, MessageCircle, Calendar, Navigation, ExternalLink, ShieldCheck, Facebook, Instagram, Youtube } from 'lucide-react';
import { CtaBand } from '../components/CtaBand';

interface ContactPageProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ lang, onOpenBooking }) => {
  const isEs = lang === 'es';

  return (
    <div className="pt-6 pb-12">
      {/* Top Banner Header */}
      <div className="bg-slate-900 text-white py-12 px-4 sm:px-6 mb-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950 text-cyan-400 border border-cyan-800/60 mb-3">
            {isEs ? 'Atención Personalizada' : 'Personalized Attention'}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            {isEs ? 'Contacto y Ubicaciones' : 'Contact & Locations'}
          </h1>
          <p className="max-w-2xl mx-auto text-slate-300 text-sm sm:text-base">
            {isEs
              ? 'Encuéntrenos en nuestras sedes en Hospital La Católica y Hospital Metropolitano o comuníquese directamente por WhatsApp o teléfono.'
              : 'Visit us at La Católica Hospital or Metropolitan Hospital, or contact us directly via WhatsApp or phone.'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Hospital La Católica Card */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-xl">Hospital La Católica</h3>
                    <p className="text-xs text-slate-500 font-medium">Guadalupe, San José</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-100 text-cyan-800">
                  Sede 1
                </span>
              </div>

              <div className="space-y-4 mb-8 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <Navigation className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">{isEs ? 'Dirección:' : 'Address:'}</strong>
                    <p className="text-slate-600">{isEs ? LOCATIONS.catolica.address : LOCATIONS.catolica.addressEn}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">{isEs ? 'Contacto / Teléfono:' : 'Contact / Phone:'}</strong>
                    <a
                      href={isEs ? LOCATIONS.catolica.whatsappLink : LOCATIONS.catolica.whatsappLinkEn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 font-extrabold text-base hover:underline inline-flex items-center gap-1"
                    >
                      <span>{LOCATIONS.catolica.phone}</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">{isEs ? 'Horario de Atención:' : 'Office Hours:'}</strong>
                    <p className="text-slate-600">{isEs ? LOCATIONS.catolica.schedule : LOCATIONS.catolica.scheduleEn}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5 pt-4 border-t border-slate-100">
              <a
                href={LOCATIONS.catolica.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
              >
                <span>{isEs ? 'Ver Mapa' : 'View Map'}</span>
                <ExternalLink className="w-4 h-4 text-slate-600" />
              </a>

              <a
                href={isEs ? LOCATIONS.catolica.whatsappLink : LOCATIONS.catolica.whatsappLinkEn}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{isEs ? 'Mensaje' : 'Message'}</span>
              </a>

              <a
                href={`tel:${LOCATIONS.catolica.phoneRaw}`}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-cyan-600 hover:bg-cyan-700 text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{isEs ? 'Llamar' : 'Call'}</span>
              </a>
            </div>
          </div>

          {/* Hospital Metropolitano Card */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-xl">Hospital Metropolitano</h3>
                    <p className="text-xs text-slate-500 font-medium">San José Centro</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-100 text-cyan-800">
                  Sede 2
                </span>
              </div>

              <div className="space-y-4 mb-8 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <Navigation className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">{isEs ? 'Dirección:' : 'Address:'}</strong>
                    <p className="text-slate-600">{isEs ? LOCATIONS.metropolitano.address : LOCATIONS.metropolitano.addressEn}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">{isEs ? 'Contacto / Teléfono:' : 'Contact / Phone:'}</strong>
                    <a
                      href={isEs ? LOCATIONS.metropolitano.whatsappLink : LOCATIONS.metropolitano.whatsappLinkEn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 font-extrabold text-base hover:underline inline-flex items-center gap-1"
                    >
                      <span>{LOCATIONS.metropolitano.phone}</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">{isEs ? 'Horario de Atención:' : 'Office Hours:'}</strong>
                    <p className="text-slate-600">{isEs ? LOCATIONS.metropolitano.schedule : LOCATIONS.metropolitano.scheduleEn}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5 pt-4 border-t border-slate-100">
              <a
                href={LOCATIONS.metropolitano.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
              >
                <span>{isEs ? 'Ver Mapa' : 'View Map'}</span>
                <ExternalLink className="w-4 h-4 text-slate-600" />
              </a>

              <a
                href={isEs ? LOCATIONS.metropolitano.whatsappLink : LOCATIONS.metropolitano.whatsappLinkEn}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{isEs ? 'Mensaje' : 'Message'}</span>
              </a>

              <a
                href={`tel:${LOCATIONS.metropolitano.phoneRaw}`}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-cyan-600 hover:bg-cyan-700 text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{isEs ? 'Llamar' : 'Call'}</span>
              </a>
            </div>
          </div>

        </div>

        {/* WhatsApp & Fast Appointment Banner */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="inline-flex items-center gap-2 bg-emerald-800/60 text-emerald-200 px-3 py-1 rounded-full text-xs font-bold">
              <MessageCircle className="w-4 h-4 text-emerald-300" />
              {isEs ? 'Atención Rápida WhatsApp' : 'Instant WhatsApp Service'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {isEs ? '¿Prefiere agendar por mensaje?' : 'Prefer to book via messaging?'}
            </h3>
            <p className="text-emerald-100 text-sm max-w-xl">
              {isEs
                ? 'Escríbanos directamente a nuestro WhatsApp oficial para consultas rápidas, disponibilidad de citas y orientación de servicios.'
                : 'Message us directly on our official WhatsApp for quick inquiries, appointment availability, and service info.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 shrink-0 w-full md:w-auto">
            <a
              href={isEs ? LOCATIONS.catolica.whatsappLink : LOCATIONS.catolica.whatsappLinkEn}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-extrabold text-slate-900 bg-white hover:bg-emerald-50 transition-all shadow-md text-xs sm:text-sm"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600" />
              <span>La Católica: 8946-8277</span>
            </a>

            <a
              href={isEs ? LOCATIONS.metropolitano.whatsappLink : LOCATIONS.metropolitano.whatsappLinkEn}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-extrabold text-slate-900 bg-white hover:bg-emerald-50 transition-all shadow-md text-xs sm:text-sm"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600" />
              <span>Metropolitano: 6448-8664</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-extrabold text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-md text-xs sm:text-sm cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-cyan-400" />
              <span>{isEs ? 'Formulario de Cita' : 'Appointment Form'}</span>
            </button>
          </div>
        </div>

        {/* Redes Sociales / Social Networks Card */}
        <div className="mt-12 bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md">
          <div className="text-center max-w-xl mx-auto space-y-2 mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#21B5EB]">
              {isEs ? 'Comunidad & Contenido' : 'Community & Media'}
            </span>
            <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              {isEs ? 'Síganos en Redes Sociales' : 'Follow Us on Social Media'}
            </h3>
            <p className="text-slate-600 text-sm">
              {isEs
                ? 'Manténgase informado con consejos de salud respiratoria, videos educativos y novedades de la clínica.'
                : 'Stay informed with respiratory health tips, educational videos, and clinic news.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <a
              href={SOCIAL_LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-2xl bg-red-50 hover:bg-red-100/80 border border-red-200/60 transition-all text-red-700 group"
            >
              <div className="w-12 h-12 rounded-xl bg-red-600 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                <Youtube className="w-6 h-6" />
              </div>
              <div>
                <strong className="block text-slate-900 font-bold text-sm">YouTube</strong>
                <span className="text-xs text-red-600 font-medium">@PRANARESPIREMEJOR</span>
              </div>
            </a>

            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-2xl bg-pink-50 hover:bg-pink-100/80 border border-pink-200/60 transition-all text-pink-700 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                <Instagram className="w-6 h-6" />
              </div>
              <div>
                <strong className="block text-slate-900 font-bold text-sm">Instagram</strong>
                <span className="text-xs text-pink-600 font-medium">@prana.respire.mejor</span>
              </div>
            </a>

            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-2xl bg-blue-50 hover:bg-blue-100/80 border border-blue-200/60 transition-all text-blue-700 group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                <Facebook className="w-6 h-6" />
              </div>
              <div>
                <strong className="block text-slate-900 font-bold text-sm">Facebook</strong>
                <span className="text-xs text-blue-600 font-medium">Prana Respire Mejor</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      <CtaBand lang={lang} onOpenBooking={onOpenBooking} />
    </div>
  );
};
