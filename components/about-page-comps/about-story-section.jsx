'use client'

import Image from 'next/image'
import { AnimateOnScroll } from '@/components/animations/scroll-animations'
import { useLanguage } from '@/context/language-context'

export default function AboutStorySection() {
    const { t } = useLanguage()

    return (
        <>
            {/* Mobile Layout */}
            <section className="lg:hidden relative w-full" style={{ paddingLeft: '24px', paddingRight: '24px', paddingTop: '32px', paddingBottom: '32px' }}>
                <div
                    className="absolute inset-0 bg-[#D9D9D9] z-0"
                    style={{
                        maskImage: 'linear-gradient(to bottom, transparent 0%, black 10px, black calc(100% - 10px), transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10px, black calc(100% - 10px), transparent 100%)'
                    }}
                />

                <div className="relative z-10">
                    <AnimateOnScroll animation="fadeUp" delay={0}>
                        <div className="relative w-full h-[250px] rounded-[15px] overflow-hidden mb-6">
                            <Image
                                src="/images/story.png"
                                alt="Wang SMU Story"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </AnimateOnScroll>

                    <AnimateOnScroll animation="fadeUp" delay={100}>
                        <h2 className="font-poppins font-semibold text-[32px] leading-[40px]" style={{ marginTop: '24px', marginBottom: '24px' }}>
                            <span className="text-black">{t('aboutPage.story.title1')}</span>
                            <span className="text-[#0055A4]">{t('aboutPage.story.title2')}</span>
                        </h2>
                    </AnimateOnScroll>

                    <AnimateOnScroll animation="fadeUp" delay={150}>
                        <div className="font-poppins font-normal text-[16px] leading-[24px] text-black" style={{ marginBottom: '40px' }}>
                            <p className="mb-4">
                                {t('aboutPage.story.description1')}
                            </p>
                            <p>
                                {t('aboutPage.story.description2')}
                            </p>
                        </div>
                    </AnimateOnScroll>

                    <AnimateOnScroll animation="fadeUp" delay={200}>
                        <div className="flex items-start gap-4 group cursor-pointer" style={{ marginBottom: '32px' }}>
                            <div className="relative w-[50px] h-[50px] bg-white rounded-[15px] border border-[#0055A4] flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                                <svg
                                    className="w-[35px] h-[35px]"
                                    viewBox="0 0 50 50"
                                    fill="none"
                                    stroke="#0055A4"
                                    strokeWidth="2"
                                >
                                    <path d="M5 25 C15 10, 35 10, 45 25 C35 40, 15 40, 5 25" />
                                    <circle cx="25" cy="25" r="8" />
                                    <circle cx="25" cy="25" r="3" fill="#0055A4" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-poppins font-semibold text-[18px] leading-[24px] text-black mb-1 transition-colors duration-300 group-hover:text-[#0055A4]">
                                    {t('aboutPage.story.visionTitle')}
                                </h3>
                                <p className="font-poppins font-normal text-[14px] leading-[20px] text-black">
                                    {t('aboutPage.story.visionDesc')}
                                </p>
                            </div>
                        </div>
                    </AnimateOnScroll>

                    <AnimateOnScroll animation="fadeUp" delay={250}>
                        <div className="flex items-start gap-4 group cursor-pointer">
                            <div className="relative w-[50px] h-[50px] bg-white rounded-[15px] border border-[#0055A4] flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                                <svg
                                    className="w-[35px] h-[35px]"
                                    viewBox="0 0 50 50"
                                    fill="none"
                                    stroke="#0055A4"
                                    strokeWidth="2"
                                >
                                    <circle cx="25" cy="25" r="22" />
                                    <circle cx="25" cy="25" r="15" />
                                    <circle cx="25" cy="25" r="8" />
                                    <line x1="25" y1="0" x2="25" y2="10" />
                                    <line x1="25" y1="40" x2="25" y2="50" />
                                    <line x1="0" y1="25" x2="10" y2="25" />
                                    <line x1="40" y1="25" x2="50" y2="25" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-poppins font-semibold text-[18px] leading-[24px] text-black mb-1 transition-colors duration-300 group-hover:text-[#0055A4]">
                                    {t('aboutPage.story.missionTitle')}
                                </h3>
                                <p className="font-poppins font-normal text-[14px] leading-[20px] text-black">
                                    {t('aboutPage.story.missionDesc')}
                                </p>
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* Desktop Layout */}
            <section className="hidden lg:block relative w-full">
                {/* Blurry */}
                <div
                    className="absolute inset-0 bg-[#D9D9D9] z-0"
                    style={{
                        maskImage: 'linear-gradient(to bottom, transparent 0%, black 15px, black calc(100% - 15px), transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15px, black calc(100% - 15px), transparent 100%)'
                    }}
                />

                <div className="relative z-10 w-full flex gap-[10%]" style={{ padding: '60px 4%' }}>
                    {/* Left Column - Text Content */}
                    <div className="flex-1">
                        <AnimateOnScroll animation="fadeUp" delay={0}>
                            <h2 className="font-poppins font-semibold text-[56px] leading-[90px]" style={{ marginBottom: '14px' }}>
                                <span className="text-black">{t('aboutPage.story.title1')}</span>
                                <span className="text-[#0055A4]">{t('aboutPage.story.title2')}</span>
                            </h2>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fadeUp" delay={100}>
                            <div className="font-poppins font-normal text-[20px] leading-[36px] text-black" style={{ marginBottom: '60px' }}>
                                <p style={{ marginBottom: '40px' }}>{t('aboutPage.story.description1')}</p>
                                <p style={{ marginBottom: '40px' }}>{t('aboutPage.story.description2')}</p>
                            </div>
                        </AnimateOnScroll>

                        {/* Vision */}
                        <AnimateOnScroll animation="fadeUp" delay={200}>
                            <div className="flex items-start gap-4 group cursor-pointer" style={{ marginBottom: '40px' }}>
                                <div className="relative w-[65px] h-[65px] bg-white rounded-[20px] border border-[#0055A4] flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg">
                                    <svg
                                        className="w-[50px] h-[50px] transition-transform duration-300 group-hover:scale-110"
                                        viewBox="0 0 50 50"
                                        fill="none"
                                        stroke="#0055A4"
                                        strokeWidth="2"
                                    >
                                        <path d="M5 25 C15 10, 35 10, 45 25 C35 40, 15 40, 5 25" />
                                        <circle cx="25" cy="25" r="8" />
                                        <circle cx="25" cy="25" r="3" fill="#0055A4" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-poppins font-semibold text-[24px] leading-[36px] text-black transition-colors duration-300 group-hover:text-[#0055A4]">
                                        {t('aboutPage.story.visionTitle')}
                                    </h3>
                                    <p className="font-poppins font-normal text-[20px] leading-[36px] text-black">
                                        {t('aboutPage.story.visionDesc')}
                                    </p>
                                </div>
                            </div>
                        </AnimateOnScroll>

                        {/* Mission */}
                        <AnimateOnScroll animation="fadeUp" delay={300}>
                            <div className="flex items-start gap-4 group cursor-pointer">
                                <div className="relative w-[65px] h-[65px] bg-white rounded-[20px] border border-[#0055A4] flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg">
                                    <svg
                                        className="w-[50px] h-[50px] transition-transform duration-300 group-hover:scale-110"
                                        viewBox="0 0 50 50"
                                        fill="none"
                                        stroke="#0055A4"
                                        strokeWidth="2"
                                    >
                                        <circle cx="25" cy="25" r="22" />
                                        <circle cx="25" cy="25" r="15" />
                                        <circle cx="25" cy="25" r="8" />
                                        <line x1="25" y1="0" x2="25" y2="10" />
                                        <line x1="25" y1="40" x2="25" y2="50" />
                                        <line x1="0" y1="25" x2="10" y2="25" />
                                        <line x1="40" y1="25" x2="50" y2="25" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-poppins font-semibold text-[24px] leading-[36px] text-black transition-colors duration-300 group-hover:text-[#0055A4]">
                                        {t('aboutPage.story.missionTitle')}
                                    </h3>
                                    <p className="font-poppins font-normal text-[20px] leading-[36px] text-black">
                                        {t('aboutPage.story.missionDesc')}
                                    </p>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>

                    <AnimateOnScroll animation="fadeLeft" delay={200}>
                        <div className="relative w-[519px] h-[566px] rounded-[20px] overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer flex-shrink-0" style={{ marginTop: '30px' }}>
                            <Image
                                src="/images/story.png"
                                alt="Wang SMU Story"
                                fill
                                className="object-cover transition-transform duration-500 hover:scale-110"
                            />
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>
        </>
    )
}
