import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { PranaLogo } from './PranaLogo';
import { Language } from '../types';
import { DICTIONARY } from '../data/content';
import { Menu, X, Globe, Calendar } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const t = DICTIONARY[lang].nav;

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          // Hysteresis buffer prevents scroll threshold flicker/loop
          if (scrollY > 30) {
            setIsScrolled(true);
          } else if (scrollY < 10) {
            setIsScrolled(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: t.home },
    { path: '/sobre-nosotros', label: t.about },
    { path: '/servicios', label: t.services },
    { path: '/neurofeedback-z-score', label: t.neurofeedback || 'Neurofeedback Z-Score' },
    { path: '/videos-educativos', label: t.videos },
    { path: '/aseguradoras', label: t.insurances },
    { path: '/contacto', label: t.contact },
  ];

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Main Nav Navbar */}
      <nav
        className={`w-full bg-white/95 backdrop-blur-md border-b transition-all duration-300 ease-in-out ${
          isScrolled
            ? 'py-1.5 shadow-md border-slate-200'
            : 'py-3.5 shadow-none border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo with smooth scale effect on scroll */}
          <Link
            to="/"
            className={`focus:outline-none transition-transform duration-300 origin-left ${
              isScrolled ? 'scale-90' : 'scale-100'
            }`}
          >
            <PranaLogo variant="full" size="md" />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `transition-colors py-1 relative group font-medium ${
                    isActive ? 'text-cyan-600 font-bold' : 'text-slate-700 hover:text-cyan-600'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-cyan-500 transition-all duration-200 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    ></span>
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Right Action Area */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Language Switcher ES / EN - Always visible */}
            <div className="flex items-center bg-slate-100 p-0.5 rounded-full border border-slate-200 shrink-0">
              <button
                type="button"
                onClick={() => setLang('es')}
                aria-label="Cambiar idioma a Español"
                className={`px-2.5 py-1 text-[11px] sm:text-xs font-bold rounded-full transition-all duration-200 cursor-pointer ${
                  lang === 'es'
                    ? 'bg-cyan-500 text-slate-950 shadow'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                ES
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                aria-label="Switch language to English"
                className={`px-2.5 py-1 text-[11px] sm:text-xs font-bold rounded-full transition-all duration-200 cursor-pointer ${
                  lang === 'en'
                    ? 'bg-cyan-500 text-slate-950 shadow'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                EN
              </button>
            </div>

            {/* Deep Contrast Navy Blue Button */}
            <button
              onClick={onOpenBooking}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-slate-900 hover:bg-slate-800 active:bg-slate-950 transition-all shadow-md hover:shadow-lg focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 cursor-pointer group"
            >
              <Calendar className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span>{t.bookAppointment}</span>
            </button>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-1.5 xl:hidden">
              <button
                onClick={onOpenBooking}
                className="sm:hidden px-2.5 py-1.5 rounded-lg font-bold text-xs text-white bg-slate-900 hover:bg-slate-800 cursor-pointer"
              >
                {t.bookAppointment}
              </button>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-1.5 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6 text-slate-900" /> : <Menu className="w-6 h-6 text-slate-900" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-2 pt-2 border-t border-slate-100">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
                      isActive
                        ? 'bg-cyan-50 text-cyan-700 font-bold'
                        : 'text-slate-700 hover:bg-cyan-50/50 hover:text-cyan-700'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-3">
              {/* Language Switcher Mobile */}
              <div className="flex items-center justify-between bg-slate-100 px-3 py-2 rounded-xl text-xs">
                <span className="font-semibold text-slate-600 flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-cyan-600" />
                  Idioma / Language:
                </span>
                <div className="flex items-center bg-white p-0.5 rounded-lg border border-slate-200">
                  <button
                    onClick={() => setLang('es')}
                    className={`px-3 py-1 text-xs font-bold rounded ${
                      lang === 'es' ? 'bg-cyan-500 text-slate-950' : 'text-slate-600'
                    }`}
                  >
                    Español
                  </button>
                  <button
                    onClick={() => setLang('en')}
                    className={`px-3 py-1 text-xs font-bold rounded ${
                      lang === 'en' ? 'bg-cyan-500 text-slate-950' : 'text-slate-600'
                    }`}
                  >
                    English
                  </button>
                </div>
              </div>

              {/* Mobile Appointment CTA */}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm text-white bg-slate-900 hover:bg-slate-800 shadow-md"
              >
                <Calendar className="w-4 h-4 text-cyan-400" />
                {t.bookAppointment}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
