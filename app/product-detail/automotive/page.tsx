import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HeroAutomotive from "@/components/product-detail-comps/automotive/hero-automotive";
import DefinitionSection from "@/components/product-detail-comps/automotive/definition-section";
import ProductShowcaseSection from "@/components/product-detail-comps/automotive/product-showcase-section";

export default function AutomotiveProduct() {
    return (
        <>
            <Navbar />
            <HeroAutomotive />
            <DefinitionSection />
            <ProductShowcaseSection />
            <Footer />
        </>
    );
}
