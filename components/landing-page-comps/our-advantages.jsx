'use client'

import { AnimateOnScroll } from '@/components/animations/scroll-animations'
import { useLanguage } from '@/context/language-context'

export default function OurAdvantages() {
    const { t } = useLanguage()

    // Card data with translation keys
    const cardsData = [
        { title: t('ourAdvantages.quality'), description: t('ourAdvantages.qualityDesc') },
        { title: t('ourAdvantages.team'), description: t('ourAdvantages.teamDesc') },
        { title: t('ourAdvantages.innovation'), description: t('ourAdvantages.innovationDesc') },
        { title: t('ourAdvantages.service'), description: t('ourAdvantages.serviceDesc') },
    ]

    return (
        <>
            {/* ===== MOBILE LAYOUT ===== */}
            <section className="lg:hidden relative w-full bg-white overflow-hidden" style={{ paddingLeft: '20px', paddingRight: '20px', paddingTop: '16px', paddingBottom: '20px' }}>
                {/* Header */}
                <AnimateOnScroll animation="fadeUp" duration={800}>
                    <h2 className="font-poppins font-semibold text-[28px] leading-[36px]" style={{ marginBottom: '20px' }}>
                        <span className="text-black">{t('ourAdvantages.titleOur')} </span>
                        <span className="text-[#0055A4]">{t('ourAdvantages.titleAdvantages')}</span>
                    </h2>
                </AnimateOnScroll>

                {/* Cards - Stacked */}
                <div className="flex flex-col" style={{ gap: '16px' }}>
                    {cardsData.map((card, index) => (
                        <AnimateOnScroll key={index} animation="fadeUp" delay={index * 50}>
                            <div className="group relative w-full bg-[#0055A4] rounded-[12px] overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" style={{ minHeight: '100px', padding: '16px' }}>
                                <div className="absolute inset-0 w-full h-full">
                                    <img
                                        src="/images/bg advantages.jpg"
                                        alt="Background"
                                        className="w-full h-full object-cover opacity-15 transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-white font-poppins font-semibold text-[18px] leading-[24px]" style={{ marginBottom: '6px' }}>
                                        {card.title}
                                    </h3>
                                    <p className="text-white font-poppins font-normal text-[13px] leading-[18px]">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </section>

            {/* ===== DESKTOP LAYOUT ===== */}
            <section className="hidden lg:block relative w-full bg-white overflow-hidden">
                {/* header dgn garis dekoratif */}
                <AnimateOnScroll animation="fadeLeft" duration={800}>
                    <div
                        className="flex items-center gap-5"
                        style={{ paddingLeft: '34px' }}
                    >
                        <h2 className="font-poppins font-semibold text-[48px] leading-[72px] whitespace-nowrap">
                            <span className="text-black">{t('ourAdvantages.titleOur')} </span>
                            <span className="text-[#0055A4]">{t('ourAdvantages.titleAdvantages')}</span>
                        </h2>
                        <div
                            className="bg-[#0055A4]"
                            style={{ width: '713px', height: '12px' }}
                        />
                    </div>
                </AnimateOnScroll>

                {/* 2 kolom cards */}
                <div
                    className="flex flex-row justify-center items-start"
                    style={{ paddingBottom: '49px', marginTop: '60px', gap: '80px' }}
                >
                    {/* kolom kiri */}
                    <div className="flex flex-col" style={{ gap: '32px' }}>
                        {/* Quality Guarantee Card */}
                        <AnimateOnScroll animation="fadeUp" delay={0}>
                            <div className="group relative w-[420px] h-[200px] bg-[#0055A4] rounded-[16px] overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                                <div className="absolute inset-0 w-full h-full">
                                    <img
                                        src="/images/bg advantages.jpg"
                                        alt="Quality Background"
                                        className="w-full h-full object-cover opacity-15 transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="relative z-10" style={{ paddingTop: '20px', paddingLeft: '30px', paddingRight: '30px' }}>
                                    <h3 className="text-white font-poppins font-semibold text-[32px] leading-[42px] max-w-[350px]">
                                        {t('ourAdvantages.quality')}
                                    </h3>
                                    <p
                                        className="text-white font-poppins font-normal text-[18px] leading-[28px] max-w-[350px]"
                                        style={{ marginTop: '6px' }}
                                    >
                                        {t('ourAdvantages.qualityDesc')}
                                    </p>
                                </div>
                            </div>
                        </AnimateOnScroll>

                        {/* Experienced Team Card */}
                        <AnimateOnScroll animation="fadeUp" delay={150}>
                            <div className="group relative w-[420px] h-[200px] bg-[#0055A4] rounded-[16px] overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                                <div className="absolute inset-0 w-full h-full">
                                    <img
                                        src="/images/bg advantages.jpg"
                                        alt="Experienced Team Background"
                                        className="w-full h-full object-cover opacity-15 transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="relative z-10" style={{ paddingTop: '20px', paddingLeft: '30px', paddingRight: '30px' }}>
                                    <h3 className="text-white font-poppins font-semibold text-[32px] leading-[42px] max-w-[350px]">
                                        {t('ourAdvantages.team')}
                                    </h3>
                                    <p
                                        className="text-white font-poppins font-normal text-[18px] leading-[28px] max-w-[350px]"
                                        style={{ marginTop: '6px' }}
                                    >
                                        {t('ourAdvantages.teamDesc')}
                                    </p>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>

                    {/* kolom kanan */}
                    <div className="flex flex-col" style={{ gap: '32px' }}>
                        {/* Innovation Card */}
                        <AnimateOnScroll animation="fadeUp" delay={100}>
                            <div className="group relative w-[420px] h-[200px] bg-[#0055A4] rounded-[16px] overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                                <div className="absolute inset-0 w-full h-full">
                                    <img
                                        src="/images/bg advantages.jpg"
                                        alt="Innovation Background"
                                        className="w-full h-full object-cover opacity-15 transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="relative z-10" style={{ paddingTop: '20px', paddingLeft: '30px', paddingRight: '30px' }}>
                                    <h3 className="text-white font-poppins font-semibold text-[32px] leading-[42px] max-w-[350px]">
                                        {t('ourAdvantages.innovation')}
                                    </h3>
                                    <p
                                        className="text-white font-poppins font-normal text-[18px] leading-[28px] max-w-[350px]"
                                        style={{ marginTop: '6px' }}
                                    >
                                        {t('ourAdvantages.innovationDesc')}
                                    </p>
                                </div>
                            </div>
                        </AnimateOnScroll>

                        {/* Integrated Service Card */}
                        <AnimateOnScroll animation="fadeUp" delay={250}>
                            <div className="group relative w-[420px] h-[200px] bg-[#0055A4] rounded-[16px] overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                                <div className="absolute inset-0 w-full h-full">
                                    <img
                                        src="/images/bg advantages.jpg"
                                        alt="Integrated Service Background"
                                        className="w-full h-full object-cover opacity-15 transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="relative z-10" style={{ paddingTop: '20px', paddingLeft: '30px', paddingRight: '30px' }}>
                                    <h3 className="text-white font-poppins font-semibold text-[32px] leading-[42px] max-w-[350px]">
                                        {t('ourAdvantages.service')}
                                    </h3>
                                    <p
                                        className="text-white font-poppins font-normal text-[18px] leading-[28px] max-w-[350px]"
                                        style={{ marginTop: '6px' }}
                                    >
                                        {t('ourAdvantages.serviceDesc')}
                                    </p>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>
        </>
    )
}

