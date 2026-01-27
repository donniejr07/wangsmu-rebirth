import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import CareerHero from '@/components/career-page-comps/career-hero';
import CareerIntroSection from '@/components/career-page-comps/career-intro-section';
import CareerPositionSection from '@/components/career-page-comps/career-position-section';
import CareerAppProcess from '@/components/career-page-comps/career-app-process';

export default function CareerPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <CareerHero />
            <CareerIntroSection />
            <div style={{ marginTop: '30px', marginBottom: '30px' }}>
                <CareerPositionSection />
            </div>
            <div style={{ marginBottom: '30px' }}>
                <CareerAppProcess />
            </div>
            <Footer />
        </main>
    );
}
