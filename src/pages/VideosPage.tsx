import React from 'react';
import { Language } from '../types';
import { EducationalVideos } from '../components/EducationalVideos';
import { CtaBand } from '../components/CtaBand';

interface VideosPageProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const VideosPage: React.FC<VideosPageProps> = ({ lang, onOpenBooking }) => {
  return (
    <div className="bg-white min-h-screen">
      <EducationalVideos lang={lang} />
    </div>
  );
};
