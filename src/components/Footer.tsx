import React from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../types';
import { DICTIONARY, LOCATIONS, SOCIAL_LINKS } from '../data/content';
import { PranaLogo } from './PranaLogo';
import { MapPin, Phone, MessageCircle, Facebook, Instagram, Youtube, ArrowUp, Clock, ShieldCheck, ChevronRight } from 'lucide-react';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = DICTIONARY[lang].footer;
  const navT = DICTIONARY[lang].nav;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { path: '/', label: navT.home },
    { path: '/sobre-nosotros', label: navT.about },
    { path: '/servicios', label: navT.services },
    { path: '/neurofeedback-z-score', label: navT.neurofeedback || 'Neurofeedback Z-Score' },
    { path: '/videos-educativos', label: navT.videos },
    { path: '/aseguradoras', label: navT.insurances },
    { path: '/contacto', label: navT.contact },
  ];

  return (
    <footer id="contacto" className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Reorganized layout for better alignment */}
        <div className="flex flex-col gap-10 pb-12 border-b border-slate-800">
          
          {/* Top Section: Brand & Socials */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-slate-900/40 p-6 sm:p-8 rounded-2xl border border-slate-800/60">
            <div className="space-y-4 max-w-lg">
              <Link to="/" className="inline-block">
                <PranaLogo variant="light" size="md" />
              </Link>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                {t.description}
              </p>
            </div>

            {/* Social Buttons */}
            <div className="space-y-3 shrink-0">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block md:text-right">
                {t.socialsTitle}
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Prana"
                  className="w-10 h-10 rounded-xl bg-slate-950 hover:bg-cyan-600 text-slate-300 hover:text-white border border-slate-800 flex items-center justify-center transition-all shadow-sm"
                >
                  <Facebook className="w-4 h-4" />
                </a>

                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Prana"
                  className="w-10 h-10 rounded-xl bg-slate-950 hover:bg-cyan-600 text-slate-300 hover:text-white border border-slate-800 flex items-center justify-center transition-all shadow-sm"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                <a
                  href={SOCIAL_LINKS.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube Prana"
                  className="w-10 h-10 rounded-xl bg-slate-950 hover:bg-cyan-600 text-slate-300 hover:text-white border border-slate-800 flex items-center justify-center transition-all shadow-sm"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section: 3 Columns Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Column 1: Navigation Links */}
            <div className="space-y-4">
              <h4 className="text-white text-base font-bold tracking-tight uppercase border-b border-cyan-900/60 pb-2">
                {lang === 'es' ? 'Navegación' : 'Navigation'}
              </h4>
              <ul className="grid grid-cols-1 gap-2 text-xs">
                {footerLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1.5 group py-0.5"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-cyan-500 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Locations */}
            <div className="space-y-4">
              <h4 className="text-white text-base font-bold tracking-tight uppercase border-b border-cyan-900/60 pb-2">
                {t.locationsTitle}
              </h4>
              <div className="space-y-3">
                {/* Location 1: Hospital La Católica */}
                <div className="space-y-1.5 bg-slate-900/80 p-3 rounded-xl border border-slate-800/80">
                  <div className="flex items-center gap-2 text-cyan-400">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <p className="text-xs font-bold text-white">Hospital La Católica</p>
                  </div>
                  <p className="text-[11px] text-slate-400 pl-5 leading-snug">
                    {t.catolicaAddress}
                  </p>
                  <div className="pl-5 pt-0.5">
                    <a
                      href={`tel:${LOCATIONS.catolica.phoneRaw}`}
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-cyan-300 hover:text-cyan-200 transition-colors"
                    >
                      <Phone className="w-3 h-3" />
                      <span>{LOCATIONS.catolica.phone}</span>
                    </a>
                  </div>
                </div>

                {/* Location 2: Hospital Metropolitano */}
                <div className="space-y-1.5 bg-slate-900/80 p-3 rounded-xl border border-slate-800/80">
                  <div className="flex items-center gap-2 text-cyan-400">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <p className="text-xs font-bold text-white">Hospital Metropolitano</p>
                  </div>
                  <p className="text-[11px] text-slate-400 pl-5 leading-snug">
                    {t.metropolitanoAddress}
                  </p>
                  <div className="pl-5 pt-0.5">
                    <a
                      href={`tel:${LOCATIONS.metropolitano.phoneRaw}`}
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-cyan-300 hover:text-cyan-200 transition-colors"
                    >
                      <Phone className="w-3 h-3" />
                      <span>{LOCATIONS.metropolitano.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: Hours & Direct Contact */}
            <div className="space-y-4">
              <h4 className="text-white text-base font-bold tracking-tight uppercase border-b border-cyan-900/60 pb-2">
                {lang === 'es' ? 'Horarios & Atención' : 'Hours & Support'}
              </h4>
              <div className="space-y-3">
                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800/80 space-y-1.5 text-xs text-slate-300">
                  <div className="flex items-center gap-1.5 text-cyan-400 font-bold">
                    <Clock className="w-4 h-4 shrink-0" />
                    <span>{lang === 'es' ? 'Horario de Atención:' : 'Office Hours:'}</span>
                  </div>
                  <p className="pl-5 font-semibold text-white">
                    {lang === 'es' ? 'Lunes a Viernes: 8:00 AM - 5:00 PM' : 'Monday to Friday: 8:00 AM - 5:00 PM'}
                  </p>
                  <p className="pl-5 text-[11px] text-slate-400">
                    {lang === 'es' ? 'Citas previas en ambas sedes.' : 'By appointment at both locations.'}
                  </p>
                </div>

                {/* Direct Contact Buttons */}
                <div className="space-y-2">
                  <a
                    href={lang === 'es' ? LOCATIONS.catolica.whatsappLink : LOCATIONS.catolica.whatsappLinkEn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-3 bg-emerald-950/60 hover:bg-emerald-900/80 p-2.5 rounded-xl border border-emerald-800/60 transition-colors group"
                  >
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      <div className="text-xs">
                        <span className="block text-emerald-200 font-bold text-[11px]">Sede La Católica</span>
                        <span className="text-[11px] text-emerald-300 font-mono">{LOCATIONS.catolica.whatsapp}</span>
                      </div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <a
                    href={lang === 'es' ? LOCATIONS.metropolitano.whatsappLink : LOCATIONS.metropolitano.whatsappLinkEn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-3 bg-emerald-950/60 hover:bg-emerald-900/80 p-2.5 rounded-xl border border-emerald-800/60 transition-colors group"
                  >
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      <div className="text-xs">
                        <span className="block text-emerald-200 font-bold text-[11px]">Sede Metropolitano</span>
                        <span className="text-[11px] text-emerald-300 font-mono">{LOCATIONS.metropolitano.whatsapp}</span>
                      </div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Rights & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
            <p>© {new Date().getFullYear()} {t.rights}</p>
            <span className="hidden sm:inline text-slate-700">|</span>
            <p>
              {lang === 'es' ? 'Creado por ' : 'Created by '}
              <a 
                href="https://mantaiweb.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-cyan-500 hover:text-cyan-400 font-medium transition-colors hover:underline"
              >
                mantaiweb.com
              </a>
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
          >
            <span>{t.backToTop}</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
