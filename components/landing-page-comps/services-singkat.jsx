'use client'

import Image from 'next/image'
import Link from 'next/link'
import { AnimateOnScroll } from '@/components/animations/scroll-animations'
import { useLanguage } from '@/context/language-context'

export default function ServicesSingkat() {
    const { t } = useLanguage()

    // Data
    const servicesData = [
        { title: "Design", imageSrc: "/images/design-wangsmu.png", href: "/services/design" },
        { title: "Printing", imageSrc: "/images/printing-wsu-1.png", href: "/services/printing" },
    ]

    return (
        <>
            {/* Mobile Layout */}
            <section className="lg:hidden relative w-full bg-white overflow-hidden" style={{ paddingLeft: '20px', paddingRight: '20px', paddingTop: '16px', paddingBottom: '20px' }}>
                {/* Deskripsi */}
                <AnimateOnScroll animation="fadeUp" duration={800}>
                    <p className="font-poppins font-semibold text-[18px] leading-[20px] text-black text-center" style={{ marginBottom: '16px' }}>
                        {t('servicesSingkat.descMobile')}
                    </p>
                </AnimateOnScroll>

                {/* Cards */}
                <div className="flex flex-col items-center" style={{ gap: '16px' }}>
                    {servicesData.map((service, index) => (
                        <AnimateOnScroll key={index} animation="fadeUp" delay={index * 50}>
                            <Link href={service.href} className="block">
                                <div className="group bg-white rounded-[16px] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[#0055A4]" style={{ width: '280px' }}>
                                    {/* Image */}
                                    <div className="relative w-full h-[100px]">
                                        <Image
                                            src={service.imageSrc}
                                            alt={service.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="text-center" style={{ padding: '12px', paddingBottom: '10px' }}>
                                        <h3 className="font-poppins font-semibold text-[16px] text-[#0055A4]" style={{ marginBottom: '10px' }}>
                                            {service.title}
                                        </h3>
                                        <button className="bg-[#0055A4] text-white font-semibold font-poppins rounded-full hover:bg-[#004080] transition-colors" style={{ fontSize: '10px', paddingLeft: '15px', paddingRight: '15px', paddingTop: '8px', paddingBottom: '8px' }}>
                                            {t('servicesSingkat.moreDetails')}
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        </AnimateOnScroll>
                    ))}

                    {/* More Services */}
                    <AnimateOnScroll animation="fadeUp" delay={100}>
                        <Link href="/services" className="block">
                            <div className="bg-[#0055A4] rounded-[16px] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative" style={{ width: '280px', height: '120px' }}>
                                <div className="absolute inset-0 w-full h-full">
                                    <Image
                                        src="/images/bg advantages.jpg"
                                        alt="Services Background"
                                        fill
                                        className="object-cover opacity-20"
                                    />
                                </div>
                                <div className="relative z-10 flex flex-col items-center justify-center h-full p-4 gap-3">
                                    <h3 className="font-poppins font-semibold text-[16px] text-white">
                                        Another Service
                                    </h3>
                                    <button className="bg-white text-[#0055A4] font-poppins font-semibold rounded-full" style={{ fontSize: '10px', paddingLeft: '20px', paddingRight: '20px', paddingTop: '10px', paddingBottom: '10px' }}>
                                        {t('servicesSingkat.moreServices')}
                                    </button>
                                </div>
                            </div>
                        </Link>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* Desktop Layout */}
            <section className="hidden lg:block relative w-full bg-white py-12 overflow-hidden">
                {/* Deskripsi */}
                <AnimateOnScroll animation="fadeRight" duration={800}>
                    <p
                        className="font-poppins font-semibold text-[28px] leading-[51px] text-black max-w-[1450px]"
                        style={{ paddingLeft: '185px', paddingRight: '185px', marginBottom: '67px' }}
                    >
                        {t('servicesSingkat.descDesktop')}
                    </p>
                </AnimateOnScroll>

                {/* Cards */}
                <div className="flex justify-center items-center gap-8">
                    {/* Card Design */}
                    <AnimateOnScroll animation="fadeUp" delay={0}>
                        <div
                            className="group relative w-[350px] h-[450px] bg-white rounded-[20px] overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                            style={{ border: '1px solid #0055A4' }}
                        >
                            <div className="relative w-full h-[122px]">
                                <Image
                                    src="/images/design-wangsmu.png"
                                    alt="Design Service"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    style={{ borderRadius: '20px 20px 0 0' }}
                                />
                            </div>

                            <div
                                className="absolute w-[50px] h-[50px] rounded-full bg-[#0055A4] flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                                style={{ left: '22px', top: '137px' }}
                            >
                                <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
                                    {/* Icon */}
                                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                                </svg>
                            </div>

                            <h3
                                className="absolute font-poppins font-semibold text-[26px] leading-[39px] text-[#0055A4]"
                                style={{ left: '92px', top: '142px' }}
                            >
                                Design
                            </h3>

                            <p
                                className="absolute font-poppins font-semibold text-[17px] leading-[26px] text-black"
                                style={{ left: '32px', top: '204px', right: '40px', bottom: '117px' }}
                            >
                                {t('servicesSingkat.cardDesc')}
                            </p>

                            <div className="absolute" style={{ bottom: '22px', right: '28px' }}>
                                <Link href="/services/design">
                                    <button className="bg-[#0055A4] rounded-[20px] w-[170px] h-[40px] flex items-center justify-center hover:bg-[#004080] transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
                                        <span className="text-white font-poppins font-normal text-[20px]">
                                            {t('servicesSingkat.moreDetails')}
                                        </span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </AnimateOnScroll>

                    {/* Card Printing */}
                    <AnimateOnScroll animation="scaleUp" delay={150}>
                        <div
                            className="group relative w-[350px] h-[450px] bg-white rounded-[20px] overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                            style={{ border: '1px solid #0055A4' }}
                        >
                            <div className="relative w-full h-[122px]">
                                <Image
                                    src="/images/printing-wsu-1.png"
                                    alt="Printing Service"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    style={{ borderRadius: '20px 20px 0 0' }}
                                />
                            </div>

                            <div
                                className="absolute w-[50px] h-[50px] rounded-full bg-[#0055A4] flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                                style={{ left: '22px', top: '137px' }}
                            >
                                <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
                                    {/* Icon */}
                                    <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z" />
                                </svg>
                            </div>

                            <h3
                                className="absolute font-poppins font-semibold text-[26px] leading-[39px] text-[#0055A4]"
                                style={{ left: '92px', top: '142px' }}
                            >
                                Printing
                            </h3>

                            <p
                                className="absolute font-poppins font-semibold text-[17px] leading-[26px] text-black"
                                style={{ left: '32px', top: '204px', right: '40px', bottom: '117px' }}
                            >
                                {t('servicesSingkat.cardDesc')}
                            </p>

                            <div className="absolute" style={{ bottom: '22px', right: '28px' }}>
                                <Link href="/services/printing">
                                    <button className="bg-[#0055A4] rounded-[20px] w-[170px] h-[40px] flex items-center justify-center hover:bg-[#004080] transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
                                        <span className="text-white font-poppins font-normal text-[20px]">
                                            {t('servicesSingkat.moreDetails')}
                                        </span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </AnimateOnScroll>

                    {/* Card More Services */}
                    <AnimateOnScroll animation="fadeLeft" delay={300}>
                        <div className="group relative w-[350px] h-[450px] bg-[#0055A4] rounded-[20px] overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                            <div className="absolute inset-0 w-full h-full">
                                <Image
                                    src="/images/bg advantages.jpg"
                                    alt="Services Background"
                                    fill
                                    className="object-cover opacity-15 rounded-[20px] transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <h3
                                className="relative z-10 font-poppins font-semibold text-[32px] leading-[36px] text-white text-center w-full"
                                style={{ paddingTop: '28px' }}
                            >
                                Another Service
                            </h3>

                            <div className="absolute inset-0 z-10 flex items-center justify-center">
                                <Link href="/services">
                                    <button className="bg-[#FFFFFF] rounded-[20px] w-[170px] h-[40px] flex items-center justify-center hover:bg-gray-200 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
                                        <span className="text-black font-poppins font-semibold text-[20px]">
                                            {t('servicesSingkat.moreServices')}
                                        </span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>
        </>
    )
}

