import { useEffect, useState, useCallback } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const slides = [
  {
    image:
      'https://images.pexels.com/photos/6394530/pexels-photo-6394530.jpeg?auto=compress&cs=tinysrgb&w=1920',
    eyebrow: 'Authorized Dealer Since 1991',
    title: 'Premium Sanitaryware',
    titleAccent: 'For Every Home',
    subtitle:
      'From Jaquar to Parryware, Finolex to Sintex — we bring you the finest bathroom and plumbing brands under one roof in Asansol.',
  },
  {
    image:
      'https://images.pexels.com/photos/7174387/pexels-photo-7174387.jpeg?auto=compress&cs=tinysrgb&w=1920',
    eyebrow: 'One-Stop Sanitary Shop',
    title: 'Quality Meets',
    titleAccent: 'Elegance',
    subtitle:
      'Pipes, fittings, faucets, basins, and more — curated from trusted brands to ensure durability, reliability, and lasting satisfaction.',
  },
  {
    image:
      'https://images.pexels.com/photos/6492399/pexels-photo-6492399.jpeg?auto=compress&cs=tinysrgb&w=1920',
    eyebrow: 'Serving All of West Bengal',
    title: 'Competitive Pricing',
    titleAccent: 'Free Delivery',
    subtitle:
      'Bulk purchaser across multiple districts means better prices for you, plus 100% free delivery on bulk orders of sanitaryware and fittings.',
  },
];

const stats = [
  { value: '1250', label: 'Branded Products' },
  { value: '680', label: 'Premium Products' },
  { value: '100000', label: 'Happy Customers' },
  { value: '76', label: 'Awards' },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className={`w-full h-full object-cover ${
                i === current ? 'animate-zoom-kenburns' : ''
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink-950/85 via-ink-900/60 to-ink-900/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-ink-950/40" />
          </div>
        ))}
      </div>

      {/* Floating decorative shapes */}
      <div className="absolute top-1/4 right-10 w-72 h-72 rounded-full bg-primary-500/15 blur-3xl animate-float-slow pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-60 h-60 rounded-full bg-accent-500/10 blur-3xl animate-float pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 w-full pt-24 pb-16">
        <div className="max-w-3xl">
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`${i === current ? 'block' : 'hidden'}`}
            >
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 ${
                  i === current ? 'animate-fade-down' : ''
                }`}
              >
                <Star className="w-4 h-4 text-secondary-400 fill-secondary-400" />
                <span className="text-sm text-white/90 font-500">{slide.eyebrow}</span>
              </div>

              <h1
                className={`font-display text-4xl sm:text-5xl lg:text-7xl font-700 text-white leading-[1.1] mb-6 ${
                  i === current ? 'animate-fade-up' : ''
                }`}
                style={{ animationDelay: '0.15s' }}
              >
                {slide.title}
                <br />
                <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-primary-300 bg-clip-text text-transparent">
                  {slide.titleAccent}
                </span>
              </h1>

              <p
                className={`text-lg text-white/80 leading-relaxed max-w-2xl mb-8 ${
                  i === current ? 'animate-fade-up' : ''
                }`}
                style={{ animationDelay: '0.3s' }}
              >
                {slide.subtitle}
              </p>

              <div
                className={`flex flex-wrap items-center gap-4 ${
                  i === current ? 'animate-fade-up' : ''
                }`}
                style={{ animationDelay: '0.45s' }}
              >
                <button
                  onClick={() => scrollTo('products')}
                  className="group flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-600 hover:shadow-xl hover:shadow-primary-500/40 transition-all hover:-translate-y-1"
                >
                  Explore Products
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => scrollTo('about')}
                  className="px-7 py-3.5 rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-white font-600 hover:bg-white/20 transition-all hover:-translate-y-1"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="glass rounded-2xl px-5 py-4 border border-white/15 hover:border-primary-400/40 transition-all hover:-translate-y-1"
              style={{ animationDelay: `${0.6 + i * 0.1}s` }}
            >
              <div className="font-display text-3xl font-700 text-white">{stat.value}</div>
              <div className="text-xs text-white/70 mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide controls */}
      <div className="absolute bottom-8 right-5 lg:right-8 z-20 flex items-center gap-3">
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="w-11 h-11 rounded-full glass border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === current ? 'w-10 bg-white' : 'w-2.5 bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          aria-label="Next slide"
          className="w-11 h-11 rounded-full glass border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden lg:flex flex-col items-center gap-2">
        <span className="text-xs text-white/50 uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 bg-white/70 rounded-full animate-bounce-soft" />
        </div>
      </div>
    </section>
  );
}
