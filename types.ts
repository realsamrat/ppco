export interface NavItem {
  label: string;
  href: string;
}

export interface Photographer {
  name: string;
  role: string;
  image: string;
  bio: string;
  credentials: string[];
}

export interface ProcessStep {
  title: string;
  content: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
  image: string;
}

export interface BlogPost {
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
  slug: string;
  content: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}