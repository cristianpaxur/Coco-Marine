export type ExperienceType =
  | 'Mesa para Casal'
  | 'Almoço Executivo'
  | 'Família / Grupo'
  | 'Comemoração'
  | 'Salão Privativo';

export interface BookingState {
  experience: ExperienceType;
  date: string;
  time: string;
  guests: number;
  specialRequests: string;
}

export type MenuCategory =
  | 'todos'
  | 'entradas'
  | 'principais'
  | 'moquecas'
  | 'executivo'
  | 'sobremesas'
  | 'vinhos';

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  categoryLabel: string;
  description: string;
  price: string;
  priceNumeric: number;
  highlightBadge?: string;
  imageUrl: string;
  tags: string[];
  pairing?: string;
  serves: string;
}

export interface DirectImageLink {
  id: string;
  title: string;
  description: string;
  url: string;
  category: 'Branding' | 'Hero' | 'Pratos' | 'Localização';
  dimensions?: string;
}

export interface DaySchedule {
  dayName: string;
  isOpen: boolean;
  lunch?: string;
  dinner?: string;
  singleShift?: string;
  note?: string;
}
