import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HeroDesign from "@/components/service-detail-comps/manuTool/hero-tool";
import DefinitionSection from "@/components/service-detail-comps/manuTool/definition-section";
import SuperioritySection from "@/components/service-detail-comps/manuTool/superiority-section";
import GalleryCarouselSection from "@/components/service-detail-comps/manuTool/gallery-carousel-section";

export default function ManuTool() {
    return (
        <>
            <Navbar />
            <HeroDesign />
            <DefinitionSection />
            <GalleryCarouselSection />
            <SuperioritySection />
            <Footer />
        </>
    );
}