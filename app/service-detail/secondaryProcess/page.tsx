import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HeroSecond from "@/components/service-detail-comps/secondaryProcess/hero-second";
import DefinitionSection from "@/components/service-detail-comps/secondaryProcess/definition-section";
import GalleryCarouselSection from "@/components/service-detail-comps/secondaryProcess/gallery-carousel-section";
import SuperioritySection from "@/components/service-detail-comps/secondaryProcess/superiority-section";

export default function SecondaryProcess() {
    return (
        <>
            <Navbar />
            <HeroSecond />
            <DefinitionSection />
            <GalleryCarouselSection />
            <SuperioritySection />
            <Footer />
        </>
    );
}
