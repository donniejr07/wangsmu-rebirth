'use client'

import Image from 'next/image'
import { AnimateOnScroll } from '@/components/animations/scroll-animations'
import { useLanguage } from '@/context/language-context'

// Mobile Card Component
function MobileCard({ icon, title, description, variant = 'blue', delay = 0 }) {
    const isWhite = variant === 'white'

    return (
        <AnimateOnScroll animation="fadeUp" delay={delay}>
            <div
                className="relative overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
                style={{
                    width: '100%',
                    minHeight: '100px',
                    backgroundColor: isWhite ? '#FFFFFF' : '#0055A4',
                    borderRadius: '12px',
                    border: isWhite ? '2px solid #0055A4' : 'none',
                    padding: '12px',
                }}
            >
                {/* Background Image - only for blue variant */}
                {!isWhite && (
                    <div className="absolute inset-0 rounded-[12px] overflow-hidden">
                        <Image
                            src="/images/bg advantages.jpg"
                            alt="Card Background"
                            fill
                            className="object-cover opacity-30"
                        />
                    </div>
                )}

                {/* Content */}
                <div className="relative z-10 flex gap-3">
                    {/* Icon Box */}
                    <div className="w-[38px] h-[38px] bg-[#D9D9D9] rounded-[10px] flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                        {icon}
                    </div>

                    {/* Text Content */}
                    <div className="flex-1">
                        <h3 className={`font-poppins font-semibold text-[14px] leading-[18px] ${isWhite ? 'text-[#0055A4]' : 'text-white'}`} style={{ marginBottom: '4px' }}>
                            {title}
                        </h3>
                        <p className={`font-poppins font-normal text-[12px] leading-[16px] ${isWhite ? 'text-[#0055A4]' : 'text-white'}`}>
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </AnimateOnScroll>
    )
}

// Desktop Card Component
function DesktopCard({ icon, title, description, variant = 'blue', titleOffset = 0, delay = 0 }) {
    const isWhite = variant === 'white'

    return (
        <AnimateOnScroll animation="fadeUp" delay={delay}>
            <div
                className={`
                    relative overflow-hidden flex-shrink-0 cursor-pointer
                    transition-all duration-300 ease-out
                    hover:-translate-y-2 hover:shadow-2xl
                    ${isWhite
                        ? 'hover:shadow-[#0055A4]/30 hover:border-[#0055A4]'
                        : 'hover:shadow-[#0055A4]/50'
                    }
                    group
                `}
                style={{
                    width: '350px',
                    height: '220px',
                    backgroundColor: isWhite ? '#FFFFFF' : '#0055A4',
                    borderRadius: '20px',
                    border: isWhite ? '2px solid #0055A4' : 'none',
                }}
            >
                {/* Background Image with 30% opacity - only for blue variant */}
                {!isWhite && (
                    <div className="absolute inset-0 rounded-[20px] overflow-hidden">
                        <Image
                            src="/images/bg advantages.jpg"
                            alt="Card Background"
                            fill
                            className="object-cover opacity-30"
                        />
                    </div>
                )}

                {/* Icon Rectangle Background */}
                <div
                    className="absolute bg-[#D9D9D9] rounded-[15px] transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                    style={{
                        left: '22px',
                        top: '20px',
                        width: '55px',
                        height: '55px',
                    }}
                />

                {/* Icon */}
                {icon}

                {/* Title */}
                <h3
                    className={`absolute font-poppins font-semibold text-[24px] leading-[36px] ${isWhite ? 'text-[#0055A4]' : 'text-white'}`}
                    style={{
                        left: '100px',
                        top: `${27 + titleOffset}px`,
                        width: '239px',
                        height: '50px',
                    }}
                >
                    {title}
                </h3>

                {/* Description */}
                <p
                    className={`absolute font-poppins font-semibold text-[16px] leading-[24px] ${isWhite ? 'text-[#0055A4]' : 'text-white'}`}
                    style={{
                        left: '22px',
                        top: '93px',
                        width: '304px',
                        height: '72px',
                    }}
                >
                    {description}
                </p>
            </div>
        </AnimateOnScroll>
    )
}

// Mobile Icons (smaller, no absolute positioning)
const MobileStarIcon = () => (
    <svg width="28" height="28" viewBox="0 0 50 50" fill="none">
        <path d="M25 2 L31 18 L48 18 L35 29 L40 46 L25 36 L10 46 L15 29 L2 18 L19 18 Z" fill="#0055A4" />
    </svg>
)

const MobilePrecisionIcon = () => (
    <svg width="28" height="28" viewBox="0 0 50 50" fill="none" stroke="#0055A4" strokeWidth="2">
        <circle cx="25" cy="25" r="20" />
        <circle cx="25" cy="25" r="12" />
        <circle cx="25" cy="25" r="4" fill="#0055A4" />
        <line x1="25" y1="2" x2="25" y2="12" />
        <line x1="25" y1="38" x2="25" y2="48" />
        <line x1="2" y1="25" x2="12" y2="25" />
        <line x1="38" y1="25" x2="48" y2="25" />
    </svg>
)

const MobileClockIcon = () => (
    <svg width="28" height="28" viewBox="0 0 50 50" fill="none" stroke="#0055A4" strokeWidth="2">
        <circle cx="25" cy="25" r="22" />
        <circle cx="25" cy="25" r="2" fill="#0055A4" />
        <line x1="25" y1="25" x2="25" y2="12" strokeWidth="3" />
        <line x1="25" y1="25" x2="35" y2="30" strokeWidth="2" />
    </svg>
)

const MobileCertifiedIcon = () => (
    <svg width="28" height="28" viewBox="0 0 50 50" fill="#0055A4">
        <circle cx="25" cy="18" r="15" />
        <path d="M18 30 L18 48 L25 42 L32 48 L32 30" />
        <path d="M20 16 L23 22 L30 22 L24 26 L26 32 L20 28 L14 32 L16 26 L10 22 L17 22 Z" fill="#D9D9D9" />
    </svg>
)

const MobileSupportIcon = () => (
    <svg width="28" height="28" viewBox="0 0 50 50" fill="none" stroke="#0055A4" strokeWidth="2">
        <path d="M10 25 C10 14, 18 6, 25 6 C32 6, 40 14, 40 25" />
        <rect x="6" y="24" width="8" height="14" rx="3" fill="#0055A4" />
        <rect x="36" y="24" width="8" height="14" rx="3" fill="#0055A4" />
    </svg>
)

const MobileScalableIcon = () => (
    <svg width="28" height="28" viewBox="0 0 50 50" fill="#0055A4">
        <rect x="6" y="32" width="8" height="14" rx="2" />
        <rect x="18" y="24" width="8" height="22" rx="2" />
        <rect x="30" y="16" width="8" height="30" rx="2" />
        <rect x="42" y="8" width="6" height="38" rx="2" />
    </svg>
)

// Desktop Icons (with absolute positioning)
const StarIcon = () => (
    <svg className="absolute" style={{ left: '32px', top: '30px', width: '35px', height: '35px' }} viewBox="0 0 50 50" fill="none">
        <path d="M25 2 L31 18 L48 18 L35 29 L40 46 L25 36 L10 46 L15 29 L2 18 L19 18 Z" fill="#0055A4" />
    </svg>
)

const PrecisionIcon = () => (
    <svg className="absolute" style={{ left: '32px', top: '30px', width: '35px', height: '35px' }} viewBox="0 0 50 50" fill="none" stroke="#0055A4" strokeWidth="2">
        <circle cx="25" cy="25" r="20" />
        <circle cx="25" cy="25" r="12" />
        <circle cx="25" cy="25" r="4" fill="#0055A4" />
        <line x1="25" y1="2" x2="25" y2="12" />
        <line x1="25" y1="38" x2="25" y2="48" />
        <line x1="2" y1="25" x2="12" y2="25" />
        <line x1="38" y1="25" x2="48" y2="25" />
    </svg>
)

const ClockIcon = () => (
    <svg className="absolute" style={{ left: '32px', top: '30px', width: '35px', height: '35px' }} viewBox="0 0 50 50" fill="none" stroke="#0055A4" strokeWidth="2">
        <circle cx="25" cy="25" r="22" />
        <circle cx="25" cy="25" r="2" fill="#0055A4" />
        <line x1="25" y1="25" x2="25" y2="12" strokeWidth="3" />
        <line x1="25" y1="25" x2="35" y2="30" strokeWidth="2" />
        <path d="M38 8 L42 4 L46 8" fill="none" />
    </svg>
)

const CertifiedIcon = () => (
    <svg className="absolute" style={{ left: '32px', top: '30px', width: '35px', height: '35px' }} viewBox="0 0 50 50" fill="#0055A4">
        <circle cx="25" cy="18" r="15" />
        <path d="M18 30 L18 48 L25 42 L32 48 L32 30" />
        <path d="M20 16 L23 22 L30 22 L24 26 L26 32 L20 28 L14 32 L16 26 L10 22 L17 22 Z" fill="#D9D9D9" />
    </svg>
)

const SupportIcon = () => (
    <svg className="absolute" style={{ left: '32px', top: '30px', width: '35px', height: '35px' }} viewBox="0 0 50 50" fill="none" stroke="#0055A4" strokeWidth="2">
        <path d="M10 25 C10 14, 18 6, 25 6 C32 6, 40 14, 40 25" />
        <rect x="6" y="24" width="8" height="14" rx="3" fill="#0055A4" />
        <rect x="36" y="24" width="8" height="14" rx="3" fill="#0055A4" />
        <path d="M40 38 C40 42, 35 44, 30 44 L28 44" />
        <rect x="24" y="42" width="8" height="5" rx="2" fill="#0055A4" />
    </svg>
)

const ScalableIcon = () => (
    <svg className="absolute" style={{ left: '32px', top: '30px', width: '35px', height: '35px' }} viewBox="0 0 50 50" fill="#0055A4">
        <rect x="6" y="32" width="8" height="14" rx="2" />
        <rect x="18" y="24" width="8" height="22" rx="2" />
        <rect x="30" y="16" width="8" height="30" rx="2" />
        <rect x="42" y="8" width="6" height="38" rx="2" />
        <path d="M8 28 L22 18 L34 10 L44 4" stroke="#0055A4" strokeWidth="2" fill="none" />
        <circle cx="44" cy="4" r="3" />
    </svg>
)

export default function WhyChooseUsSection() {
    const { t } = useLanguage()

    // Card data inside component to use t()
    const cardsData = [
        { title: t('aboutPage.whyUs.cards.quality.title'), description: t('aboutPage.whyUs.cards.quality.desc'), variant: "blue" },
        { title: t('aboutPage.whyUs.cards.precision.title'), description: t('aboutPage.whyUs.cards.precision.desc'), variant: "blue", titleOffset: -8 },
        { title: t('aboutPage.whyUs.cards.delivery.title'), description: t('aboutPage.whyUs.cards.delivery.desc'), variant: "blue" },
        { title: t('aboutPage.whyUs.cards.certified.title'), description: t('aboutPage.whyUs.cards.certified.desc'), variant: "white" },
        { title: t('aboutPage.whyUs.cards.support.title'), description: t('aboutPage.whyUs.cards.support.desc'), variant: "white" },
        { title: t('aboutPage.whyUs.cards.scalable.title'), description: t('aboutPage.whyUs.cards.scalable.desc'), variant: "white" },
    ]

    const mobileIcons = [<MobileStarIcon />, <MobilePrecisionIcon />, <MobileClockIcon />, <MobileCertifiedIcon />, <MobileSupportIcon />, <MobileScalableIcon />]
    const desktopIcons = [<StarIcon />, <PrecisionIcon />, <ClockIcon />, <CertifiedIcon />, <SupportIcon />, <ScalableIcon />]

    return (
        <>
            {/* ===== MOBILE LAYOUT ===== */}
            <section className="lg:hidden relative w-full" style={{ paddingLeft: '24px', paddingRight: '24px', paddingTop: '32px', paddingBottom: '32px' }}>
                {/* Title */}
                <AnimateOnScroll animation="fadeUp" delay={0}>
                    <h2 className="font-poppins font-semibold text-[28px] leading-[36px] text-center" style={{ marginBottom: '12px' }}>
                        <span className="text-black">{t('aboutPage.whyUs.title1')}</span>
                        <span className="text-[#0055A4]">{t('aboutPage.whyUs.title2')}</span>
                        <span className="text-black">{t('aboutPage.whyUs.title3')}</span>
                    </h2>
                </AnimateOnScroll>

                {/* Description */}
                <AnimateOnScroll animation="fadeUp" delay={50}>
                    <p className="font-poppins font-normal text-[14px] leading-[20px] text-black text-center" style={{ marginBottom: '24px' }}>
                        {t('aboutPage.whyUs.subtitle')}
                    </p>
                </AnimateOnScroll>

                {/* Cards */}
                <div className="flex flex-col gap-4">
                    {cardsData.map((card, index) => (
                        <MobileCard
                            key={index}
                            icon={mobileIcons[index]}
                            title={card.title}
                            description={card.description}
                            variant={card.variant}
                            delay={index * 50}
                        />
                    ))}
                </div>
            </section>

            {/* ===== DESKTOP LAYOUT ===== */}
            <section className="hidden lg:block relative w-full" style={{ paddingTop: '43px' }}>
                {/* Title */}
                <AnimateOnScroll animation="fadeUp" delay={0}>
                    <h2
                        className="font-poppins font-semibold text-[60px] leading-[73px] text-center"
                        style={{
                            width: '100%',
                        }}
                    >
                        <span className="text-black">{t('aboutPage.whyUs.title1')}</span>
                        <span className="text-[#0055A4]">{t('aboutPage.whyUs.title2')}</span>
                        <span className="text-black">{t('aboutPage.whyUs.title3')}</span>
                    </h2>
                </AnimateOnScroll>

                {/* Description */}
                <AnimateOnScroll animation="fadeUp" delay={100}>
                    <p
                        className="font-poppins font-normal text-[24px] leading-[36px] text-black text-center"
                        style={{
                            width: '100%',
                            marginTop: '23px',
                        }}
                    >
                        {t('aboutPage.whyUs.subtitle')}
                    </p>
                </AnimateOnScroll>

                {/* Cards Container */}
                <div
                    className="flex flex-wrap justify-center gap-[30px]"
                    style={{
                        marginTop: '40px',
                        maxWidth: '1140px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                    }}
                >
                    {cardsData.map((card, index) => (
                        <DesktopCard
                            key={index}
                            icon={desktopIcons[index]}
                            title={card.title}
                            description={card.description}
                            variant={card.variant}
                            titleOffset={card.titleOffset || 0}
                            delay={index * 100}
                        />
                    ))}
                </div>
            </section>
        </>
    )
}
