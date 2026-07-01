import { Instagram, Facebook } from 'lucide-react';
import { navLinks, contactInfo, socialLinks } from '@/lib/data';

const socialIcons = {
  instagram: Instagram,
  facebook: Facebook,
} as const;

export default function Footer() {
  return (
    <footer id="contact" className="bg-brand-dark text-brand-cream pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-sage rounded-full flex items-center justify-center text-white">
                <span className="font-serif text-xl font-bold">A</span>
              </div>
              <span className="text-2xl font-serif font-bold tracking-tight">
                Almendra
              </span>
            </div>

            <p className="text-brand-cream/60 max-w-sm">
              Repostería saludable para un estilo de vida consciente. Hacemos
              envíos a toda la ciudad.
            </p>

            {/* Social links */}
            <div className="flex gap-4">
              {socialLinks.map(({ platform, href }) => {
                const Icon = socialIcons[platform];
                return (
                  <a
                    key={platform}
                    href={href}
                    aria-label={platform}
                    className="w-10 h-10 rounded-full border border-brand-cream/20 flex items-center justify-center hover:bg-brand-sage hover:border-brand-sage transition-all"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Nav links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Enlaces</h4>
            <ul className="space-y-2 text-brand-cream/60">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className="hover:text-brand-sage transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Contacto</h4>
            <ul className="space-y-2 text-brand-cream/60">
              <li>{contactInfo.email}</li>
              <li>{contactInfo.phone}</li>
              <li>{contactInfo.city}</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-brand-cream/10 text-center text-sm text-brand-cream/40">
          © {new Date().getFullYear()} Almendra Healthy Desserts. Todos los
          derechos reservados.
        </div>
      </div>
    </footer>
  );
}