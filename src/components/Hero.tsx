import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HERO_SLIDES, SLIDE_CHANGE_INTERVAL } from '../data/heroImages';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  lang: string;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (HERO_SLIDES.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, SLIDE_CHANGE_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="inicio" className="relative w-full h-[calc(100vh-76px)] min-h-[500px] max-h-[900px] bg-slate-950 overflow-hidden group">
      {/* Full-width Images Stack with Smooth Crossfade */}
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === currentSlide;
        const imageSrc = failedImages[slide.id] ? slide.fallbackSrc : slide.src;

        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={imageSrc}
              alt={slide.alt}
              onError={() => handleImageError(slide.id)}
              className="w-full h-full object-cover object-center"
            />
          </div>
        );
      })}

      {/* Subtle Bottom & Top Gradient for UI integration */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/20 z-20 pointer-events-none"></div>

      {/* Dots Navigation Bar */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 bg-slate-900/70 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-lg">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Ir a imagen ${index + 1}`}
            className={`h-2.5 rounded-full transition-all cursor-pointer ${
              index === currentSlide ? 'w-8 bg-cyan-400' : 'w-2.5 bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <Link
        to="/servicios"
        aria-label="Ver servicios"
        className="absolute bottom-2 right-6 sm:right-10 z-30 hidden sm:flex items-center gap-2 text-white/80 hover:text-white text-xs font-medium bg-slate-900/40 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10 transition-colors animate-bounce"
      >
        <span>Ver nuestros servicios</span>
        <ChevronDown className="w-4 h-4 text-cyan-400" />
      </Link>
    </section>
  );
};


