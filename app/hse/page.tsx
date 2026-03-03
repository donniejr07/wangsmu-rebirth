import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HSEHeroSection from "@/components/hse-page-comps/hse-hero";
import HSEIntroSection from "@/components/hse-page-comps/hse-intro";
import HseGraph from "@/components/hse-page-comps/hse-graph";

export default function HSEPage() {
    return (
        <>
            <Navbar />
            <HSEHeroSection />
            <div style={{ marginTop: "50px", marginBottom: "50px" }}>
                <HSEIntroSection />
            </div>
            <HseGraph />
            <Footer />
        </>
    )
}