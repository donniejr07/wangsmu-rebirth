'use client'

import { AnimateOnScroll } from '@/components/animations/scroll-animations'
import { useLanguage } from '@/context/language-context'

export default function DefinitionSection() {
    const { t } = useLanguage()

    return (
        <>
            {/* MOBILE LAYOUT */}
            <section
                className="lg:hidden relative overflow-hidden"
                style={{
                    padding: '60px 24px 70px',
                    background: 'linear-gradient(180deg, #FFFFFF 0%, #F0F4F8 100%)',
                }}
            >
                <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '60px', height: '4px', backgroundColor: '#0055A4', borderRadius: '2px' }} />
                <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '120px', height: '120px', borderRadius: '50%', border: '2px solid rgba(0, 85, 164, 0.08)' }} />

                <AnimateOnScroll animation="fadeUp" delay={0}>
                    <div className="flex items-center justify-center gap-2" style={{ marginBottom: '16px' }}>
                        <div style={{ width: '8px', height: '8px', backgroundColor: '#0055A4', borderRadius: '50%' }} />
                        <span className="font-poppins font-medium text-[12px] tracking-[3px] uppercase" style={{ color: '#0055A4' }}>
                            {t('elecDefinition.label')}
                        </span>
                        <div style={{ width: '8px', height: '8px', backgroundColor: '#0055A4', borderRadius: '50%' }} />
                    </div>

                    <h2 className="font-poppins font-bold text-center" style={{ fontSize: '26px', lineHeight: '34px', marginBottom: '20px' }}>
                        <span style={{ color: '#1a1a2e' }}>{t('elecDefinition.title1')}</span>
                        <span style={{ color: '#0055A4' }}>{t('elecDefinition.title2')}</span>
                    </h2>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fadeUp" delay={100}>
                    <div className="flex justify-center" style={{ marginBottom: '24px' }}>
                        <div style={{ width: '50px', height: '3px', background: 'linear-gradient(90deg, #0055A4, #3B82F6)', borderRadius: '2px' }} />
                    </div>

                    <p className="font-poppins font-normal text-center" style={{ fontSize: '15px', lineHeight: '26px', color: '#4A5568', maxWidth: '340px', margin: '0 auto' }}>
                        {t('elecDefinition.description')}
                    </p>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fadeUp" delay={200}>
                    <div
                        className="flex justify-center gap-6"
                        style={{
                            marginTop: '36px', padding: '20px 16px',
                            background: 'linear-gradient(135deg, #0055A4 0%, #003D7A 100%)',
                            borderRadius: '16px', boxShadow: '0 8px 32px rgba(0, 85, 164, 0.25)',
                        }}
                    >
                        {[
                            { number: '30+', label: t('elecDefinition.stats.0.labelMobile') },
                            { number: '10+', label: t('elecDefinition.stats.1.labelMobile') },
                            { number: '99.5%', label: t('elecDefinition.stats.2.labelMobile') },
                        ].map((stat, i) => (
                            <div key={i} className="flex flex-col items-center text-center">
                                <span className="font-poppins font-bold text-white" style={{ fontSize: '22px', lineHeight: '28px' }}>
                                    {stat.number}
                                </span>
                                <span className="font-poppins font-normal" style={{ fontSize: '11px', color: 'rgba(255,255,255,0.8)' }}>
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </AnimateOnScroll>
            </section>

            {/* DESKTOP LAYOUT */}
            <section
                className="hidden lg:block relative overflow-hidden"
                style={{ padding: '100px 0 120px', background: 'linear-gradient(180deg, #FFFFFF 0%, #F0F4F8 100%)' }}
            >
                <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '300px', height: '300px', borderRadius: '50%', border: '2px solid rgba(0, 85, 164, 0.06)' }} />
                <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '200px', height: '200px', borderRadius: '50%', border: '2px solid rgba(0, 85, 164, 0.06)' }} />
                <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '80px', height: '4px', backgroundColor: '#0055A4', borderRadius: '2px' }} />

                <div className="relative z-10" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
                    <AnimateOnScroll animation="fadeUp" delay={0}>
                        <div className="flex items-center justify-center gap-3" style={{ marginBottom: '24px' }}>
                            <div style={{ width: '40px', height: '2px', background: 'linear-gradient(90deg, transparent, #0055A4)' }} />
                            <span className="font-poppins font-medium text-[14px] tracking-[4px] uppercase" style={{ color: '#0055A4' }}>
                                {t('elecDefinition.label')}
                            </span>
                            <div style={{ width: '40px', height: '2px', background: 'linear-gradient(90deg, #0055A4, transparent)' }} />
                        </div>
                    </AnimateOnScroll>

                    <AnimateOnScroll animation="fadeUp" delay={100}>
                        <h2 className="font-poppins font-bold text-center" style={{ fontSize: '52px', lineHeight: '64px', marginBottom: '16px' }}>
                            <span style={{ color: '#1a1a2e' }}>{t('elecDefinition.title1')}</span>
                            <span style={{ color: '#0055A4', position: 'relative' }}>
                                {t('elecDefinition.title2')}
                                <span style={{ position: 'absolute', bottom: '-4px', left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #0055A4, #3B82F6, transparent)', borderRadius: '2px' }} />
                            </span>
                        </h2>
                    </AnimateOnScroll>

                    <AnimateOnScroll animation="fadeUp" delay={200}>
                        <p className="font-poppins font-normal text-center" style={{ fontSize: '22px', lineHeight: '38px', color: '#4A5568', maxWidth: '820px', margin: '0 auto' }}>
                            {t('elecDefinition.description')}
                        </p>
                    </AnimateOnScroll>

                    <AnimateOnScroll animation="fadeUp" delay={300}>
                        <div className="flex justify-center gap-0" style={{ marginTop: '60px', maxWidth: '750px', margin: '60px auto 0' }}>
                            {[
                                { number: '30+', label: t('elecDefinition.stats.0.labelDesktop') },
                                { number: '10+', label: t('elecDefinition.stats.1.labelDesktop') },
                                { number: '99.5%', label: t('elecDefinition.stats.2.labelDesktop') },
                            ].map((stat, i) => (
                                <div key={i} className="flex flex-col items-center text-center flex-1" style={{ position: 'relative', padding: '30px 20px' }}>
                                    {i > 0 && (
                                        <div style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', width: '1px', height: '60px', backgroundColor: 'rgba(0, 85, 164, 0.15)' }} />
                                    )}
                                    <span className="font-poppins font-bold" style={{ fontSize: '44px', lineHeight: '52px', color: '#0055A4' }}>
                                        {stat.number}
                                    </span>
                                    <span className="font-poppins font-normal" style={{ fontSize: '16px', lineHeight: '24px', color: '#6B7280', marginTop: '8px' }}>
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>
        </>
    )
}
