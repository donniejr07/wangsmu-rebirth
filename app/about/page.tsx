'use client'

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import AboutHeroSection from '@/components/about-page-comps/about-hero-section';
import AboutStorySection from '@/components/about-page-comps/about-story-section';
import WhyChooseUsSection from '@/components/about-page-comps/why-choose-us-section';

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <AboutHeroSection />
            <div style={{ paddingTop: '50px', paddingBottom: '50px' }}>
                <AboutStorySection />
            </div>
            <div style={{ paddingBottom: '50px' }}>
                <WhyChooseUsSection />
            </div>
            <Footer />
        </main>
    );
}

