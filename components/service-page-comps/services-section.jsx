'use client'

import { AnimateOnScroll } from '@/components/animations/scroll-animations'

export default function ServicesSection() {
    return (
        <>
            {/* Desktop Layout */}
            <section className="hidden lg:block relative w-full min-h-[1910px]">

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
                            { id: 1, title: 'Design', col: 0, row: 0, desc: 'Layanan desain produk dengan teknologi CAD/CAM terkini untuk hasil presisi tinggi.' },
                            { id: 2, title: 'Printing', col: 1, row: 0, desc: 'Solusi cetak berkualitas tinggi untuk packaging dan kebutuhan branding produk.' },
                            { id: 3, title: 'Manufacture Tooling', col: 2, row: 0, desc: 'Pembuatan tooling dan cetakan presisi untuk mendukung produksi massal.' },
                            { id: 4, title: 'Laser', col: 0, row: 1, desc: 'Pemotongan dan marking laser dengan akurasi tinggi untuk berbagai material.' },
                            { id: 5, title: 'Manufacture Plastic Injection', col: 1, row: 1, desc: 'Produksi komponen plastik injection molding dengan standar kualitas internasional.' },
                            { id: 6, title: 'Painting', col: 2, row: 1, desc: 'Layanan pengecatan dan finishing dengan teknologi spray booth modern.' },
                            { id: 7, title: 'Subassembly', col: 0, row: 2, desc: 'Perakitan sub-komponen dengan quality control ketat di setiap tahap.' },
                            { id: 8, title: 'Logistics', col: 1, row: 2, desc: 'Manajemen logistik terintegrasi untuk pengiriman tepat waktu ke seluruh Indonesia.' },
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
                                                width: '350px',
                                                height: '122px',
                                                backgroundColor: '#E5E5E5',
                                                borderBottom: '1px solid #0055A4',
                                                borderRadius: '20px 20px 0 0',
                                            }}
                                        >

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
                                            <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path fill="#BBD8FF" d="M17 11V3H3v8a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4z" />
                                                <path fill="#092F63" d="M17 9h2a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-2" />
                                                <path fill="#FFFFFF" d="M7 7h6v2H7z" />
                                                <path fill="none" stroke="#092F63" strokeWidth="1.5" d="M17 11V3H3v8a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4zM5 19h10" />
                                            </svg>
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
            <section className="lg:hidden px-4 py-8 relative">
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
                            { id: 1, title: 'Design', desc: 'Layanan desain produk dengan teknologi CAD/CAM terkini untuk hasil presisi tinggi.' },
                            { id: 2, title: 'Printing', desc: 'Solusi cetak berkualitas tinggi untuk packaging dan kebutuhan branding produk.' },
                            { id: 3, title: 'Manufacture Tooling', desc: 'Pembuatan tooling dan cetakan presisi untuk mendukung produksi massal.' },
                            { id: 4, title: 'Laser', desc: 'Pemotongan dan marking laser dengan akurasi tinggi untuk berbagai material.' },
                            { id: 5, title: 'Manufacture Plastic Injection', desc: 'Produksi komponen plastik injection molding dengan standar kualitas internasional.' },
                            { id: 6, title: 'Painting', desc: 'Layanan pengecatan dan finishing dengan teknologi spray booth modern.' },
                            { id: 7, title: 'Subassembly', desc: 'Perakitan sub-komponen dengan quality control ketat di setiap tahap.' },
                            { id: 8, title: 'Logistics', desc: 'Manajemen logistik terintegrasi untuk pengiriman tepat waktu ke seluruh Indonesia.' },
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
                                        width: '100%',
                                        height: '100px',
                                        backgroundColor: '#E5E5E5',
                                        borderBottom: '1px solid #0055A4',
                                    }}
                                />

                                {/* Card Content */}
                                <div style={{ padding: '16px' }}>
                                    {/* Icon + Title Row */}
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                                        {/* Icon */}
                                        <div style={{ width: '36px', height: '36px', flexShrink: 0 }}>
                                            <svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path fill="#BBD8FF" d="M17 11V3H3v8a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4z" />
                                                <path fill="#092F63" d="M17 9h2a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-2" />
                                                <path fill="#FFFFFF" d="M7 7h6v2H7z" />
                                                <path fill="none" stroke="#092F63" strokeWidth="1.5" d="M17 11V3H3v8a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4zM5 19h10" />
                                            </svg>
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
