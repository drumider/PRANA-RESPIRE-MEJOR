import React from 'react';
import { Language } from '../types';
import { Hero } from '../components/Hero';
import { MainServices } from '../components/MainServices';
import { HealthCareGrid } from '../components/HealthCareGrid';
import { CtaBand } from '../components/CtaBand';

interface HomePageProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ lang, onOpenBooking }) => {
  return (
    <div className="space-y-0">
      <Hero lang={lang} onOpenBooking={onOpenBooking} />
      <MainServices lang={lang} onOpenBooking={onOpenBooking} />
      <HealthCareGrid lang={lang} onOpenBooking={onOpenBooking} />
      <CtaBand lang={lang} onOpenBooking={onOpenBooking} />
    </div>
  );
};
