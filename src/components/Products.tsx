import { useState } from 'react';
import {
  Cylinder,
  Droplets,
  Bath,
  Flame,
  Wrench,
  ShowerHead,
  Waves,
  Container,
  ArrowRight,
} from 'lucide-react';
import Reveal from '@/components/Reveal';

type LucideIcon = typeof Cylinder;

interface Product {
  icon: LucideIcon;
  title: string;
  desc: string;
  image: string;
  tags: string[];
}

const products: Product[] = [
  {
    icon: Cylinder,
    title: 'Pipes & Fittings',
    desc: 'PVC, CPVC, UPVC, SWR pipes and fittings — elbows, couplers, tees, reducers, and valves from Finolex and Sintex.',
    image: 'https://images.pexels.com/photos/7937299/pexels-photo-7937299.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Finolex', 'Sintex', 'CPVC', 'UPVC', 'SWR'],
  },
  {
    icon: Droplets,
    title: 'Faucets & Mixers',
    desc: 'Premium faucets, basin mixers, and taps from Jaquar, Essco, and more — contemporary and traditional designs.',
    image: 'https://images.pexels.com/photos/18071800/pexels-photo-18071800.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Jaquar', 'Essco', 'Mixer', 'Bib Tap'],
  },
  {
    icon: Container,
    title: 'Wash Basins',
    desc: 'Designer ceramic wash basins — wall-mounted, countertop, table top, and semi-recessed in elegant finishes.',
    image: 'https://images.pexels.com/photos/6653889/pexels-photo-6653889.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Parryware', 'Jaquar', 'Countertop', 'Wall-mounted'],
  },
  {
    icon: Waves,
    title: 'Toilets & WCs',
    desc: 'One-piece closets, two-piece WCs, and close-coupled toilets from Kohler Parryware with hygienic designs.',
    image: 'https://images.pexels.com/photos/5991540/pexels-photo-5991540.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Parryware', 'Kohler', 'One Piece', 'Close Coupled'],
  },
  {
    icon: Flame,
    title: 'Water Heaters',
    desc: 'Racold electric storage, instant, gas, and solar water heaters to meet every hot water requirement.',
    image: 'https://images.pexels.com/photos/4194866/pexels-photo-4194866.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Racold', 'Storage', 'Instant', 'Solar'],
  },
  {
    icon: ShowerHead,
    title: 'Showers & Accessories',
    desc: 'Overhead showers, hand showers, diverters, towel rings, soap dishes, and coordinated bathroom accessories.',
    image: 'https://images.pexels.com/photos/4194867/pexels-photo-4194867.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Jaquar', 'Overhead', 'Hand Shower', 'Diverters'],
  },
  {
    icon: Bath,
    title: 'Bath Tubs',
    desc: 'Acrylic and ceramic bathtubs, whirlpools, and soaking tubs for a luxurious bathing experience.',
    image: 'https://images.pexels.com/photos/8146338/pexels-photo-8146338.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Jaquar', 'Parryware', 'Acrylic', 'Whirlpool'],
  },
  {
    icon: Wrench,
    title: 'Urinals & Hardware',
    desc: 'Ceramic urinals, kitchen sinks, flush tanks, angle valves, bottle traps, and plumbing accessories.',
    image: 'https://images.pexels.com/photos/709749/pexels-photo-709749.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Ceramic', 'Flush Tank', 'Kitchen Sink', 'Angle Valve'],
  },
];

export default function Products() {
  const [active, setActive] = useState(0);
  const current = products[active];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="products" className="section-pad relative overflow-hidden bg-white">
      <div className="absolute top-40 left-0 w-72 h-72 bg-accent-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 text-primary-700 text-sm font-600 mb-5">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
              What We Offer
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-display text-3xl lg:text-5xl font-700 text-ink-900 leading-[1.15] mb-5">
              Complete Solutions for{' '}
              <span className="gradient-text">Every Bathroom</span>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-ink-600 text-base lg:text-lg leading-relaxed">
              Ashish Sanitary Enterprises offers complete solutions for all types of sanitaryware
              and hardware you need to set up your home.
            </p>
          </Reveal>
        </div>

        {/* Interactive showcase */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Product list */}
          <Reveal direction="left" className="lg:col-span-5">
            <div className="space-y-2.5">
              {products.map((p, i) => (
                <button
                  key={p.title}
                  onClick={() => setActive(i)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-400 border ${
                    active === i
                      ? 'bg-gradient-to-r from-primary-50 to-accent-50/50 border-primary-300 shadow-md shadow-primary-500/10'
                      : 'bg-white border-ink-100 hover:border-primary-200 hover:bg-ink-50'
                  }`}
                >
                  <div
                    className={`w-11 h-11 rounded-lg flex items-center justify-center shrink-0 transition-all duration-400 ${
                      active === i
                        ? 'bg-gradient-to-br from-primary-500 to-accent-500 text-white'
                        : 'bg-ink-100 text-ink-500'
                    }`}
                  >
                    <p.icon className="w-5.5 h-5.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3
                      className={`font-600 text-sm lg:text-base transition-colors ${
                        active === i ? 'text-primary-800' : 'text-ink-700'
                      }`}
                    >
                      {p.title}
                    </h3>
                    <p className="text-xs text-ink-400 truncate hidden sm:block mt-0.5">
                      {p.tags.slice(0, 3).join(' • ')}
                    </p>
                  </div>
                  <ArrowRight
                    className={`w-4.5 h-4.5 transition-all duration-400 ${
                      active === i ? 'text-primary-600 translate-x-0 opacity-100' : 'opacity-0 -translate-x-2'
                    }`}
                  />
                </button>
              ))}
            </div>
          </Reveal>

          {/* Product detail */}
          <div className="lg:col-span-7">
            <Reveal direction="right">
              <div
                key={active}
                className="relative rounded-3xl overflow-hidden shadow-2xl shadow-ink-900/10 group animate-scale-in"
              >
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-72 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-900/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7 lg:p-9">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center">
                      <current.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-display text-2xl lg:text-3xl font-700 text-white">
                      {current.title}
                    </h3>
                  </div>
                  <p className="text-white/80 text-sm lg:text-base leading-relaxed mb-4 max-w-xl">
                    {current.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {current.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-white/90 font-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={2}>
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-r from-primary-50 to-accent-50 border border-primary-100">
                <div>
                  <h4 className="font-display text-lg font-600 text-ink-900">
                    Interested in buying products?
                  </h4>
                  <p className="text-sm text-ink-600 mt-1">
                    Buy all sanitaryware products with latest designs at better prices.
                  </p>
                </div>
                <button
                  onClick={() => scrollTo('#contact')}
                  className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 text-white font-600 hover:shadow-lg hover:shadow-primary-500/30 transition-all hover:-translate-y-0.5 shrink-0"
                >
                  Get a Quote
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
