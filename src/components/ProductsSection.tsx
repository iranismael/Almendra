import { products } from '@/lib/data';
import ProductCard from '@/components/ProductCard';

export default function ProductsSection() {
  return (
    <section id="products" className="py-24 bg-brand-cream/50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark">
            Placeres Saludables
          </h2>
          <div className="w-24 h-1 bg-brand-sage mx-auto rounded-full" />
          <p className="text-brand-dark/60 max-w-2xl mx-auto">
            Brownies, panqués y pasteles hechos con harina de almendra, cacao
            puro y endulzantes naturales.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}