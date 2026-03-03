'use client'

import Image from 'next/image'
import { AnimateOnScroll } from '@/components/animations/scroll-animations'

export default function ServicesSection() {
    return (
        <>
            {/* Mobile Layout */}
            <section className="lg:hidden relative" style={{ paddingLeft: '16px', paddingRight: '16px', paddingTop: '28px', paddingBottom: '28px' }}>
                {/* Background */}
                <div
                    className="absolute inset-0 bg-[#D9D9D9] z-0"
                    style={{
                        maskImage: 'linear-gradient(to bottom, transparent 0%, black 10px, black calc(100% - 10px), transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10px, black calc(100% - 10px), transparent 100%)'
                    }}
                />

                <div className="relative z-10">
                    {/* Title */}
                    <h2 className="font-poppins font-semibold text-2xl text-center mb-3">
                        <span className="text-black">Our </span>
                        <span style={{ color: '#0055A4' }}>Services</span>
                    </h2>

                    {/* Subtitle */}
                    <p className="font-poppins font-normal text-sm leading-5 text-black text-center"
                        style={{ marginBottom: '20px' }}>
                        Precision engineering meets innovative manufacturing. From mold design to final assembly, we deliver world-class solutions.
                    </p>

                    {/* Mobile Cards */}
                    <div className="flex flex-col gap-4 items-center">
                        {[
                            {
                                id: 1, title: 'Manufacture Tooling', col: 0, row: 0, desc: 'Pembuatan tooling dan cetakan presisi untuk mendukung produksi massal.',
                                image: '/images/services/tooling.png',
                            },
                            {
                                id: 2, title: 'Manufacture Plastic Injection', col: 1, row: 0, desc: 'Produksi komponen plastik injection molding dengan standar kualitas internasional.',
                                image: '/images/services/injection.png',
                            },
                            {
                                id: 3, title: 'Secondary Process', col: 2, row: 0, desc: 'Solusi cetak berkualitas tinggi untuk packaging dan kebutuhan branding produk.',
                                image: '/images/services/printing.png',
                            },
                        ].map((service) => (
                            <div
                                key={service.id}
                                style={{
                                    width: 'calc(100% - 32px)',
                                    maxWidth: '350px',
                                    backgroundColor: '#FFFFFF',
                                    border: '1px solid #0055A4',
                                    borderRadius: '15px',
                                    overflow: 'hidden',
                                }}
                            >
                                {/* Card Image */}
                                <div
                                    style={{
                                        position: 'relative',
                                        width: '100%',
                                        height: '100px',
                                        backgroundColor: '#E5E5E5',
                                        borderBottom: '1px solid #0055A4',
                                    }}
                                >
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Card Content */}
                                <div style={{ padding: '16px' }}>
                                    {/* Title */}
                                    <span
                                        style={{
                                            fontFamily: 'Poppins, sans-serif',
                                            fontWeight: 600,
                                            fontSize: '18px',
                                            color: '#0055A4',
                                            display: 'block',
                                            marginBottom: '12px',
                                        }}
                                    >
                                        {service.title}
                                    </span>

                                    {/* Description */}
                                    <p
                                        style={{
                                            fontFamily: 'Poppins, sans-serif',
                                            fontWeight: 500,
                                            fontSize: '14px',
                                            lineHeight: '20px',
                                            color: '#000000',
                                            marginBottom: '16px',
                                        }}
                                    >
                                        {service.desc}
                                    </p>

                                    {/* Button */}
                                    <button
                                        style={{
                                            width: '100%',
                                            height: '36px',
                                            backgroundColor: '#0055A4',
                                            borderRadius: '15px',
                                            border: 'none',
                                            cursor: 'pointer',
                                            fontFamily: 'Poppins, sans-serif',
                                            fontWeight: 400,
                                            fontSize: '14px',
                                            color: '#FFFFFF',
                                        }}
                                    >
                                        More Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Desktop Layout */}
            <section className="hidden lg:block relative w-full min-h-[810px]">

                {/* Background */}
                <div
                    className="absolute inset-0 bg-[#D9D9D9] z-0"
                    style={{
                        maskImage: 'linear-gradient(to bottom, transparent 0%, black 15px, black calc(100% - 15px), transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15px, black calc(100% - 15px), transparent 100%)'
                    }}
                />

                {/* Content Container */}
                <div className="relative z-10 w-full h-full">

                    {/* Title */}
                    <AnimateOnScroll animation="fadeUp" delay={0}>
                        <h2
                            className="absolute font-poppins font-semibold text-center"
                            style={{
                                top: '27px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '359px',
                                height: '126px',
                                fontSize: '56px',
                                lineHeight: '63px',
                            }}
                        >
                            <span className="text-black">Our </span>
                            <span style={{ color: '#0055A4' }}>Services</span>
                        </h2>
                    </AnimateOnScroll>

                    {/* Subtitle */}
                    <AnimateOnScroll animation="fadeUp" delay={100}>
                        <p
                            className="absolute font-poppins font-normal text-black text-center"
                            style={{
                                top: '118px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '1133px',
                                height: '147px',
                                fontSize: '32px',
                                lineHeight: '49px',
                            }}
                        >
                            Precision engineering meets innovative manufacturing. From mold design to final assembly, we deliver world-class solutions for complex production challenges.
                        </p>
                    </AnimateOnScroll>

                    {/* Service Cards Grid */}
                    <div
                        style={{
                            position: 'absolute',
                            top: '281px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '1184px',
                        }}
                    >
                        {/* Cards Data */}
                        {[
                            {
                                id: 1, title: 'Manufacture Tooling', col: 0, row: 0, desc: 'Pembuatan tooling dan cetakan presisi untuk mendukung produksi massal.',
                                image: '/images/services/tooling.png',
                            },
                            {
                                id: 2, title: 'Manufacture Plastic Injection', col: 1, row: 0, desc: 'Produksi komponen plastik injection molding dengan standar kualitas internasional.',
                                image: '/images/services/injection.png',
                            },
                            {
                                id: 3, title: 'Secondary Process', col: 2, row: 0, desc: 'Solusi cetak berkualitas tinggi untuk packaging dan kebutuhan branding produk.',
                                image: '/images/services/printing.png',
                            },
                        ].map((service, index) => {
                            // Grid positions
                            const cardWidth = 350;
                            const gap = 67;
                            const colPositions = [0, cardWidth + gap, (cardWidth + gap) * 2];
                            const rowHeight = 500;
                            const leftPos = colPositions[service.col];
                            const topPos = service.row * rowHeight;

                            return (
                                <AnimateOnScroll key={service.id} animation="fadeUp" delay={150 + index * 50}>
                                    <div
                                        style={{
                                            position: 'absolute',
                                            left: `${leftPos}px`,
                                            top: `${topPos}px`,
                                            width: '350px',
                                            height: '450px',
                                            backgroundColor: '#FFFFFF',
                                            border: '1px solid #0055A4',
                                            borderRadius: '20px',
                                            overflow: 'hidden',
                                        }}
                                    >
                                        {/* Card Image */}
                                        <div
                                            style={{
                                                position: 'relative',
                                                width: '350px',
                                                height: '122px',
                                                backgroundColor: '#E5E5E5',
                                                borderBottom: '1px solid #0055A4',
                                                borderRadius: '20px 20px 0 0',
                                                overflow: 'hidden',
                                            }}
                                        >
                                            <Image
                                                src={service.image}
                                                alt={service.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>

                                        {/* Title */}
                                        <span
                                            style={{
                                                position: 'absolute',
                                                top: '157px',
                                                left: '32px',
                                                width: '300px',
                                                height: '39px',
                                                fontFamily: 'Poppins, sans-serif',
                                                fontWeight: 600,
                                                fontSize: '26px',
                                                color: '#0055A4',
                                                display: 'flex',
                                                alignItems: 'center',
                                            }}
                                        >
                                            {service.title}
                                        </span>

                                        {/* Deskripsi */}
                                        <p
                                            style={{
                                                position: 'absolute',
                                                top: '224px',
                                                left: '32px',
                                                right: '40px',
                                                width: '278px',
                                                height: '130px',
                                                fontFamily: 'Poppins, sans-serif',
                                                fontWeight: 400,
                                                fontSize: '17px',
                                                lineHeight: '26px',
                                                color: '#000000',
                                            }}
                                        >
                                            {service.desc}
                                        </p>

                                        {/* CTA Button */}
                                        <button
                                            style={{
                                                position: 'absolute',
                                                bottom: '22px',
                                                right: '25%',
                                                width: '170px',
                                                height: '40px',
                                                backgroundColor: '#0055A4',
                                                borderRadius: '20px',
                                                border: 'none',
                                                cursor: 'pointer',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontFamily: 'Poppins, sans-serif',
                                                    fontWeight: 400,
                                                    fontSize: '20px',
                                                    color: '#FFFFFF',
                                                }}
                                            >
                                                More Details
                                            </span>
                                        </button>
                                    </div>
                                </AnimateOnScroll>
                            );
                        })}
                    </div>

                </div>
            </section>
        </>
    )
}
