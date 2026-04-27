'use client'

import { AnimateOnScroll } from '@/components/animations/scroll-animations'
import { useLanguage } from '@/context/language-context'

export default function HSEIntroSection() {
    const { t } = useLanguage()

    return (
        <section>
            {/* desktop layout */}
            <div className="hidden lg:flex flex-col relative w-full">
                <div className="row">
                    <div className="justify-center text-center font-poppins font-semibold text-[32px] leading-[36px] text-[#0055A1]"
                        style={{ marginBottom: "12px" }}>
                        <h2>{t('hseIntro.dashboardTitle')}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="justify-center text-center font-poppins font-normal text-[16px] leading-[24px] text-black"
                        style={{ marginBottom: "12px" }}>
                        <p>{t('hseIntro.dashboardSubtitle')}</p>
                    </div>
                </div>
                <AnimateOnScroll animation="fade-in-up" delay={400} duration={600}>
                    <div className="flex justify-center items-center gap-10 ">
                        <div className="w-[450px] h-[100px] bg-[#0055A1] rounded-[15px] hover:-translate-y-2 hover:shadow-2xl">
                            <h1 className="text-white font-poppins font-semibold text-[18px] leading-[36px]"
                                style={{ paddingLeft: '20px', paddingTop: '10px' }}
                            >
                                {t('hseIntro.scope1Title')}
                            </h1>
                            <p className="text-white font-poppins font-normal text-[14px] leading-[36px]"
                                style={{ paddingLeft: '20px' }}
                            >
                                {t('hseIntro.scope1Desc')}
                            </p>
                        </div>
                        <div className="w-[450px] h-[100px] bg-[#0055A1] rounded-[15px] hover:-translate-y-2 hover:shadow-2xl">
                            <h1 className="text-white font-poppins font-semibold text-[18px] leading-[36px]"
                                style={{ paddingLeft: '20px', paddingTop: '10px' }}
                            >
                                {t('hseIntro.scope2Title')}
                            </h1>
                            <p className="text-white font-poppins font-normal text-[14px] leading-[36px]"
                                style={{ paddingLeft: '20px' }}
                            >
                                {t('hseIntro.scope2Desc')}
                            </p>
                        </div>
                    </div>
                </AnimateOnScroll>
            </div>

            {/* mobile layout */}
            <div className="flex lg:hidden flex-col justify-center relative">
                <div className="row">
                    <div className="justify-center text-center font-poppins font-semibold text-[24px] leading-[30px] text-[#0055A1]"
                        style={{ marginBottom: "12px" }}>
                        <h2>{t('hseIntro.dashboardTitle')}</h2>
                    </div>
                    <div className="justify-center text-center font-poppins font-normal text-[14px] leading-[20px] text-black"
                        style={{ marginBottom: "30px" }}>
                        <p>{t('hseIntro.dashboardSubtitle')}</p>
                    </div>
                </div>
                <AnimateOnScroll animation="fadeUp" delay={200}>
                    <div className="flex flex-col items-center gap-4 w-full">
                        <div className="relative w-full max-w-[300px] min-h-[100px] h-auto bg-[#0055A1] rounded-[15px] overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-transform duration-300">
                            <img
                                src="/images/bg advantages.jpg"
                                alt="Background"
                                className="absolute inset-0 w-full h-full object-cover opacity-15 transition-transform duration-500"
                            />
                            <h1 className="relative text-white font-poppins font-semibold text-[18px] leading-[36px]"
                                style={{ paddingLeft: '20px', paddingTop: '10px' }}
                            >
                                {t('hseIntro.scope1Title')}
                            </h1>
                            <p className="relative text-white font-poppins font-normal text-[14px] leading-[24px]"
                                style={{ paddingLeft: '20px', paddingRight: '20px', paddingBottom: '12px' }}
                            >
                                {t('hseIntro.scope1Desc')}
                            </p>
                        </div>
                        <div className="relative w-full max-w-[300px] min-h-[100px] h-auto bg-[#0055A1] rounded-[15px] overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-transform duration-300">
                            <img
                                src="/images/bg advantages.jpg"
                                alt="Background"
                                className="absolute inset-0 w-full h-full object-cover opacity-15 transition-transform duration-500"
                            />
                            <h1 className="relative text-white font-poppins font-semibold text-[18px] leading-[36px]"
                                style={{ paddingLeft: '20px', paddingTop: '10px' }}
                            >
                                {t('hseIntro.scope2Title')}
                            </h1>
                            <p className="relative text-white font-poppins font-normal text-[14px] leading-[24px]"
                                style={{ paddingLeft: '20px', paddingRight: '20px', paddingBottom: '12px' }}
                            >
                                {t('hseIntro.scope2Desc')}
                            </p>
                        </div>
                    </div>
                </AnimateOnScroll>
            </div>
        </section>
    )
}