import type { Product, NavLink, FeatureItem, ContactInfo, SocialLink } from '@/types';

export const products: Product[] = [
  {
    id: 1,
    title: 'Brownie Keto',
    price: '$45',
    tag: 'Sin Gluten',
    color: 'bg-[#5D4037]',
    image: '/BannerPrincipal/almendra-mia1.jpg',
  },
  {
    id: 2,
    title: 'Panqué de Plátano',
    price: '$180',
    tag: 'Vegano',
    color: 'bg-[#FBC02D]',
    image: '/BannerPrincipal/almendra-mia1.jpg',
  },
  {
    id: 3,
    title: 'Cheesecake de Frutos',
    price: '$350',
    tag: 'Keto Friendly',
    color: 'bg-[#FF8A80]',
    image: '/BannerPrincipal/almendra-mia1.jpg',
  },
];

export const navLinks: NavLink[] = [
  { href: '#home',     label: 'Inicio'    },
  { href: '#products', label: 'Productos' },
  { href: '#about',    label: 'Nosotros'  },
  { href: '#testimonials', label: 'Testimonios'  },
  { href: '#contact',  label: 'Contacto'  },
];

export const features: FeatureItem[] = [
  {
    icon: 'star',
    title: 'Artesanal',
    description: 'Cada postre es hecho a mano con paciencia y detalle.',
  },
  {
    icon: 'leaf',
    title: 'Puro',
    description: 'Solo ingredientes de origen natural y consciente.',
  },
];

export const contactInfo: ContactInfo = {
  email: 'hola@almendra.com',
  phone: '+52 (555) 123-4567',
  city: 'Ciudad de México, MEX',
};

export const socialLinks: SocialLink[] = [
  { platform: 'instagram', href: '#' },
  { platform: 'facebook',  href: '#' },
];