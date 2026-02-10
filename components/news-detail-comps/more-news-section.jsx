'use client'

import Image from 'next/image'
import Link from 'next/link'
import { AnimateOnScroll } from '@/components/animations/scroll-animations'
import { useLanguage } from '@/context/language-context'

// Reuse NewsCard dari landing page dengan spec yang sama
function NewsCard({ href, delay = 0 }) {
    const { t } = useLanguage()

    return (
        <AnimateOnScroll animation="fadeUp" delay={delay}>
            <div className="justify-center group w-full max-w-[350px] cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl rounded-[10px]">
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

export default function MoreNewsSection() {
    return (
        <section style={{ marginLeft: '140px', marginRight: '140px', marginTop: '80px' }}>
            <h2
                style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 600,
                    fontSize: '36px',
                    textAlign: 'left',
                    color: '#000000',
                    marginBottom: '30px',
                }}
            >
                More News :
            </h2>

            {/* News Cards*/}
            <div className="flex justify-center" style={{ gap: '30px' }}>
                <NewsCard href="/news/1" delay={0} />
                <NewsCard href="/news/2" delay={150} />
                <NewsCard href="/news/3" delay={300} />
            </div>
        </section>
    )
}