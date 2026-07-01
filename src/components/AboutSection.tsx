import { Leaf } from 'lucide-react';
import { features } from '@/lib/data';
import FeatureCard from '@/components/FeatureCard';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Decorative graphic */}
          {/*<div className="relative">
            <div className="aspect-square bg-brand-almond/20 rounded-[4rem] relative z-0 flex items-center justify-center p-12">
              <div className="w-full h-full border-4 border-dashed border-brand-sage/30 rounded-[3rem] animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Leaf className="text-brand-sage opacity-20" size={120} />
              </div>
            </div>*/}

             {/* Imagen con badge */}
          <div className="relative">
            <div className="relative aspect-square rounded-[3rem] overflow-hidden">
              <Image
                src="/BannerPrincipal/almendra-mia1.jpg"
                alt="Ingredientes naturales Almendra"
                fill
                className="object-cover"
              />
            </div>

            {/* Badge */}
            <div className="absolute -top-4 -right-4 bg-brand-sage text-white p-8 rounded-3xl shadow-xl z-10 max-w-[200px]">
              <p className="text-3xl font-bold font-serif mb-1">0%</p>
              <p className="text-xs font-medium uppercase tracking-tighter leading-tight text-white/80">
                Azúcar refinada, 100% sabor natural.
              </p>
            </div>
          </div>

          {/* Copy */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark">
              Nuestra Esencia
            </h2>
            <p className="text-lg text-brand-dark/70 leading-relaxed">
              En <strong>Almendra</strong>, creemos que comer saludable no debe
              ser aburrido ni insípido. Nuestra misión es transformar
              ingredientes puros en experiencias gourmet que nutran tu cuerpo y
              deleiten tu paladar.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              {features.map((feature) => (
                <FeatureCard key={feature.title} feature={feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}