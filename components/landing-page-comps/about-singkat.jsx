'use client'

import Image from 'next/image'
import Link from 'next/link'
import { AnimateOnScroll } from '@/components/animations/scroll-animations'
import { useLanguage } from '@/context/language-context'

export default function AboutSingkat() {
    const { t } = useLanguage()

    return (
        <>
            {/* Mobile Layout */}
            <section className="lg:hidden relative w-full bg-[#0055A4] overflow-hidden" style={{ paddingLeft: '0px', paddingRight: '0px', paddingTop: '20px', paddingBottom: '24px' }}>
                {/* Background */}
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src="/images/galeri-laser.png"
                        alt="About Background"
                        fill
                        className="object-cover opacity-30"
                        priority
                    />
                </div>

                {/* Content */}
                <div className="relative z-10">
                    {/* Title */}
                    <AnimateOnScroll animation="fadeUp" duration={800}>
                        <h2 className="text-white font-poppins font-semibold text-[28px] leading-[36px]" style={{ marginBottom: '16px', marginLeft: '20px', marginRight: '20px' }}>
                            {t('aboutSingkat.title')}
                        </h2>
                    </AnimateOnScroll>

                    {/* Deskripsi */}
                    <AnimateOnScroll animation="fadeUp" delay={100} duration={800}>
                        <p className="text-white font-poppins font-normal text-[14px] leading-[22px]" style={{ marginBottom: '24px', marginLeft: '20px', marginRight: '20px' }}>
                            {t('aboutSingkat.descriptionMobile')}
                        </p>
                    </AnimateOnScroll>

                    {/* Redirect to about page */}
                    <AnimateOnScroll animation="scaleUp" delay={200} duration={600}>
                        <Link href="/about">
                            <button className="bg-white rounded-[16px] w-[200px] h-[48px] flex items-center justify-center hover:bg-gray-100 hover:scale-105 transition-all duration-300" style={{ position: 'relative', left: '50%', transform: 'translateX(-50%)' }}>
                                <span className="text-black font-poppins font-semibold text-[16px]">
                                    {t('aboutSingkat.readMore')}
                                </span>
                            </button>
                        </Link>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* Desktop Layout */}
            <section className="hidden lg:block relative w-full min-h-[580px] bg-[#0055A4] pb-[120px] overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src="/images/galeri-laser.png"
                        alt="About Background"
                        fill
                        className="object-cover opacity-30"
                        priority
                    />
                </div>

                {/* Content */}
                <div className="relative z-10">
                    {/* Title */}
                    <AnimateOnScroll animation="fadeRight" duration={800}>
                        <h2
                            className="text-white font-poppins font-semibold text-[50px] leading-[75px] max-w-[1000px]"
                            style={{ paddingTop: '25px', paddingLeft: '107px', marginBottom: '9px' }}
                        >
                            {t('aboutSingkat.title')}
                        </h2>
                    </AnimateOnScroll>

                    {/* Deskripsi */}
                    <AnimateOnScroll animation="fadeUp" delay={200} duration={800}>
                        <p
                            className="text-white font-poppins font-normal text-[28px] leading-[42px] max-w-[800px]"
                            style={{ paddingLeft: '107px', marginBottom: '27px' }}
                        >
                            {t('aboutSingkat.descriptionDesktop')}
                        </p>
                    </AnimateOnScroll>

                    {/* CTA Button */}
                    <AnimateOnScroll animation="scaleUp" delay={400} duration={600}>
                        <Link href="/about" scroll={true}>
                            <button
                                className="bg-white rounded-[20px] w-[300px] h-[60px] flex items-center justify-center hover:bg-gray-100 hover:scale-105 transition-all duration-300"
                                style={{ marginLeft: '107px' }}
                            >
                                <span className="text-black font-poppins font-normal text-[28px]">
                                    {t('aboutSingkat.readMore')}
                                </span>
                            </button>
                        </Link>
                    </AnimateOnScroll>
                </div>
            </section>
        </>
    )
}

