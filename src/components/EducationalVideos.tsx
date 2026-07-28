import React from 'react';
import { Language } from '../types';

interface EducationalVideosProps {
  lang: Language;
}

export const EducationalVideos: React.FC<EducationalVideosProps> = ({ lang }) => {
  const isEs = lang === 'es';

  return (
    <section id="videos-educativos" className="bg-white pb-16">
      {/* Green Header Banner */}
      <div className="bg-[#66D4A6] text-white py-6 sm:py-8 px-4 sm:px-6 shadow-sm mb-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-medium tracking-wide uppercase">
            {isEs ? 'VIDEOS EDUCATIVOS' : 'EDUCATIONAL VIDEOS'}
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Video 1: Uso correcto de spray nasal */}
          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-normal text-[#21B5EB] tracking-tight">
              {isEs ? 'Uso correcto de spray nasal' : 'Proper Nasal Spray Technique'}
            </h2>
            <div className="relative aspect-video w-full rounded border border-slate-200 overflow-hidden bg-black shadow-sm">
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/KB8ICXss_No"
                title="Uso correcto de spray nasal"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Video 2: Filtros HEPA */}
          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-normal text-[#21B5EB] tracking-tight">
              {isEs ? 'Filtros HEPA' : 'HEPA Filters'}
            </h2>
            <div className="relative aspect-video w-full rounded border border-slate-200 overflow-hidden bg-black shadow-sm">
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/2UhSKcwn8ow"
                title="Filtros HEPA"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Video 3: Inhalador Respimat */}
          <div className="space-y-3 pt-4 sm:pt-0">
            <h2 className="text-lg sm:text-xl font-normal text-[#21B5EB] tracking-tight">
              {isEs ? 'Inhalador Respimat' : 'Respimat Inhaler'}
            </h2>
            <div className="relative aspect-video w-full rounded border border-slate-200 overflow-hidden bg-slate-900 shadow-sm flex items-center justify-center">
              <video
                controls
                className="w-full h-full object-contain"
                src="/videos/PC-MX-100881%20Armado%20RESPIMAT%20pacientes.mp4"
                poster="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80"
              >
                Su navegador no soporta el reproductor de video.
              </video>
            </div>
          </div>

          {/* Video 4: Inhalador Airflusal */}
          <div className="space-y-3 pt-4 sm:pt-0">
            <h2 className="text-lg sm:text-xl font-normal text-[#21B5EB] tracking-tight">
              {isEs ? 'Inhalador Airflusal' : 'Airflusal Inhaler'}
            </h2>
            <div className="relative aspect-video w-full rounded border border-slate-200 overflow-hidden bg-slate-900 shadow-sm flex items-center justify-center">
              <video
                controls
                className="w-full h-full object-contain"
                src="/videos/IMG_6344.MOV"
                poster="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
              >
                Su navegador no soporta el reproductor de video.
              </video>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

