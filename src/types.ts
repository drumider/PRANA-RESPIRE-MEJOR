export type Language = 'es' | 'en';

export interface LocationInfo {
  name: string;
  address: string;
  office: string;
  phone: string;
  phoneFormatted: string;
  mapUrl: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
}

export interface ExamDetail {
  id: string;
  title: string;
  description: string;
  prepInfo?: string;
  duration?: string;
}

export interface EducationalVideo {
  id: string;
  title: string;
  description: string;
  duration: string;
  youtubeId: string;
  category: string;
  thumbnailUrl: string;
}

export interface InsuranceItem {
  id: string;
  name: string;
  type: string;
  badge?: string;
  url?: string;
}

export interface DoctorProfile {
  name: string;
  role: string;
  specialty: string;
  code: string;
  hospitals: string[];
  imageUrl: string;
  bio: string;
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  email: string;
  hospital: string;
  serviceType: string;
  preferredDate: string;
  preferredTime: string;
  insurance: string;
  notes: string;
}
