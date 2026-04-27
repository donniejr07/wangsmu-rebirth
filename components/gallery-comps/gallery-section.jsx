'use client'

import { useState } from 'react'
import Image from 'next/image'

// categories
const categories = [
    'All',
    'Tooling & Mold Manufacturing',
    'Injection Molding',
    'Painting & Coating',
    'Sub Assembly',
]

// gallery data
const galleryData = [
    { id: 1, src: '/images/galeri-laser.png', alt: 'Laser Cutting', category: 'Tooling & Mold Manufacturing' },
    { id: 2, src: '/images/services/tooling.png', alt: 'Tooling Process', category: 'Tooling & Mold Manufacturing' },
    { id: 3, src: '/images/services/injection.png', alt: 'Injection Machine', category: 'Injection Molding' },
    { id: 4, src: '/images/platting-wsu.png', alt: 'Platting Process', category: 'Painting & Coating' },
    { id: 5, src: '/images/services/painting.png', alt: 'Painting Line', category: 'Painting & Coating' },
    { id: 6, src: '/images/services/subassembly.png', alt: 'Sub Assembly Line', category: 'Sub Assembly' },
    { id: 7, src: '/images/printing-wsu-1.png', alt: 'Printing Process', category: 'Tooling & Mold Manufacturing' },
    { id: 8, src: '/images/services/printing.png', alt: '3D Printing', category: 'Tooling & Mold Manufacturing' },
    { id: 9, src: '/images/services/laser.png', alt: 'Laser Process', category: 'Tooling & Mold Manufacturing' },
    { id: 10, src: '/images/gallery-wsu.png', alt: 'Factory Overview', category: 'Sub Assembly' },
    { id: 11, src: '/images/services/design.png', alt: 'Design Process', category: 'Tooling & Mold Manufacturing' },
    { id: 12, src: '/images/design-wangsmu.png', alt: 'Design Workshop', category: 'Injection Molding' },
    { id: 13, src: '/images/shifter.jpg', alt: 'Shifter Product', category: 'Injection Molding' },
    { id: 14, src: '/images/news.jpg', alt: 'Factory News', category: 'Painting & Coating' },
    { id: 15, src: '/images/wang.jpg', alt: 'Wang Factory', category: 'Sub Assembly' },
    { id: 16, src: '/images/story.png', alt: 'Our Story', category: 'Tooling & Mold Manufacturing' },
]

const DESKTOP_PER_PAGE = 12
const MOBILE_PER_PAGE = 6

export default function Gallery() {
    const [activeFilter, setActiveFilter] = useState('All')
    const [currentPage, setCurrentPage] = useState(1)

    // filter logic
    const filteredImages = activeFilter === 'All'
        ? galleryData
        : galleryData.filter(img => img.category === activeFilter)

    // update filter
    const handleFilterChange = (category) => {
        setActiveFilter(category)
        setCurrentPage(1)
    }

    return (
        <>
            {/* mobile */}
            <section
                className="lg:hidden w-full relative"
                style={{
                    paddingTop: '30px',
                    paddingBottom: '40px',
                    paddingLeft: '16px',
                    paddingRight: '16px',
                }}
            >
                {/* Gradient background with fade edges */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background: 'linear-gradient(180deg, #F0F4F8 0%, rgba(217, 217, 217, 0.4) 15%, rgba(217, 217, 217, 0.4) 85%, #F0F4F8 100%)',
                        maskImage: 'linear-gradient(to bottom, transparent 0%, black 10px, black calc(100% - 10px), transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10px, black calc(100% - 10px), transparent 100%)',
                    }}
                />
                {/* tabs */}
                <div className="relative z-10">
                <div
                    className="flex items-center overflow-x-auto no-scrollbar"
                    style={{ gap: '8px', paddingBottom: '8px' }}
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => handleFilterChange(category)}
                            className="font-poppins font-medium transition-all duration-300 cursor-pointer whitespace-nowrap flex-shrink-0"
                            style={{
                                height: '34px',
                                paddingLeft: '14px',
                                paddingRight: '14px',
                                borderRadius: '20px',
                                fontSize: '13px',
                                border: activeFilter === category ? 'none' : '1.5px solid #0055A4',
                                backgroundColor: activeFilter === category ? '#0055A4' : '#FFFFFF',
                                color: activeFilter === category ? '#FFFFFF' : '#0055A4',
                            }}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* grid */}
                <div
                    className="grid grid-cols-2"
                    style={{ gap: '12px', marginTop: '24px' }}
                >
                    {(() => {
                        const totalPages = Math.ceil(filteredImages.length / MOBILE_PER_PAGE)
                        const startIndex = (currentPage - 1) * MOBILE_PER_PAGE
                        const currentImages = filteredImages.slice(startIndex, startIndex + MOBILE_PER_PAGE)

                        return currentImages.map((image) => (
                            <div
                                key={image.id}
                                className="relative overflow-hidden group cursor-pointer"
                                style={{
                                    width: '100%',
                                    aspectRatio: '1 / 1',
                                    borderRadius: '12px',
                                }}
                            >
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    {/* overlay */}
                                    <div className="absolute inset-0 bg-[#0055A4]/0 group-hover:bg-[#0055A4]/40 transition-all duration-300 flex items-end">
                                        <p
                                            className="text-white font-poppins font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            style={{ padding: '8px 10px', fontSize: '12px' }}
                                        >
                                            {image.alt}
                                        </p>
                                </div>
                            </div>
                        ))
                    })()}
                </div>

                {/* pagination */}
                {(() => {
                    const totalPages = Math.ceil(filteredImages.length / MOBILE_PER_PAGE)
                    if (totalPages <= 1) return null

                    return (
                        <div
                            className="flex items-center justify-center"
                            style={{ marginTop: '30px', gap: '6px' }}
                        >
                            {/* Prev */}
                            <button
                                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                                className="font-poppins font-medium cursor-pointer transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
                                style={{
                                    width: '34px',
                                    height: '34px',
                                    borderRadius: '50%',
                                    border: '1.5px solid #0055A4',
                                    backgroundColor: '#FFFFFF',
                                    color: '#0055A4',
                                    fontSize: '16px',
                                }}
                            >
                                ‹
                            </button>

                            {/* Page Numbers */}
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <button
                                    key={page}
                                    onClick={() => setCurrentPage(page)}
                                    className="font-poppins font-medium cursor-pointer transition-all duration-300"
                                    style={{
                                        width: '34px',
                                        height: '34px',
                                        borderRadius: '50%',
                                        border: currentPage === page ? 'none' : '1.5px solid #0055A4',
                                        backgroundColor: currentPage === page ? '#0055A4' : '#FFFFFF',
                                        color: currentPage === page ? '#FFFFFF' : '#0055A4',
                                        fontSize: '14px',
                                    }}
                                >
                                    {page}
                                </button>
                            ))}

                            {/* Next */}
                            <button
                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages}
                                className="font-poppins font-medium cursor-pointer transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
                                style={{
                                    width: '34px',
                                    height: '34px',
                                    borderRadius: '50%',
                                    border: '1.5px solid #0055A4',
                                    backgroundColor: '#FFFFFF',
                                    color: '#0055A4',
                                    fontSize: '16px',
                                }}
                            >
                                ›
                            </button>
                        </div>
                    )
                })()}
                </div>
            </section>

            {/* desktop */}
            <section
                className="hidden lg:block w-full relative"
                style={{
                    minHeight: '704px',
                    paddingTop: '45px',
                    paddingBottom: '60px',
                }}
            >
                {/* Gradient background with fade edges */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background: 'linear-gradient(180deg, #F0F4F8 0%, rgba(217, 217, 217, 0.4) 10%, rgba(217, 217, 217, 0.4) 90%, #F0F4F8 100%)',
                        maskImage: 'linear-gradient(to bottom, transparent 0%, black 15px, black calc(100% - 15px), transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15px, black calc(100% - 15px), transparent 100%)',
                    }}
                />
                {/* tabs */}
                <div className="relative z-10">
                <div
                    className="flex flex-wrap items-center"
                    style={{
                        paddingLeft: '88px',
                        gap: '16px',
                    }}
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => handleFilterChange(category)}
                            className="font-poppins font-medium transition-all duration-300 cursor-pointer"
                            style={{
                                height: '40px',
                                paddingLeft: '20px',
                                paddingRight: '20px',
                                borderRadius: '25px',
                                fontSize: '18px',
                                border: activeFilter === category ? 'none' : '1.5px solid #0055A4',
                                backgroundColor: activeFilter === category ? '#0055A4' : '#FFFFFF',
                                color: activeFilter === category ? '#FFFFFF' : '#0055A4',
                            }}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* grid */}
                <div
                    style={{
                        paddingLeft: '75px',
                        paddingRight: '75px',
                        marginTop: '60px',
                        minHeight: '530px',
                    }}
                >
                    <div
                        className="grid grid-cols-4"
                        style={{ gap: '30px' }}
                    >
                        {(() => {
                            const totalPages = Math.ceil(filteredImages.length / DESKTOP_PER_PAGE)
                            const startIndex = (currentPage - 1) * DESKTOP_PER_PAGE
                            const currentImages = filteredImages.slice(startIndex, startIndex + DESKTOP_PER_PAGE)

                            return currentImages.map((image) => (
                                <div
                                    key={image.id}
                                    className="relative overflow-hidden group cursor-pointer"
                                    style={{
                                        width: '100%',
                                        aspectRatio: '266 / 141',
                                        borderRadius: '20px',
                                    }}
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    {/* overlay */}
                                    <div className="absolute inset-0 bg-[#0055A4]/0 group-hover:bg-[#0055A4]/40 transition-all duration-300 flex items-end">
                                        <p
                                            className="text-white font-poppins font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            style={{
                                                padding: '12px 16px',
                                                fontSize: '14px',
                                            }}
                                        >
                                            {image.alt}
                                        </p>
                                    </div>
                                </div>
                            ))
                        })()}
                    </div>
                </div>

                {/* pagination */}
                {(() => {
                    const totalPages = Math.ceil(filteredImages.length / DESKTOP_PER_PAGE)
                    if (totalPages <= 1) return null

                    return (
                        <div
                            className="flex items-center justify-center"
                            style={{ marginTop: '50px', gap: '8px' }}
                        >
                            {/* Prev */}
                            <button
                                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                                className="font-poppins font-medium cursor-pointer transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    border: '1.5px solid #0055A4',
                                    backgroundColor: '#FFFFFF',
                                    color: '#0055A4',
                                    fontSize: '18px',
                                }}
                            >
                                ‹
                            </button>

                            {/* Page Numbers */}
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <button
                                    key={page}
                                    onClick={() => setCurrentPage(page)}
                                    className="font-poppins font-medium cursor-pointer transition-all duration-300"
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        border: currentPage === page ? 'none' : '1.5px solid #0055A4',
                                        backgroundColor: currentPage === page ? '#0055A4' : '#FFFFFF',
                                        color: currentPage === page ? '#FFFFFF' : '#0055A4',
                                        fontSize: '16px',
                                    }}
                                >
                                    {page}
                                </button>
                            ))}

                            {/* Next */}
                            <button
                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages}
                                className="font-poppins font-medium cursor-pointer transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    border: '1.5px solid #0055A4',
                                    backgroundColor: '#FFFFFF',
                                    color: '#0055A4',
                                    fontSize: '18px',
                                }}
                            >
                                ›
                            </button>
                        </div>
                    )
                })()}
                </div>
            </section>
        </>
    )
}
