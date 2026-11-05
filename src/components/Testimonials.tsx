import { useEffect, useRef, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import Reveal from '@/components/Reveal';

const testimonials = [
  {
    name: 'Bishwak Mukherjee',
    role: 'Homeowner, Asansol',
    rating: 5,
    text: 'Ashish Sanitary Enterprises provided excellent quality products for my entire home renovation. The Jaquar fittings and Finolex pipes have been working flawlessly. Highly recommended!',
  },
  {
    name: 'Madhu Sudan Roy',
    role: 'Contractor, Durgapur',
    rating: 5,
    text: 'As a contractor, I rely on bulk purchases and Ashish Sanitary always delivers competitive pricing and free delivery. Their range of premium brands is unmatched in the region.',
  },
  {
    name: 'Arindam Mukhuti',
    role: 'Interior Designer, Kolkata',
    rating: 5,
    text: 'The variety of designer basins and faucets is impressive. The team helped me choose the perfect Parryware collection for my client project. Professional service and genuine products.',
  },
  {
    name: 'Ashish Nand Gautam',
    role: 'Builder, Asansol',
    rating: 5,
    text: 'Three decades of trust speaks for itself. From pipes to sanitaryware, everything under one roof with the best prices in West Bengal. Their trade discounts are a great benefit.',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    timerRef.current = setInterval(next, 7000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <section
      id="testimonials"
      className="section-pad relative overflow-hidden bg-ink-950"
    >
      {/* Decorative */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-700/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent-700/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white/90 text-sm font-600 mb-5">
              <Quote className="w-3.5 h-3.5 text-secondary-400" />
              Here's what they have to say
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-display text-3xl lg:text-5xl font-700 text-white leading-[1.15] mb-5">
              Our Customers{' '}
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Do the Talking
              </span>
            </h2>
          </Reveal>
        </div>

        {/* Carousel */}
        <Reveal delay={2}>
          <div className="relative max-w-3xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl">
              {testimonials.map((t, i) => (
                <div
                  key={t.name}
                  className={`transition-all duration-700 ${
                    i === current
                      ? 'opacity-100 translate-x-0'
                      : 'absolute inset-0 opacity-0 translate-x-12 pointer-events-none'
                  }`}
                >
                  <div className="glass-dark rounded-3xl p-8 lg:p-12 border border-white/10">
                    <div className="flex items-center gap-1 mb-5">
                      {Array.from({ length: t.rating }).map((_, s) => (
                        <Star
                          key={s}
                          className="w-5 h-5 fill-secondary-400 text-secondary-400"
                        />
                      ))}
                    </div>
                    <Quote className="w-10 h-10 text-primary-500/40 mb-4" />
                    <p className="text-white/85 text-lg lg:text-xl leading-relaxed font-300 mb-8">
                      "{t.text}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-display font-700 text-xl">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-600 text-white text-lg">{t.name}</div>
                        <div className="text-sm text-white/60">{t.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    aria-label={`Testimonial ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      i === current ? 'w-8 bg-white' : 'w-2 bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  aria-label="Previous"
                  className="w-10 h-10 rounded-full bg-white/10 border border-white/15 text-white flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next"
                  className="w-10 h-10 rounded-full bg-white/10 border border-white/15 text-white flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
