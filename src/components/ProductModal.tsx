'use client';

import { useEffect } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';
import type { Product } from '@/types';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
    >
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-[2rem] max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-brand-sage hover:text-white transition-all shadow-md"
        >
          <X size={20} />
        </button>

        <div className="h-72 relative shrink-0">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, 672px"
            className="object-cover"
          />
        </div>

        <div className="overflow-y-auto flex-1">
          <div className="p-8 space-y-6">
            <div>
              <span className="text-brand-sage text-xs font-bold uppercase tracking-widest">
                {product.tag}
              </span>
              <div className="flex justify-between items-center mt-1">
                <h2 id="product-modal-title" className="text-2xl font-bold text-brand-dark font-serif">
                  {product.title}
                </h2>
                <p className="text-brand-sage font-bold text-xl">{product.price}</p>
              </div>
            </div>

            {product.description && (
              <p className="text-brand-dark/70">{product.description}</p>
            )}

            {product.calories !== undefined && (
              <div className="flex items-center gap-2 text-sm text-brand-dark/70">
                <span className="font-bold text-brand-dark">Calorías:</span>
                {product.calories} kcal
              </div>
            )}

            {product.ingredients && product.ingredients.length > 0 && (
              <div>
                <h4 className="font-bold text-brand-dark mb-2">Ingredientes</h4>
                <ul className="flex flex-wrap gap-2">
                  {product.ingredients.map((ing) => (
                    <li
                      key={ing}
                      className="bg-brand-cream text-brand-dark text-sm px-3 py-1 rounded-full border border-brand-almond/30"
                    >
                      {ing}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.allergens && product.allergens.length > 0 && (
              <div>
                <h4 className="font-bold text-brand-dark mb-2">Alérgenos</h4>
                <ul className="flex flex-wrap gap-2">
                  {product.allergens.map((allergen) => (
                    <li
                      key={allergen}
                      className="bg-red-50 text-red-700 text-sm px-3 py-1 rounded-full border border-red-200"
                    >
                      {allergen}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}