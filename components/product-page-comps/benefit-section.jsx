import { AnimateOnScroll } from '@/components/animations/scroll-animations'

// Shield Icon Component (for Durability)
const ShieldIcon = () => (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 4.167L8.333 12.5V22.917C8.333 33.021 15.521 42.396 25 45.833C34.479 42.396 41.667 33.021 41.667 22.917V12.5L25 4.167ZM25 24.979H37.5C36.458 32.292 31.771 38.771 25 41.375V25H12.5V14.583L25 8.792V24.979Z" fill="white" />
    </svg>
)

// Goal/Target Icon Component (for Precision Tooling)
const GoalIcon = () => (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="25" r="20" stroke="white" strokeWidth="3" fill="none" />
        <circle cx="25" cy="25" r="13" stroke="white" strokeWidth="3" fill="none" />
        <circle cx="25" cy="25" r="6" fill="white" />
    </svg>
)

// Check Icon Component (for Stable Quality)
const CheckIcon = () => (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="25" r="20" stroke="white" strokeWidth="3" fill="none" />
        <path d="M15 25L22 32L35 18" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
)

// Customize Icon Component (for Full Customization)
const CustomizeIcon = () => (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="25" r="8" stroke="white" strokeWidth="3" fill="none" />
        <path d="M25 5V12M25 38V45M45 25H38M12 25H5M39 11L34 16M16 34L11 39M39 39L34 34M16 16L11 11" stroke="white" strokeWidth="3" strokeLinecap="round" />
    </svg>
)

// Mobile Icons
const MobileShieldIcon = () => (
    <svg width="32" height="32" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 4.167L8.333 12.5V22.917C8.333 33.021 15.521 42.396 25 45.833C34.479 42.396 41.667 33.021 41.667 22.917V12.5L25 4.167ZM25 24.979H37.5C36.458 32.292 31.771 38.771 25 41.375V25H12.5V14.583L25 8.792V24.979Z" fill="white" />
    </svg>
)

const MobileGoalIcon = () => (
    <svg width="32" height="32" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="25" r="18" stroke="white" strokeWidth="2.5" fill="none" />
        <circle cx="25" cy="25" r="11" stroke="white" strokeWidth="2.5" fill="none" />
        <circle cx="25" cy="25" r="5" fill="white" />
    </svg>
)

const MobileCheckIcon = () => (
    <svg width="32" height="32" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="25" r="18" stroke="white" strokeWidth="2.5" fill="none" />
        <path d="M15 25L22 32L35 18" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
)

const MobileCustomizeIcon = () => (
    <svg width="32" height="32" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="25" r="8" stroke="white" strokeWidth="2.5" fill="none" />
        <path d="M25 8V14M25 36V42M42 25H36M14 25H8M37 13L33 17M17 33L13 37M37 37L33 33M17 17L13 13" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
)

// Benefit Item Component for Desktop
function BenefitItem({ icon, title, description, delay = 0 }) {
    return (
        <AnimateOnScroll animation="fadeUp" delay={delay}>
            <div className="flex flex-col items-center text-center">
                {/* Eclipse with Icon */}
                <div
                    className="flex items-center justify-center"
                    style={{
                        width: '100px',
                        height: '100px',
                        backgroundColor: '#0055A4',
                        borderRadius: '50%',
                    }}
                >
                    {icon}
                </div>

                {/* Benefit Title */}
                <h3
                    className="font-poppins font-medium text-[20px] leading-[36px] text-black"
                    style={{
                        marginTop: '11px',
                        width: '366px',
                        height: '36px',
                    }}
                >
                    {title}
                </h3>

                {/* Benefit Description */}
                <p
                    className="font-poppins font-normal text-[18px] leading-[30px] text-black"
                    style={{
                        marginTop: '10px',
                        width: '262px',
                        height: '90px',
                    }}
                >
                    {description}
                </p>
            </div>
        </AnimateOnScroll>
    )
}

// Benefit Item Component for Mobile
function MobileBenefitItem({ icon, title, description, delay = 0 }) {
    return (
        <AnimateOnScroll animation="fadeUp" delay={delay}>
            <div className="flex flex-col items-center text-center">
                {/* Eclipse with Icon */}
                <div
                    className="flex items-center justify-center"
                    style={{
                        width: '60px',
                        height: '60px',
                        backgroundColor: '#0055A4',
                        borderRadius: '50%',
                    }}
                >
                    {icon}
                </div>

                {/* Benefit Title */}
                <h3
                    className="font-poppins font-medium text-[16px] leading-[24px] text-black"
                    style={{ marginTop: '8px' }}
                >
                    {title}
                </h3>

                {/* Benefit Description */}
                <p
                    className="font-poppins font-normal text-[14px] leading-[20px] text-black"
                    style={{ marginTop: '6px', maxWidth: '200px' }}
                >
                    {description}
                </p>
            </div>
        </AnimateOnScroll>
    )
}

// Benefits data with icons
const benefitsData = [
    {
        title: "Exceptional Durability",
        description: "Built to withstand extreme conditions and extended operational lifecycles.",
        icon: <ShieldIcon />,
        mobileIcon: <MobileShieldIcon />,
    },
    {
        title: "Precision Tooling",
        description: "Advanced CNC technology ensuring micron-level accuracy and consistency.",
        icon: <GoalIcon />,
        mobileIcon: <MobileGoalIcon />,
    },
    {
        title: "Stable Quality",
        description: "Rigorous quality control processes maintaining consistent excellence. description goes here with details.",
        icon: <CheckIcon />,
        mobileIcon: <MobileCheckIcon />,
    },
    {
        title: "Full Customization",
        description: "Tailored solutions designed to meet specific application requirements. description goes here with details.",
        icon: <CustomizeIcon />,
        mobileIcon: <MobileCustomizeIcon />,
    },
]

export default function BenefitSection() {
    return (
        <>
            {/* ===== MOBILE LAYOUT ===== */}
            <section
                className="lg:hidden relative"
                style={{
                    paddingLeft: '20px',
                    paddingRight: '20px',
                    paddingTop: '40px',
                    paddingBottom: '40px',
                }}
            >
                {/* Blurry Background */}
                <div
                    className="absolute inset-0 bg-[#D9D9D9] z-0"
                    style={{
                        maskImage: 'linear-gradient(to bottom, transparent 0%, black 10px, black calc(100% - 10px), transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10px, black calc(100% - 10px), transparent 100%)'
                    }}
                />

                {/* Content Wrapper */}
                <div className="relative z-10">
                    {/* Title */}
                    <AnimateOnScroll animation="fadeUp" delay={0}>
                        <h2
                            className="font-poppins font-semibold text-[24px] leading-[32px] text-center"
                            style={{ marginBottom: '8px' }}
                        >
                            <span className="text-black">Why Our </span>
                            <span className="text-[#0055A4]">Products</span>
                            <span className="text-black"> Stand Out</span>
                        </h2>
                    </AnimateOnScroll>

                    {/* Subtitle */}
                    <AnimateOnScroll animation="fadeUp" delay={50}>
                        <p
                            className="font-poppins font-normal text-[14px] leading-[20px] text-black text-center"
                            style={{ marginBottom: '32px' }}
                        >
                            Decades of manufacturing excellence delivering superior quality and performance.

                        </p>
                    </AnimateOnScroll>

                    {/* Benefits Grid */}
                    <div className="grid grid-cols-2 gap-6">
                        {benefitsData.map((benefit, index) => (
                            <MobileBenefitItem
                                key={index}
                                icon={benefit.mobileIcon}
                                title={benefit.title}
                                description={benefit.description}
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
                    minWidth: '1440px',
                    height: '775px',
                    paddingTop: '60px',
                }}
            >
                {/* Blurry Background */}
                <div
                    className="absolute inset-0 bg-[#D9D9D9] z-0"
                    style={{
                        maskImage: 'linear-gradient(to bottom, transparent 0%, black 10px, black calc(100% - 10px), transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10px, black calc(100% - 10px), transparent 100%)'
                    }}
                />

                {/* Content Wrapper */}
                <div className="relative z-10">
                    {/* Title */}
                    <h2
                        className="font-poppins font-semibold text-[56px] leading-[84px] text-center"
                        style={{
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            width: '818px',
                            height: '84px',
                        }}
                    >
                        <span className="text-black">Why Our </span>
                        <span className="text-[#0055A4]">Products</span>
                        <span className="text-black"> Stand Out</span>
                    </h2>
                    {/* <AnimateOnScroll animation="fadeUp" delay={0}>
                    </AnimateOnScroll> */}

                    {/* Subtitle */}
                    <p
                        className="font-poppins font-normal text-[32px] leading-[48px] text-black text-center"
                        style={{
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            marginTop: '7px',
                            width: '1133px',
                            height: '87px',
                        }}
                    >
                        Decades of manufacturing excellence delivering superior quality and performance.
                    </p>
                    {/* <AnimateOnScroll animation="fadeUp" delay={100}>
                    </AnimateOnScroll> */}

                    {/* Benefits Container */}
                    <div
                        className="flex justify-center gap-[8px]"
                        style={{
                            marginTop: '98px',
                        }}
                    >
                        {benefitsData.map((benefit, index) => (
                            <BenefitItem
                                key={index}
                                icon={benefit.icon}
                                title={benefit.title}
                                description={benefit.description}
                                delay={index * 100}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
