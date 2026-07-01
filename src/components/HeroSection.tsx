import Image from 'next/image';
import { ArrowRight, Leaf } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 -right-20 w-96 h-96 bg-brand-almond/30 rounded-full blur-3xl opacity-60 animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-sage/20 rounded-full blur-3xl opacity-40 animate-pulse" />
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Copy */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-brand-sage/10 text-brand-sage px-4 py-1.5 rounded-full text-sm font-semibold">
            <Leaf size={16} /> Repostería Saludable en Cuernavaca
          </div>

          <h1 className="text-6xl md:text-7xl font-serif font-bold leading-tight text-brand-dark">
            Dulzura que{' '}
            <span className="text-brand-sage italic">cuida</span> de ti.
          </h1>

          <p className="text-xl text-brand-dark/70 max-w-lg leading-relaxed">
            Preparamos pasteles saludables, sin azúcares refinados, elaborados
            con harina de almendra e ingredientes naturales cuidadosamente
            seleccionados.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#products"
              className="bg-brand-sage text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg shadow-brand-sage/20 hover:shadow-brand-sage/40 hover:-translate-y-1 transition-all flex items-center gap-2"
            >
              Explorar Menú <ArrowRight size={20} />
            </a>
            <a
              href="#about"
              className="border-2 border-brand-almond text-brand-dark px-8 py-4 rounded-full text-lg font-bold hover:bg-brand-almond/10 transition-all"
            >
              Nuestra Historia
            </a>
          </div>
        </div>

        {/* Hero image */}
        <div className="h-[500px] w-full relative rounded-[1rem] overflow-hidden">
          <Image
            src="/BannerPrincipal/almendra-mia1.jpg"
            alt="Pastelería Almendra — postres saludables"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}