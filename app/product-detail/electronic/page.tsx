import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HeroElectronic from "@/components/product-detail-comps/electronic/hero-electronic";
import DefinitionSection from "@/components/product-detail-comps/electronic/definition-section";
import ProductShowcaseSection from "@/components/product-detail-comps/electronic/product-showcase-section";

export default function ElectronicProduct() {
    return (
        <>
            <Navbar />
            <HeroElectronic />
            <DefinitionSection />
            <ProductShowcaseSection />
            <Footer />
        </>
    );
}
