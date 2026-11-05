import { useEffect, useRef, useState } from 'react';
import { CheckCircle2, Droplets, Shield, Award } from 'lucide-react';
import Reveal from '@/components/Reveal';

const highlights = [
  'Authorized supplier, wholesaler & dealer',
  'Representing Finolex, Parryware, Sintex, Jaquar & more',
  'Over three decades of trusted service',
  'Premium selection from renowned brands only',
];

const features = [
  { icon: Shield, title: 'Trusted Quality', desc: 'Only from renowned brands ensuring durability & reliability' },
  { icon: Award, title: 'Legacy of Excellence', desc: 'Over 30 years of curating premium sanitary products' },
  { icon: Droplets, title: 'Diverse Range', desc: 'Pipes, fittings, faucets, ceramic urinals, wash basins & more' },
];

function useCountUp(target: number, start: boolean, duration = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const startTime = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
      else setCount(target);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);
  return count;
}

function StatCounter({ value, label, suffix = '' }: { value: number; label: string; suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);
  const count = useCountUp(value, start);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setStart(true);
        obs.unobserve(e.target);
      }
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl lg:text-5xl font-700 gradient-text">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm text-ink-500 mt-2 font-500">{label}</div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="section-pad relative overflow-hidden bg-white">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-50/60 to-transparent pointer-events-none" />
      <div className="absolute -left-20 top-1/3 w-72 h-72 bg-accent-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Images */}
          <Reveal direction="left">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-2xl shadow-xl group">
                    <img
                      src="https://images.pexels.com/photos/8134822/pexels-photo-8134822.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Premium bathroom interior"
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="overflow-hidden rounded-2xl shadow-xl group">
                    <img
                      src="https://images.pexels.com/photos/4194862/pexels-photo-4194862.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Chrome shower faucet"
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="overflow-hidden rounded-2xl shadow-xl group">
                    <img
                      src="https://images.pexels.com/photos/10099095/pexels-photo-10099095.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Modern sink with faucet"
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="overflow-hidden rounded-2xl shadow-xl group">
                    <img
                      src="https://images.pexels.com/photos/7045908/pexels-photo-7045908.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Minimalist bathroom"
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 glass rounded-2xl px-6 py-4 shadow-2xl border border-white/40 animate-float-slow">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary-400 to-secondary-600 flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-display text-2xl font-700 text-ink-900">Since 1991</div>
                    <div className="text-xs text-ink-500">Three decades of trust</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Content */}
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 text-primary-700 text-sm font-600 mb-5">
                <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                About Us
              </span>
            </Reveal>

            <Reveal delay={1}>
              <h2 className="font-display text-3xl lg:text-5xl font-700 text-ink-900 leading-[1.15] mb-6">
                One-stop shop for{' '}
                <span className="gradient-text">every Sanitary</span>
              </h2>
            </Reveal>

            <Reveal delay={2}>
              <p className="text-ink-600 text-base lg:text-lg leading-relaxed mb-6">
                Ashish Sanitary Enterprises has earned its reputation as an authorized supplier,
                wholesaler, and dealer in Asansol, representing esteemed companies such as Finolex,
                Parryware, Sintex, Jaquar and more.
              </p>
            </Reveal>

            <Reveal delay={3}>
              <ul className="space-y-3 mb-8">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success-600 shrink-0 mt-0.5" />
                    <span className="text-ink-700 text-sm lg:text-base">{h}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={4}>
              <div className="grid sm:grid-cols-3 gap-4">
                {features.map((f) => (
                  <div
                    key={f.title}
                    className="card-glow rounded-xl border border-ink-100 p-4 hover:border-primary-300 hover:shadow-lg transition-all"
                    onMouseMove={(e) => {
                      const t = e.currentTarget;
                      t.style.setProperty('--mx', `${e.clientX - t.getBoundingClientRect().left}px`);
                      t.style.setProperty('--my', `${e.clientY - t.getBoundingClientRect().top}px`);
                    }}
                  >
                    <f.icon className="w-7 h-7 text-primary-600 mb-3" />
                    <h4 className="font-600 text-ink-900 text-sm mb-1">{f.title}</h4>
                    <p className="text-xs text-ink-500 leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* Stats row */}
        <Reveal delay={2}>
          <div className="mt-20 rounded-3xl bg-gradient-to-r from-ink-900 via-ink-800 to-primary-900 p-10 lg:p-14 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-accent-500/15 rounded-full blur-3xl" />
            <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8">
              <StatCounter value={1250} label="Branded Products" />
              <StatCounter value={680} label="Premium Products" />
              <StatCounter value={100000} label="Happy Customers" suffix="+" />
              <StatCounter value={76} label="Awards" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
