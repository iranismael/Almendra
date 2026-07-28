import type { Product, NavLink, FeatureItem, ContactInfo, SocialLink } from '@/types';

export const products: Product[] = [
  {
    id: 1,
    title: 'Brownie Keto',
    price: '$345',
    tag: 'Sin Gluten',
    color: 'bg-[#5D4037]',
    image: '/BannerPrincipal/almendra-mia-browni.png',
    description: 'Un brownie denso y húmedo, endulzado naturalmente y libre de gluten. Perfecto para un antojo sin culpa.',
    calories: 210,
    ingredients: ['Harina de almendra', 'Cacao', 'Huevo', 'Eritritol', 'Nuez'],
    allergens: ['Huevo', 'Frutos secos'],
  },
  {
    id: 2,
    title: 'Panqué de Plátano',
    price: '$580',
    tag: 'Vegano',
    color: 'bg-[#FBC02D]',
    image: '/BannerPrincipal/almendra-mia-panque.png',
    description: 'Panqué esponjoso a base de plátano maduro, sin ningún ingrediente de origen animal.',
    calories: 180,
    ingredients: ['Plátano', 'Harina de avena', 'Aceite de coco', 'Canela', 'Nuez'],
    allergens: ['Frutos secos'],
  },
  {
    id: 3,
    title: 'Donas saludables',
    price: '$350',
    tag: 'Keto Friendly',
    color: 'bg-[#FF8A80]',
    image: '/BannerPrincipal/almendra-mia-donas.png',
    description: 'Donas horneadas, no fritas, con cobertura de chocolate oscuro y toppings de nueces.',
    calories: 150,
    ingredients: ['Harina de almendra', 'Chocolate oscuro 70%', 'Eritritol', 'Nuez', 'Coco rallado'],
    allergens: ['Frutos secos', 'Coco'],
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
  city: 'Cuernavaca Morelos',
};

export const socialLinks: SocialLink[] = [
  { platform: 'instagram', href: 'https://www.instagram.com/almendramia.mx' },
  { platform: 'facebook',  href: 'https://www.facebook.com/profile.php?id=61574153920276' },
];