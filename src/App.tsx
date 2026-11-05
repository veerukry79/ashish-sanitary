import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollUtilities from '@/components/ScrollUtilities';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WhyChooseUs from '@/components/WhyChooseUs';
import Products from '@/components/Products';
import Brands from '@/components/Brands';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import FAQ from '@/components/FAQ';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-ink-900 antialiased">
      <ScrollUtilities />
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <Products />
        <Brands />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
