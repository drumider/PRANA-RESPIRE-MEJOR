import React from 'react';
import { Language } from '../types';

interface ServicesPageProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ lang, onOpenBooking }) => {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Neumología / Pneumology Section */}
      <section id="neumologia" className="pt-8 pb-16">
        {/* Green Banner Header */}
        <div className="bg-[#66D4A6] text-white py-6 sm:py-8 px-4 sm:px-6 shadow-sm mb-10">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-2xl sm:text-3xl font-medium tracking-tight">
              Neumología / Pneumology
            </h1>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left: Doctor Photo */}
            <div className="lg:col-span-5">
              <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm">
                <img
                  src="/neumologia/foto.jpg"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src.includes('/neumologia/foto.jpg')) {
                      target.src = '/equipo/DSC_2105.jpg';
                    }
                  }}
                  alt="Dr. Randall Guadamuz Neumólogo"
                  className="w-full h-[360px] sm:h-[460px] object-cover object-top"
                />
              </div>
            </div>

            {/* Right: Text Content (ES & EN) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Spanish Block */}
              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl font-normal text-[#21B5EB] tracking-tight">
                  Neumología
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Le ofrecemos el mejor servicio de prevención y pronta detección de enfermedades respiratorias.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Un neumólogo es el especialista que estudia y trata las enfermedades de las vías respiratorias, (que incluyen vías respiratorias altas y bajas), a su vez su entrenamiento le permite diferenciar cuando un síntoma respiratorio es originado en las vías aéreas o fuera de ellas, como por ejemplo el tracto gastrointestinal. Las principales patologías tratadas son: la insuficiencia respiratoria, el asma, la enfermedad pulmonar obstructiva crónica, las afecciones de naturaleza infecciosa (absceso pulmonar, bronconeumonía, pleuresía, neumonía, tuberculosis) o tumorales (cáncer de pulmón, de la pleura, etc.). Además aconseja de la mejor manera de cuidar su salud pulmonar realizando medicina preventiva.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Esta especialidad aborda problemas vasculares, como la hipertensión pulmonar de diferentes causas.
                </p>
              </div>

              {/* English Block */}
              <div className="space-y-3 pt-2">
                <h2 className="text-2xl sm:text-3xl font-normal text-[#21B5EB] tracking-tight">
                  Pneumology
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We are committed to giving our patients prevention and precise detection of respiratory diseases.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  A Pneumologist is a specialist that treats illnesses of the respiratory track which include the upper and lower respiratory track. Furthermore, a Pneumologist is qualified to differentiate whether respiratory symptoms originate from the respiratory track or outside of it such as the gastrointestinal (GI) track. The main pathologies treated by a Pneumologist are: pulmonary hypertension, respiratory insufficiency or "shortness of breath," asthma, Chronic Obstructive Pulmonary Disease (COPD), infectious respiratory conditions like pulmonary abscess, bronchopneumonia, pleurisy, pneumonia, and tuberculosis; or tumors such as lung cancer and cancer of the pleura. Finally, a Pneumologist is experienced in advising patients on how to take care of their lung health through preventive medicine.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  In brief, Pneumology tackles diseases of the respiratory track of all sorts in a holistic and disciplined way.
                </p>
              </div>

            </div>

          </div>

          {/* Contact Callout Button (Bottom) */}
          <div className="flex flex-col sm:flex-row items-center justify-end gap-4 pt-4">
            <button
              onClick={onOpenBooking}
              className="bg-[#00B2E3] hover:bg-[#0099c4] text-white font-normal text-sm px-6 py-3 rounded shadow transition-colors cursor-pointer"
            >
              Contáctenos! / Contact Us!
            </button>
            <div className="text-center sm:text-left text-slate-600 text-xs sm:text-sm">
              <p>Contáctenos para agendar su cita</p>
              <p className="text-slate-500">Schedule an appointment</p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Exámenes médicos / Medical Tests Section (Screenshot 3) */}
      <section id="examenes-medicos" className="pt-8 pb-16 border-t border-slate-100">
        {/* Green Banner Header */}
        <div className="bg-[#66D4A6] text-white py-6 sm:py-8 px-4 sm:px-6 shadow-sm mb-10">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-2xl sm:text-3xl font-medium tracking-tight">
              Exámenes médicos / Medical Tests
            </h1>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
          
          {/* Spanish Medical Tests Section */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-normal text-[#21B5EB] tracking-tight">
              Exámenes médicos
            </h2>

            <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p>
                <strong className="text-slate-800">Espirometría:</strong><br />
                Es un método sencillo realizado bajo circunstancias controladas. Permite medir: volúmenes pulmonares, capacidades pulmonares y la rapidez con que estos pueden ser movilizados (flujos). Los resultados se presentan en forma numérica y gráfica.
              </p>

              <p>
                <strong className="text-slate-800">Electrocardiograma:</strong><br />
                Es una prueba diagnóstica que evalúa el ritmo y la función cardíaca a través de un registro de la actividad eléctrica del corazón.
              </p>

              <p>
                <strong className="text-slate-800">Ecocardiograma:</strong><br />
                Es una prueba diagnóstica fundamental que ofrece una imagen en movimiento del corazón, mediante ultrasonidos, la ecocardiografía aporta información acerca de la forma, tamaño, función, fuerza del corazón, movimiento y grosor de sus paredes y el funcionamiento de sus válvulas.
              </p>

              <p>
                <strong className="text-slate-800">Prueba de esfuerzo:</strong><br />
                Es un estudio común que se utiliza para diagnosticar la enfermedad arterial coronaria. Permite ver cómo funciona el corazón durante el ejercicio. Durante la prueba de esfuerzo, también puede realizarse una ecocardiografía (lo que se denomina «ecocardiografía de esfuerzo»). Con estos estudios, se obtiene más información sobre la estructura y el flujo sanguíneo del corazón.
              </p>

              <p>
                <strong className="text-slate-800">Prueba de ejercicio cardiopulmonar:</strong><br />
                Esta prueba se realiza para valorar la capacidad al esfuerzo físico, determinar en caso de descenso de la función, si son de origen pulmonar o cardíaco. A su vez consiste en valorar parámetros del sistema cardiovascular y del sistema respiratorio durante un ejercicio de intensidad creciente (generalmente en bicicleta ergométrica o en cinta rodante) hasta alcanzar los límites del paciente; durante la prueba se monitorizan: los parámetros respiratorios, presión parcial de O2 y CO2 en el aire espirado, saturación de oxígeno (a veces también gasometría arterial), presión arterial, ECG y gasto cardíaco.
              </p>
            </div>
          </div>

          {/* English Medical Tests Section */}
          <div className="space-y-4 pt-4">
            <h2 className="text-2xl sm:text-3xl font-normal text-[#21B5EB] tracking-tight">
              Medical Examinations
            </h2>

            <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p>
                <strong className="text-slate-800">Spirometry</strong><br />
                Spirometry, meaning "the measuring of breath," is the most common of the pulmonary function tests (PFTs). It measures lung function, specifically the amount (volume) and/or speed (flow) of air that can be inhaled and exhaled. The results are presented numerically and through graphs.
              </p>

              <p>
                <strong className="text-slate-800">Electrocardiogram</strong><br />
                Electrocardiogram, also known as EKG or ECG, is a recording of the heart's electrical activity to evaluate its rate and rhythm.
              </p>

              <p>
                <strong className="text-slate-800">Echocardiogram</strong><br />
                An echocardiogram uses ultrasound to produce images of your heart. This common test allows your doctor to see the shape, size (e.g. the walls), function (e.g. the valves), heart beats and the pumping of blood. Your doctor can use the images from an echocardiogram to identify heart disease.
              </p>

              <p>
                <strong className="text-slate-800">Stress Test</strong><br />
                Stress testing provides information about how your heart works during physical stress. Some heart problems are easier to diagnose when your heart is working hard and beating fast. You may also receive a Stress Echocardiograph to obtain more information about the structure and blood flow to the heart.
              </p>

              <p>
                <strong className="text-slate-800">Cardiopulmonary Stress Test</strong><br />
                Cardiopulmonary exercise testing (CPET) evaluates exercise capacity, and it provides assessment of the decreased exercise responses involving the pulmonary, cardiovascular and skeletal muscle systems. During a CPET, you exercise (walk or run on a treadmill or pedal a stationary bike) to make your heart work increasingly harder and faster until the patient's limit is reached. The doctor will monitor: respiratory parameters, partial pressures of O2 and CO2 of exhaled air, oxygen saturation as well as Arterial Blood Gas analysis, blood pressure, EKG, and cardiac output.
              </p>
            </div>
          </div>

          {/* Bottom Area: Image + Contact Button Callout */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="w-64 sm:w-80 h-44 sm:h-52 rounded-lg overflow-hidden border border-slate-200 shadow-sm shrink-0">
              <img
                src="/servicios/imagen%20serv.m..png"
                alt="Consultorio de exámenes médicos"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="bg-[#00B2E3] hover:bg-[#0099c4] text-white font-normal text-sm px-6 py-3 rounded shadow transition-colors cursor-pointer"
              >
                Contáctenos! / Contact Us!
              </button>
              <div className="text-center sm:text-left text-slate-600 text-xs sm:text-sm">
                <p>Contáctenos para agendar su cita</p>
                <p className="text-slate-500">Schedule an appointment</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

