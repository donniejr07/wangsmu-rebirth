'use client'

import Image from 'next/image'
import { useLanguage } from '@/context/language-context'

export default function ProductHeroSection() {
    const { t } = useLanguage()

    return (
        <>
            {/* Mobile Layout */}
            <section className="lg:hidden relative mx-4 mt-4">
                <div
                    className="relative w-full overflow-hidden bg-[#0055A4]"
                    style={{
                        minHeight: '400px',
                        borderRadius: '0 0 60px 60px',
                        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.35)',
                    }}
                >
                    <div className="absolute inset-0" style={{ paddingTop: '20px' }}>
                        <Image
                            src="/images/productHero.png"
                            alt="Product Hero Background"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-[#0055A4]/60" />
                    </div>

                    <div className="relative z-10 flex flex-col items-center px-6 pb-12 text-center" style={{ paddingTop: '20px' }}>

                        <Image
                            src="/images/logo-putih.png"
                            alt="Logo PT"
                            width={80}
                            height={84}
                            className="mb-6"
                        />

                        <h1 className="font-poppins font-semibold text-[28px] leading-[36px] text-white" style={{ marginBottom: '20px', textShadow: '0 2px 12px rgba(0,0,0,0.45)' }}>
                            Our<br />Products
                        </h1>

                        <p className="font-poppins font-normal text-[16px] leading-[24px] text-white max-w-[300px]" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.4)' }}>
                            {t('productHero.mobileSubtitle')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Desktop Layout */}
            <section
                className="hidden lg:flex justify-center relative"
                style={{
                    paddingLeft: '6%',
                    paddingRight: '6%',
                }}
            >
                <div
                    className="relative overflow-hidden bg-[#0055A4] w-full"
                    style={{
                        height: '753px',
                        borderRadius: '0 0 160px 160px',
                        boxShadow: '0 30px 80px rgba(0, 0, 0, 0.4)',
                    }}
                >
                    <div
                        className="absolute left-0 w-full overflow-hidden"
                        style={{
                            top: '-125px',
                            height: '878px',
                            borderRadius: '0 0 160px 160px',
                        }}
                    >
                        <Image
                            src="/images/productHero.png"
                            alt="Product Hero Background"
                            fill
                            style={{ objectFit: 'cover' }}
                            priority
                        />
                        <div
                            className="absolute inset-0"
                            style={{ backgroundColor: 'rgba(0, 85, 164, 0.6)' }}
                        />
                    </div>

                    <h1
                        className="absolute font-poppins font-semibold text-[60px] leading-[63px] text-white"
                        style={{
                            left: '7%',
                            bottom: '270px',
                            textShadow: '0 4px 20px rgba(0,0,0,0.5)',
                        }}
                    >
                        <span style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <span>Wang SMU</span>
                            <span>Products</span>
                        </span>
                    </h1>

                    <p
                        className="absolute font-poppins font-normal text-[28px] leading-[42px] text-white"
                        style={{
                            left: '7%',
                            right: '7%',
                            bottom: '140px',
                            textShadow: '0 2px 10px rgba(0,0,0,0.4)',
                        }}
                    >
                        {t('productHero.desktopSubtitle')}
                    </p>

                    <Image
                        src="/images/logo-putih.png"
                        alt="Logo PT"
                        width={119}
                        height={116}
                        className="absolute"
                        style={{
                            top: '19px',
                            right: '48px',
                        }}
                    />
                </div>
            </section>
        </>
    )
}
