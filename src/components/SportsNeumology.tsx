import React from 'react';
import { Language } from '../types';

interface SportsNeumologyProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const SportsNeumology: React.FC<SportsNeumologyProps> = ({ onOpenBooking }) => {
  return (
    <section id="deportistas" className="bg-white pb-16">
      {/* Green Header Banner */}
      <div className="bg-[#66D4A6] text-white py-6 sm:py-8 px-4 sm:px-6 shadow-sm mb-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-medium tracking-tight">
            Deportistas
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Spanish Block: Exámenes médicos para deportistas ¿Por qué son necesarios? */}
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-normal text-[#21B5EB] tracking-tight">
            Exámenes médicos para deportistas ¿Por qué son necesarios?
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Image */}
            <div className="lg:col-span-4 shrink-0">
              <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm">
                <img
                  src="/deportistas/Electrocardiogram.jpg"
                  alt="Exámenes médicos para deportistas"
                  className="w-full h-64 sm:h-80 object-cover"
                />
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-8 space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p>
                ¿Porqué una persona enferma consulta donde un médico? Esto parece tener una respuesta lógica y quizá, nadie lo dude.
              </p>
              <p>
                Lo que un enfermo busca es recuperar lo perdido, su estado de salud. Sin embargo, ¿Porqué una persona joven, que hace ejercicio rutinariamente debe buscar atención médica? Esta respuesta podría ser más complicada de responder.
              </p>
              <p>
                Si empezamos considerando, que pocos eventos son más traumáticos que una muerte súbita y anticipada de un joven y tomamos en cuenta que son eventos tan impactantes, que se vuelven sucesos noticiosos, básicamente porque expresa lo vulnerable de nuestro cuerpo, aunque éste, sea vigoroso y de una persona joven saludable; desgraciadamente muchos de estos exponen una enfermedad congénita o genética.
              </p>
              <p>
                Por esta razón, planteamos una política para promover una estrategia efectiva y racional para proteger a los jóvenes contra eventos dramáticos.
              </p>
              <p>
                A través de determinar cuál atleta es elegible para competir, secundariamente se puede buscar a través del atleta que sale afectado, tamizar a su familia, por el riesgo cardiovascular y respiratorio que generan estas enfermedades.
              </p>
              <p>
                La carga de una muerte súbita en términos de años de expectativa de vida es desproporcionadamente grande por la perspectiva de vida de los jóvenes.
              </p>
              <p>
                Las muertes súbitas cardiovasculares son significativamente más prevalentes en jóvenes masculinos, en un factor de 2:1.
              </p>
              <p>
                Existen causas como las cardiomiopatías hereditarias y adquiridas, síndromes de arritmias, enfermedades congénitas estructurales, miocarditis, anormalidades coronarias y enfermedades respiratorias obstructivas y restrictivas subclínicas, todas estas potencialmente detectables a través de diferentes métodos sencillos, que te pueden salvar la vida.
              </p>
            </div>
          </div>
        </div>

        {/* English Block: Medical Exams for Athletes. Why Are They Necessary? */}
        <div className="space-y-4 pt-4 border-t border-slate-100">
          <h2 className="text-2xl sm:text-3xl font-normal text-[#21B5EB] tracking-tight">
            Medical Exams for Athletes. Why Are They Necessary?
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Image */}
            <div className="lg:col-span-4 shrink-0">
              <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80"
                  alt="Atletas al aire libre"
                  className="w-full h-64 sm:h-80 object-cover"
                />
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-8 space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p>
                Why does a patient go for a doctor's checkup? They go in order to get back what they have lost... their health. However, why does a young person who does exercises routinely need to get medical checkups? This answer may be a bit more complicated.
              </p>
              <p>
                First of all, few events in life are more traumatic than the sudden death of a young individual. So much so that they become headline news because they express just how vulnerable our bodies are, even though the body is active and healthy. Unfortunately, even the young may have a congenital or genetic disease. As a result, the professionals at Prana (respiremejor.com) have promoted an effective and rational strategy to protect the young population from dramatic events like sudden death.
              </p>
              <p>
                Also, after assessing which athlete is eligible to compete, doctors can screen family members for cardiac and respiratory risks when the athlete has been diagnosed with some kind of affection. The thought of a sudden death in the life of a young man or woman is hugely disproportionate to their outlook on life.
              </p>
              <p>
                Finally, cardiovascular sudden deaths are significantly more prevalent in young males than females by a factor of 2:1. Causes for these deaths are: inherited or acquired cardiomyopathies, arrhythmic syndromes, congenital structural abnormalities, myocarditis, coronary abnormalities and Chronic Obstructive Pulmonary Diseases (COPD), and subclinical restrictive COPD. All of the above cases can be detectable through various simple methods that can save your life.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Callout Button (Bottom) */}
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-end gap-4 pt-6">
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
  );
};

