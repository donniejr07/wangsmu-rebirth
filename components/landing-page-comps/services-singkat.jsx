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
                    <p className="font-poppins font-bold text-[22px] leading-[2rem] text-black text-center" style={{ marginBottom: '30px' }}>
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
                <p
                    className="font-poppins font-bold text-[30px] leading-[51px] text-black"
                    style={{ paddingLeft: '12%', paddingRight: '12%', marginBottom: '67px' }}
                >
                    {t('servicesSingkat.descDesktop')}
                </p>
                <AnimateOnScroll animation="fadeRight" duration={800}>
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
                                    src="/images/services/tooling.png"
                                    alt="Design Service"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    style={{ borderRadius: '20px 20px 0 0' }}
                                />
                            </div>

                            <h3
                                className="absolute font-poppins font-semibold text-[26px] leading-[39px] text-[#0055A4]"
                                style={{ left: '32px', top: '142px' }}
                            >
                                Manufacture Tooling
                            </h3>

                            <p
                                className="absolute font-poppins font-semibold text-[17px] leading-[26px] text-black"
                                style={{ left: '32px', top: '215px', right: '40px' }}
                            >
                                {t('servicesSingkat.cardDesc')}
                            </p>

                            <div className="absolute" style={{ bottom: '22px', right: '28px' }}>
                                <Link href="/services/#">
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
                                    src="/images/services/injection.png"
                                    alt="Printing Service"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    style={{ borderRadius: '20px 20px 0 0' }}
                                />
                            </div>

                            <h3
                                className="absolute font-poppins font-semibold text-[26px] leading-[39px] text-[#0055A4]"
                                style={{ left: '32px', top: '130px' }}
                            >
                                Manufacture Plastic Injection
                            </h3>

                            <p
                                className="absolute font-poppins font-semibold text-[17px] leading-[26px] text-black"
                                style={{ left: '32px', top: '215px', right: '40px' }}
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

