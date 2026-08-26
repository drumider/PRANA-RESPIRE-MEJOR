import React, { useState } from 'react';
import { PlayCircle, AlertCircle, UploadCloud } from 'lucide-react';
import { Language } from '../types';

interface EducationalVideosProps {
  lang: Language;
}

interface VideoPlayerProps {
  url: string;
  type: 'youtube' | 'file';
  title: string;
  isEs: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url, type, title, isEs }) => {
  const [hasError, setHasError] = useState(false);

  if (!url) {
    return (
      <div className="flex flex-col items-center justify-center p-6 text-center text-slate-400">
        <PlayCircle className="w-12 h-12 text-slate-500 mb-2 stroke-1" />
        <p className="text-sm font-medium text-slate-300">
          {isEs ? 'Espacio disponible para video' : 'Available video slot'}
        </p>
        <p className="text-xs text-slate-400 mt-1 max-w-xs">
          {isEs
            ? 'Agrega la ruta del archivo o URL en EducationalVideos.tsx'
            : 'Add file path or URL in EducationalVideos.tsx'}
        </p>
      </div>
    );
  }

  if (type === 'file') {
    if (hasError) {
      const filename = url.split('/').pop() || url;
      return (
        <div className="flex flex-col items-center justify-center p-6 text-center text-amber-300/90 bg-slate-900/95 w-full h-full">
          <UploadCloud className="w-10 h-10 text-amber-400 mb-2 stroke-[1.5]" />
          <p className="text-sm font-medium text-slate-200">
            {isEs ? `Falta subir el archivo: ${filename}` : `Missing file: ${filename}`}
          </p>
          <p className="text-xs text-slate-400 mt-1.5 max-w-xs leading-relaxed">
            {isEs
              ? `Arrastra el archivo ${filename} a la carpeta public/videos en el explorador de archivos.`
              : `Drag and drop ${filename} into the public/videos folder in the file explorer.`}
          </p>
        </div>
      );
    }

    return (
      <video
        controls
        playsInline
        preload="metadata"
        className="w-full h-full object-contain bg-black"
        src={url}
        onError={() => setHasError(true)}
      >
        {isEs
          ? 'Su navegador no soporta el reproductor de video.'
          : 'Your browser does not support the video tag.'}
      </video>
    );
  }

  return (
    <iframe
      className="w-full h-full"
      src={url}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export const EducationalVideos: React.FC<EducationalVideosProps> = ({ lang }) => {
  const isEs = lang === 'es';

  interface NewVideoItem {
    id: number;
    titleEs: string;
    titleEn: string;
    url: string;
    type: 'youtube' | 'file';
  }

  // Configuración de los 3 nuevos videos agregados
  const newVideos: NewVideoItem[] = [
    {
      id: 5,
      titleEs: 'Video Educativo 5',
      titleEn: 'Educational Video 5',
      url: '/videos/1.mp4',
      type: 'file',
    },
    {
      id: 6,
      titleEs: 'Video Educativo 6',
      titleEn: 'Educational Video 6',
      url: '/videos/2.mp4',
      type: 'file',
    },
    {
      id: 7,
      titleEs: 'Video Educativo 7',
      titleEn: 'Educational Video 7',
      url: '/videos/3.mp4',
      type: 'file',
    },
  ];

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

          {/* Videos 5, 6, 7 (Nuevos espacios para videos) */}
          {newVideos.map((vid) => (
            <div key={vid.id} className="space-y-3 pt-4 sm:pt-0">
              <h2 className="text-lg sm:text-xl font-normal text-[#21B5EB] tracking-tight">
                {isEs ? vid.titleEs : vid.titleEn}
              </h2>
              <div className="relative aspect-video w-full rounded border border-slate-200 overflow-hidden bg-slate-900 shadow-sm flex items-center justify-center">
                <VideoPlayer
                  url={vid.url}
                  type={vid.type}
                  title={isEs ? vid.titleEs : vid.titleEn}
                  isEs={isEs}
                />
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};


