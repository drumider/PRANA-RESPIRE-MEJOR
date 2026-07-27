import React from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../types';
import { MessageSquare, User, Stethoscope } from 'lucide-react';

interface HealthCareGridProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const HealthCareGrid: React.FC<HealthCareGridProps> = ({ onOpenBooking }) => {
  return (
    <section className="bg-white pb-16">
      {/* 1. Gray Banner */}
      <div className="bg-[#a2a2a2] text-white py-8 px-4 sm:px-6 shadow-inner mb-16">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <p className="text-xl sm:text-2xl font-normal tracking-wide">
              Comuníquese con nosotros y reserve su cita
            </p>
            <p className="text-xl sm:text-2xl font-normal tracking-wide">
              Make an appointment with us with just one click
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="bg-[#195638] hover:bg-[#13442c] text-white px-6 py-3 text-xs font-bold tracking-wide transition-colors whitespace-nowrap cursor-pointer shadow-sm"
          >
            Reserve su cita / Make an appointment
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* 2. Main Title */}
        <div className="text-center space-y-1 mb-12">
          <h2 className="text-2xl sm:text-4xl font-normal text-[#21B5EB] tracking-tight">
            Nos ocupamos de su salud
          </h2>
          <h2 className="text-2xl sm:text-4xl font-normal text-[#21B5EB] tracking-tight">
            Let Us Take Care of Your Health
          </h2>
        </div>

        {/* 3. Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          
          {/* Column 1: Planes Afiliados */}
          <div className="flex flex-col items-center justify-between h-full space-y-4">
            <div>
              {/* Circular Icon */}
              <div className="w-16 h-16 rounded-full bg-[#00B2E3] text-white flex items-center justify-center mx-auto mb-6 shadow-sm">
                <MessageSquare className="w-8 h-8 stroke-[1.75]" />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg sm:text-xl text-[#21B5EB] font-normal leading-snug">
                  Obtenga un mejor precio con los planes afiliados
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  Estamos afiliados a planes médicos que le permiten disfrutar de nuestros servicios al mejor precio
                </p>

                <h4 className="text-lg sm:text-xl text-[#21B5EB] font-normal leading-snug pt-3">
                  Get a better price by using our affiliated health plans
                </h4>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  We are affiliated to a wide variety of health plans which will allow you to take advantage of our best services at the best price.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/aseguradoras"
                className="inline-block bg-[#3b7255] hover:bg-[#2d5c43] text-white px-5 py-2 text-xs font-medium transition-colors"
              >
                &gt;Leer más / Learn more
              </Link>
            </div>
          </div>

          {/* Column 2: Salud en el Deporte */}
          <div className="flex flex-col items-center justify-between h-full space-y-4">
            <div>
              {/* Circular Icon */}
              <div className="w-16 h-16 rounded-full bg-[#00B2E3] text-white flex items-center justify-center mx-auto mb-6 shadow-sm">
                <User className="w-8 h-8 stroke-[1.75]" />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg sm:text-xl text-[#21B5EB] font-normal leading-snug">
                  Cuide su salud en el deporte
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  Contamos con los exámenes necesarios para que pueda alcanzar su máximo potencial en el deporte
                </p>

                <h4 className="text-lg sm:text-xl text-[#21B5EB] font-normal leading-snug pt-3">
                  Look after your own health while doing the sports you love
                </h4>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  Count on us to give you the best sports tests, so you can reach your maximum potential.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/deportistas"
                className="inline-block bg-[#3b7255] hover:bg-[#2d5c43] text-white px-5 py-2 text-xs font-medium transition-colors"
              >
                &gt;Leer más / Learn more
              </Link>
            </div>
          </div>

          {/* Column 3: Doctores Especialistas */}
          <div className="flex flex-col items-center justify-between h-full space-y-4">
            <div>
              {/* Circular Icon */}
              <div className="w-16 h-16 rounded-full bg-[#00B2E3] text-white flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Stethoscope className="w-8 h-8 stroke-[1.75]" />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg sm:text-xl text-[#21B5EB] font-normal leading-snug">
                  Doctores especialistas
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  Contamos con doctores especialistas en el Area de Neumología.
                </p>

                <h4 className="text-lg sm:text-xl text-[#21B5EB] font-normal leading-snug pt-3">
                  Specialists
                </h4>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  Let our specialists in Pneumology make sure you get the best treatment.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/sobre-nosotros"
                className="inline-block bg-[#3b7255] hover:bg-[#2d5c43] text-white px-5 py-2 text-xs font-medium transition-colors"
              >
                &gt;Leer más / Learn more
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

