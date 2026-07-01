export interface Product {
  id: number;
  title: string;
  price: string;
  tag: string;
  color: string;
  image: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface FeatureItem {
  icon: 'star' | 'leaf';
  title: string;
  description: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  city: string;
}

export interface SocialLink {
  platform: 'instagram' | 'facebook';
  href: string;
}