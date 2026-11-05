import { MapPin, Crown, Truck, Tags } from 'lucide-react';
import Reveal from '@/components/Reveal';

const reasons = [
  {
    icon: MapPin,
    title: 'Serving Multiple Areas',
    desc: 'Ashish Sanitary Enterprises are now serving all sanitaryware products at multiple districts in West Bengal and nearby regions.',
    color: 'from-primary-500 to-primary-700',
    bg: 'bg-primary-50',
    text: 'text-primary-600',
  },
  {
    icon: Crown,
    title: 'Premium Brands',
    desc: 'We deal in all premium brands like Jaquar, Dson, Parryware, Essco, Orio, Racold, Finolex, Hi-life and more.',
    color: 'from-secondary-400 to-secondary-600',
    bg: 'bg-secondary-50',
    text: 'text-secondary-600',
  },
  {
    icon: Truck,
    title: 'Free Delivery',
    desc: 'We provide 100% free delivery for bulk orders of sanitaryware, pipes and fittings across our service areas.',
    color: 'from-accent-400 to-accent-600',
    bg: 'bg-accent-50',
    text: 'text-accent-600',
  },
  {
    icon: Tags,
    title: 'Competitive Pricing',
    desc: 'Pricing of all products is very competitive as we are the bulk purchaser across multiple districts of West Bengal.',
    color: 'from-success-500 to-success-700',
    bg: 'bg-success-50',
    text: 'text-success-600',
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="section-pad relative overflow-hidden bg-gradient-to-b from-ink-50 to-white"
    >
      <div className="absolute top-20 right-0 w-80 h-80 bg-primary-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm text-primary-700 text-sm font-600 mb-5 border border-primary-100">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
              Why Choose Us
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-display text-3xl lg:text-5xl font-700 text-ink-900 leading-[1.15] mb-5">
              The{' '}
              <span className="gradient-text">Ashish Sanitary</span>{' '}
              Advantage
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-ink-600 text-base lg:text-lg leading-relaxed">
              Choose Ashish Sanitary Enterprises for a seamless shopping experience, where quality,
              variety, and professionalism come together to redefine your sanitary needs.
            </p>
          </Reveal>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={(i + 1) as 1 | 2 | 3 | 4} direction="up">
              <div className="group relative h-full rounded-2xl bg-white p-7 border border-ink-100 hover:border-transparent hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                {/* Hover gradient bg */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${r.color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`}
                />

                {/* Icon */}
                <div
                  className={`relative w-14 h-14 rounded-xl ${r.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500`}
                >
                  <r.icon className={`w-7 h-7 ${r.text}`} />
                  <div
                    className={`absolute inset-0 rounded-xl bg-gradient-to-br ${r.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  <r.icon className="absolute w-7 h-7 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <h3 className="relative font-display text-xl font-600 text-ink-900 mb-3 group-hover:text-primary-700 transition-colors">
                  {r.title}
                </h3>
                <p className="relative text-sm text-ink-500 leading-relaxed">{r.desc}</p>

                {/* Bottom bar */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${r.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Banner */}
        <Reveal delay={3}>
          <div className="mt-14 rounded-3xl overflow-hidden relative group">
            <img
              src="https://images.pexels.com/photos/7546640/pexels-photo-7546640.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Premium bathroom showroom"
              className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink-950/85 to-ink-900/40 flex items-center">
              <div className="px-8 lg:px-14 max-w-xl">
                <h3 className="font-display text-2xl lg:text-4xl font-700 text-white mb-3">
                  Premium Products at Affordable Prices
                </h3>
                <p className="text-white/80 text-sm lg:text-base leading-relaxed">
                  Our mission is to provide you with the highest standard of sanitary solutions at
                  competitive prices, with personalized service from our knowledgeable team.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
