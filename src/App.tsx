import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Language } from './types';
import { ScrollToTop } from './components/ScrollToTop';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { AppointmentModal } from './components/AppointmentModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { VideosPage } from './pages/VideosPage';
import { InsurancesPage } from './pages/InsurancesPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem('prana_lang');
    return (saved === 'en' || saved === 'es') ? saved : 'es';
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem('prana_lang', newLang);
    } catch (e) {
      // Ignore storage errors
    }
  };

  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleOpenBooking = () => {
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-cyan-500 selection:text-white">
        {/* Navbar with Header & ES/EN Language Switcher */}
        <Navbar
          lang={lang}
          setLang={setLang}
          onOpenBooking={handleOpenBooking}
        />

        {/* Main Content Router */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage lang={lang} onOpenBooking={handleOpenBooking} />} />
            <Route path="/sobre-nosotros" element={<AboutPage lang={lang} onOpenBooking={handleOpenBooking} />} />
            <Route path="/servicios" element={<ServicesPage lang={lang} onOpenBooking={handleOpenBooking} />} />
            <Route path="/videos-educativos" element={<VideosPage lang={lang} onOpenBooking={handleOpenBooking} />} />
            <Route path="/aseguradoras" element={<InsurancesPage lang={lang} onOpenBooking={handleOpenBooking} />} />
            <Route path="/contacto" element={<ContactPage lang={lang} onOpenBooking={handleOpenBooking} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Footer with Hospital La Católica, Hospital Metropolitano & Socials */}
        <Footer lang={lang} />

        {/* Floating WhatsApp Action Button */}
        <FloatingWhatsApp lang={lang} />

        {/* Appointment Booking Modal */}
        <AppointmentModal
          isOpen={isBookingModalOpen}
          onClose={handleCloseBooking}
          lang={lang}
        />
      </div>
    </Router>
  );
}
