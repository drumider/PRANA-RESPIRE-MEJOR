import React from 'react';
import { Language } from '../types';
import { AboutSection } from '../components/AboutSection';

interface AboutPageProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ lang, onOpenBooking }) => {
  return (
    <div className="bg-white min-h-screen">
      {/* Top Banner Header as shown in screenshot */}
      <div className="bg-[#66D4A6] text-white py-6 sm:py-8 px-4 sm:px-6 shadow-sm">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-medium tracking-tight">
            Acerca de nosotros / About Us
          </h1>
        </div>
      </div>

      {/* Main About Content */}
      <main className="pb-16">
        <AboutSection lang={lang} onOpenBooking={onOpenBooking} />
      </main>
    </div>
  );
};

