import React, { useState } from 'react';
import { Language } from '../types';
import { LOCATIONS } from '../data/content';
import { MessageCircle, X } from 'lucide-react';

interface FloatingWhatsAppProps {
  lang: Language;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ lang }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = lang === 'es' ? LOCATIONS.whatsapp.link : LOCATIONS.whatsapp.linkEn;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 group">
      
      {/* Tooltip Badge */}
      {showTooltip && (
        <div className="bg-slate-900 text-white text-xs font-semibold py-2 px-3.5 rounded-2xl shadow-xl border border-slate-700 flex items-center gap-2 animate-bounce">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span>
            {lang === 'es'
              ? '¿Consulta o cita en Prana? ¡Escríbanos!'
              : 'Questions or booking? Chat with us!'}
          </span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-0.5 ml-1"
            title="Cerrar"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group-hover:shadow-emerald-500/40 relative"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white/20" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white flex items-center justify-center text-[9px] font-bold">
          1
        </span>
      </a>

    </div>
  );
};
