'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimateOnScroll } from '@/components/animations/scroll-animations'
import { useLanguage } from '@/context/language-context'

const API_URL = "http://127.0.0.1:8000/api"

// Card berita dinamis
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
            <div className="group w-[350px] cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl rounded-[10px]">
                {/* Thumbnail */}
                <div className="relative w-[350px] h-[180px] rounded-[10px] overflow-hidden">
                    <Image
                        src={photoUrl}
                        alt={news.title}
                        fill
                        unoptimized
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>

                {/* Judul */}
                <h3
                    className="font-poppins font-semibold text-[16px] leading-[23px] text-black transition-colors duration-300 group-hover:text-[#0055A4] line-clamp-2"
                    style={{ marginTop: '9px' }}
                >
                    {news.title}
                </h3>

                {/* Tanggal */}
                <p
                    className="font-poppins font-normal text-[13px] leading-[20px] text-black/70"
                    style={{ marginTop: '5px' }}
                >
                    {formattedDate}
                </p>

                {/* Button */}
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

export default function MoreNewsSection({ currentNewsId }) {
    const [newsList, setNewsList] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const [mobileIndex, setMobileIndex] = useState(0)
    const touchStartX = useRef(0)
    const touchEndX = useRef(0)

    // Fetch semua berita, exclude berita yang sedang dibaca
    useEffect(() => {
        async function fetchNews() {
            try {
                const res = await fetch(`${API_URL}/news`, { cache: "no-store" })
                if (res.ok) {
                    const data = await res.json()
                    const filtered = data
                        .filter(item => item.status === 'published')
                        .filter(item => String(item.id) !== String(currentNewsId))
                    setNewsList(filtered)
                }
            } catch (error) {
                console.error("Gagal fetch berita:", error)
            }
        }
        fetchNews()
    }, [currentNewsId])

    // Desktop: 3 card per halaman
    const desktopPerPage = 3
    const totalDesktopPages = Math.ceil(newsList.length / desktopPerPage)
    const desktopItems = newsList.slice(
        currentPage * desktopPerPage,
        currentPage * desktopPerPage + desktopPerPage
    )

    // Mobile: 1 card per slide
    const totalMobileSlides = newsList.length

    // Swipe handler untuk mobile
    const handleTouchStart = (e) => {
        touchStartX.current = e.changedTouches[0].screenX
    }
    const handleTouchEnd = (e) => {
        touchEndX.current = e.changedTouches[0].screenX
        const diff = touchStartX.current - touchEndX.current
        if (diff > 50 && mobileIndex < totalMobileSlides - 1) {
            setMobileIndex(prev => prev + 1)
        } else if (diff < -50 && mobileIndex > 0) {
            setMobileIndex(prev => prev - 1)
        }
    }

    // Kalau belum ada berita lain
    if (newsList.length === 0) return null

    return (
        <>
            {/* MOBILE LAYOUT */}
            <section
                className="lg:hidden"
                style={{ marginLeft: '20px', marginRight: '20px', marginTop: '50px' }}
            >
                <h2
                    className="font-poppins font-semibold text-[24px] text-black"
                    style={{ marginBottom: '20px' }}
                >
                    More News :
                </h2>

                {/* Carousel mobile */}
                <div
                    className="overflow-hidden"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    <div
                        className="flex transition-transform duration-300 ease-in-out"
                        style={{ transform: `translateX(-${mobileIndex * 100}%)` }}
                    >
                        {newsList.map((news, index) => (
                            <div
                                key={news.id}
                                className="w-full flex-shrink-0 flex justify-center"
                                style={{ padding: '0 10px' }}
                            >
                                <NewsCard news={news} delay={0} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dots mobile */}
                {totalMobileSlides > 1 && (
                    <div className="flex justify-center gap-2" style={{ marginTop: '16px' }}>
                        {newsList.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setMobileIndex(index)}
                                className={`rounded-full transition-all duration-300 ${index === mobileIndex
                                        ? 'bg-[#0055A4] w-6 h-2.5'
                                        : 'bg-gray-300 w-2.5 h-2.5'
                                    }`}
                            />
                        ))}
                    </div>
                )}
            </section>

            {/* === DESKTOP LAYOUT === */}
            <section
                className="hidden lg:block"
                style={{ marginLeft: '140px', marginRight: '140px', marginTop: '80px' }}
            >
                <div className="flex items-center justify-between" style={{ marginBottom: '30px' }}>
                    <h2
                        style={{
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: 600,
                            fontSize: '36px',
                            textAlign: 'left',
                            color: '#000000',
                        }}
                    >
                        More News :
                    </h2>

                    {/* Arrow navigasi desktop (muncul kalau lebih dari 3 berita) */}
                    {totalDesktopPages > 1 && (
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 0))}
                                disabled={currentPage === 0}
                                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${currentPage === 0
                                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                        : 'bg-[#0055A4] text-white hover:bg-[#004080] shadow-md hover:shadow-lg'
                                    }`}
                            >
                                ←
                            </button>
                            <span className="font-poppins text-sm text-gray-500">
                                {currentPage + 1} / {totalDesktopPages}
                            </span>
                            <button
                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalDesktopPages - 1))}
                                disabled={currentPage === totalDesktopPages - 1}
                                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${currentPage === totalDesktopPages - 1
                                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                        : 'bg-[#0055A4] text-white hover:bg-[#004080] shadow-md hover:shadow-lg'
                                    }`}
                            >
                                →
                            </button>
                        </div>
                    )}
                </div>

                {/* Cards desktop */}
                <div className="flex justify-center" style={{ gap: '30px' }}>
                    {desktopItems.map((news, index) => (
                        <NewsCard key={news.id} news={news} delay={index * 150} />
                    ))}
                </div>
            </section>
        </>
    )
}