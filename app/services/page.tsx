import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ServiceHero from '@/components/service-page-comps/service-hero';
import ServicesSection from '@/components/service-page-comps/services-section';

export default function Services() {
    return (
        <>
            <Navbar />
            <div style={{ marginBottom: '40px' }}>
                <ServiceHero />
            </div>
            <ServicesSection />
            <Footer />
        </>
    );
}