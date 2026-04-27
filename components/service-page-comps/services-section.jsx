'use client'

import Image from 'next/image'
import Link from 'next/link'
import { AnimateOnScroll } from '@/components/animations/scroll-animations'
import { useLanguage } from '@/context/language-context'

export default function ServicesSection() {
    const { t } = useLanguage()

    return (
        <>
            {/* Mobile Layout */}
            <section className="lg:hidden relative" style={{ paddingLeft: '16px', paddingRight: '16px', paddingTop: '28px', paddingBottom: '28px' }}>

                <div
                    className="absolute inset-0 bg-[#D9D9D9] z-0"
                    style={{
                        maskImage: 'linear-gradient(to bottom, transparent 0%, black 10px, black calc(100% - 10px), transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10px, black calc(100% - 10px), transparent 100%)'
                    }}
                />

                <div className="relative z-10">

                    <h2 className="font-poppins font-semibold text-2xl text-center mb-3">
                        <span className="text-black">{t('serviceSection.title1')} </span>
                        <span style={{ color: '#0055A4' }}>{t('serviceSection.title2')}</span>
                    </h2>


                    <p className="font-poppins font-normal text-sm leading-5 text-black text-center"
                        style={{ marginBottom: '20px' }}>
                        {t('serviceSection.subtitleMobile')}
                    </p>


                    <div className="flex flex-col gap-4 items-center">
                        {[
                            {
                                id: 1, title: 'Manufacture Tooling', col: 0, row: 0, desc: t('serviceSection.manuToolDesc'),
                                image: '/images/services/tooling.png',
                                href: '/service-detail/manuTool',
                            },
                            {
                                id: 2, title: 'Manufacture Plastic Injection', col: 1, row: 0, desc: t('serviceSection.manuPlasticDesc'),
                                image: '/images/services/injection.png',
                                href: '/service-detail/manuPlastic',
                            },
                            {
                                id: 3, title: 'Secondary Process', col: 2, row: 0, desc: t('serviceSection.secondaryProcessDesc'),
                                image: '/images/services/printing.png',
                                href: '/service-detail/secondaryProcess',
                            },
                        ].map((service) => (
                            <div
                                key={service.id}
                                style={{
                                    width: 'calc(100% - 32px)',
                                    maxWidth: '350px',
                                    backgroundColor: '#FFFFFF',
                                    border: '1px solid #0055A4',
                                    borderRadius: '15px',
                                    overflow: 'hidden',
                                }}
                            >

                                <div
                                    style={{
                                        position: 'relative',
                                        width: '100%',
                                        height: '100px',
                                        backgroundColor: '#E5E5E5',
                                        borderBottom: '1px solid #0055A4',
                                    }}
                                >
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>


                                <div style={{ padding: '16px' }}>

                                    <span
                                        style={{
                                            fontFamily: 'Poppins, sans-serif',
                                            fontWeight: 600,
                                            fontSize: '18px',
                                            color: '#0055A4',
                                            display: 'block',
                                            marginBottom: '12px',
                                        }}
                                    >
                                        {service.title}
                                    </span>


                                    <p
                                        style={{
                                            fontFamily: 'Poppins, sans-serif',
                                            fontWeight: 500,
                                            fontSize: '14px',
                                            lineHeight: '20px',
                                            color: '#000000',
                                            marginBottom: '16px',
                                        }}
                                    >
                                        {service.desc}
                                    </p>


                                    <Link href={service.href}>
                                        <button
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
                                            }}
                                        >
                                            {t('serviceSection.moreDetails')}
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Desktop Layout */}
            <section className="hidden lg:block relative w-full min-h-[810px]">

                <div
                    className="absolute inset-0 bg-[#D9D9D9] z-0"
                    style={{
                        maskImage: 'linear-gradient(to bottom, transparent 0%, black 15px, black calc(100% - 15px), transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15px, black calc(100% - 15px), transparent 100%)'
                    }}
                />

                <div className="relative z-10 w-full h-full">


                    <AnimateOnScroll animation="fadeUp" delay={0}>
                        <h2
                            className="absolute font-poppins font-semibold text-center"
                            style={{
                                top: '27px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '380px',
                                height: '126px',
                                fontSize: '56px',
                                lineHeight: '63px',
                            }}
                        >
                            <span className="text-black">{t('serviceSection.title1')} </span>
                            <span style={{ color: '#0055A4' }}>{t('serviceSection.title2')}</span>
                        </h2>
                    </AnimateOnScroll>


                    <AnimateOnScroll animation="fadeUp" delay={100}>
                        <p
                            className="absolute font-poppins font-normal text-black text-center"
                            style={{
                                top: '118px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '1133px',
                                height: '147px',
                                fontSize: '32px',
                                lineHeight: '49px',
                            }}
                        >
                            {t('serviceSection.subtitleDesktop')}
                        </p>
                    </AnimateOnScroll>


                    <div
                        style={{
                            position: 'absolute',
                            top: '281px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '1184px',
                        }}
                    >

                        {[
                            {
                                id: 1, title: 'Manufacture Tooling', col: 0, row: 0, desc: t('serviceSection.manuToolDesc'),
                                image: '/images/services/tooling.png',
                                href: '/service-detail/manuTool',
                            },
                            {
                                id: 2, title: 'Manufacture Plastic Injection', col: 1, row: 0, desc: t('serviceSection.manuPlasticDesc'),
                                image: '/images/services/injection.png',
                                href: '/service-detail/manuPlastic',
                            },
                            {
                                id: 3, title: 'Secondary Process', col: 2, row: 0, desc: t('serviceSection.secondaryProcessDesc'),
                                image: '/images/services/printing.png',
                                href: '/service-detail/secondaryProcess',
                            },
                        ].map((service, index) => {
                            // Grid positions
                            const cardWidth = 350;
                            const gap = 67;
                            const colPositions = [0, cardWidth + gap, (cardWidth + gap) * 2];
                            const rowHeight = 500;
                            const leftPos = colPositions[service.col];
                            const topPos = service.row * rowHeight;

                            return (
                                <AnimateOnScroll key={service.id} animation="fadeUp" delay={150 + index * 50}>
                                    <div
                                        style={{
                                            position: 'absolute',
                                            left: `${leftPos}px`,
                                            top: `${topPos}px`,
                                            width: '350px',
                                            height: '450px',
                                            backgroundColor: '#FFFFFF',
                                            border: '1px solid #0055A4',
                                            borderRadius: '20px',
                                            overflow: 'hidden',
                                        }}
                                    >

                                        <div
                                            style={{
                                                position: 'relative',
                                                width: '350px',
                                                height: '122px',
                                                backgroundColor: '#E5E5E5',
                                                borderBottom: '1px solid #0055A4',
                                                borderRadius: '20px 20px 0 0',
                                                overflow: 'hidden',
                                            }}
                                        >
                                            <Image
                                                src={service.image}
                                                alt={service.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>


                                        <span
                                            style={{
                                                position: 'absolute',
                                                top: '157px',
                                                left: '32px',
                                                width: '300px',
                                                height: '39px',
                                                fontFamily: 'Poppins, sans-serif',
                                                fontWeight: 600,
                                                fontSize: '26px',
                                                color: '#0055A4',
                                                display: 'flex',
                                                alignItems: 'center',
                                            }}
                                        >
                                            {service.title}
                                        </span>


                                        <p
                                            style={{
                                                position: 'absolute',
                                                top: '224px',
                                                left: '32px',
                                                right: '40px',
                                                width: '278px',
                                                height: '130px',
                                                fontFamily: 'Poppins, sans-serif',
                                                fontWeight: 400,
                                                fontSize: '17px',
                                                lineHeight: '26px',
                                                color: '#000000',
                                            }}
                                        >
                                            {service.desc}
                                        </p>


                                        <Link href={service.href}>
                                            <button
                                                style={{
                                                    position: 'absolute',
                                                    bottom: '22px',
                                                    right: '25%',
                                                    width: '170px',
                                                    height: '40px',
                                                    backgroundColor: '#0055A4',
                                                    borderRadius: '20px',
                                                    border: 'none',
                                                    cursor: 'pointer',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        fontFamily: 'Poppins, sans-serif',
                                                        fontWeight: 400,
                                                        fontSize: '20px',
                                                        color: '#FFFFFF',
                                                    }}
                                                >
                                                    {t('serviceSection.moreDetails')}
                                                </span>
                                            </button>
                                        </Link>
                                    </div>
                                </AnimateOnScroll>
                            );
                        })}
                    </div>

                </div>
            </section>
        </>
    )
}
