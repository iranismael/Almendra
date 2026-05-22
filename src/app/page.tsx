import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Heart, Star, Instagram, Facebook } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 -right-20 w-96 h-96 bg-brand-almond/30 rounded-full blur-3xl opacity-60 animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-sage/20 rounded-full blur-3xl opacity-40 animate-pulse" />
        </div>

        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-brand-sage/10 text-brand-sage px-4 py-1.5 rounded-full text-sm font-semibold">
              <Leaf size={16} /> Respoteria Saludable en Cuernavaca
            </div>
            <h1 className="text-6xl md:text-7xl font-serif font-bold leading-tight text-brand-dark">
              Dulzura que <span className="text-brand-sage italic">cuida</span> de ti.
            </h1>
            <p className="text-xl text-brand-dark/70 max-w-lg leading-relaxed">
              Preparamos pasteles saludables, sin azúcares refinados, elaborados con harina de almendra e ingredientes naturales cuidadosamente seleccionados.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#products" className="bg-brand-sage text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg shadow-brand-sage/20 hover:shadow-brand-sage/40 hover:-translate-y-1 transition-all flex items-center gap-2">
                Explorar Menú <ArrowRight size={20} />
              </a>
              <button className="border-2 border-brand-almond text-brand-dark px-8 py-4 rounded-full text-lg font-bold hover:bg-brand-almond/10 transition-all">
                Nuestra Historia
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700">
              <div className="bg-gradient-to-br from-brand-almond to-brand-cream h-[500px] w-full flex items-center justify-center">
                {/* Decorative placeholder until we generate images */}
                <div className="text-center space-y-4">
                  <Heart className="mx-auto text-brand-accent animate-bounce" size={48} />
                  <p className="font-serif text-brand-dark/60 italic text-xl">Pastelería con Amor</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 flex items-center gap-4 animate-bounce">
              <div className="bg-yellow-100 p-2 rounded-full text-yellow-600">
                <Star fill="currentColor" size={24} />
              </div>
              <div>
                <p className="font-bold text-brand-dark">4.9/5</p>
                <p className="text-xs text-brand-dark/60">Rating de clientes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Mini Section */}
      <section id="products" className="py-24 bg-brand-cream/50">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark">Placeres Saludables</h2>
            <div className="w-24 h-1 bg-brand-sage mx-auto rounded-full" />
            <p className="text-brand-dark/60 max-w-2xl mx-auto">
              Brownies, panqués y pasteles hechos con harina de almendra, cacao puro y endulzantes naturales.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Brownie Keto', price: '$45', tag: 'Sin Gluten', color: 'bg-[#5D4037]' },
              { title: 'Panqué de Plátano', price: '$180', tag: 'Vegano', color: 'bg-[#FBC02D]' },
              { title: 'Cheesecake de Frutos', price: '$350', tag: 'Keto Friendly', color: 'bg-[#FF8A80]' },
            ].map((product, idx) => (
              <div key={idx} className="bg-white rounded-[2rem] p-6 shadow-sm hover:shadow-xl transition-all group overflow-hidden border border-brand-almond/20">
                <div className={`${product.color} h-64 rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center transition-transform group-hover:scale-105`}>
                  <span className="text-white font-serif text-2xl font-bold opacity-30">{product.title}</span>
                </div>
                <div className="space-y-2">
                  <span className="text-brand-sage text-xs font-bold uppercase tracking-widest">{product.tag}</span>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-brand-dark">{product.title}</h3>
                    <p className="text-brand-sage font-bold">{product.price}</p>
                  </div>
                  <button className="w-full mt-4 bg-brand-cream border border-brand-almond text-brand-dark py-3 rounded-xl font-bold hover:bg-brand-sage hover:text-white hover:border-brand-sage transition-all">
                    Ver detalles
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square bg-brand-almond/20 rounded-[4rem] relative z-0 flex items-center justify-center p-12">
                <div className="w-full h-full border-4 border-dashed border-brand-sage/30 rounded-[3rem] animate-[spin_20s_linear_infinite]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Leaf className="text-brand-sage opacity-20" size={120} />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-brand-sage text-white p-8 rounded-3xl shadow-xl z-10 max-w-[200px]">
                <p className="text-3xl font-bold font-serif mb-1">0%</p>
                <p className="text-xs font-medium uppercase tracking-tighter leading-tight text-white/80">Azúcar refinada, 100% sabor natural.</p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark">Nuestra Esencia</h2>
              <p className="text-lg text-brand-dark/70 leading-relaxed">
                En <strong>Almendra</strong>, creemos que comer saludable no debe ser aburrido ni insípido. Nuestra misión es transformar ingredientes puros en experiencias gourmet que nutran tu cuerpo y deleiten tu paladar.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-brand-cream rounded-full flex items-center justify-center text-brand-sage border border-brand-almond/30">
                    <Star size={24} />
                  </div>
                  <h4 className="font-bold text-brand-dark">Artesanal</h4>
                  <p className="text-sm text-brand-dark/50">Cada postre es hecho a mano con paciencia y detalle.</p>
                </div>
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-brand-cream rounded-full flex items-center justify-center text-brand-sage border border-brand-almond/30">
                    <Leaf size={24} />
                  </div>
                  <h4 className="font-bold text-brand-dark">Puro</h4>
                  <p className="text-sm text-brand-dark/50">Solo ingredientes de origen natural y consciente.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section / Footer */}
      <footer id="contact" className="bg-brand-dark text-brand-cream pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2 space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-brand-sage rounded-full flex items-center justify-center text-white">
                  <span className="font-serif text-xl font-bold">A</span>
                </div>
                <span className="text-2xl font-serif font-bold tracking-tight">Almendra</span>
              </div>
              <p className="text-brand-cream/60 max-w-sm">
                Repostería saludable para un estilo de vida consciente. Hacemos envíos a toda la ciudad.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-brand-cream/20 flex items-center justify-center hover:bg-brand-sage hover:border-brand-sage transition-all">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-brand-cream/20 flex items-center justify-center hover:bg-brand-sage hover:border-brand-sage transition-all">
                  <Facebook size={20} />
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-bold">Enlaces</h4>
              <ul className="space-y-2 text-brand-cream/60">
                <li><a href="#home" className="hover:text-brand-sage transition-colors">Inicio</a></li>
                <li><a href="#products" className="hover:text-brand-sage transition-colors">Productos</a></li>
                <li><a href="#about" className="hover:text-brand-sage transition-colors">Nosotros</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-bold">Contacto</h4>
              <ul className="space-y-2 text-brand-cream/60">
                <li>hola@almendra.com</li>
                <li>+52 (555) 123-4567</li>
                <li>Ciudad de México, MEX</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-brand-cream/10 text-center text-sm text-brand-cream/40">
            © {new Date().getFullYear()} Almendra Healthy Desserts. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </main>
  );
}
