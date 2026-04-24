'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { AnimateOnScroll } from '@/components/animations/scroll-animations'

const showcaseProducts = [
    {
        src: '/images/products/electronics/frontPanel.png',
        alt: 'Electronic Front Panel',
        caption: 'Electronic Front Panel',
    },
    {
        src: '/images/products/electronics/Knob.png',
        alt: 'Control Knob',
        caption: 'Control Knob',
    },
    {
        src: '/images/products/electronics/pianoPart.png',
        alt: 'Piano Electronic Part',
        caption: 'Piano Electronic Part',
    },
    {
        src: '/images/products/electronics/saxophonePart.png',
        alt: 'Saxophone Electronic Part',
        caption: 'Saxophone Electronic Part',
    },
    {
        src: '/images/products/electronics/speakerPart.png',
        alt: 'Speaker Component',
        caption: 'Speaker Component',
    },
]

export default function ProductShowcaseSection() {
    const scrollRef = useRef(null)
    const [activeIndex, setActiveIndex] = useState(0)
    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)
    const autoPlayRef = useRef(null)

    const DESKTOP_CARD_W = 420
    const DESKTOP_GAP = 24
    const MOBILE_CARD_W = 300
    const MOBILE_GAP = 16

    const getCardConfig = useCallback(() => {
        if (typeof window === 'undefined') return { cardW: DESKTOP_CARD_W, gap: DESKTOP_GAP }
        return window.innerWidth >= 1024
            ? { cardW: DESKTOP_CARD_W, gap: DESKTOP_GAP }
            : { cardW: MOBILE_CARD_W, gap: MOBILE_GAP }
    }, [])

    const scrollToIndex = useCallback((index) => {
        const container = scrollRef.current
        if (!container) return
        const { cardW, gap } = getCardConfig()
        container.scrollTo({ left: index * (cardW + gap), behavior: 'smooth' })
        setActiveIndex(index)
    }, [getCardConfig])

    useEffect(() => {
        if (!isAutoPlaying) return
        autoPlayRef.current = setInterval(() => {
            setActiveIndex((prev) => {
                const next = (prev + 1) % showcaseProducts.length
                scrollToIndex(next)
                return next
            })
        }, 3500)
        return () => clearInterval(autoPlayRef.current)
    }, [isAutoPlaying, scrollToIndex])

    const pauseAutoPlay = () => {
        setIsAutoPlaying(false)
        clearInterval(autoPlayRef.current)
        setTimeout(() => setIsAutoPlaying(true), 8000)
    }

    const handleScroll = () => {
        const container = scrollRef.current
        if (!container) return
        const { cardW, gap } = getCardConfig()
        const index = Math.round(container.scrollLeft / (cardW + gap))
        setActiveIndex(Math.min(index, showcaseProducts.length - 1))
    }

    const handleMouseDown = (e) => {
        setIsDragging(true)
        setStartX(e.pageX - scrollRef.current.offsetLeft)
        setScrollLeft(scrollRef.current.scrollLeft)
        pauseAutoPlay()
    }

    const handleMouseMove = (e) => {
        if (!isDragging) return
        e.preventDefault()
        const x = e.pageX - scrollRef.current.offsetLeft
        scrollRef.current.scrollLeft = scrollLeft - (x - startX) * 1.5
    }

    const handleMouseUp = () => setIsDragging(false)

    const goNext = () => { pauseAutoPlay(); scrollToIndex(Math.min(activeIndex + 1, showcaseProducts.length - 1)) }
    const goPrev = () => { pauseAutoPlay(); scrollToIndex(Math.max(activeIndex - 1, 0)) }

    return (
        <>
            {/* MOBILE LAYOUT */}
            <section className="lg:hidden relative" style={{ paddingTop: '50px', paddingBottom: '50px', background: '#FFFFFF', overflow: 'hidden' }}>
                <AnimateOnScroll animation="fadeUp" delay={0}>
                    <h2 className="font-poppins font-bold text-[24px] leading-[32px] text-center" style={{ paddingLeft: '24px', paddingRight: '24px', marginBottom: '8px' }}>
                        <span style={{ color: '#1a1a2e' }}>Product </span>
                        <span style={{ color: '#0055A4' }}>Showcase</span>
                    </h2>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fadeUp" delay={50}>
                    <p className="font-poppins font-normal text-[14px] leading-[20px] text-center" style={{ color: '#6B7280', marginBottom: '28px', padding: '0 24px' }}>
                        Explore our range of precision electronic components.
                    </p>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fadeUp" delay={100}>
                    <div
                        ref={scrollRef}
                        onScroll={handleScroll}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                        onTouchStart={pauseAutoPlay}
                        style={{
                            display: 'flex', gap: `${MOBILE_GAP}px`, overflowX: 'auto',
                            scrollSnapType: 'x mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none',
                            paddingLeft: '24px', paddingRight: '24px',
                            cursor: isDragging ? 'grabbing' : 'grab', WebkitOverflowScrolling: 'touch',
                        }}
                        className="hide-scrollbar"
                    >
                        {showcaseProducts.map((img, index) => (
                            <div key={index} style={{ flex: `0 0 ${MOBILE_CARD_W}px`, height: '220px', borderRadius: '16px', overflow: 'hidden', position: 'relative', scrollSnapAlign: 'start', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}>
                                <Image src={img.src} alt={img.alt} fill className="object-cover" draggable={false} />
                                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '80px', background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)' }} />
                                <span className="font-poppins font-medium" style={{ position: 'absolute', bottom: '14px', left: '16px', fontSize: '14px', color: '#FFFFFF', textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>{img.caption}</span>
                                <div style={{ position: 'absolute', top: '12px', right: '12px', width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'rgba(0, 85, 164, 0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <span className="font-poppins font-semibold text-[11px] text-white">{String(index + 1).padStart(2, '0')}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center gap-2" style={{ marginTop: '20px' }}>
                        {showcaseProducts.map((_, index) => (
                            <button key={index} onClick={() => { pauseAutoPlay(); scrollToIndex(index) }}
                                style={{ width: activeIndex === index ? '28px' : '8px', height: '8px', borderRadius: '4px', backgroundColor: activeIndex === index ? '#0055A4' : '#CBD5E1', border: 'none', cursor: 'pointer', transition: 'all 0.3s ease' }}
                            />
                        ))}
                    </div>
                </AnimateOnScroll>
            </section>

            {/* DESKTOP LAYOUT */}
            <section className="hidden lg:block relative" style={{ paddingTop: '80px', paddingBottom: '100px', background: '#FFFFFF', overflow: 'hidden' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
                    <AnimateOnScroll animation="fadeUp" delay={0}>
                        <div className="flex items-center justify-center gap-3" style={{ marginBottom: '20px' }}>
                            <div style={{ width: '40px', height: '2px', background: 'linear-gradient(90deg, transparent, #0055A4)' }} />
                            <span className="font-poppins font-medium text-[14px] tracking-[4px] uppercase" style={{ color: '#0055A4' }}>Showcase</span>
                            <div style={{ width: '40px', height: '2px', background: 'linear-gradient(90deg, #0055A4, transparent)' }} />
                        </div>
                    </AnimateOnScroll>

                    <AnimateOnScroll animation="fadeUp" delay={100}>
                        <h2 className="font-poppins font-bold text-center" style={{ fontSize: '48px', lineHeight: '60px', marginBottom: '12px' }}>
                            <span style={{ color: '#1a1a2e' }}>Product </span>
                            <span style={{ color: '#0055A4', position: 'relative' }}>
                                Showcase
                                <span style={{ position: 'absolute', bottom: '-4px', left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #0055A4, #3B82F6, transparent)', borderRadius: '2px' }} />
                            </span>
                        </h2>
                    </AnimateOnScroll>

                    <AnimateOnScroll animation="fadeUp" delay={150}>
                        <p className="font-poppins font-normal text-center" style={{ fontSize: '20px', lineHeight: '32px', color: '#6B7280', maxWidth: '650px', margin: '0 auto' }}>
                            Explore our range of precision electronic components.
                        </p>
                    </AnimateOnScroll>
                </div>

                <AnimateOnScroll animation="fadeUp" delay={200}>
                    <div style={{ position: 'relative', marginTop: '50px' }}>
                        <button onClick={goPrev} disabled={activeIndex === 0}
                            style={{ position: 'absolute', left: '32px', top: '50%', transform: 'translateY(-50%)', zIndex: 20, width: '52px', height: '52px', borderRadius: '50%', backgroundColor: activeIndex === 0 ? 'rgba(255,255,255,0.5)' : 'rgba(0, 85, 164, 0.9)', border: activeIndex === 0 ? '1px solid #CBD5E1' : 'none', cursor: activeIndex === 0 ? 'default' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: activeIndex === 0 ? 'none' : '0 4px 20px rgba(0, 85, 164, 0.3)', transition: 'all 0.3s ease' }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={activeIndex === 0 ? '#94A3B8' : 'white'} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
                        </button>

                        <button onClick={goNext} disabled={activeIndex === showcaseProducts.length - 1}
                            style={{ position: 'absolute', right: '32px', top: '50%', transform: 'translateY(-50%)', zIndex: 20, width: '52px', height: '52px', borderRadius: '50%', backgroundColor: activeIndex === showcaseProducts.length - 1 ? 'rgba(255,255,255,0.5)' : 'rgba(0, 85, 164, 0.9)', border: activeIndex === showcaseProducts.length - 1 ? '1px solid #CBD5E1' : 'none', cursor: activeIndex === showcaseProducts.length - 1 ? 'default' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: activeIndex === showcaseProducts.length - 1 ? 'none' : '0 4px 20px rgba(0, 85, 164, 0.3)', transition: 'all 0.3s ease' }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={activeIndex === showcaseProducts.length - 1 ? '#94A3B8' : 'white'} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                        </button>

                        <div
                            ref={scrollRef}
                            onScroll={handleScroll}
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseUp}
                            style={{ display: 'flex', gap: `${DESKTOP_GAP}px`, overflowX: 'auto', scrollSnapType: 'x mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none', paddingLeft: 'calc(50% - 210px)', paddingRight: 'calc(50% - 210px)', cursor: isDragging ? 'grabbing' : 'grab', userSelect: 'none' }}
                            className="hide-scrollbar"
                        >
                            {showcaseProducts.map((img, index) => (
                                <div key={index} style={{ flex: `0 0 ${DESKTOP_CARD_W}px`, height: '280px', borderRadius: '20px', overflow: 'hidden', position: 'relative', scrollSnapAlign: 'center', transition: 'transform 0.4s ease, box-shadow 0.4s ease', transform: activeIndex === index ? 'scale(1.03)' : 'scale(0.95)', opacity: activeIndex === index ? 1 : 0.6, boxShadow: activeIndex === index ? '0 12px 40px rgba(0, 85, 164, 0.25)' : '0 4px 12px rgba(0, 0, 0, 0.08)' }}>
                                    <Image src={img.src} alt={img.alt} fill className="object-cover" draggable={false} />
                                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '100px', background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)', opacity: activeIndex === index ? 1 : 0.5, transition: 'opacity 0.4s ease' }} />
                                    <div style={{ position: 'absolute', bottom: '18px', left: '22px', right: '22px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span className="font-poppins font-semibold" style={{ fontSize: '18px', color: '#FFFFFF', textShadow: '0 2px 6px rgba(0,0,0,0.4)' }}>{img.caption}</span>
                                        <div style={{ padding: '4px 12px', borderRadius: '20px', backgroundColor: 'rgba(0, 85, 164, 0.85)', backdropFilter: 'blur(4px)' }}>
                                            <span className="font-poppins font-medium text-[13px] text-white">{String(index + 1).padStart(2, '0')}/{String(showcaseProducts.length).padStart(2, '0')}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-center gap-2" style={{ marginTop: '32px' }}>
                            {showcaseProducts.map((_, index) => (
                                <button key={index} onClick={() => { pauseAutoPlay(); scrollToIndex(index) }}
                                    style={{ width: activeIndex === index ? '32px' : '10px', height: '10px', borderRadius: '5px', backgroundColor: activeIndex === index ? '#0055A4' : '#CBD5E1', border: 'none', cursor: 'pointer', transition: 'all 0.3s ease' }}
                                    onMouseEnter={(e) => { if (activeIndex !== index) e.currentTarget.style.backgroundColor = '#93C5FD' }}
                                    onMouseLeave={(e) => { if (activeIndex !== index) e.currentTarget.style.backgroundColor = '#CBD5E1' }}
                                />
                            ))}
                        </div>
                    </div>
                </AnimateOnScroll>
            </section>

            <style jsx global>{`.hide-scrollbar::-webkit-scrollbar { display: none; }`}</style>
        </>
    )
}
