import { useState, type FormEvent } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  Clock,
  Facebook,
  Instagram,
  Youtube,
} from 'lucide-react';
import Reveal from '@/components/Reveal';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', phone: '', email: '', message: '' });
    }, 4000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Visit Us',
      value: 'G.T. Road, Opp. Loco Ground, Lower Chelidanga, Asansol - 713301 (W. Bengal)',
    },
    { icon: Phone, label: 'Call Us', value: '+91 94343 12083, +91 97341 48383', href: 'tel:+919434312083' },
    { icon: Mail, label: 'Email Us', value: 'info@ashishsanitary.com', href: 'mailto:info@ashishsanitary.com' },
    { icon: Clock, label: 'Business Hours', value: 'Mon - Sat: 9:00 AM - 8:00 PM' },
  ];

  const socials = [
    { icon: Facebook, href: 'https://www.facebook.com/profile/61559420324750' },
    { icon: Instagram, href: 'https://www.instagram.com/ashishsanitary' },
    { icon: Youtube, href: 'https://www.youtube.com/@amkites' },
  ];

  return (
    <section id="contact" className="section-pad relative overflow-hidden bg-gradient-to-b from-ink-50 to-white">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 text-primary-700 text-sm font-600 mb-5">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
              Get in Touch
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-display text-3xl lg:text-5xl font-700 text-ink-900 leading-[1.15] mb-5">
              Interested in buying from{' '}
              <span className="gradient-text">Ashish Sanitary?</span>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-ink-600 text-base lg:text-lg leading-relaxed">
              Buy all sanitaryware products with latest designs at better prices. Reach out for
              bulk orders, trade discounts, or showroom visits.
            </p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form */}
          <Reveal direction="left">
            <div className="rounded-3xl bg-white border border-ink-100 shadow-xl shadow-ink-900/5 p-7 lg:p-9">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center animate-scale-in">
                  <div className="w-20 h-20 rounded-full bg-success-50 flex items-center justify-center mb-5">
                    <CheckCircle2 className="w-10 h-10 text-success-600" />
                  </div>
                  <h3 className="font-display text-2xl font-700 text-ink-900 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-ink-500 text-sm">
                    Your message has been received. We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-600 text-ink-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-xl bg-ink-50 border border-ink-200 text-ink-900 placeholder-ink-400 focus:outline-none focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-500/20 transition-all"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-600 text-ink-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="Your phone number"
                        className="w-full px-4 py-3 rounded-xl bg-ink-50 border border-ink-200 text-ink-900 placeholder-ink-400 focus:outline-none focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-500/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-600 text-ink-700 mb-2">Email</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="Your email"
                        className="w-full px-4 py-3 rounded-xl bg-ink-50 border border-ink-200 text-ink-900 placeholder-ink-400 focus:outline-none focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-500/20 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-600 text-ink-700 mb-2">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-ink-50 border border-ink-200 text-ink-900 placeholder-ink-400 focus:outline-none focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-500/20 transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary-600 to-accent-600 text-white font-600 hover:shadow-lg hover:shadow-primary-500/30 transition-all hover:-translate-y-0.5"
                  >
                    Send Message
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                  <p className="text-xs text-ink-400 text-center">
                    By submitting this form, you agree to the privacy policy and terms of use.
                  </p>
                </form>
              )}
            </div>
          </Reveal>

          {/* Info */}
          <Reveal direction="right">
            <div className="space-y-4 h-full">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="group flex items-start gap-4 p-5 rounded-2xl bg-white border border-ink-100 hover:border-primary-200 hover:shadow-lg transition-all hover:-translate-y-0.5"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-50 to-accent-50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <info.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-600 text-primary-600 uppercase tracking-wider mb-1">
                      {info.label}
                    </div>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-sm text-ink-700 hover:text-primary-600 transition-colors leading-relaxed"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm text-ink-700 leading-relaxed">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-ink-100 h-48">
                <iframe
                  title="Ashish Sanitary Enterprises location"
                  src="https://www.google.com/maps?q=Asansol+West+Bengal+India&output=embed"
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Socials */}
              <div className="flex items-center gap-3 p-5 rounded-2xl bg-gradient-to-r from-primary-600 to-accent-600">
                <span className="text-white font-600 text-sm">Follow us:</span>
                <div className="flex items-center gap-2 ml-auto">
                  {socials.map((s, i) => (
                    <a
                      key={i}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-all hover:scale-110"
                    >
                      <s.icon className="w-4.5 h-4.5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
