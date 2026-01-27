'use client'

import Image from 'next/image'
import Link from 'next/link'
import { AnimateOnScroll } from '@/components/animations/scroll-animations'
import { useLanguage } from '@/context/language-context'

// komponen card buat reuse
function NewsCard({ href, delay = 0 }) {
    const { t } = useLanguage()

    return (
        <AnimateOnScroll animation="fadeUp" delay={delay}>
            <div className="group w-full max-w-[350px] cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl rounded-[10px]">
                {/* thumbnail */}
                <div className="relative w-full h-[180px] rounded-[10px] overflow-hidden">
                    <Image
                        src="/images/news.jpg"
                        alt="News Image"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>

                {/* judul */}
                <h3
                    className="font-poppins font-semibold text-[16px] leading-[23px] text-black transition-colors duration-300 group-hover:text-[#0055A4]"
                    style={{ marginTop: '9px' }}
                >
                    Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
                </h3>

                {/* tanggal */}
                <p
                    className="font-poppins font-normal text-[13px] leading-[20px] text-black/70"
                    style={{ marginTop: '5px' }}
                >
                    Jul 10, 2025
                </p>

                {/* button */}
                <div className="flex justify-center" style={{ marginTop: '8px' }}>
                    <Link href={href}>
                        <button
                            className="bg-[#0055A4] rounded-[20px] w-[125px] h-[30px] flex items-center justify-center hover:bg-[#004080] transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg"
                        >
                            <span className="text-white font-poppins font-semibold text-[13px]">
                                {t('ourUpdates.detail')}
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </AnimateOnScroll>
    )
}

export default function OurLatestUpdate() {
    const { t } = useLanguage()

    return (
        <section className="relative w-full bg-white px-4 lg:px-0 overflow-hidden">

            {/* mobile header */}
            <div className="lg:hidden flex flex-col items-center">
                <h2 className="font-poppins font-semibold text-[32px] leading-[48px] text-center">
                    <span className="text-black">{t('ourUpdates.titleOur')} </span>
                    <span className="text-[#0055A4]">{t('ourUpdates.titleUpdate')}</span>
                </h2>
                <div
                    className="bg-[#0055A4] mt-2"
                    style={{ width: '200px', height: '8px' }}
                />
            </div>
            {/* <AnimateOnScroll animation="fadeIn">
            </AnimateOnScroll> */}

            {/* desktop header */}
            <div
                className="hidden lg:flex items-center"
                style={{ paddingLeft: '34px', gap: '19px' }}
            >
                <h2 className="font-poppins font-semibold text-[48px] leading-[96px] whitespace-nowrap">
                    <span className="text-black">{t('ourUpdates.titleOur')} </span>
                    <span className="text-[#0055A4]">{t('ourUpdates.titleUpdate')}</span>
                </h2>
                <div
                    className="bg-[#0055A4]"
                    style={{ width: '713px', height: '12px' }}
                />
            </div>
            {/* <AnimateOnScroll animation="fadeLeft" duration={800}>
            </AnimateOnScroll> */}

            {/* mobile cards - vertical */}
            <div
                className="lg:hidden flex flex-col items-center gap-8"
                style={{ paddingTop: '24px' }}
            >
                <NewsCard href="/news/1" delay={0} />
                <NewsCard href="/news/2" delay={100} />
                <NewsCard href="/news/3" delay={200} />
            </div>

            {/* desktop cards - horizontal */}
            <div
                className="hidden lg:flex justify-center"
                style={{ paddingTop: '30px', gap: '30px' }}
            >
                <NewsCard href="/news/1" delay={0} />
                <NewsCard href="/news/2" delay={150} />
                <NewsCard href="/news/3" delay={300} />
            </div>

        </section>
    )
}
