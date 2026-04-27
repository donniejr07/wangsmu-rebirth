'use client'

import Image from 'next/image'
import Link from 'next/link'
import { AnimateOnScroll } from '@/components/animations/scroll-animations'
import { useLanguage } from '@/context/language-context'



// Product Card Component for Desktop
function ProductCard({ imageSrc, title, description, href, buttonText, delay = 0 }) {
    return (
        <AnimateOnScroll animation="fadeUp" delay={delay}>
            <div
                className="relative cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                style={{
                    width: '350px',
                    height: '500px',
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
                        quality={100}
                        className="object-cover"
                    />
                </div>

                {/* Card Title */}
                <h3
                    className="font-poppins font-semibold text-[24px] text-[#0055A4]"
                    style={{
                        position: 'absolute',
                        top: '200px',
                        left: '35px',
                        width: '300px',
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
                        height: '110px',
                    }}
                >
                    {description}
                </p>

                {/* More Details Button */}
                <Link
                    href={href || '#'}
                    className="hover:opacity-80 transition-opacity flex items-center justify-center"
                    style={{
                        position: 'absolute',
                        bottom: '20px',
                        left: '35px',
                        width: '280px',
                        height: '40px',
                        backgroundColor: '#0055A4',
                        borderRadius: '15px',
                        border: 'none',
                        cursor: 'pointer',
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 400,
                        fontSize: '16px',
                        color: '#FFFFFF',
                        textDecoration: 'none',
                    }}
                >
                    {buttonText}
                </Link>
            </div>
        </AnimateOnScroll>
    )
}

// Product Card Component for Mobile
function MobileProductCard({ imageSrc, title, description, href, buttonText, delay = 0 }) {
    return (
        <AnimateOnScroll animation="fadeUp" delay={delay}>
            <div
                className="relative cursor-pointer transition-all duration-300 hover:shadow-lg"
                style={{
                    width: '100%',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #0055A4',
                    borderRadius: '15px',
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
                        quality={100}
                        sizes="(max-width: 1024px) 100vw, 350px"
                        priority
                        className="object-cover"
                    />
                </div>

                {/* Title Row */}
                <div className="flex items-center gap-2" style={{ marginBottom: '8px' }}>
                    <h3 className="font-poppins font-semibold text-[18px] text-[#0055A4]">
                        {title}
                    </h3>
                </div>

                {/* Card Description */}
                <p className="font-poppins font-normal text-[14px] leading-[20px] text-black" style={{ marginBottom: '16px' }}>
                    {description}
                </p>

                {/* Button */}
                <Link
                    href={href || '#'}
                    className="hover:opacity-80 transition-opacity flex items-center justify-center"
                    style={{
                        width: '100%',
                        height: '36px',
                        backgroundColor: '#0055A4',
                        borderRadius: '15px',
                        border: 'none',
                        cursor: 'pointer',
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 400,
                        fontSize: '14px',
                        color: '#FFFFFF',
                        textDecoration: 'none',
                    }}
                >
                    More Details
                </Link>
            </div>
        </AnimateOnScroll>
    )
}

// Sample product data
const productsData = [
    {
        imageSrc: "/images/products/automotive/cardAutomotive.png",
        title: "Automotive Components",
        description: "High-precision automotive parts manufactured to exact specifications for optimal performance and safety.",
        href: "/product-detail/automotive",
    },
    {
        imageSrc: "/images/product-exp.jpg",
        title: "Electronics Part",
        description: "Advanced electronic components engineered for reliability in demanding technological applications.",
        href: "/product-detail/electronic",
    },
]

export default function OurProductsSection() {
    const { t } = useLanguage()

    return (
        <>
            {/* Mobile */}
            <section className="lg:hidden" style={{ paddingLeft: '20px', paddingRight: '20px', paddingTop: '40px', paddingBottom: '40px' }}>
                {/* Title */}
                <AnimateOnScroll animation="fadeUp" delay={0}>
                    <h2
                        className="font-poppins font-semibold text-[28px] leading-[36px] text-center"
                        style={{ marginBottom: '8px' }}
                    >
                        <span className="text-black">{t('ourProducts.title1')}</span>
                        <span className="text-[#0055A4]">{t('ourProducts.title2')}</span>
                    </h2>
                </AnimateOnScroll>

                {/* Subtitle */}
                <AnimateOnScroll animation="fadeUp" delay={50}>
                    <p
                        className="font-poppins font-normal text-[14px] leading-[20px] text-black text-center"
                        style={{ marginBottom: '24px' }}
                    >
                        {t('ourProducts.subtitle')}
                    </p>
                </AnimateOnScroll>

                {/* Product Cards */}
                <div className="flex flex-col gap-4">
                    {productsData.map((product, index) => (
                        <MobileProductCard
                            key={index}
                            imageSrc={product.imageSrc}
                            title={t(`ourProducts.items.${index}.title`)}
                            description={t(`ourProducts.items.${index}.description`)}
                            href={product.href}
                            buttonText={t('ourProducts.button')}
                            delay={index * 50}
                        />
                    ))}
                </div>
            </section>

            {/* Desktop*/}
            <section
                className="hidden lg:block relative"
                style={{
                    paddingTop: '77px',
                }}
            >
                {/* Title Group */}
                <div className="w-full">
                    {/* Title */}
                    <h2
                        className="text-center font-poppins font-semibold text-[56px] leading-[84px]"
                    >
                        <span className="text-black">{t('ourProducts.title1')}</span>
                        <span className="text-[#0055A4]">{t('ourProducts.title2')}</span>
                    </h2>
                    {/* <AnimateOnScroll animation="fadeUp" delay={0}>
                    </AnimateOnScroll> */}

                    {/* Subtitle */}
                    <p
                        className="font-poppins font-normal text-[28px] leading-[48px] text-black max-w-[1133px]"
                        style={{
                            textAlign: 'center',
                            marginTop: '7px',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                        }}
                    >
                        {t('ourProducts.subtitle')}
                    </p>
                    {/* <AnimateOnScroll animation="fadeUp" delay={100}>
                    </AnimateOnScroll> */}
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
                            title={t(`ourProducts.items.${index}.title`)}
                            description={t(`ourProducts.items.${index}.description`)}
                            href={product.href}
                            buttonText={t('ourProducts.button')}
                            delay={index * 100}
                        />
                    ))}
                </div>
            </section>
        </>
    )
}
