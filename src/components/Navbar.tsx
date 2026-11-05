import { useEffect, useState } from 'react';
import { Menu, X, Phone, Droplets } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Products', href: '#products' },
  { label: 'Brands', href: '#brands' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((l) => l.href.replace('#', ''));
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.getElementById(href.replace('#', ''));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.08)] py-2.5'
          : 'bg-transparent py-4'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNav('#home');
          }}
          className="flex items-center gap-2.5 group shrink-0"
        >
          <div className="relative">
            <div
              className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-500 ${
                scrolled
                  ? 'bg-gradient-to-br from-primary-600 to-accent-600'
                  : 'bg-white/15 backdrop-blur-md ring-1 ring-white/30'
              }`}
            >
              <Droplets
                className={`w-6 h-6 transition-colors duration-300 ${
                  scrolled ? 'text-white' : 'text-white'
                }`}
              />
            </div>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-secondary-400 rounded-full animate-pulse ring-2 ring-white/60" />
          </div>
          <div className="flex flex-col leading-none">
            <span
              className={`font-display font-700 text-lg tracking-tight transition-colors duration-300 ${
                scrolled ? 'text-ink-900' : 'text-white'
              }`}
            >
              Ashish Sanitary
            </span>
            <span
              className={`text-[10px] font-500 tracking-[0.18em] uppercase transition-colors duration-300 ${
                scrolled ? 'text-primary-600' : 'text-white/80'
              }`}
            >
              Enterprises
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(link.href);
                  }}
                  className={`relative px-3.5 py-2 text-sm font-500 rounded-lg transition-colors duration-300 ${
                    scrolled
                      ? isActive
                        ? 'text-primary-700'
                        : 'text-ink-600 hover:text-primary-600'
                      : isActive
                        ? 'text-white'
                        : 'text-white/85 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute left-3.5 right-3.5 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300 ${
                      isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+919434312083"
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-600 transition-all duration-300 ${
              scrolled
                ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white hover:shadow-lg hover:shadow-primary-500/30 hover:-translate-y-0.5'
                : 'bg-white text-primary-700 hover:bg-white/90 hover:-translate-y-0.5'
            }`}
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
            scrolled ? 'text-ink-800 hover:bg-ink-100' : 'text-white hover:bg-white/15'
          }`}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          open ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mx-4 mt-3 rounded-2xl bg-white shadow-2xl shadow-ink-900/10 p-4 border border-ink-100">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(link.href);
                  }}
                  className="block px-4 py-3 rounded-xl text-ink-700 font-500 hover:bg-primary-50 hover:text-primary-700 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="tel:+919434312083"
            className="mt-3 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-accent-600 text-white font-600"
          >
            <Phone className="w-4 h-4" />
            +91 94343 12083
          </a>
        </div>
      </div>
    </header>
  );
}
