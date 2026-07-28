"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  initials: string;
  avatarColor: string;
  textColor: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Pensé que un postre saludable no podía saber tan bien, pero me sorprendió. Son deliciosos, ligeros y ahora forman parte de mis antojos sin culpa",
    name: "Ana Martínez",
    role: "Cliente Plaza",
    initials: "AM",
    avatarColor: "bg-violet-100",
    textColor: "text-violet-800",
  },
  {
    id: 2,
    quote:
      "Estoy cuidando mi alimentación y encontrar estos postres fue un gran descubrimiento. Tienen un sabor increíble y la calidad de los ingredientes se nota desde el primer bocado",
    name: "Carlos Ramírez",
    role: "Cliente Plaza",
    initials: "CR",
    avatarColor: "bg-emerald-100",
    textColor: "text-emerald-800",
  },
  {
    id: 3,
    quote:
      "Los pedí para una reunión familiar y nadie creyó que eran saludables. Todos quedaron encantados con el sabor. Definitivamente volveré a comprar",
    name: "María López",
    role: "Cliente Plaza",
    initials: "ML",
    avatarColor: "bg-orange-100",
    textColor: "text-orange-800",
  },
  {
    id: 4,
    quote:
      "Me encanta tener una opción dulce que se adapte a mi estilo de vida. El servicio fue excelente, la entrega puntual y los postres llegaron frescos y deliciosos",
    name: "Javier Hernández",
    role: "Cliente Plaza",
    initials: "JV",
    avatarColor: "bg-blue-100",
    textColor: "text-blue-800",
  },
];

export default function TestimonialsSlider() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const total = testimonials.length;

  const go = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrent(((index % total) + total) % total);
      setTimeout(() => setIsAnimating(false), 450);
    },
    [isAnimating, total]
  );

  const prev = () => go(current - 1);
  const next = useCallback(() => go(current + 1), [current, go]);

  useEffect(() => {
    const timer = setInterval(next, 9000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="testimonials" className="py-20 px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <div className="w-24 h-1 bg-brand-sage mx-auto rounded-full" />
          <p className="text-brand-dark/60 max-w-2xl mx-auto">
            Quienes prueban nuestros postres descubren que lo saludable también puede ser delicioso, suave y lleno de sabor.
          </p>
        </div>
      <div className="max-w-2xl mx-auto">

        <div className="overflow-hidden relative">
          <div
            className="flex transition-transform duration-500 ease-[cubic-bezier(.4,0,.2,1)]"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="min-w-full bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-8"
              >
                <div className="flex mb-4 text-amber-500 text-sm tracking-widest">
                  {"★".repeat(5)}
                </div>

                <blockquote className="font-serif text-lg leading-relaxed text-gray-800 dark:text-gray-200 mb-6">
                  "{t.quote}"
                </blockquote>

                <div className="flex items-center gap-3">
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center text-sm font-medium shrink-0 ${t.avatarColor} ${t.textColor}`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {t.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mt-6">
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Ir al testimonio ${i + 1}`}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-gray-900 dark:bg-white scale-125"
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
              />
            ))}
          </div>

          <div className="flex gap-2">
            <button
              onClick={prev}
              aria-label="Anterior"
              className="w-9 h-9 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              aria-label="Siguiente"
              className="w-9 h-9 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}