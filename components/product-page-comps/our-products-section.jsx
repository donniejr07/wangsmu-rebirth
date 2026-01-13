import Image from 'next/image'
import { AnimateOnScroll } from '@/components/animations/scroll-animations'

// Car Icon Component
const CarIcon = () => (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M41.667 20.833H39.583L35.417 10.417C34.792 8.75 33.125 7.5 31.25 7.5H18.75C16.875 7.5 15.208 8.75 14.583 10.417L10.417 20.833H8.333C6.458 20.833 5 22.292 5 24.167V35.417C5 37.292 6.458 38.75 8.333 38.75H10.417V41.667C10.417 43.542 11.875 45 13.75 45H16.667C18.542 45 20 43.542 20 41.667V38.75H30V41.667C30 43.542 31.458 45 33.333 45H36.25C38.125 45 39.583 43.542 39.583 41.667V38.75H41.667C43.542 38.75 45 37.292 45 35.417V24.167C45 22.292 43.542 20.833 41.667 20.833ZM16.667 31.25C14.792 31.25 13.333 29.792 13.333 27.917C13.333 26.042 14.792 24.583 16.667 24.583C18.542 24.583 20 26.042 20 27.917C20 29.792 18.542 31.25 16.667 31.25ZM33.333 31.25C31.458 31.25 30 29.792 30 27.917C30 26.042 31.458 24.583 33.333 24.583C35.208 24.583 36.667 26.042 36.667 27.917C36.667 29.792 35.208 31.25 33.333 31.25ZM13.333 18.75L16.667 10.417C16.875 9.792 17.5 9.375 18.125 9.375H31.875C32.5 9.375 33.125 9.792 33.333 10.417L36.667 18.75H13.333Z" fill="#0055A4" />
    </svg>
)

// Mobile Car Icon (smaller)
const MobileCarIcon = () => (
    <svg width="32" height="32" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M41.667 20.833H39.583L35.417 10.417C34.792 8.75 33.125 7.5 31.25 7.5H18.75C16.875 7.5 15.208 8.75 14.583 10.417L10.417 20.833H8.333C6.458 20.833 5 22.292 5 24.167V35.417C5 37.292 6.458 38.75 8.333 38.75H10.417V41.667C10.417 43.542 11.875 45 13.75 45H16.667C18.542 45 20 43.542 20 41.667V38.75H30V41.667C30 43.542 31.458 45 33.333 45H36.25C38.125 45 39.583 43.542 39.583 41.667V38.75H41.667C43.542 38.75 45 37.292 45 35.417V24.167C45 22.292 43.542 20.833 41.667 20.833ZM16.667 31.25C14.792 31.25 13.333 29.792 13.333 27.917C13.333 26.042 14.792 24.583 16.667 24.583C18.542 24.583 20 26.042 20 27.917C20 29.792 18.542 31.25 16.667 31.25ZM33.333 31.25C31.458 31.25 30 29.792 30 27.917C30 26.042 31.458 24.583 33.333 24.583C35.208 24.583 36.667 26.042 36.667 27.917C36.667 29.792 35.208 31.25 33.333 31.25ZM13.333 18.75L16.667 10.417C16.875 9.792 17.5 9.375 18.125 9.375H31.875C32.5 9.375 33.125 9.792 33.333 10.417L36.667 18.75H13.333Z" fill="#0055A4" />
    </svg>
)

// Product Card Component for Desktop
function ProductCard({ imageSrc, title, description, delay = 0 }) {
    return (
        <AnimateOnScroll animation="fadeUp" delay={delay}>
            <div
                className="relative cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                style={{
                    width: '350px',
                    height: '450px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #0055A4',
                    borderRadius: '20px',
                }}
            >
                {/* Product Image */}
                <div
                    className="relative overflow-hidden"
                    style={{
                        position: 'absolute',
                        top: '20px',
                        left: '35px',
                        width: '280px',
                        height: '165px',
                        borderRadius: '20px',
                    }}
                >
                    <Image
                        src={imageSrc || "/images/news.jpg"}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Car Icon */}
                <div
                    style={{
                        position: 'absolute',
                        top: '205px',
                        left: '35px',
                        width: '50px',
                        height: '50px',
                    }}
                >
                    <CarIcon />
                </div>

                {/* Card Title */}
                <h3
                    className="font-poppins font-semibold text-[24px] text-[#0055A4]"
                    style={{
                        position: 'absolute',
                        top: '200px',
                        left: '95px',
                        width: '174px',
                        height: '52px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    {title}
                </h3>

                {/* Card Description */}
                <p
                    className="font-poppins font-normal text-[20px] leading-[28px] text-black"
                    style={{
                        position: 'absolute',
                        top: '274px',
                        left: '35px',
                        width: '280px',
                        height: '150px',
                    }}
                >
                    {description}
                </p>
            </div>
        </AnimateOnScroll>
    )
}

// Product Card Component for Mobile
function MobileProductCard({ imageSrc, title, description, delay = 0 }) {
    return (
        <AnimateOnScroll animation="fadeUp" delay={delay}>
            <div
                className="relative cursor-pointer transition-all duration-300 hover:shadow-lg"
                style={{
                    width: '100%',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #0055A4',
                    borderRadius: '16px',
                    padding: '16px',
                }}
            >
                {/* Product Image */}
                <div
                    className="relative overflow-hidden"
                    style={{
                        width: '100%',
                        height: '140px',
                        borderRadius: '12px',
                        marginBottom: '12px',
                    }}
                >
                    <Image
                        src={imageSrc || "/images/placeholder-product.jpg"}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Icon and Title Row */}
                <div className="flex items-center gap-2" style={{ marginBottom: '8px' }}>
                    <MobileCarIcon />
                    <h3 className="font-poppins font-semibold text-[18px] text-[#0055A4]">
                        {title}
                    </h3>
                </div>

                {/* Card Description */}
                <p className="font-poppins font-normal text-[14px] leading-[20px] text-black">
                    {description}
                </p>
            </div>
        </AnimateOnScroll>
    )
}

// Sample product data
const productsData = [
    {
        imageSrc: "/images/platting-wsu.png",
        title: "Automotive Components",
        description: "High-precision automotive parts manufactured to exact specifications for optimal performance and safety.",
    },
    {
        imageSrc: "/images/platting-wsu.png",
        title: "Electronics Part",
        description: "Advanced electronic components engineered for reliability in demanding technological applications.",
    },
    {
        imageSrc: "/images/platting-wsu.png",
        title: "Industrial Components",
        description: "Robust machinery components built to withstand harsh industrial environments and heavy usage.",
    },
]

export default function OurProductsSection() {
    return (
        <>
            {/* ===== MOBILE LAYOUT ===== */}
            <section className="lg:hidden" style={{ paddingLeft: '20px', paddingRight: '20px', paddingTop: '40px', paddingBottom: '40px' }}>
                {/* Title */}
                <AnimateOnScroll animation="fadeUp" delay={0}>
                    <h2
                        className="font-poppins font-semibold text-[28px] leading-[36px] text-center"
                        style={{ marginBottom: '8px' }}
                    >
                        <span className="text-black">Our </span>
                        <span className="text-[#0055A4]">Products</span>
                    </h2>
                </AnimateOnScroll>

                {/* Subtitle */}
                <AnimateOnScroll animation="fadeUp" delay={50}>
                    <p
                        className="font-poppins font-normal text-[14px] leading-[20px] text-black text-center"
                        style={{ marginBottom: '24px' }}
                    >
                        Comprehensive range of precision-engineered components designed to meet the highest industry standards.
                    </p>
                </AnimateOnScroll>

                {/* Product Cards */}
                <div className="flex flex-col gap-4">
                    {productsData.map((product, index) => (
                        <MobileProductCard
                            key={index}
                            imageSrc={product.imageSrc}
                            title={product.title}
                            description={product.description}
                            delay={index * 50}
                        />
                    ))}
                </div>
            </section>

            {/* ===== DESKTOP LAYOUT ===== */}
            <section
                className="hidden lg:block relative"
                style={{
                    minWidth: '1440px',
                    paddingTop: '77px',
                }}
            >
                {/* Title Group */}
                <div className="text-center">
                    {/* Title */}
                    <AnimateOnScroll animation="fadeUp" delay={0}>
                        <h2
                            className="font-poppins font-semibold text-[56px] leading-[84px]"
                            style={{
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                width: '371px',
                                height: '84px',
                            }}
                        >
                            <span className="text-black">Our </span>
                            <span className="text-[#0055A4]">Products</span>
                        </h2>
                    </AnimateOnScroll>

                    {/* Subtitle */}
                    <AnimateOnScroll animation="fadeUp" delay={100}>
                        <p
                            className="font-poppins font-normal text-[32px] leading-[48px] text-black"
                            style={{
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                marginTop: '7px',
                                width: '1133px',
                                height: '100px',
                            }}
                        >
                            Comprehensive range of precision-engineered components designed to meet the highest industry standards.
                        </p>
                    </AnimateOnScroll>
                </div>

                {/* Product Cards Container */}
                <div
                    className="flex flex-wrap justify-center gap-[30px]"
                    style={{
                        marginTop: '77px',
                    }}
                >
                    {productsData.map((product, index) => (
                        <ProductCard
                            key={index}
                            imageSrc={product.imageSrc}
                            title={product.title}
                            description={product.description}
                            delay={index * 100}
                        />
                    ))}
                </div>
            </section>
        </>
    )
}
