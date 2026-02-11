'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimateOnScroll } from '@/components/animations/scroll-animations'
import { useLanguage } from '@/context/language-context'

const API_URL = "http://127.0.0.1:8000/api"

function NewsCard({ news, delay = 0 }) {
    const { t } = useLanguage()

    const photoUrl = news.photo
        ? `http://127.0.0.1:8000/storage/${news.photo}`
        : "/images/news.jpg"

    const formattedDate = new Date(news.created_at).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    })

    return (
        <AnimateOnScroll animation="fadeUp" delay={delay}>
            <div className="group w-[350px] cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl rounded-[10px] mt-10">
                <div className="relative w-[350px] h-[180px] rounded-[10px] overflow-hidden">
                    <Image
                        src={photoUrl}
                        alt={news.title}
                        fill
                        unoptimized
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>

                <h3
                    className="font-poppins font-semibold text-[16px] leading-[23px] text-black transition-colors duration-300 group-hover:text-[#0055A4] line-clamp-2"
                    style={{ marginTop: '9px' }}
                >
                    {news.title}
                </h3>

                <p
                    className="font-poppins font-normal text-[13px] leading-[20px] text-black/70"
                    style={{ marginTop: '5px' }}
                >
                    {formattedDate}
                </p>

                <div className="flex justify-center" style={{ marginTop: '8px' }}>
                    <Link href={`/news/${news.id}`}>
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
    const [newsList, setNewsList] = useState([])

    useEffect(() => {
        async function fetchNews() {
            try {
                const res = await fetch(`${API_URL}/news`, { cache: "no-store" })
                if (res.ok) {
                    const data = await res.json()
                    const published = data.filter(item => item.status === 'published')
                    setNewsList(published.slice(0, 3))
                }
            } catch (error) {
                console.error("Failed to fetch news:", error)
            }
        }
        fetchNews()
    }, [])

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

            {/* mobile cards - vertical */}
            <div
                className="lg:hidden flex flex-col items-center gap-8"
                style={{ paddingTop: '24px' }}
            >
                {newsList.length > 0 ? (
                    newsList.map((news, index) => (
                        <NewsCard key={news.id} news={news} delay={index * 100} />
                    ))
                ) : (
                    <div className="flex flex-col items-center justify-center py-12 px-6">
                        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#0055A4" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="opacity-30 mb-4">
                            <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                            <path d="M18 14h-8" />
                            <path d="M15 18h-5" />
                            <path d="M10 6h8v4h-8V6Z" />
                        </svg>
                        <p className="font-poppins font-semibold text-[18px] text-[#0055A4]/50 text-center">
                            No News Available
                        </p>
                        <p className="font-poppins font-normal text-[14px] text-black/40 text-center mt-1">
                            Stay tuned! We're preparing exciting updates for you.
                        </p>
                    </div>
                )}
            </div>

            {/* desktop cards - horizontal */}
            <div
                className="hidden lg:flex justify-center"
                style={{ paddingTop: '30px', gap: '30px' }}
            >
                {newsList.length > 0 ? (
                    newsList.map((news, index) => (
                        <NewsCard key={news.id} news={news} delay={index * 150} />
                    ))
                ) : (
                    <div className="flex flex-col items-center justify-center" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
                        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#0055A4" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-25 mb-5">
                            <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                            <path d="M18 14h-8" />
                            <path d="M15 18h-5" />
                            <path d="M10 6h8v4h-8V6Z" />
                        </svg>
                        <p className="font-poppins font-semibold text-[22px] text-[#0055A4]/50">
                            No News Available Yet
                        </p>
                        <p className="font-poppins font-normal text-[16px] text-black/40 mt-2">
                            Stay tuned! We're preparing exciting updates for you.
                        </p>
                    </div>
                )}
            </div>

        </section>
    )
}
