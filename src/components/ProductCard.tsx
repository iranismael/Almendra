import Image from 'next/image';
import type { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-[2rem] p-6 shadow-sm hover:shadow-xl transition-all group overflow-hidden border border-brand-almond/20">
      {/* Image container */}
      <div className="h-64 rounded-2xl mb-6 relative overflow-hidden transition-transform group-hover:scale-105">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          priority
        />
        {/* Dark overlay so text stays legible on bright images */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Info */}
      <div className="space-y-2">
        <span className="text-brand-sage text-xs font-bold uppercase tracking-widest">
          {product.tag}
        </span>
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold text-brand-dark">{product.title}</h3>
          <p className="text-brand-sage font-bold">{product.price}</p>
        </div>
        <button className="w-full mt-4 bg-brand-cream border border-brand-almond text-brand-dark py-3 rounded-xl font-bold hover:bg-brand-sage hover:text-white hover:border-brand-sage transition-all">
          Ver detalles
        </button>
      </div>
    </div>
  );
}