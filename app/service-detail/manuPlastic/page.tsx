import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HeroPlastic from "@/components/service-detail-comps/ManuPlastic/hero-plastic";
import DefinitionSection from "@/components/service-detail-comps/ManuPlastic/definition-section";
import GalleryCarouselSection from "@/components/service-detail-comps/ManuPlastic/gallery-carousel-section";
import SuperioritySection from "@/components/service-detail-comps/ManuPlastic/superiority-section";

export default function ManuPlastic() {
    return (
        <>
            <Navbar />
            <HeroPlastic />
            <DefinitionSection />
            <GalleryCarouselSection />
            <SuperioritySection />
            <Footer />
        </>
    );
}
