import {
  Droplets,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  ArrowRight,
} from 'lucide-react';

const productLinks = [
  'Pipes & Fittings',
  'Faucets & Mixers',
  'Wash Basins',
  'Ceramic Urinals',
  'Toilets & WCs',
  'Water Heaters',
  'Bath Tubs',
  'Bathroom Accessories',
];

const usefulLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Products', href: '#products' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];

const socials = [
  { icon: Facebook, href: 'https://www.facebook.com/profile/61559420324750', label: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/ashishsanitary', label: 'Instagram' },
  { icon: Youtube, href: 'https://www.youtube.com/@amkites', label: 'YouTube' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/ashish-sanitary', label: 'LinkedIn' },
];

export default function Footer() {
  const handleNav = (href: string) => {
    const el = document.getElementById(href.replace('#', ''));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-ink-950 text-ink-300 overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute -top-40 -left-20 w-96 h-96 bg-primary-700/15 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-20 w-96 h-96 bg-accent-700/10 rounded-full blur-3xl" />

      {/* CTA strip */}
      <div className="relative border-b border-white/5">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-600 text-white">
              Ready to upgrade your bathroom?
            </h3>
            <p className="mt-2 text-ink-400 text-sm">
              Get premium brands at the best prices with free delivery on bulk orders.
            </p>
          </div>
          <button
            onClick={() => handleNav('#contact')}
            className="group flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-600 hover:shadow-lg hover:shadow-primary-500/30 transition-all hover:-translate-y-0.5"
          >
            Get a Quote
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Main footer */}
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* About */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
              <Droplets className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-700 text-lg text-white">Ashish Sanitary</span>
              <span className="text-[10px] font-500 tracking-[0.18em] uppercase text-primary-400">
                Enterprises
              </span>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-ink-400">
            Choose Ashish Sanitary Enterprises for a seamless shopping experience, where quality,
            variety, and professionalism come together to redefine your sanitary needs.
          </p>
          <div className="flex items-center gap-3 mt-5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-primary-600 flex items-center justify-center text-ink-400 hover:text-white transition-all hover:-translate-y-1"
              >
                <s.icon className="w-4.5 h-4.5" />
              </a>
            ))}
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="font-600 text-white mb-5 text-sm uppercase tracking-wider">
            Useful Links
          </h4>
          <ul className="space-y-3">
            {usefulLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(link.href);
                  }}
                  className="text-sm text-ink-400 hover:text-primary-400 transition-colors inline-flex items-center gap-1.5 group"
                >
                  <span className="w-0 h-px bg-primary-400 transition-all duration-300 group-hover:w-4" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="font-600 text-white mb-5 text-sm uppercase tracking-wider">Products</h4>
          <ul className="space-y-3">
            {productLinks.map((p) => (
              <li key={p}>
                <button
                  onClick={() => handleNav('#products')}
                  className="text-sm text-ink-400 hover:text-primary-400 transition-colors inline-flex items-center gap-1.5 group"
                >
                  <span className="w-0 h-px bg-primary-400 transition-all duration-300 group-hover:w-4" />
                  {p}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-600 text-white mb-5 text-sm uppercase tracking-wider">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <MapPin className="w-5 h-5 text-primary-400 shrink-0 mt-0.5" />
              <span className="text-sm text-ink-400 leading-relaxed">
                G.T. Road, Opp. Loco Ground, Lower Chelidanga, Asansol - 713301 (W. Bengal)
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="w-5 h-5 text-primary-400 shrink-0 mt-0.5" />
              <div className="flex flex-col gap-0.5 text-sm text-ink-400">
                <a href="tel:+919434312083" className="hover:text-primary-400 transition-colors">
                  +91 94343 12083
                </a>
                <a href="tel:+919734148383" className="hover:text-primary-400 transition-colors">
                  +91 97341 48383
                </a>
              </div>
            </li>
            <li className="flex gap-3">
              <Mail className="w-5 h-5 text-primary-400 shrink-0 mt-0.5" />
              <a
                href="mailto:info@ashishsanitary.com"
                className="text-sm text-ink-400 hover:text-primary-400 transition-colors"
              >
                info@ashishsanitary.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-ink-500">
            &copy; {new Date().getFullYear()} Ashish Sanitary. All rights reserved.
          </p>
          <p className="text-xs text-ink-500">
            Designed by{' '}
            <a
              href="https://webwonderz.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-400 hover:text-primary-300 transition-colors"
            >
              Web Wonderz
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
