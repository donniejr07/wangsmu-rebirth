"use client"

import Image from 'next/image'
import { AnimateOnScroll } from '@/components/animations/scroll-animations'

export default function OurPartner() {
    // Data partner
    const partners = [
        { src: '/images/partner-logos/astraOto.png', alt: 'Daihatsu' },
        { src: '/images/partner-logos/atsumitec.png', alt: 'Isuzu' },
        { src: '/images/partner-logos/Polytron.png', alt: 'Honda' },
        { src: '/images/partner-4.png', alt: 'Partner 4' },
        { src: '/images/partner-5.png', alt: 'Partner 5' },
        { src: '/images/partner-6.png', alt: 'Partner 6' },
    ]

    return (
        <>
            {/* Mobile Layout */}
            <section className="lg:hidden relative w-full bg-white overflow-hidden py-8">
                {/* Header */}
                <AnimateOnScroll animation="scaleUp" duration={800}>
                    <div className="flex items-center justify-center px-4"
                        style={{ marginBottom: '30px' }}
                    >
                        {/* Garis kiri */}
                        <div
                            className="bg-black flex-1"
                            style={{ height: '6px', maxWidth: '80px', marginRight: '12px' }}
                        />

                        {/* Judul */}
                        <h2 className="font-poppins font-semibold text-[34px] leading-[36px] whitespace-nowrap mx-3">
                            <span className="text-black">Our </span>
                            <span className="text-[#0055A4]">Partner</span>
                        </h2>

                        {/* Garis kanan */}
                        <div
                            className="bg-[#0055A4] flex-1"
                            style={{ height: '6px', maxWidth: '80px', marginLeft: '12px' }}
                        />
                    </div>
                </AnimateOnScroll>

                {/* Marquee */}
                <AnimateOnScroll animation="fadeIn" delay={300} duration={1000}>
                    <div className="relative w-full overflow-hidden mt-6">
                        <div className="flex animate-marquee">
                            {partners.map((partner, index) => (
                                <div key={`m1-${index}`} className="flex-shrink-0 mx-4">
                                    <div className="relative w-[90px] h-[40px]">
                                        <Image
                                            src={partner.src}
                                            alt={partner.alt}
                                            fill
                                            className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                                        />
                                    </div>
                                </div>
                            ))}
                            {/* Duplikat untuk loop */}
                            {partners.map((partner, index) => (
                                <div key={`m2-${index}`} className="flex-shrink-0 mx-4">
                                    <div className="relative w-[100px] h-[50px]">
                                        <Image
                                            src={partner.src}
                                            alt={partner.alt}
                                            fill
                                            className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </AnimateOnScroll>
            </section>

            {/* Desktop Layout */}
            <section className="hidden lg:block relative w-full bg-white overflow-hidden">
                {/* Header */}
                <AnimateOnScroll animation="scaleUp" duration={800}>
                    <div className="flex items-center justify-center">
                        {/* Garis kiri */}
                        <div
                            className="bg-black"
                            style={{ width: '500px', height: '12px', marginLeft: '60px', marginRight: '12px' }}
                        />

                        {/* Judul */}
                        <h2 className="font-poppins font-semibold text-[50px] leading-[75px] whitespace-nowrap">
                            <span className="text-black">Our </span>
                            <span className="text-[#0055A4]">Partner</span>
                        </h2>

                        {/* Garis kanan */}
                        <div
                            className="bg-[#0055A4]"
                            style={{ width: '500px', height: '12px', marginLeft: '12px', marginRight: '60px' }}
                        />
                    </div>
                </AnimateOnScroll>

                {/* Marquee */}
                <AnimateOnScroll animation="fadeIn" delay={300} duration={1000}>
                    <div
                        className="relative w-full overflow-hidden"
                        style={{ marginTop: '50px', paddingBottom: '50px' }}
                    >
                        <div className="flex animate-marquee">
                            {partners.map((partner, index) => (
                                <div key={`d1-${index}`} className="flex-shrink-0 mx-8">
                                    <div className="relative w-[150px] h-[80px]">
                                        <Image
                                            src={partner.src}
                                            alt={partner.alt}
                                            fill
                                            className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                                        />
                                    </div>
                                </div>
                            ))}
                            {/* Duplikat untuk loop */}
                            {partners.map((partner, index) => (
                                <div key={`d2-${index}`} className="flex-shrink-0 mx-8">
                                    <div className="relative w-[150px] h-[80px]">
                                        <Image
                                            src={partner.src}
                                            alt={partner.alt}
                                            fill
                                            className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </AnimateOnScroll>
            </section>

            {/* Animasi Marquee */}
            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 20s linear infinite;
                }
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </>
    )
}

