import React from 'react';
import { Language } from '../types';

interface AboutSectionProps {
  lang: Language;
  onOpenBooking?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang }) => {
  const isEs = lang === 'es';

  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-20">
        
        {/* Upper Block: Image + Vision/Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left: Doctor with Tablet Image */}
          <div className="lg:col-span-6">
            <div className="rounded-xl overflow-hidden shadow-sm border border-slate-200">
              <img
                src="/nosotros/nosotros.m..png"
                alt="Doctor utilizando tablet médica"
                className="w-full h-[320px] sm:h-[420px] object-cover"
              />
            </div>
          </div>

          {/* Right: Vision & Mission */}
          <div className="lg:col-span-6 space-y-8 font-sans">
            {isEs ? (
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-normal text-[#21B5EB] tracking-tight">
                  Acerca de Respire Mejor
                </h2>

                <div className="space-y-1">
                  <h3 className="text-base font-bold text-slate-700">
                    Nuestra Visión
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xl">
                    Transformar el cuidado de la salud con avances médicos, crear una esperanza para nuestra población y ser la primera elección en cuidados de salud.
                  </p>
                </div>

                <div className="space-y-1">
                  <h3 className="text-base font-bold text-slate-700">
                    Nuestra Misión
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xl">
                    Inspirar esperanza y contribuir a la salud, cumpliendo la valiosa labor social de asistir medicamente a las personas a través de técnicas innovadoras, atención personalizada y excelente servicio al cliente, con un personal médico altamente capacitado y una práctica clínica integral con estándar de excelencia en el cuidado del paciente.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-normal text-[#21B5EB] tracking-tight">
                  About Respire Mejor
                </h2>

                <div className="space-y-1">
                  <h3 className="text-base font-bold text-slate-700">
                    Our Vision
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xl">
                    Transform healthcare with the use of medical advances, create hope for our community, and be the patient's first choice in pneumological care.
                  </p>
                </div>

                <div className="space-y-1">
                  <h3 className="text-base font-bold text-slate-700">
                    Our Mission
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xl">
                    Inspire hope and contribute to the well-being of our patients by fulfilling our social duty as medical assistants to our patients through innovative medical techniques, personalized attention, and excellent customer service. All attained by a highly-trained medical body and a comprehensive clinical practice with the utmost quality in patient care.
                  </p>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Lower Block: Professionals Title + Doctor Card */}
        <div className="space-y-10 text-center pt-8 border-t border-slate-100">
          
          {/* Centered Headings */}
          <div className="space-y-4 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#21B5EB] tracking-tight">
              {isEs
                ? 'Contamos con los mejores Profesionales para su cuidado'
                : 'We have the best professionals to assure you get the attention you are looking for'}
            </h2>
          </div>

          {/* Dr. Randall Guadamuz Profile */}
          <div className="flex flex-col items-center justify-center space-y-6 max-w-xl mx-auto pt-2">
            
            {/* Doctor Desk Image */}
            <div className="w-full max-w-md sm:max-w-lg h-[320px] sm:h-[420px] md:h-[500px] rounded-2xl overflow-hidden border border-slate-200/90 shadow-md">
              <img
                src="/equipo/DSC_2105.jpg"
                alt="Dr. Randall Guadamuz"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Doctor Name & Details */}
            <div className="space-y-3 text-center">
              <h3 className="text-2xl font-semibold text-[#21B5EB]">
                Dr. Randall Guadamuz
              </h3>

              <div className="space-y-3 text-sm sm:text-base text-slate-600 max-w-md mx-auto">
                <p className="leading-snug">
                  {isEs
                    ? 'Especialista en Medicina Interna, Neumología y Administración de Servicios de Salud'
                    : 'Board-certified specialist in Internal Medicine, Pneumologist, and Health Services Administrative'}
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};


