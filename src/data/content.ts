import { EducationalVideo, InsuranceItem, DoctorProfile } from '../types';

export const LOCATIONS = {
  catolica: {
    name: 'Hospital La Católica',
    nameEn: 'La Católica Hospital',
    address: 'Sector 4, segundo piso, consultorio 2, Guadalupe, San José',
    addressEn: 'Sector 4, 2nd Floor, Office 2, Guadalupe, San José',
    phone: '(506) 2246-3010',
    phoneRaw: '50622463010',
    schedule: 'Lunes a Viernes: 8:00 AM - 5:00 PM',
    scheduleEn: 'Monday to Friday: 8:00 AM - 5:00 PM',
    googleMapsUrl: 'https://maps.google.com/?q=Hospital+La+Catolica+Costa+Rica',
  },
  metropolitano: {
    name: 'Hospital Metropolitano',
    nameEn: 'Metropolitan Hospital',
    address: 'Cuarto piso, consultorio 2, San José Centro',
    addressEn: '4th Floor, Office 2, Downtown San José',
    phone: '(506) 2521-9640',
    phoneRaw: '50625219640',
    schedule: 'Lunes a Viernes: 8:00 AM - 5:00 PM',
    scheduleEn: 'Monday to Friday: 8:00 AM - 5:00 PM',
    googleMapsUrl: 'https://maps.google.com/?q=Hospital+Metropolitano+San+Jose',
  },
  whatsapp: {
    number: '(506) 8828-2904',
    raw: '50688282904',
    link: 'https://wa.me/50688282904?text=Hola,%20quisiera%20solicitar%20informaci%C3%B3n%20para%20una%20cita%20en%20Prana%20Neumolog%C3%ADa',
    linkEn: 'https://wa.me/50688282904?text=Hello,%20I%20would%20like%20information%20for%20an%20appointment%20at%20Prana%20Pulmonology',
  }
};

export const DOCTOR_EMAIL = 'doctorguadamuz@gmail.com';

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/profile.php?id=100041754197975&tn-str=k%2AF#',
  instagram: 'https://www.instagram.com/prana.respire.mejor/',
  youtube: 'https://www.youtube.com/@PRANARESPIREMEJOR',
};

export const INSURANCES: InsuranceItem[] = [
  { id: 'ins', name: 'INS', type: 'Instituto Nacional de Seguros', url: 'http://www.ins-cr.com/index.html' },
  { id: 'medismart', name: 'Medismart', type: 'Plan de Salud', url: 'https://www.medismart.net/es-CR' },
  { id: 'palig', name: 'PALIG', type: 'Pan-American Life Insurance Group', url: 'https://palig.com/es/cr/home' },
];

export const DOCTORS: DoctorProfile[] = [
  {
    name: 'Dr. Randall Guadamuz',
    role: 'Especialista en Medicina Interna, Neumología y Administración de Servicios de Salud',
    specialty: 'Diagnóstico de Asma, EPOC, Apnea del Sueño y Fisiología Respiratoria',
    code: 'Cod. Médico 12849',
    hospitals: ['Hospital La Católica', 'Hospital Metropolitano'],
    imageUrl: '/equipo/DSC_2105.jpg',
    bio: 'Especialista en Medicina Interna y Neumología con alta capacitación en el diagnóstico avanzado de condiciones pulmonares, rehabilitación respiratoria y administración de servicios de salud en Costa Rica.',
  }
];

export const EDUCATIONAL_VIDEOS: EducationalVideo[] = [
  {
    id: 'v1',
    title: '¿Cómo usar correctamente tu inhalador de dosis medida?',
    description: 'Aprende la técnica adecuada paso a paso para garantizar que el medicamento llegue eficazmente a tus pulmones.',
    duration: '3:45 min',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'Técnica de Inhalación',
    thumbnailUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'v2',
    title: '¿Qué es una espirometría y cómo prepararse?',
    description: 'Explicación detallada de la prueba de capacidad pulmonar, recomendaciones previas y qué esperar durante el examen.',
    duration: '4:12 min',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'Exámenes Médicos',
    thumbnailUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'v3',
    title: 'Mitos y realidades sobre el Asma y el Deporte',
    description: 'Descubre cómo los deportistas asmáticos pueden lograr un rendimiento físico óptimo con el control adecuado.',
    duration: '5:00 min',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'Salud Deportiva',
    thumbnailUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'v4',
    title: 'Señales de alerta de la Apnea Obstructiva del Sueño',
    description: 'Ronquidos intensos, pausas respiratorias nocturnas y cansancio diurno: cuándo acudir al neumólogo.',
    duration: '4:30 min',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'Sueño y Respiración',
    thumbnailUrl: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80',
  }
];

export const DICTIONARY = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre Nosotros',
      services: 'Servicios',
      neurofeedback: 'Neurofeedback Z-Score',
      videos: 'Videos Educativos',
      insurances: 'Aseguradoras',
      contact: 'Contacto',
      bookAppointment: 'Reserve su Cita',
      slogan: 'Prana es respirar mejor',
    },
    hero: {
      badge: 'Clínica Especializada en Neumología • Costa Rica',
      title: 'Cuidamos tu salud respiratoria',
      tagline: 'Prana es respirar mejor',
      subtitle: 'Atención neumológica profesional y personalizada. Diagnósticos de precisión, pruebas de función pulmonar y cuidado respiratorio avanzado en las mejores sedes hospitalarias de Costa Rica.',
      primaryBtn: 'Reserve su cita',
      secondaryBtn: 'Conocer Servicios',
      locationsQuick: 'Sedes en Hospital La Católica y Hospital Metropolitano',
      stats: [
        { value: '100%', label: 'Especialistas Neumólogos Certificados' },
        { value: '2', label: 'Sedes Hospitalarias de Prestigio' },
        { value: '+15', label: 'Años cuidando la salud pulmonar' },
        { value: 'Alta', label: 'Precisión en Pruebas Respiratorias' }
      ]
    },
    services: {
      sectionBadge: 'Especialidades Prana',
      title: 'Servicios Principales',
      subtitle: 'Soluciones integrales de salud respiratoria adaptadas a niños, adultos y deportistas.',
      card1: {
        tag: 'Especialidad Médica',
        title: 'Neumología',
        desc: 'Prevención, diagnóstico oportuno y tratamiento especializado de afecciones respiratorias agudas y crónicas.',
        features: [
          'Evaluación y control del Asma bronquial',
          'Enfermedad Pulmonar Obstructiva Crónica (EPOC)',
          'Diagnóstico de Apnea del Sueño y ronquido',
          'Tratamiento de Bronquitis y Neumonía',
          'Atención de secuelas post-virales y Tos Crónica',
          'Valoración de Fibrosis Pulmonar'
        ],
        btn: 'Solicitar consulta neumológica'
      },
      card2: {
        tag: 'Diagnóstico de Precisión',
        title: 'Exámenes Médicos',
        desc: 'Gama completa de exámenes pulmonares diagnósticos con equipos de alta fidelidad tecnológica.',
        features: [
          'Espirometría computarizada pre y post broncodilatador',
          'Prueba de caminata de 6 minutos',
          'Oximetría nocturna para estudio de sueño',
          'Pruebas de alergia respiratoria',
          'Gases arteriales y función respiratoria',
          'Evaluación pulmonar preoperatoria'
        ],
        btn: 'Consultar exámenes disponibles'
      }
    },
    healthCare: {
      badge: 'Atención Integral',
      title: 'Nos ocupamos de su salud',
      subtitle: 'Nos esforzamos por brindarle una experiencia médica transparente, accesible y de máxima calidad.',
      col1: {
        title: 'Planes afiliados y aseguradoras',
        desc: 'Estamos afiliados a los principales planes médicos y aseguradoras de Costa Rica e internacionales, permitiéndole disfrutar de nuestros servicios con excelentes coberturas y mejores tarifas.',
        btnText: 'Ver aseguradoras'
      },
      col2: {
        title: 'Salud deportiva y atletas',
        desc: 'Evaluaciones de función pulmonar especializadas para atletas y deportistas de todos los niveles. Optimice su rendimiento físico, capacidad respiratoria y prevenga el broncoespasmo por ejercicio.',
        btnText: 'Planes para deportistas'
      },
      col3: {
        title: 'Doctores especialistas en neumología',
        desc: 'Atención experta respaldada por médicos neumólogos de primer nivel, altamente calificados en el diagnóstico y tratamiento humanizado de enfermedades del sistema respiratorio.',
        btnText: 'Conozca a nuestro especialista'
      }
    },
    sportsSection: {
      badge: 'Rendimiento y Respiración',
      title: 'Neumología Deportiva en Costa Rica',
      subtitle: 'Para runners, ciclistas, triatletas y entusiastas del fitness que buscan llevar su respiración al siguiente nivel.',
      card1Title: 'Optimización de Capacidad Pulmonar',
      card1Desc: 'Evaluación de los volúmenes respiratorios para asegurar el máximo intercambio de oxígeno durante el entrenamiento sostenido.',
      card2Title: 'Broncoconstricción Inducida por Ejercicio',
      card2Desc: 'Identificación y manejo oportuno de la tos o falta de aire que aparece únicamente durante o después de la actividad física exigente.',
      card3Title: 'Recuperación y Resistencia',
      card3Desc: 'Estrategias respiratorias personalizadas para mejorar la oxigenación muscular y acelerar los tiempos de recuperación en competencias.',
      ctaBtn: 'Agendar evaluación deportiva'
    },
    educational: {
      badge: 'Educación al Paciente',
      title: 'Videos Educativos Respiratorios',
      subtitle: 'Aprenda sobre el cuidado de sus pulmones, uso de medicamentos e indicaciones para sus exámenes médicos.',
      watchBtn: 'Ver video',
    },
    insurancesSection: {
      badge: 'Cobertura',
      title: 'Aseguradoras y Planes Afiliados',
      subtitle: 'Aceptamos seguros médicos nacionales e internacionales para su máxima comodidad.',
      note: 'Si su aseguradora no figura en la lista, le brindamos la documentación médica requerida para la solicitud de reembolso directo.'
    },
    about: {
      badge: 'Acerca de Prana Neumología',
      title: 'Nuestra Filosofía: Respirar Mejor es Vivir Mejor',
      desc: 'En Clínica Prana combinamos la calidez del trato humano con la rigurosidad científica de la neumología moderna. Nuestro compromiso es acompañar a cada paciente en la recuperación y mantenimiento de su capacidad respiratoria.',
      visionTitle: 'Nuestra Visión',
      visionDesc: 'Transformar el cuidado de la salud con avances médicos, crear una esperanza para nuestra población y ser la primera elección en cuidados de salud respiratoria.',
      missionTitle: 'Nuestra Misión',
      missionDesc: 'Inspirar esperanza y contribuir a la salud, cumpliendo la valiosa labor social de asistir médicamente a las personas a través de técnicas innovadoras, atención personalizada y excelente servicio al cliente, con un personal médico altamente capacitado y una práctica clínica integral con estándar de excelencia en el cuidado del paciente.',
      teamTitle: 'Contamos con los mejores profesionales para su cuidado',
      teamSubtitle: 'Atención especializada en Medicina Interna y Neumología para brindarle la tranquilidad que busca.',
      values: [
        { title: 'Confianza y Ética', desc: 'Diagnósticos precisos basados en evidencia médica actualizada.' },
        { title: 'Tecnología Avanzada', desc: 'Equipamiento de última generación para exámenes pulmonares.' },
        { title: 'Atención Cercana', desc: 'Escuchamos sus síntomas para construir planes de tratamiento a su medida.' }
      ]
    },
    ctaBand: {
      title: 'Comuníquese con nosotros y reserve su cita',
      subtitle: 'Nuestro equipo médico está listo para brindarle la mejor atención en salud respiratoria en Costa Rica.',
      btnBook: 'Reserve su cita ahora',
      btnCallCatolica: 'Llamar Hosp. La Católica',
      btnCallMetro: 'Llamar Hosp. Metropolitano',
    },
    appointmentModal: {
      title: 'Agendar Cita en Clínica Prana',
      subtitle: 'Complete el formulario y nos pondremos en contacto para confirmar su horario.',
      nameLabel: 'Nombre completo',
      phoneLabel: 'Teléfono / WhatsApp',
      emailLabel: 'Correo electrónico',
      hospitalLabel: 'Seleccione la sede de su preferencia',
      serviceLabel: 'Tipo de servicio requerido',
      dateLabel: 'Fecha preferida',
      timeLabel: 'Horario preferido',
      insuranceLabel: 'Aseguradora (Opcional)',
      notesLabel: 'Motivo de consulta o detalles adicionales',
      submitBtn: 'Enviar solicitud de cita',
      whatsappBtn: 'Reservar directamente por WhatsApp',
      successMsg: '¡Solicitud recibida! Nos comunicaremos a la brevedad para confirmar su cita en Prana.',
      closeBtn: 'Cerrar'
    },
    footer: {
      slogan: 'Prana es respirar mejor',
      description: 'Clínica especializada en salud respiratoria y neumología en Costa Rica.',
      locationsTitle: 'Nuestras Sedes',
      catolicaAddress: 'Hospital La Católica, Sector 4, segundo piso, consultorio 2',
      metropolitanoAddress: 'Hospital Metropolitano, cuarto piso, consultorio 2',
      telPrefix: 'Teléfono:',
      whatsappText: 'WhatsApp directo:',
      socialsTitle: 'Síganos en redes',
      rights: 'Todos los derechos reservados. Clínica Prana Neumología, Costa Rica.',
      backToTop: 'Volver arriba'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      neurofeedback: 'Neurofeedback Z-Score',
      videos: 'Educational Videos',
      insurances: 'Insurances',
      contact: 'Contact',
      bookAppointment: 'Book Appointment',
      slogan: 'Prana is breathing better',
    },
    hero: {
      badge: 'Specialized Pulmonology Clinic • Costa Rica',
      title: 'We care for your respiratory health',
      tagline: 'Prana is breathing better',
      subtitle: 'Professional, personalized respiratory care. Precision diagnostics, pulmonary function testing, and advanced respiratory medicine in top Costa Rican hospitals.',
      primaryBtn: 'Book an appointment',
      secondaryBtn: 'Explore Services',
      locationsQuick: 'Offices at La Católica Hospital and Metropolitan Hospital',
      stats: [
        { value: '100%', label: 'Certified Pulmonology Specialists' },
        { value: '2', label: 'Prestigious Hospital Locations' },
        { value: '+15', label: 'Years of Pulmonary Care Experience' },
        { value: 'High', label: 'Accuracy Respiratory Testing' }
      ]
    },
    services: {
      sectionBadge: 'Prana Specialties',
      title: 'Core Medical Services',
      subtitle: 'Comprehensive respiratory health solutions tailored for adults, children, and athletes.',
      card1: {
        tag: 'Medical Specialty',
        title: 'Pulmonology',
        desc: 'Prevention, early detection, and specialized treatment of acute and chronic respiratory conditions.',
        features: [
          'Bronchial Asthma management and control',
          'Chronic Obstructive Pulmonary Disease (COPD)',
          'Sleep Apnea & Snoring Diagnosis',
          'Treatment of Bronchitis and Pneumonia',
          'Post-viral respiratory sequelae & Chronic Cough',
          'Pulmonary Fibrosis Evaluation'
        ],
        btn: 'Request pulmonology consultation'
      },
      card2: {
        tag: 'Precision Diagnostics',
        title: 'Medical Tests',
        desc: 'Full range of diagnostic respiratory tests using high-precision medical technology.',
        features: [
          'Computerized Spirometry (pre & post bronchodilator)',
          '6-Minute Walk Test',
          'Overnight Oximetry Sleep Studies',
          'Respiratory Allergy Testing',
          'Arterial Blood Gas & Pulmonary Function',
          'Preoperative Respiratory Evaluation'
        ],
        btn: 'View available medical tests'
      }
    },
    healthCare: {
      badge: 'Comprehensive Care',
      title: 'Let us take care of your health',
      subtitle: 'We strive to provide a transparent, accessible, and highest quality medical experience.',
      col1: {
        title: 'Affiliated health plans & insurers',
        desc: 'We are affiliated with major local and international medical insurance plans in Costa Rica, allowing you to enjoy our specialized services at the best rates.',
        btnText: 'View insurance list'
      },
      col2: {
        title: 'Sports health & athletes',
        desc: 'Specialized pulmonary function tests for athletes at all performance levels. Optimize your stamina, oxygen uptake, and prevent exercise-induced bronchospasm.',
        btnText: 'Sports evaluation plans'
      },
      col3: {
        title: 'Specialized pulmonologists',
        desc: 'Expert medical care led by certified pulmonology specialists, dedicated to compassionate, state-of-the-art treatment for your respiratory system.',
        btnText: 'Meet our specialist'
      }
    },
    sportsSection: {
      badge: 'Performance & Breathing',
      title: 'Sports Pulmonology in Costa Rica',
      subtitle: 'For runners, cyclists, triathletes, and fitness enthusiasts aiming to elevate their athletic breathing.',
      card1Title: 'Lung Capacity Optimization',
      card1Desc: 'Detailed evaluation of respiratory volumes to ensure maximal oxygen exchange during intense endurance efforts.',
      card2Title: 'Exercise-Induced Bronchoconstriction',
      card2Desc: 'Prompt identification and management of coughing or breathlessness occurring during or after strenuous workouts.',
      card3Title: 'Recovery & Stamina',
      card3Desc: 'Personalized respiratory strategies to improve muscular oxygenation and accelerate recovery times during competitions.',
      ctaBtn: 'Schedule athletic evaluation'
    },
    educational: {
      badge: 'Patient Education',
      title: 'Educational Respiratory Videos',
      subtitle: 'Learn how to care for your lungs, use inhalers properly, and prepare for diagnostic tests.',
      watchBtn: 'Watch video',
    },
    insurancesSection: {
      badge: 'Coverage',
      title: 'Affiliated Insurances & Health Plans',
      subtitle: 'We accept national and international health insurance plans for your convenience.',
      note: 'If your insurance is not listed, we provide all required medical documentation for direct reimbursement claims.'
    },
    about: {
      badge: 'About Prana Pulmonology',
      title: 'Our Philosophy: Breathing Better Means Living Better',
      desc: 'At Prana Clinic, we pair compassionate human care with modern pulmonary science. Our commitment is to guide every patient toward restoring and sustaining optimal lung health.',
      visionTitle: 'Our Vision',
      visionDesc: 'Transform healthcare with the use of medical advances, create hope for our community, and be the patient\'s first choice in pulmonological care.',
      missionTitle: 'Our Mission',
      missionDesc: 'Inspire hope and contribute to the well-being of our patients by fulfilling our social duty as medical assistants through innovative medical techniques, personalized attention, and excellent customer service, attained by a highly-trained medical body and a comprehensive clinical practice with the utmost quality in patient care.',
      teamTitle: 'We have the best professionals to assure you get the attention you are looking for',
      teamSubtitle: 'Specialized medical care in Internal Medicine and Pulmonology to give you total peace of mind.',
      values: [
        { title: 'Trust & Ethics', desc: 'Accurate diagnoses grounded in current medical evidence.' },
        { title: 'Advanced Technology', desc: 'Latest generation equipment for diagnostic pulmonary testing.' },
        { title: 'Personalized Care', desc: 'We listen carefully to tailor treatment plans that fit your lifestyle.' }
      ]
    },
    ctaBand: {
      title: 'Contact us and book your appointment',
      subtitle: 'Our medical team is ready to deliver the best respiratory healthcare in Costa Rica.',
      btnBook: 'Book your appointment now',
      btnCallCatolica: 'Call La Católica Hospital',
      btnCallMetro: 'Call Metropolitan Hospital',
    },
    appointmentModal: {
      title: 'Schedule Appointment at Prana',
      subtitle: 'Fill out the form below and we will contact you promptly to confirm your visit.',
      nameLabel: 'Full Name',
      phoneLabel: 'Phone / WhatsApp',
      emailLabel: 'Email Address',
      hospitalLabel: 'Preferred Hospital Location',
      serviceLabel: 'Required Service Type',
      dateLabel: 'Preferred Date',
      timeLabel: 'Preferred Time',
      insuranceLabel: 'Insurance Provider (Optional)',
      notesLabel: 'Reason for visit or additional notes',
      submitBtn: 'Send Appointment Request',
      whatsappBtn: 'Book directly via WhatsApp',
      successMsg: 'Request received! We will contact you shortly to confirm your visit at Prana.',
      closeBtn: 'Close'
    },
    footer: {
      slogan: 'Prana is breathing better',
      description: 'Specialized respiratory and pulmonology clinic in Costa Rica.',
      locationsTitle: 'Our Locations',
      catolicaAddress: 'La Católica Hospital, Sector 4, 2nd Floor, Office 2',
      metropolitanoAddress: 'Metropolitan Hospital, 4th Floor, Office 2',
      telPrefix: 'Phone:',
      whatsappText: 'Direct WhatsApp:',
      socialsTitle: 'Follow us',
      rights: 'All rights reserved. Prana Pulmonology Clinic, Costa Rica.',
      backToTop: 'Back to top'
    }
  }
};
