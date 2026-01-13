import Navbar from '@/components/navbar';
import HeroSection from '@/components/landing-page-comps/hero-section';
import AboutSingkat from '@/components/landing-page-comps/about-singkat';
import OurAdvantages from '@/components/landing-page-comps/our-advantages';
import ServicesSingkat from '@/components/landing-page-comps/services-singkat';
import OurLatestUpdate from '@/components/landing-page-comps/our-latest-update';
import OurPartner from '@/components/landing-page-comps/our-partner';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <div style={{ marginTop: '100px', marginBottom: '100px' }}>
        <AboutSingkat />
      </div>
      <OurAdvantages />
      <div style={{ marginTop: '100px', marginBottom: '100px' }}>
        <ServicesSingkat />
      </div>
      <OurLatestUpdate />
      <div style={{ marginTop: '100px' }}>
        <OurPartner />
      </div>
      {/* Komponen lain seperti Features dll akan ditambahkan di sini secara berurutan */}
      <Footer />
    </main>
  );
}
