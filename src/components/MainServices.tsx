import React from 'react';
import { Language } from '../types';
import { Link } from 'react-router-dom';

interface MainServicesProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const MainServices: React.FC<MainServicesProps> = ({ lang }) => {
  const isEs = lang === 'es';

  return (
    <section id="servicios" className="bg-white py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* 2 Green Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Neumología */}
          <div className="bg-[#3db886] text-white p-8 sm:p-10 flex flex-col justify-between shadow-sm min-h-[300px]">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                {isEs ? 'Neumología' : 'Pneumology'}
              </h2>
              <p className="text-white text-xs sm:text-sm leading-relaxed font-normal">
                {isEs
                  ? 'Le ofrecemos el mejor servicio de prevención y pronta detección de enfermedades respiratorias.'
                  : 'We offer our patients the best service in prevention and prompt detection of respiratory diseases.'}
              </p>
            </div>

            <div className="pt-6 flex justify-center">
              <Link
                to="/servicios#neumologia"
                className="bg-[#195638] hover:bg-[#13442c] text-white px-6 py-2.5 text-xs font-semibold tracking-wide transition-colors"
              >
                {isEs ? 'Leer más' : 'Learn more'}
              </Link>
            </div>
          </div>

          {/* Card 2: Exámenes médicos */}
          <div className="bg-[#3db886] text-white p-8 sm:p-10 flex flex-col justify-between shadow-sm min-h-[300px]">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                {isEs ? 'Exámenes médicos' : 'Medical Tests'}
              </h2>
              <p className="text-white text-xs sm:text-sm leading-relaxed font-normal">
                {isEs
                  ? 'Contamos con una gama de exámenes que ponemos a su disposición.'
                  : 'We provide our patients with a wide range of tests to ensure accurate results.'}
              </p>
            </div>

            <div className="pt-6 flex justify-center">
              <Link
                to="/servicios#examenes-medicos"
                className="bg-[#195638] hover:bg-[#13442c] text-white px-6 py-2.5 text-xs font-semibold tracking-wide transition-colors"
              >
                {isEs ? 'Leer más' : 'Learn more'}
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};


