'use client'

import { AnimateOnScroll } from '@/components/animations/scroll-animations'
import { useLanguage } from '@/context/language-context'

// ===== SVG ICONS =====

// Variety of Color — color palette icon
const ColorIcon = ({ size = 50 }) => (
    <svg width={size} height={size} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 45c-11 0-20-9-20-20 0-11 9-20 20-20 6.6 0 12.6 3.2 16.3 8.2 2.6 3.5 3.7 8 3.7 11.8 0 4.4-3.6 8-8 8h-3c-1.7 0-3 1.3-3 3 0 1.2.7 2.3 1.8 2.8.8.4 1.2 1.3 1.2 2.2 0 2.2-1.8 4-4 4z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="16" cy="22" r="3" fill="white" />
        <circle cx="24" cy="14" r="3" fill="white" />
        <circle cx="34" cy="18" r="3" fill="white" />
    </svg>
)

// Accurate and Clear — eye/focus icon
const AccurateIcon = ({ size = 50 }) => (
    <svg width={size} height={size} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 25C5 25 14 11 25 11C36 11 45 25 45 25C45 25 36 39 25 39C14 39 5 25 5 25Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="25" cy="25" r="6" stroke="white" strokeWidth="2.5" fill="none" />
        <circle cx="25" cy="25" r="2.5" fill="white" />
    </svg>
)

// Efficient Production — lightning bolt icon
const EfficientIcon = ({ size = 50 }) => (
    <svg width={size} height={size} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28 6L10 28H24L22 44L40 20H26L28 6Z" fill="none" stroke="white" strokeWidth="2.5" strokeLinejoin="round" />
    </svg>
)

// Precision & Consistency — crosshair/target icon
const PrecisionIcon = ({ size = 50 }) => (
    <svg width={size} height={size} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="25" r="18" stroke="white" strokeWidth="2.5" fill="none" />
        <circle cx="25" cy="25" r="10" stroke="white" strokeWidth="2.5" fill="none" />
        <circle cx="25" cy="25" r="3.5" fill="white" />
        <line x1="25" y1="2" x2="25" y2="10" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="25" y1="40" x2="25" y2="48" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="2" y1="25" x2="10" y2="25" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="40" y1="25" x2="48" y2="25" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
)

const MobileColorIcon = () => <ColorIcon size={32} />
const MobileAccurateIcon = () => <AccurateIcon size={32} />
const MobileEfficientIcon = () => <EfficientIcon size={32} />
const MobilePrecisionIcon = () => <PrecisionIcon size={32} />

// ===== DATA =====
const superiorityData = [
    {
        title: 'Variety of Color',
        description: 'Extensive options for custom colors to match your exact branding and aesthetic requirements.',
        icon: <ColorIcon />,
        mobileIcon: <MobileColorIcon />,
    },
    {
        title: 'Accurate and Clear',
        description: 'High-resolution printing and marking for crisp, legible text and intricate graphics.',
        icon: <AccurateIcon />,
        mobileIcon: <MobileAccurateIcon />,
    },
    {
        title: 'Efficient Production',
        description: 'Optimized secondary processes ensuring fast turnaround without compromising detail.',
        icon: <EfficientIcon />,
        mobileIcon: <MobileEfficientIcon />,
    },
    {
        title: 'Precision and Consistency',
        description: 'Advanced techniques delivering uniform finish and exact adherence to specifications across all parts.',
        icon: <PrecisionIcon />,
        mobileIcon: <MobilePrecisionIcon />,
    },
]

// ===== DESKTOP ITEM =====
function SuperiorityItem({ icon, title, description, delay = 0 }) {
    return (
        <AnimateOnScroll animation="fadeUp" delay={delay}>
            <div className="flex flex-col items-center text-center" style={{ position: 'relative' }}>
                <div
                    className="flex items-center justify-center"
                    style={{
                        width: '100px', height: '100px',
                        background: 'linear-gradient(135deg, #0055A4 0%, #003D7A 100%)',
                        borderRadius: '50%', boxShadow: '0 8px 24px rgba(0, 85, 164, 0.3)',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)'
                        e.currentTarget.style.boxShadow = '0 12px 36px rgba(0, 85, 164, 0.4)'
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0) scale(1)'
                        e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 85, 164, 0.3)'
                    }}
                >
                    {icon}
                </div>
                <h3 className="font-poppins font-semibold text-[20px] leading-[30px]" style={{ marginTop: '18px', color: '#1a1a2e', width: '260px' }}>
                    {title}
                </h3>
                <p className="font-poppins font-normal text-[16px] leading-[26px]" style={{ marginTop: '10px', width: '242px', color: '#6B7280' }}>
                    {description}
                </p>
            </div>
        </AnimateOnScroll>
    )
}

// ===== MOBILE ITEM =====
function MobileSuperiorityItem({ icon, title, description, delay = 0 }) {
    return (
        <AnimateOnScroll animation="fadeUp" delay={delay}>
            <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center" style={{ width: '60px', height: '60px', background: 'linear-gradient(135deg, #0055A4 0%, #003D7A 100%)', borderRadius: '50%', boxShadow: '0 4px 16px rgba(0, 85, 164, 0.3)' }}>
                    {icon}
                </div>
                <h3 className="font-poppins font-semibold text-[15px] leading-[22px]" style={{ marginTop: '12px', color: '#1a1a2e' }}>
                    {title}
                </h3>
                <p className="font-poppins font-normal text-[13px] leading-[20px]" style={{ marginTop: '6px', maxWidth: '160px', color: '#6B7280' }}>
                    {description}
                </p>
            </div>
        </AnimateOnScroll>
    )
}

// ===== MAIN =====
export default function SuperioritySection() {
    const { t } = useLanguage()

    return (
        <>
            {/* MOBILE LAYOUT */}
            <section className="lg:hidden relative" style={{ paddingLeft: '20px', paddingRight: '20px', paddingTop: '50px', paddingBottom: '50px' }}>
                <div className="absolute inset-0 z-0" style={{ background: 'linear-gradient(180deg, #F0F4F8 0%, #E8EEF4 50%, #F0F4F8 100%)', maskImage: 'linear-gradient(to bottom, transparent 0%, black 10px, black calc(100% - 10px), transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10px, black calc(100% - 10px), transparent 100%)' }} />
                <div className="relative z-10">
                    <AnimateOnScroll animation="fadeUp" delay={0}>
                        <h2 className="font-poppins font-bold text-[24px] leading-[32px] text-center" style={{ marginBottom: '8px' }}>
                            <span style={{ color: '#1a1a2e' }}>{t('secProcSuperiority.title1')}</span>
                            <span style={{ color: '#0055A4' }}>{t('secProcSuperiority.title2')}</span>
                        </h2>
                    </AnimateOnScroll>
                    <AnimateOnScroll animation="fadeUp" delay={50}>
                        <p className="font-poppins font-normal text-[14px] leading-[20px] text-center" style={{ marginBottom: '32px', color: '#6B7280' }}>
                            {t('secProcSuperiority.subtitle')}
                        </p>
                    </AnimateOnScroll>
                    <div className="grid grid-cols-2 gap-6">
                        {superiorityData.map((item, index) => (
                            <MobileSuperiorityItem key={index} icon={item.mobileIcon} title={t(`secProcSuperiority.items.${index}.title`)} description={t(`secProcSuperiority.items.${index}.description`)} delay={index * 50} />
                        ))}
                    </div>
                </div>
            </section>

            {/* DESKTOP LAYOUT */}
            <section className="hidden lg:block relative" style={{ minWidth: '100%', paddingTop: '80px', paddingBottom: '100px' }}>
                <div className="absolute inset-0 z-0" style={{ background: 'linear-gradient(180deg, #F0F4F8 0%, #E8EEF4 50%, #F0F4F8 100%)', maskImage: 'linear-gradient(to bottom, transparent 0%, black 15px, black calc(100% - 15px), transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15px, black calc(100% - 15px), transparent 100%)' }} />
                <div className="absolute z-0" style={{ top: '40px', right: '80px', width: '200px', height: '200px', borderRadius: '50%', border: '1.5px solid rgba(0, 85, 164, 0.06)' }} />
                <div className="absolute z-0" style={{ bottom: '40px', left: '60px', width: '140px', height: '140px', borderRadius: '50%', border: '1.5px solid rgba(0, 85, 164, 0.06)' }} />

                <div className="relative z-10">
                    <AnimateOnScroll animation="fadeUp" delay={0}>
                        <h2 className="font-poppins font-bold text-center" style={{ fontSize: '52px', lineHeight: '64px', marginBottom: '8px' }}>
                            <span style={{ color: '#1a1a2e' }}>{t('secProcSuperiority.title1')}</span>
                            <span style={{ color: '#0055A4', position: 'relative' }}>
                                {t('secProcSuperiority.title2')}
                                <span style={{ position: 'absolute', bottom: '-4px', left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #0055A4, #3B82F6, transparent)', borderRadius: '2px' }} />
                            </span>
                        </h2>
                    </AnimateOnScroll>
                    <AnimateOnScroll animation="fadeUp" delay={100}>
                        <p className="font-poppins font-normal text-center" style={{ fontSize: '24px', lineHeight: '38px', color: '#6B7280', maxWidth: '700px', margin: '0 auto' }}>
                            {t('secProcSuperiority.subtitle')}
                        </p>
                    </AnimateOnScroll>
                    <div className="flex justify-center gap-0" style={{ marginTop: '80px' }}>
                        {superiorityData.map((item, index) => (
                            <SuperiorityItem key={index} icon={item.icon} title={t(`secProcSuperiority.items.${index}.title`)} description={t(`secProcSuperiority.items.${index}.description`)} delay={150 + index * 100} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
