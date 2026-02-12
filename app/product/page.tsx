import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ProductHeroSection from '@/components/product-page-comps/product-hero-section';
import OurProductsSection from '@/components/product-page-comps/our-products-section';
import BenefitSection from '@/components/product-page-comps/benefit-section';

export default function ProductPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <ProductHeroSection />
            <OurProductsSection />
            <div style={{ paddingTop: '50px', paddingBottom: '50px' }}>
                <BenefitSection />
            </div>
            <Footer />
        </main>
    );
}
