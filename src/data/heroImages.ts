// ============================================================================
// CONFIGURACIÓN DE IMÁGENES DEL HERO (SECCIÓN PRINCIPAL)
// ============================================================================
// CARPETA DE IMÁGENES:
// Guarda tus imágenes en la carpeta: /public/hero-images/
// Ejemplo: /public/hero-images/imagen1.png, /public/hero-images/imagen2.png
//
// Puedes agregar más imágenes o modificar las URLs existentes a continuación.
// ============================================================================

export interface HeroImageItem {
  id: string;
  src: string;
  fallbackSrc: string;
  alt: string;
  caption?: string;
}

export const HERO_SLIDES: HeroImageItem[] = [
  {
    id: 'slide-1',
    // Puedes colocar la ruta local cuando subas tu archivo a public/hero-images/mama e hija.png
    // Si la imagen local no existe, se cargará la de Unsplash.
    src: '/hero-images/mama%20e%20hija.png',
    fallbackSrc: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
    alt: 'Equipo médico Prana Neumología en quirófano y diagnóstico pulmonar',
    caption: 'Diagnóstico de Precisión & Cuidado Avanzado'
  },
  {
    id: 'slide-2',
    src: '/hero-images/mostrando%20pulmones.png',
    fallbackSrc: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80',
    alt: 'Especialista en Neumología atendiendo salud respiratoria en Costa Rica',
    caption: 'Atención Profesional y Personalizada'
  }
];

// Tiempo en milisegundos para cambiar cada imagen automáticamente (ej. 4000 = 4 segundos)
export const SLIDE_CHANGE_INTERVAL = 4000;
