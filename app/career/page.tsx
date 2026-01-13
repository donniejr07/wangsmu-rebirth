import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import CareerHero from '@/components/career-page-comps/career-hero';
import CareerIntroSection from '@/components/career-page-comps/career-intro-section';
import CareerPositionSection from '@/components/career-page-comps/career-position-section';

export default function CareerPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <CareerHero />
            <CareerIntroSection />
            <CareerPositionSection />
            <Footer />
        </main>
    );
}
