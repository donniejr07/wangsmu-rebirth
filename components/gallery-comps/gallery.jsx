'use client'

import { useState } from 'react'
import Image from 'next/image'

// Kategori filter
const categories = [
    'All',
    'Tooling & Mold Manufacturing',
    'Injection Molding',
    'Painting & Coating',
    'Sub Assembly',
]

// Data galeri dummy (nanti bisa diganti dari API)
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

const ITEMS_PER_PAGE = 12 // 3 baris x 4 kolom

export default function Gallery() {
    const [activeFilter, setActiveFilter] = useState('All')
    const [currentPage, setCurrentPage] = useState(1)

    // Filter gambar berdasarkan kategori
    const filteredImages = activeFilter === 'All'
        ? galleryData
        : galleryData.filter(img => img.category === activeFilter)

    // Hitung pagination
    const totalPages = Math.ceil(filteredImages.length / ITEMS_PER_PAGE)
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    const currentImages = filteredImages.slice(startIndex, startIndex + ITEMS_PER_PAGE)

    // Reset ke halaman 1 saat ganti filter
    const handleFilterChange = (category) => {
        setActiveFilter(category)
        setCurrentPage(1)
    }

    return (
        <section
            className="w-full"
            style={{
                backgroundColor: 'rgba(217, 217, 217, 0.4)',
                minHeight: '704px',
                paddingTop: '45px',
                paddingBottom: '60px',
            }}
        >
            {/* Filter Buttons */}
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

            {/* Image */}
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
                    style={{
                        gap: '30px',
                    }}
                >
                    {currentImages.map((image) => (
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
                            {/* Overlay on hover */}
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
                    ))}
                </div>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div
                    className="flex items-center justify-center"
                    style={{
                        marginTop: '50px',
                        gap: '8px',
                    }}
                >
                    {/* Prev Button */}
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

                    {/* Pagination */}
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
            )}
        </section>
    )
}
