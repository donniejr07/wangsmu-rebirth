'use client'

import Image from 'next/image'
import { AnimateOnScroll } from '@/components/animations/scroll-animations'

export default function ServicesSection() {
    return (
        <>
            {/* Desktop Layout */}
            <section className="hidden lg:block relative w-full min-h-[1810px]">

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
                            <span className="text-black">The </span>
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
                            width: '1318px',
                        }}
                    >
                        {/* Cards Data */}
                        {[
                            {
                                id: 1, title: 'Design', col: 0, row: 0, desc: 'Layanan desain produk dengan teknologi CAD/CAM terkini untuk hasil presisi tinggi.',
                                image: '/images/services/design.png',
                                icon: <svg width="50" height="50" viewBox="0 0 24 24" fill="#0055A4"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" /></svg>
                            },
                            {
                                id: 2, title: 'Printing', col: 1, row: 0, desc: 'Solusi cetak berkualitas tinggi untuk packaging dan kebutuhan branding produk.',
                                image: '/images/services/printing.png',
                                icon: <svg width="50" height="50" viewBox="0 0 24 24" fill="#0055A4"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z" /></svg>
                            },
                            {
                                id: 3, title: 'Manufacture Tooling', col: 2, row: 0, desc: 'Pembuatan tooling dan cetakan presisi untuk mendukung produksi massal.',
                                image: '/images/services/tooling.png',
                                icon: <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#0055A4" strokeWidth="2"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" /></svg>
                            },
                            {
                                id: 4, title: 'Laser', col: 0, row: 1, desc: 'Pemotongan dan marking laser dengan akurasi tinggi untuk berbagai material.',
                                image: '/images/services/laser.png',
                                icon: <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#0055A4" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /></svg>
                            },
                            {
                                id: 5, title: 'Manufacture Plastic Injection', col: 1, row: 1, desc: 'Produksi komponen plastik injection molding dengan standar kualitas internasional.',
                                image: '/images/services/injection.png',
                                icon: <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#0055A4" strokeWidth="2"><path d="M2 20a2 2 0 002 2h16a2 2 0 002-2V8l-7 5V8l-7 5V4a2 2 0 00-2-2H4a2 2 0 00-2 2v16z" /></svg>
                            },
                            {
                                id: 6, title: 'Painting', col: 2, row: 1, desc: 'Layanan pengecatan dan finishing dengan teknologi spray booth modern.',
                                image: '/images/services/painting.png',
                                icon: <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#0055A4" strokeWidth="2"><path d="M19 11h-6a2 2 0 00-2 2v7a2 2 0 002 2h6" /><path d="M19 11V4a2 2 0 00-2-2H7a2 2 0 00-2 2v7" /><path d="M5 11h14" /><path d="M5 15v-2a2 2 0 012-2" /><rect x="7" y="15" width="4" height="7" /></svg>
                            },
                            {
                                id: 7, title: 'Subassembly', col: 0, row: 2, desc: 'Perakitan sub-komponen dengan quality control ketat di setiap tahap.',
                                image: '/images/services/subassembly.png',
                                icon: <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#0055A4" strokeWidth="2"><path d="M19.5 12.572l-7.5 7.428-7.5-7.428A5 5 0 1112 5.006a5 5 0 017.5 7.566z" /><path d="M12 8v8M8 12h8" /></svg>
                            },
                        ].map((service, index) => {
                            // Grid positions
                            const cardWidth = 350;
                            const gap = 134;
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

                                        {/* Icon */}
                                        <div
                                            style={{
                                                position: 'absolute',
                                                top: '137px',
                                                left: '22px',
                                                width: '50px',
                                                height: '50px',
                                            }}
                                        >
                                            {service.icon}
                                        </div>

                                        {/* Title */}
                                        <span
                                            style={{
                                                position: 'absolute',
                                                top: '142px',
                                                left: '91px',
                                                width: '200px',
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
                                                top: '204px',
                                                left: '32px',
                                                right: '40px',
                                                width: '278px',
                                                height: '130px',
                                                fontFamily: 'Poppins, sans-serif',
                                                fontWeight: 600,
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
                                                right: '28px',
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
                        <span className="text-black">The </span>
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
                            { id: 1, title: 'Design', desc: 'Layanan desain produk dengan teknologi CAD/CAM terkini untuk hasil presisi tinggi.', image: '/images/services/design.png', icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="#0055A4"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" /></svg> },
                            { id: 2, title: 'Printing', desc: 'Solusi cetak berkualitas tinggi untuk packaging dan kebutuhan branding produk.', image: '/images/services/printing.png', icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="#0055A4"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z" /></svg> },
                            { id: 3, title: 'Manufacture Tooling', desc: 'Pembuatan tooling dan cetakan presisi untuk mendukung produksi massal.', image: '/images/services/tooling.png', icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#0055A4" strokeWidth="2"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" /></svg> },
                            { id: 4, title: 'Laser', desc: 'Pemotongan dan marking laser dengan akurasi tinggi untuk berbagai material.', image: '/images/services/laser.png', icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#0055A4" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /></svg> },
                            { id: 5, title: 'Manufacture Plastic Injection', desc: 'Produksi komponen plastik injection molding dengan standar kualitas internasional.', image: '/images/services/injection.png', icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#0055A4" strokeWidth="2"><path d="M2 20a2 2 0 002 2h16a2 2 0 002-2V8l-7 5V8l-7 5V4a2 2 0 00-2-2H4a2 2 0 00-2 2v16z" /></svg> },
                            { id: 6, title: 'Painting', desc: 'Layanan pengecatan dan finishing dengan teknologi spray booth modern.', image: '/images/services/painting.png', icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#0055A4" strokeWidth="2"><path d="M19 11h-6a2 2 0 00-2 2v7a2 2 0 002 2h6" /><path d="M19 11V4a2 2 0 00-2-2H7a2 2 0 00-2 2v7" /><path d="M5 11h14" /><path d="M5 15v-2a2 2 0 012-2" /><rect x="7" y="15" width="4" height="7" /></svg> },
                            { id: 7, title: 'Subassembly', desc: 'Perakitan sub-komponen dengan quality control ketat di setiap tahap.', image: '/images/services/subassembly.png', icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#0055A4" strokeWidth="2"><path d="M19.5 12.572l-7.5 7.428-7.5-7.428A5 5 0 1112 5.006a5 5 0 017.5 7.566z" /><path d="M12 8v8M8 12h8" /></svg> },
                        ].map((service) => (
                            <div
                                key={service.id}
                                style={{
                                    width: 'calc(100% - 32px)',
                                    maxWidth: '350px',
                                    backgroundColor: '#FFFFFF',
                                    border: '1px solid #0055A4',
                                    borderRadius: '16px',
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
                                    {/* Icon + Title Row */}
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                                        {/* Icon */}
                                        <div style={{ width: '36px', height: '36px', flexShrink: 0 }}>
                                            {service.icon}
                                        </div>
                                        {/* Title */}
                                        <span
                                            style={{
                                                fontFamily: 'Poppins, sans-serif',
                                                fontWeight: 600,
                                                fontSize: '18px',
                                                color: '#0055A4',
                                            }}
                                        >
                                            {service.title}
                                        </span>
                                    </div>

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

                                    {/* CTA Button */}
                                    <button
                                        style={{
                                            width: '100%',
                                            height: '36px',
                                            backgroundColor: '#0055A4',
                                            borderRadius: '18px',
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
        </>
    )
}
