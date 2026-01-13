"use client"

import Image from 'next/image'
import { AnimateOnScroll } from '@/components/animations/scroll-animations'

export default function OurPartner() {
    // daftar logo partner
    const partners = [
        { src: '/images/partner-logos/daihatsu.png', alt: 'Partner 1' },
        { src: '/images/partner-logos/isuzu.png', alt: 'Partner 2' },
        { src: '/images/partner-logos/honda.png', alt: 'Partner 3' },
        { src: '/images/partner-4.png', alt: 'Partner 4' },
        { src: '/images/partner-5.png', alt: 'Partner 5' },
        { src: '/images/partner-6.png', alt: 'Partner 6' },
    ]

    return (
        <section className="relative w-full bg-white overflow-hidden">
            {/* header */}
            <AnimateOnScroll animation="scaleUp" duration={800}>
                <div className="flex items-center justify-center">
                    {/* garis kiri */}
                    <div
                        className="bg-black"
                        style={{ width: '500px', height: '12px', marginLeft: '60px', marginRight: '12px' }}
                    />

                    {/* judul */}
                    <h2 className="font-poppins font-semibold text-[50px] leading-[75px] whitespace-nowrap">
                        <span className="text-black">Our </span>
                        <span className="text-[#0055A4]">Partner</span>
                    </h2>

                    {/* garis kanan */}
                    <div
                        className="bg-[#0055A4]"
                        style={{ width: '500px', height: '12px', marginLeft: '12px', marginRight: '60px' }}
                    />
                </div>
            </AnimateOnScroll>

            {/* marquee container */}
            <AnimateOnScroll animation="fadeIn" delay={300} duration={1000}>
                <div
                    className="relative w-full overflow-hidden"
                    style={{ marginTop: '50px', paddingBottom: '50px' }}
                >
                    {/* track */}
                    <div className="flex animate-marquee">
                        {/* set pertama */}
                        {partners.map((partner, index) => (
                            <div
                                key={`partner-1-${index}`}
                                className="flex-shrink-0 mx-8"
                            >
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
                        {/* duplikat buat loop */}
                        {partners.map((partner, index) => (
                            <div
                                key={`partner-2-${index}`}
                                className="flex-shrink-0 mx-8"
                            >
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

            {/* animasi marquee */}
            <style jsx>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .animate-marquee {
                    animation: marquee 20s linear infinite;
                }
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>

        </section>
    )
}
