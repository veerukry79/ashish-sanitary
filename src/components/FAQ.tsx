import { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import Reveal from '@/components/Reveal';

const faqs = [
  {
    q: 'What types of sanitaryware products do you offer?',
    a: 'We offer a wide range of sanitaryware products including toilets, basins, faucets, kitchen sinks, urinals, bath tubs, shower trays and other bathroom accessories.',
  },
  {
    q: 'What materials are your sanitaryware products made of?',
    a: 'Our products are made from high-quality materials such as ceramic, porcelain, vitreous china, acrylic, and stainless steel to ensure durability and longevity.',
  },
  {
    q: 'What types of pipes and fittings do you offer?',
    a: 'We offer a wide range of pipes and fittings including PVC pipes, CPVC pipes, UPVC pipes, SWR pipes, and various types of fittings such as elbows, couplers, tees, reducers, and valves.',
  },
  {
    q: 'Are Finolex pipes and fittings durable and long-lasting?',
    a: 'Yes, Finolex pipes and fittings are known for their durability and longevity. They are made from high-quality materials and manufactured using advanced technology to ensure reliability and performance.',
  },
  {
    q: 'Can I use Finolex pipes and fittings for both residential and commercial projects?',
    a: 'Yes, Finolex pipes and fittings are suitable for both residential and commercial projects. They offer versatility and reliability, making them ideal for various applications in different settings.',
  },
  {
    q: 'Do you offer different styles and designs to match various preferences?',
    a: 'Yes, we offer a variety of styles and designs ranging from contemporary to traditional to suit different tastes and preferences.',
  },
  {
    q: 'Do you offer delivery services for purchased products?',
    a: 'Yes, we offer delivery services for our products within a certain radius. We also provide 100% free delivery for bulk orders of sanitaryware, pipes, and fittings.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept various payment methods including cash, UPI, cheques and electronic bank transfers.',
  },
  {
    q: 'Do you offer discounts for bulk purchases or trade customers?',
    a: 'Yes, we offer discounts and promotions for bulk purchases as well as trade customers such as contractors, builders, and interior designers. Please inquire about our trade discounts for more details.',
  },
  {
    q: 'Can I schedule a showroom visit to see products in person?',
    a: 'Yes, we encourage showroom visits. Our showrooms are conveniently located: one on Hutton Road named Ashish Bath Galaxy, and the other opposite Loco Ground, known as Ashish Sanitary Enterprises.',
  },
  {
    q: 'What types of Racold water heaters do you offer?',
    a: 'We offer a wide range of Racold water heaters including electric storage water heaters, instant water heaters, gas water heaters, and solar water heaters to meet various hot water requirements.',
  },
  {
    q: 'Can I place a special order for a specific product not in inventory?',
    a: 'Yes, we can assist with special orders for specific products that may not be available in our current inventory. Please contact us for more information regarding special orders.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad relative overflow-hidden bg-white">
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-accent-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-5 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 text-primary-700 text-sm font-600 mb-5">
              <HelpCircle className="w-4 h-4" />
              Frequently Asked Questions
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-display text-3xl lg:text-5xl font-700 text-ink-900 leading-[1.15] mb-5">
              Got Questions?{' '}
              <span className="gradient-text">We've Got Answers</span>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-ink-600 text-base lg:text-lg leading-relaxed">
              Everything you need to know about our products, services, and policies.
            </p>
          </Reveal>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <div
                  className={`rounded-2xl border transition-all duration-400 overflow-hidden ${
                    isOpen
                      ? 'border-primary-300 shadow-lg shadow-primary-500/10 bg-gradient-to-r from-primary-50/50 to-accent-50/30'
                      : 'border-ink-100 bg-white hover:border-ink-200'
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-5 lg:px-7 py-5 text-left"
                  >
                    <span
                      className={`font-600 text-sm lg:text-base transition-colors ${
                        isOpen ? 'text-primary-800' : 'text-ink-800'
                      }`}
                    >
                      {faq.q}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-400 ${
                        isOpen
                          ? 'bg-primary-600 text-white rotate-0'
                          : 'bg-ink-100 text-ink-500'
                      }`}
                    >
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>
                  <div
                    className={`grid transition-all duration-400 ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 lg:px-7 pb-5 text-sm text-ink-600 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
