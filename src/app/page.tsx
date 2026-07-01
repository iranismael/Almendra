import Navbar          from '@/components/Navbar';
import HeroSection     from '@/components/HeroSection';
import ProductsSection from '@/components/ProductsSection';
import AboutSection    from '@/components/AboutSection';
import Footer          from '@/components/Footer';
import TestimonialsSlider from '@/components/Testimonialsslider';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <AboutSection />
      <TestimonialsSlider />
      <Footer />
    </main>
  );
}