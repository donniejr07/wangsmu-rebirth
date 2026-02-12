import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ServiceHero from '@/components/service-page-comps/service-hero';
import ServicesSection from '@/components/service-page-comps/services-section';

export default function Services() {
    return (
        <>
            <Navbar />
            <div style={{ marginBottom: '50px' }}>
                <ServiceHero />
            </div>
            <div style={{ marginBottom: '50px' }}>
                <ServicesSection />
            </div>
            <Footer />
        </>
    );
}