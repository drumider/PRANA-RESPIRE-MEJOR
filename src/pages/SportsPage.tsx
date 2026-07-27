import React from 'react';
import { Language } from '../types';
import { SportsNeumology } from '../components/SportsNeumology';

interface SportsPageProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const SportsPage: React.FC<SportsPageProps> = ({ lang, onOpenBooking }) => {
  return (
    <div className="bg-white min-h-screen">
      <SportsNeumology lang={lang} onOpenBooking={onOpenBooking} />
    </div>
  );
};

