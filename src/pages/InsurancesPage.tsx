import React from 'react';
import { Language } from '../types';
import { InsurancesSection } from '../components/InsurancesSection';
import { CtaBand } from '../components/CtaBand';

interface InsurancesPageProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const InsurancesPage: React.FC<InsurancesPageProps> = ({ lang }) => {
  return (
    <div className="bg-white min-h-screen">
      <InsurancesSection lang={lang} />
    </div>
  );
};
