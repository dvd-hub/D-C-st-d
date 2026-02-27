import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  shortDescription: string; // 2 lines for card
  longDescription: string; // Detailed description
  features: string[]; // "Vad ingår" list
  price: string; // "Från XXX kr"
  cta: string; // Button text
  icon: LucideIcon;
}

export interface Review {
  id: number;
  author: string;
  date: string;
  rating: number;
  text: string;
  service?: string;
}

export interface Partner {
  id: number;
  name: string;
  logoUrl?: string; 
  url?: string;
}

export interface Feature {
  id: string;
  title: string;
  description?: string;
  icon: LucideIcon;
}

export interface FaqItem {
  question: string;
  answer: string;
}