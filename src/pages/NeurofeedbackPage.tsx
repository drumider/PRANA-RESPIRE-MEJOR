import React from 'react';
import { Language } from '../types';
import {
  Brain,
  Activity,
  CheckCircle2,
  AlertTriangle,
  Cpu,
  Target,
  Sparkles,
  Zap,
  BarChart2,
  HeartPulse,
  Baby,
  Smile,
  Stethoscope,
  Trophy,
  Calendar,
  ShieldCheck,
  Check,
  Image as ImageIcon
} from 'lucide-react';

interface NeurofeedbackPageProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const NeurofeedbackPage: React.FC<NeurofeedbackPageProps> = ({ lang, onOpenBooking }) => {
  const isEs = lang === 'es';
  const photoUrl = '/neurofeedback/c42d9277-ef99-4f51-b2d7-d7935bdb48cb.png';

  // qEEG Analysis items
  const qeegItems = isEs
    ? [
        { title: 'Potencia absoluta', desc: 'Mide la cantidad total de energía eléctrica en bandas de frecuencia específicas.' },
        { title: 'Potencia relativa', desc: 'Porcentaje de energía que representa cada banda de frecuencia respecto al total.' },
        { title: 'Asimetría', desc: 'Compara la distribución de actividad entre hemisferios izquierdo y derecho.' },
        { title: 'Coherencia', desc: 'Evalúa la sincronización e interconexión funcional entre distintas regiones cerebrales.' },
        { title: 'Fase', desc: 'Mide la velocidad y el retraso de la transmisión de señales entre áreas del cerebro.' },
        { title: 'Conectividad funcional', desc: 'Analiza la integración y eficiencia de comunicación en la red neuronal.' },
        { title: 'Frecuencia Alfa dominante', desc: 'Identifica la velocidad peak del ritmo alfa para evaluar el estado de alerta relajada.' },
        { title: 'Ritmos Delta / Theta / Alfa / Beta / Gamma', desc: 'Mapeo detallado de todas las ondas cerebrales lentas y rápidas.' },
        { title: 'Redes cerebrales funcionales', desc: 'Identifica patrones de conectividad en redes complejas como la Red por Defecto.' }
      ]
    : [
        { title: 'Absolute power', desc: 'Measures total electrical energy in specific frequency bands.' },
        { title: 'Relative power', desc: 'Percentage of energy contributed by each frequency band.' },
        { title: 'Asymmetry', desc: 'Compares activity distribution between left and right hemispheres.' },
        { title: 'Coherence', desc: 'Evaluates functional synchronization between distinct brain regions.' },
        { title: 'Phase', desc: 'Measures signal transmission timing and lag between areas.' },
        { title: 'Functional connectivity', desc: 'Analyzes communication efficiency across neuronal networks.' },
        { title: 'Dominant Alpha frequency', desc: 'Identifies peak alpha rhythm speed for relaxed alertness.' },
        { title: 'Delta / Theta / Alpha / Beta / Gamma rhythms', desc: 'Detailed mapping of slow and fast brainwave patterns.' },
        { title: 'Functional brain networks', desc: 'Identifies connectivity patterns in complex brain networks.' }
      ];

  // Benefits list
  const benefits = isEs
    ? [
        'Entrenamiento personalizado',
        'Seguimiento objetivo del progreso',
        'Regulación de la actividad cerebral',
        'Optimización de la conectividad neuronal',
        'Mejora de la atención y concentración',
        'Favorece la neuroplasticidad',
        'Protocolos individualizados',
        'Evaluación continua durante el entrenamiento'
      ]
    : [
        'Personalized training',
        'Objective progress tracking',
        'Brain activity regulation',
        'Neuronal connectivity optimization',
        'Enhanced focus & attention',
        'Promotes neuroplasticity',
        'Individualized protocols',
        'Continuous assessment during training'
      ];

  // Clinical applications
  const clinicalCategories = [
    {
      id: 'neurodesarrollo',
      title: isEs ? 'Neurodesarrollo' : 'Neurodevelopment',
      icon: Baby,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200',
      badgeBg: 'bg-emerald-100 text-emerald-800',
      items: isEs
        ? [
            'TDAH',
            'Trastornos del aprendizaje',
            'Dislexia',
            'Discalculia',
            'Disgrafía',
            'Dificultades del lenguaje',
            'Trastorno del desarrollo del lenguaje',
            'Trastorno del espectro autista (como apoyo complementario)'
          ]
        : [
            'ADHD',
            'Learning disorders',
            'Dyslexia',
            'Dyscalculia',
            'Dysgraphia',
            'Language difficulties',
            'Developmental language disorder',
            'Autism spectrum disorder (as complementary support)'
          ]
    },
    {
      id: 'salud-mental',
      title: isEs ? 'Salud mental' : 'Mental Health',
      icon: Smile,
      color: 'bg-cyan-50 text-cyan-600 border-cyan-200',
      badgeBg: 'bg-cyan-100 text-cyan-800',
      items: isEs
        ? [
            'Ansiedad',
            'Estrés',
            'Regulación emocional',
            'Depresión',
            'Trastorno obsesivo compulsivo (TOC)',
            'Trastorno por estrés postraumático (TEPT)',
            'Ataques de pánico',
            'Fobias',
            'Burnout',
            'Insomnio'
          ]
        : [
            'Anxiety',
            'Stress',
            'Emotional regulation',
            'Depression',
            'Obsessive-compulsive disorder (OCD)',
            'Post-traumatic stress disorder (PTSD)',
            'Panic attacks',
            'Phobias',
            'Burnout',
            'Insomnia'
          ]
    },
    {
      id: 'neurologia',
      title: isEs ? 'Neurología' : 'Neurology',
      icon: Stethoscope,
      color: 'bg-blue-50 text-blue-600 border-blue-200',
      badgeBg: 'bg-blue-100 text-blue-800',
      items: isEs
        ? [
            'Migrañas',
            'Cefalea tensional',
            'Dolor crónico',
            'Fibromialgia',
            'Secuelas de traumatismo craneoencefálico',
            'Rehabilitación posterior a accidente cerebrovascular',
            'Conmoción cerebral',
            'Deterioro cognitivo leve',
            'Enfermedad de Alzheimer (como apoyo complementario)',
            'Enfermedad de Parkinson (como apoyo)',
            'Esclerosis múltiple (como apoyo)'
          ]
        : [
            'Migraines',
            'Tension headaches',
            'Chronic pain',
            'Fibromyalgia',
            'Traumatic brain injury sequelae',
            'Post-stroke rehabilitation',
            'Concussion',
            'Mild cognitive impairment',
            'Alzheimer\'s disease (as complementary support)',
            'Parkinson\'s disease (as support)',
            'Multiple sclerosis (as support)'
          ]
    },
    {
      id: 'rendimiento',
      title: isEs ? 'Optimización del rendimiento' : 'Performance Optimization',
      icon: Trophy,
      color: 'bg-amber-50 text-amber-600 border-amber-200',
      badgeBg: 'bg-amber-100 text-amber-800',
      items: isEs
        ? [
            'Atención',
            'Concentración',
            'Memoria',
            'Funciones ejecutivas',
            'Rendimiento académico',
            'Rendimiento deportivo',
            'Alto desempeño profesional',
            'Creatividad',
            'Tiempo de reacción',
            'Manejo del estrés'
          ]
        : [
            'Attention',
            'Concentration',
            'Memory',
            'Executive functions',
            'Academic performance',
            'Athletic performance',
            'High professional performance',
            'Creativity',
            'Reaction time',
            'Stress management'
          ]
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Green Banner Header */}
      <section className="pt-6 pb-12">
        <div className="bg-[#66D4A6] text-white py-8 sm:py-10 px-4 sm:px-6 shadow-sm mb-10">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur-sm mb-2">
                <Brain className="w-3.5 h-3.5 text-white" />
                {isEs ? 'Entrenamiento Cerebral Avanzado' : 'Advanced Brain Training'}
              </span>
              <h1 className="text-2xl sm:text-4xl font-normal tracking-tight">
                Neurofeedback Z-Score con BrainMaster
              </h1>
              <p className="text-emerald-950/90 text-sm sm:text-base font-medium pt-1">
                {isEs ? 'Guía profesional' : 'Professional guide'}
              </p>
            </div>

            <button
              onClick={onOpenBooking}
              className="self-start md:self-center inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-cyan-400" />
              <span>{isEs ? 'Agendar consulta' : 'Schedule consultation'}</span>
            </button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
          {/* 2. ¿Qué es el Neurofeedback Z-Score? */}
          <section className="bg-gradient-to-br from-slate-50 via-cyan-50/20 to-white p-6 sm:p-10 rounded-2xl border border-slate-200/80 shadow-sm relative overflow-hidden">
            <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#21B5EB] text-white flex items-center justify-center shadow-md shrink-0">
                    <Brain className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-normal text-[#21B5EB] tracking-tight">
                      {isEs ? '¿Qué es el Neurofeedback Z-Score?' : 'What is Z-Score Neurofeedback?'}
                    </h2>
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                      {isEs ? 'Entrenamiento cerebral autorregulado' : 'Self-regulated brain training'}
                    </p>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {isEs
                    ? 'El Neurofeedback Z-Score es una modalidad avanzada de entrenamiento cerebral que utiliza registros obtenidos mediante un electroencefalograma cuantitativo (qEEG) para comparar la actividad cerebral de una persona con bases de datos normativas según su edad. Durante cada sesión, el sistema BrainMaster analiza cientos de parámetros en tiempo real y proporciona retroalimentación visual y auditiva cuando la actividad cerebral se acerca a patrones más eficientes, favoreciendo la neuroplasticidad y el aprendizaje autorregulado del cerebro.'
                    : 'Z-Score Neurofeedback is an advanced mode of brain training that utilizes quantitative electroencephalogram (qEEG) recordings to compare an individual\'s brain activity against age-matched normative databases. During each session, the BrainMaster system analyzes hundreds of parameters in real time, delivering visual and auditory feedback whenever brain activity moves closer to optimal patterns—promoting neuroplasticity and self-regulated brain learning.'}
                </p>
              </div>

              {/* Photo Container */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center">
                <div className="relative w-full max-w-[320px] sm:max-w-[360px] aspect-[9/16] max-h-[520px] rounded-2xl overflow-hidden border border-slate-200 shadow-lg group bg-slate-900 mx-auto">
                  <img
                    src={photoUrl}
                    alt={isEs ? "Paciente en sesión de Neurofeedback Z-Score" : "Patient in Z-Score Neurofeedback session"}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                    <div className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10 shadow-sm">
                      <ImageIcon className="w-4 h-4 text-cyan-400" />
                      <span className="font-medium text-slate-200">
                        {isEs ? 'Sesión de Neurofeedback Z-Score' : 'Z-Score Neurofeedback Session'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 3. ¿Qué analiza un qEEG? */}
          <section className="space-y-6">
            <div className="border-b border-slate-200 pb-4">
              <div className="flex items-center gap-2.5">
                <Activity className="w-6 h-6 text-[#21B5EB]" />
                <h2 className="text-2xl sm:text-3xl font-normal text-[#21B5EB] tracking-tight">
                  {isEs ? '¿Qué analiza un qEEG?' : 'What does a qEEG analyze?'}
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 pt-1">
                {isEs
                  ? 'Mapeo cerebral cuantitativo de alta resolución tecnológica'
                  : 'High-resolution quantitative brain mapping technology'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {qeegItems.map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-white border border-slate-200 rounded-xl hover:border-cyan-300 hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-[#21B5EB]">
                      <BarChart2 className="w-4 h-4 text-cyan-600 shrink-0 group-hover:scale-110 transition-transform" />
                      <h3 className="font-semibold text-sm sm:text-base text-slate-800">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 4. Beneficios del entrenamiento Z-Score */}
          <section className="space-y-6">
            <div className="border-b border-slate-200 pb-4">
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-6 h-6 text-[#21B5EB]" />
                <h2 className="text-2xl sm:text-3xl font-normal text-[#21B5EB] tracking-tight">
                  {isEs ? 'Beneficios del entrenamiento Z-Score' : 'Benefits of Z-Score Training'}
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 pt-1">
                {isEs ? 'Ventajas clave de la retroalimentación neuroplástica' : 'Key advantages of neuroplastic feedback'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 hover:bg-cyan-50/40 hover:border-cyan-200 transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-cyan-500 text-slate-950 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-800 leading-snug">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* 5. Aplicaciones clínicas potenciales */}
          <section className="space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <Target className="w-6 h-6 text-[#21B5EB]" />
                <h2 className="text-2xl sm:text-3xl font-normal text-[#21B5EB] tracking-tight">
                  {isEs ? 'Aplicaciones clínicas potenciales' : 'Potential Clinical Applications'}
                </h2>
              </div>
              
              <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200/80 text-slate-700 text-xs sm:text-sm leading-relaxed">
                <p>
                  {isEs
                    ? 'El Neurofeedback constituye una herramienta complementaria que puede formar parte de un plan terapéutico integral. Su utilización debe estar basada en una evaluación clínica individual y el nivel de evidencia científica puede variar según la condición.'
                    : 'Neurofeedback serves as a complementary tool that can form part of a comprehensive therapeutic plan. Its use must be based on individual clinical evaluation, and the level of scientific evidence may vary depending on the condition.'}
                </p>
              </div>
            </div>

            {/* 4 Cards / Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {clinicalCategories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <div
                    key={category.id}
                    className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow"
                  >
                    {/* Header */}
                    <div className="p-5 border-b border-slate-100 bg-slate-50/80 flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl ${category.color}`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="font-semibold text-base text-slate-900 tracking-tight">
                        {category.title}
                      </h3>
                    </div>

                    {/* Items List */}
                    <div className="p-5 flex-grow">
                      <ul className="space-y-2.5">
                        {category.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 shrink-0" />
                            <span className="leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* 6. BrainMaster Section */}
          <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
            <div className="absolute right-0 top-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 max-w-4xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-500/20 text-cyan-300 text-xs font-semibold border border-cyan-500/30">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>Tecnología BrainMaster & BrainAvatar</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
                {isEs ? 'Plataforma Profesional BrainMaster' : 'BrainMaster Professional Platform'}
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {isEs
                  ? 'BrainMaster es una plataforma profesional para neurofeedback y qEEG utilizada por especialistas en numerosos países. Permite realizar evaluaciones cerebrales de alta precisión y desarrollar protocolos personalizados de entrenamiento mediante BrainAvatar y tecnología Z-Score.'
                  : 'BrainMaster is a professional platform for neurofeedback and qEEG used by specialists in numerous countries. It allows high-precision brain assessments and the development of personalized training protocols using BrainAvatar and Z-Score technology.'}
              </p>
            </div>
          </section>

          {/* 7. Conclusión */}
          <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-3">
            <div className="flex items-center gap-2 text-[#21B5EB]">
              <ShieldCheck className="w-5 h-5 text-cyan-600" />
              <h2 className="text-xl sm:text-2xl font-normal text-[#21B5EB] tracking-tight">
                {isEs ? 'Conclusión' : 'Conclusion'}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {isEs
                ? 'El entrenamiento mediante Neurofeedback Z-Score representa una herramienta avanzada para favorecer la autorregulación cerebral. Cuando es utilizado por profesionales capacitados y como parte de un abordaje clínico integral, puede contribuir al mejoramiento del funcionamiento cerebral en diversas condiciones y en la optimización del rendimiento cognitivo.'
                : 'Z-Score Neurofeedback training represents an advanced tool for promoting brain self-regulation. When administered by trained professionals as part of a comprehensive clinical approach, it can contribute to improving brain function in various conditions and optimizing cognitive performance.'}
            </p>
          </section>

          {/* 8. Aviso destacado (Nota importante) */}
          <section className="bg-amber-50/90 border-2 border-amber-300/80 rounded-2xl p-6 sm:p-8 space-y-3 shadow-sm">
            <div className="flex items-center gap-3 text-amber-900">
              <div className="p-2 bg-amber-200/80 rounded-xl shrink-0">
                <AlertTriangle className="w-6 h-6 text-amber-900" />
              </div>
              <h3 className="text-base sm:text-lg font-bold tracking-tight text-amber-950">
                {isEs ? 'Nota importante' : 'Important Notice'}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-amber-900/90 leading-relaxed pl-1 sm:pl-12 font-medium">
              {isEs
                ? 'El qEEG y el Neurofeedback no sustituyen el diagnóstico médico o psicológico. Los resultados deben interpretarse siempre junto con la historia clínica, la evaluación profesional y el nivel de evidencia disponible para cada condición.'
                : 'qEEG and Neurofeedback do not replace medical or psychological diagnosis. Results should always be interpreted alongside clinical history, professional evaluation, and the level of available evidence for each condition.'}
            </p>
          </section>

          {/* Bottom Action CTA */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 pb-8">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-base font-semibold text-slate-900">
                {isEs ? '¿Desea más información sobre Neurofeedback?' : 'Would you like more information about Neurofeedback?'}
              </h4>
              <p className="text-xs text-slate-600">
                {isEs ? 'Consulte con nuestro equipo médico en Clínica Prana' : 'Consult with our medical team at Prana Clinic'}
              </p>
            </div>

            <button
              onClick={onOpenBooking}
              className="bg-[#00B2E3] hover:bg-[#0099c4] text-white font-normal text-sm px-6 py-3 rounded shadow transition-colors cursor-pointer shrink-0"
            >
              {isEs ? 'Contáctenos' : 'Contact Us'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
