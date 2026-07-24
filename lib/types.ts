export interface PoojaPackage {
  id: string;
  name: string;
  price: number;
  features: string[];
}

export interface PoojaService {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  price: string;
  basePrice: number;
  duration: string;
  image: string;
  rating: number;
  reviews: number;
  includes: string[];
  packages: PoojaPackage[];
}

export interface Astrologer {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  rating: number;
  reviews: number;
  languages: string[];
  image: string;
}

export interface Pandit {
  id: string;
  name: string;
  specialization: string;
  experience: string;
  rating: number;
  reviews: number;
  languages: string[];
  image: string;
  fee: number;
}

export interface TimeSlot {
  id: string;
  label: string;
  period: 'Morning' | 'Afternoon' | 'Evening';
}

export interface BookingSelection {
  poojaId: string | null;
  date: string | null;
  timeSlotId: string | null;
  packageId: string | null;
  panditId: string | null;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  avatar: string;
  rating: number;
}

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}
