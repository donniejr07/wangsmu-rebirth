import Gallery from "@/components/gallery-comps/gallery";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import GalleryHero from "@/components/gallery-comps/gallery-hero";

export default function GalleryPage() {
    return (
        <>
            <Navbar />
            <GalleryHero />
            <div style={{ marginTop: '50px', marginBottom: '50px' }}>
                <Gallery />
            </div>
            <Footer />
        </>
    );
}