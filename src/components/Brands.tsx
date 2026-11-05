import Reveal from '@/components/Reveal';
import { Star } from 'lucide-react';

const brands = [
  { name: 'Jaquar', tagline: 'Bathroom & Lighting' },
  { name: 'Parryware', tagline: 'Premium Bath Solutions' },
  { name: 'Finolex', tagline: 'Pipes & Fittings' },
  { name: 'Sintex', tagline: 'Water Tanks & Pipes' },
  { name: 'Racold', tagline: 'Water Heaters' },
  { name: 'Essco', tagline: 'Faucets & Fittings' },
  { name: 'Dson', tagline: 'Sanitaryware' },
  { name: 'Orio', tagline: 'Bathroom Fittings' },
  { name: 'Hi-Life', tagline: 'Plumbing Solutions' },
  { name: 'Kohler', tagline: 'Luxury Bath' },
];

export default function Brands() {
  const loop = [...brands, ...brands];

  return (
    <section
      id="brands"
      className="section-pad relative overflow-hidden bg-gradient-to-b from-white to-ink-50"
    >
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-50 text-secondary-700 text-sm font-600 mb-5 border border-secondary-100">
              <Star className="w-3.5 h-3.5 fill-secondary-500 text-secondary-500" />
              Our Clients
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-display text-3xl lg:text-5xl font-700 text-ink-900 leading-[1.15] mb-5">
              Premium Brands{' '}
              <span className="gradient-text">We Deal In</span>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-ink-600 text-base lg:text-lg leading-relaxed">
              As we served so far — representing the most trusted names in sanitaryware and plumbing.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Marquee row 1 */}
      <Reveal>
        <div className="marquee-mask overflow-hidden py-4">
          <div className="flex gap-5 animate-marquee w-max">
            {loop.map((brand, i) => (
              <div
                key={i}
                className="flex items-center gap-4 px-8 py-6 rounded-2xl bg-white border border-ink-100 shadow-sm hover:shadow-lg hover:border-primary-200 transition-all hover:-translate-y-1 shrink-0"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-display font-700 text-lg shrink-0">
                  {brand.name.charAt(0)}
                </div>
                <div>
                  <div className="font-display text-lg font-700 text-ink-900 whitespace-nowrap">
                    {brand.name}
                  </div>
                  <div className="text-xs text-ink-400 whitespace-nowrap">{brand.tagline}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Stats strip */}
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 mt-12">
        <Reveal delay={2}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { value: '30+', label: 'Years of Service' },
              { value: '10+', label: 'Premium Brands' },
              { value: '2', label: 'Showrooms in Asansol' },
              { value: '100%', label: 'Free Bulk Delivery' },
            ].map((s) => (
              <div
                key={s.label}
                className="text-center rounded-2xl bg-white border border-ink-100 py-6 px-4 hover:border-primary-200 hover:shadow-md transition-all"
              >
                <div className="font-display text-3xl font-700 gradient-text">{s.value}</div>
                <div className="text-sm text-ink-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
