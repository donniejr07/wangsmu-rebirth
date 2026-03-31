'use client'

import { AnimateOnScroll } from '@/components/animations/scroll-animations'

// ===== SVG ICONS =====

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

// Flexibility in Design — design/bezier icon
const DesignIcon = ({ size = 50 }) => (
    <svg width={size} height={size} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 38C12 25 38 25 38 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <circle cx="12" cy="38" r="4" stroke="white" strokeWidth="2.5" fill="none" />
        <circle cx="38" cy="12" r="4" stroke="white" strokeWidth="2.5" fill="none" />
        <line x1="12" y1="38" x2="22" y2="38" stroke="white" strokeWidth="2" strokeDasharray="3 3" />
        <line x1="38" y1="12" x2="28" y2="12" stroke="white" strokeWidth="2" strokeDasharray="3 3" />
    </svg>
)

// Efficient Production — lightning bolt icon
const EfficientIcon = ({ size = 50 }) => (
    <svg width={size} height={size} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28 6L10 28H24L22 46L40 22H26L28 6Z" fill="none" stroke="white" strokeWidth="2.5" strokeLinejoin="round" />
    </svg>
)

// Material Expertise — flask/beaker icon
const MaterialIcon = ({ size = 50 }) => (
    <svg width={size} height={size} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 6v14L8 38c-1.3 2.1.2 4.8 2.7 4.8h28.6c2.5 0 4-2.7 2.7-4.8L31 20V6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <line x1="16" y1="6" x2="34" y2="6" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M12 32h26" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <circle cx="22" cy="36" r="2" fill="white" />
        <circle cx="30" cy="34" r="1.5" fill="white" />
    </svg>
)

// Mobile icons
const MobilePrecisionIcon = () => <PrecisionIcon size={32} />
const MobileDesignIcon = () => <DesignIcon size={32} />
const MobileEfficientIcon = () => <EfficientIcon size={32} />
const MobileMaterialIcon = () => <MaterialIcon size={32} />

// ===== DATA =====
const superiorityData = [
    {
        title: 'Precision and Consistency',
        description: 'Delivering micron-level accuracy and repeatability across millions of molded parts.',
        icon: <PrecisionIcon />,
        mobileIcon: <MobilePrecisionIcon />,
    },
    {
        title: 'Flexibility in Design',
        description: 'Accommodating complex geometries and custom requirements with agile production adaptations.',
        icon: <DesignIcon />,
        mobileIcon: <MobileDesignIcon />,
    },
    {
        title: 'Efficient Production',
        description: 'Optimized injection cycles and automated workflows for faster turnaround times.',
        icon: <EfficientIcon />,
        mobileIcon: <MobileEfficientIcon />,
    },
    {
        title: 'Material Expertise',
        description: 'Deep knowledge of engineering plastics and specialty resins for optimal performance.',
        icon: <MaterialIcon />,
        mobileIcon: <MobileMaterialIcon />,
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
                <h3
                    className="font-poppins font-semibold text-[20px] leading-[30px]"
                    style={{ marginTop: '18px', color: '#1a1a2e', width: '260px' }}
                >
                    {title}
                </h3>
                <p
                    className="font-poppins font-normal text-[16px] leading-[26px]"
                    style={{ marginTop: '10px', width: '242px', color: '#6B7280' }}
                >
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
                <div
                    className="flex items-center justify-center"
                    style={{
                        width: '60px', height: '60px',
                        background: 'linear-gradient(135deg, #0055A4 0%, #003D7A 100%)',
                        borderRadius: '50%',
                        boxShadow: '0 4px 16px rgba(0, 85, 164, 0.3)',
                    }}
                >
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
    return (
        <>
            {/* MOBILE LAYOUT */}
            <section
                className="lg:hidden relative"
                style={{ paddingLeft: '20px', paddingRight: '20px', paddingTop: '50px', paddingBottom: '50px' }}
            >
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background: 'linear-gradient(180deg, #F0F4F8 0%, #E8EEF4 50%, #F0F4F8 100%)',
                        maskImage: 'linear-gradient(to bottom, transparent 0%, black 10px, black calc(100% - 10px), transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10px, black calc(100% - 10px), transparent 100%)',
                    }}
                />

                <div className="relative z-10">
                    <AnimateOnScroll animation="fadeUp" delay={0}>
                        <h2 className="font-poppins font-bold text-[24px] leading-[32px] text-center" style={{ marginBottom: '8px' }}>
                            <span style={{ color: '#1a1a2e' }}>Our </span>
                            <span style={{ color: '#0055A4' }}>Superiority</span>
                        </h2>
                    </AnimateOnScroll>

                    <AnimateOnScroll animation="fadeUp" delay={50}>
                        <p className="font-poppins font-normal text-[14px] leading-[20px] text-center" style={{ marginBottom: '32px', color: '#6B7280' }}>
                            What makes our plastic injection molding stand above the rest.
                        </p>
                    </AnimateOnScroll>

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

            {/* DESKTOP LAYOUT */}
            <section
                className="hidden lg:block relative"
                style={{ minWidth: '100%', paddingTop: '80px', paddingBottom: '100px' }}
            >
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background: 'linear-gradient(180deg, #F0F4F8 0%, #E8EEF4 50%, #F0F4F8 100%)',
                        maskImage: 'linear-gradient(to bottom, transparent 0%, black 15px, black calc(100% - 15px), transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15px, black calc(100% - 15px), transparent 100%)',
                    }}
                />

                {/* Decorative */}
                <div className="absolute z-0" style={{ top: '40px', right: '80px', width: '200px', height: '200px', borderRadius: '50%', border: '1.5px solid rgba(0, 85, 164, 0.06)' }} />
                <div className="absolute z-0" style={{ bottom: '40px', left: '60px', width: '140px', height: '140px', borderRadius: '50%', border: '1.5px solid rgba(0, 85, 164, 0.06)' }} />

                <div className="relative z-10">
                    <AnimateOnScroll animation="fadeUp" delay={0}>
                        <h2 className="font-poppins font-bold text-center" style={{ fontSize: '52px', lineHeight: '64px', marginBottom: '8px' }}>
                            <span style={{ color: '#1a1a2e' }}>Our </span>
                            <span style={{ color: '#0055A4', position: 'relative' }}>
                                Superiority
                                <span style={{ position: 'absolute', bottom: '-4px', left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #0055A4, #3B82F6, transparent)', borderRadius: '2px' }} />
                            </span>
                        </h2>
                    </AnimateOnScroll>

                    <AnimateOnScroll animation="fadeUp" delay={100}>
                        <p className="font-poppins font-normal text-center" style={{ fontSize: '24px', lineHeight: '38px', color: '#6B7280', maxWidth: '700px', margin: '0 auto' }}>
                            What makes our plastic injection molding stand above the rest.
                        </p>
                    </AnimateOnScroll>

                    <div className="flex justify-center gap-0" style={{ marginTop: '80px' }}>
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
