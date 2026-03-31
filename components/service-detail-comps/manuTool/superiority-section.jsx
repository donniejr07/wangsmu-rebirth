'use client'

import { AnimateOnScroll } from '@/components/animations/scroll-animations'

// ===== SVG ICON COMPONENTS =====

// Precision Engineering — crosshair/target icon
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

// Efficiency & Speed — lightning bolt icon
const SpeedIcon = ({ size = 50 }) => (
    <svg width={size} height={size} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28 4L10 28H24L22 46L40 22H26L28 4Z" fill="white" />
    </svg>
)

// Quality Assurance — shield with check
const QualityIcon = ({ size = 50 }) => (
    <svg width={size} height={size} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 4.167L8.333 12.5V22.917C8.333 33.021 15.521 42.396 25 45.833C34.479 42.396 41.667 33.021 41.667 22.917V12.5L25 4.167Z" stroke="white" strokeWidth="2.5" fill="none" />
        <path d="M16 25L22 31L34 19" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
)

// Long-term Value — diamond/gem icon
const ValueIcon = ({ size = 50 }) => (
    <svg width={size} height={size} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 45L5 20L12 8H38L45 20L25 45Z" stroke="white" strokeWidth="2.5" strokeLinejoin="round" fill="none" />
        <path d="M5 20H45" stroke="white" strokeWidth="2.5" />
        <path d="M25 45L18 20L12 8" stroke="white" strokeWidth="2" />
        <path d="M25 45L32 20L38 8" stroke="white" strokeWidth="2" />
        <path d="M18 20L25 8L32 20" stroke="white" strokeWidth="2" />
    </svg>
)

// Mobile-sized icons
const MobilePrecisionIcon = () => <PrecisionIcon size={32} />
const MobileSpeedIcon = () => <SpeedIcon size={32} />
const MobileQualityIcon = () => <QualityIcon size={32} />
const MobileValueIcon = () => <ValueIcon size={32} />

// ===== DATA =====
const superiorityData = [
    {
        title: 'Precision Engineering',
        description: 'Advanced CNC and EDM technology delivering micron-level accuracy for complex mold geometries.',
        icon: <PrecisionIcon />,
        mobileIcon: <MobilePrecisionIcon />,
    },
    {
        title: 'Efficiency & Speed',
        description: 'Optimized workflows and cutting-edge equipment ensuring rapid turnaround without compromising quality.',
        icon: <SpeedIcon />,
        mobileIcon: <MobileSpeedIcon />,
    },
    {
        title: 'Quality Assurance',
        description: 'Rigorous inspection protocols and ISO-certified processes maintaining consistent manufacturing excellence.',
        icon: <QualityIcon />,
        mobileIcon: <MobileQualityIcon />,
    },
    {
        title: 'Long-term Value',
        description: 'Durable tooling solutions built for extended lifecycles, maximizing your return on investment.',
        icon: <ValueIcon />,
        mobileIcon: <MobileValueIcon />,
    },
]

// ===== DESKTOP ITEM COMPONENT =====
function SuperiorityItem({ icon, title, description, delay = 0 }) {
    return (
        <AnimateOnScroll animation="fadeUp" delay={delay}>
            <div className="flex flex-col items-center text-center" style={{ position: 'relative' }}>
                {/* Icon circle with gradient + shadow */}
                <div
                    className="flex items-center justify-center"
                    style={{
                        width: '100px',
                        height: '100px',
                        background: 'linear-gradient(135deg, #0055A4 0%, #003D7A 100%)',
                        borderRadius: '50%',
                        boxShadow: '0 8px 24px rgba(0, 85, 164, 0.3)',
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

                {/* Title */}
                <h3
                    className="font-poppins font-semibold text-[20px] leading-[30px]"
                    style={{
                        marginTop: '18px',
                        color: '#1a1a2e',
                        width: '260px',
                    }}
                >
                    {title}
                </h3>

                {/* Description */}
                <p
                    className="font-poppins font-normal text-[16px] leading-[26px]"
                    style={{
                        marginTop: '10px',
                        width: '242px',
                        color: '#6B7280',
                    }}
                >
                    {description}
                </p>
            </div>
        </AnimateOnScroll>
    )
}

// ===== MOBILE ITEM COMPONENT =====
function MobileSuperiorityItem({ icon, title, description, delay = 0 }) {
    return (
        <AnimateOnScroll animation="fadeUp" delay={delay}>
            <div className="flex flex-col items-center text-center">
                {/* Icon circle */}
                <div
                    className="flex items-center justify-center"
                    style={{
                        width: '60px',
                        height: '60px',
                        background: 'linear-gradient(135deg, #0055A4 0%, #003D7A 100%)',
                        borderRadius: '50%',
                        boxShadow: '0 4px 16px rgba(0, 85, 164, 0.3)',
                    }}
                >
                    {icon}
                </div>

                {/* Title */}
                <h3
                    className="font-poppins font-semibold text-[15px] leading-[22px]"
                    style={{ marginTop: '12px', color: '#1a1a2e' }}
                >
                    {title}
                </h3>

                {/* Description */}
                <p
                    className="font-poppins font-normal text-[13px] leading-[20px]"
                    style={{ marginTop: '6px', maxWidth: '160px', color: '#6B7280' }}
                >
                    {description}
                </p>
            </div>
        </AnimateOnScroll>
    )
}

// ===== MAIN COMPONENT =====
export default function SuperioritySection() {
    return (
        <>
            {/* ===== MOBILE LAYOUT ===== */}
            <section
                className="lg:hidden relative"
                style={{
                    paddingLeft: '20px',
                    paddingRight: '20px',
                    paddingTop: '50px',
                    paddingBottom: '50px',
                }}
            >
                {/* Background */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background: 'linear-gradient(180deg, #F0F4F8 0%, #E8EEF4 50%, #F0F4F8 100%)',
                        maskImage: 'linear-gradient(to bottom, transparent 0%, black 10px, black calc(100% - 10px), transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10px, black calc(100% - 10px), transparent 100%)',
                    }}
                />

                {/* Content */}
                <div className="relative z-10">
                    {/* Title */}
                    <AnimateOnScroll animation="fadeUp" delay={0}>
                        <h2
                            className="font-poppins font-bold text-[24px] leading-[32px] text-center"
                            style={{ marginBottom: '8px' }}
                        >
                            <span style={{ color: '#1a1a2e' }}>Our </span>
                            <span style={{ color: '#0055A4' }}>Superiority</span>
                        </h2>
                    </AnimateOnScroll>

                    {/* Subtitle */}
                    <AnimateOnScroll animation="fadeUp" delay={50}>
                        <p
                            className="font-poppins font-normal text-[14px] leading-[20px] text-center"
                            style={{ marginBottom: '32px', color: '#6B7280' }}
                        >
                            What sets our manufacturing tooling apart from the competition.
                        </p>
                    </AnimateOnScroll>

                    {/* Benefits Grid */}
                    <div className="grid grid-cols-2 gap-6">
                        {superiorityData.map((item, index) => (
                            <MobileSuperiorityItem
                                key={index}
                                icon={item.mobileIcon}
                                title={item.title}
                                description={item.description}
                                delay={index * 50}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== DESKTOP LAYOUT ===== */}
            <section
                className="hidden lg:block relative"
                style={{
                    minWidth: '100%',
                    paddingTop: '80px',
                    paddingBottom: '100px',
                }}
            >
                {/* Background with gradient */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background: 'linear-gradient(180deg, #F0F4F8 0%, #E8EEF4 50%, #F0F4F8 100%)',
                        maskImage: 'linear-gradient(to bottom, transparent 0%, black 15px, black calc(100% - 15px), transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15px, black calc(100% - 15px), transparent 100%)',
                    }}
                />

                {/* Decorative elements */}
                <div
                    className="absolute z-0"
                    style={{
                        top: '40px',
                        right: '80px',
                        width: '200px',
                        height: '200px',
                        borderRadius: '50%',
                        border: '1.5px solid rgba(0, 85, 164, 0.06)',
                    }}
                />
                <div
                    className="absolute z-0"
                    style={{
                        bottom: '40px',
                        left: '60px',
                        width: '140px',
                        height: '140px',
                        borderRadius: '50%',
                        border: '1.5px solid rgba(0, 85, 164, 0.06)',
                    }}
                />

                {/* Content */}
                <div className="relative z-10">
                    {/* Title */}
                    <AnimateOnScroll animation="fadeUp" delay={0}>
                        <h2
                            className="font-poppins font-bold text-center"
                            style={{
                                fontSize: '52px',
                                lineHeight: '64px',
                                marginBottom: '8px',
                            }}
                        >
                            <span style={{ color: '#1a1a2e' }}>Our </span>
                            <span
                                style={{
                                    color: '#0055A4',
                                    position: 'relative',
                                }}
                            >
                                Superiority
                                <span
                                    style={{
                                        position: 'absolute',
                                        bottom: '-4px',
                                        left: 0,
                                        right: 0,
                                        height: '4px',
                                        background: 'linear-gradient(90deg, #0055A4, #3B82F6, transparent)',
                                        borderRadius: '2px',
                                    }}
                                />
                            </span>
                        </h2>
                    </AnimateOnScroll>

                    {/* Subtitle */}
                    <AnimateOnScroll animation="fadeUp" delay={100}>
                        <p
                            className="font-poppins font-normal text-center"
                            style={{
                                fontSize: '24px',
                                lineHeight: '38px',
                                color: '#6B7280',
                                maxWidth: '700px',
                                margin: '0 auto',
                            }}
                        >
                            What sets our manufacturing tooling apart from the competition.
                        </p>
                    </AnimateOnScroll>

                    {/* Superiority Items */}
                    <div
                        className="flex justify-center gap-0"
                        style={{ marginTop: '80px' }}
                    >
                        {superiorityData.map((item, index) => (
                            <SuperiorityItem
                                key={index}
                                icon={item.icon}
                                title={item.title}
                                description={item.description}
                                delay={150 + index * 100}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
