// TypeScript interfaces for TVEC website components

export interface NavItem {
  label: string;
  href: string;
  id: string;
}

export interface CompanyStat {
  value: string;
  label: string;
  description?: string;
}

export interface ServiceFeature {
  icon?: string;
  title: string;
  description: string;
}

export interface TechnologyBenefit {
  title: string;
  description: string;
  highlight?: boolean;
}

export interface Partner {
  name: string;
  logo?: string;
  description: string;
  website?: string;
}

export interface Project {
  title: string;
  description: string;
  features: string[];
  image?: string;
}

export interface ContactInfo {
  address: string;
  phone?: string;
  email?: string;
  hours?: string;
}

export interface FormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export interface SectionProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export interface CardProps {
  title?: string;
  description?: string;
  image?: string;
  children?: React.ReactNode;
  className?: string;
}