'use client'

import { AnimateOnScroll } from '@/components/animations/scroll-animations'
import { useState, useRef, useEffect } from 'react'

const SearchIcon = () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="#000000" />
    </svg>
)

const BindingIcon = () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM18 20H6V4H18V20ZM14 10H8V12H14V10ZM14 14H8V16H14V14ZM16 6H8V8H16V6Z" fill="#000000" />
    </svg>
)

const CollegeIcon = () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" fill="#000000" />
    </svg>
)

const ChevronDownIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9l6 6 6-6" />
    </svg>
)

export default function CareerPositionSection() {
    const [searchTerm, setSearchTerm] = useState('')
    const [activeDropdown, setActiveDropdown] = useState(null)
    const [selectedJobType, setSelectedJobType] = useState('Semua lowongan')
    const [selectedEduLevel, setSelectedEduLevel] = useState('Semua Jenjang')
    const [currentPage, setCurrentPage] = useState(1)

    const dropdownRef = useRef(null)

    const mobileDropdownRef = useRef(null)

    const JOBS_PER_PAGE = 3

    // Data lowongan
    const jobsData = [
        { id: 1, title: 'Quality Control Staff', department: 'Quality Control', location: 'Bekasi, Indonesia', type: 'Full-time', description: 'Bertanggung jawab untuk memastikan kualitas produk sesuai standar perusahaan dan regulasi industri.' },
        { id: 2, title: 'IT Support Specialist', department: 'IT', location: 'Bekasi, Indonesia', type: 'Full-time', description: 'Menangani troubleshooting hardware/software dan maintenance infrastruktur IT perusahaan.' },
        { id: 3, title: 'PPIC Staff', department: 'PPIC', location: 'Bekasi, Indonesia', type: 'Full-time', description: 'Merencanakan dan mengontrol produksi serta inventori untuk memenuhi target produksi.' },
        { id: 4, title: 'Moulding Operator', department: 'Moulding', location: 'Bekasi, Indonesia', type: 'Full-time', description: 'Mengoperasikan mesin injection moulding untuk produksi komponen plastik berkualitas tinggi.' },
        { id: 5, title: 'HRD Staff', department: 'HRD', location: 'Bekasi, Indonesia', type: 'Full-time', description: 'Mengelola rekrutmen, training, dan administrasi kepegawaian perusahaan.' },
        { id: 6, title: 'Finance Staff', department: 'Finance', location: 'Bekasi, Indonesia', type: 'Full-time', description: 'Mengelola pembukuan, laporan keuangan, dan administrasi keuangan perusahaan.' },
    ]

    // Pagination
    const totalPages = Math.ceil(jobsData.length / JOBS_PER_PAGE)
    const startIndex = (currentPage - 1) * JOBS_PER_PAGE
    const paginatedJobs = jobsData.slice(startIndex, startIndex + JOBS_PER_PAGE)

    // Filter options
    const jobTypes = ['Semua lowongan', 'Quality Control', 'IT', 'PPIC', 'Moulding']
    const eduLevels = ['Semua Jenjang', 'SMA/SMK', 'Diploma', 'Sarjana (S1)', 'Magister (S2)']

    // Close dropdown on outside click
    useEffect(() => {
        function handleClickOutside(event) {
            const clickedOutsideDesktop = dropdownRef.current && !dropdownRef.current.contains(event.target)
            const clickedOutsideMobile = mobileDropdownRef.current && !mobileDropdownRef.current.contains(event.target)

            if (clickedOutsideDesktop && clickedOutsideMobile) {
                setActiveDropdown(null)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    const toggleDropdown = (dropdown) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
    }

    const handleSelectJobType = (type) => {
        setSelectedJobType(type)
        setActiveDropdown(null)
    }

    const handleSelectEduLevel = (level) => {
        setSelectedEduLevel(level)
        setActiveDropdown(null)
    }

    return (
        <>
            <style jsx global>{`
                @keyframes slideDown {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .dropdown-animate {
                    animation: slideDown 0.2s ease-out forwards;
                }
            `}</style>

            {/* Mobile Layout */}
            <section className="lg:hidden relative" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
                {/* Background */}
                <div
                    className="absolute inset-0 bg-[#D9D9D9]/40 z-0"
                    style={{
                        maskImage: 'linear-gradient(to bottom, transparent 0%, black 10px, black calc(100% - 10px), transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10px, black calc(100% - 10px), transparent 100%)'
                    }}
                />

                <div className="relative z-10 flex flex-col items-center px-4 w-full">
                    {/* Title */}
                    <h2 className="font-poppins font-semibold text-2xl text-center mb-2">
                        <span className="text-black">Open </span>
                        <span className="text-[#0055A4]">Positions</span>
                    </h2>
                    <p className="font-poppins text-xs text-black text-center" style={{ marginBottom: '1rem' }}>
                        Find your dream job and join our team
                    </p>

                    {/* Filter Bar */}
                    <div className="flex flex-col bg-white rounded-xl border border-gray-300 w-72 mb-5"
                        style={{ padding: '10px', gap: '10px' }}
                    >
                        {/* Search */}
                        <div className="flex items-center gap-2 pb-3 border-b border-gray-200">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                                <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="#666" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Cari lowongan..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="font-poppins text-xs w-full outline-none bg-transparent placeholder-gray-400"
                            />
                        </div>

                        {/* Jenis Lowongan */}
                        <div className="relative">
                            <div
                                className="flex items-center justify-between pb-3 border-b border-gray-200 cursor-pointer"
                                onClick={() => toggleDropdown('mobileJobType')}
                            >
                                <div className="flex items-center gap-2">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                                        <path d="M18 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM18 20H6V4H18V20ZM14 10H8V12H14V10ZM14 14H8V16H14V14ZM16 6H8V8H16V6Z" fill="#666" />
                                    </svg>
                                    <span className={`font-poppins text-xs ${selectedJobType !== 'Semua lowongan' ? 'text-[#0055A4] font-medium' : 'text-gray-500'}`}>
                                        {selectedJobType}
                                    </span>
                                </div>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`transition-transform duration-200 text-gray-400 ${activeDropdown === 'mobileJobType' ? 'rotate-180' : ''}`}>
                                    <path d="M6 9l6 6 6-6" />
                                </svg>
                            </div>
                            {activeDropdown === 'mobileJobType' && (
                                <div className="absolute left-0 right-0 top-full z-50 mt-1 bg-white rounded-lg shadow-xl border border-gray-100 p-2"
                                    style={{ padding: '1rem' }}>
                                    {jobTypes.map((type) => (
                                        <div
                                            key={type}
                                            onClick={() => handleSelectJobType(type)}
                                            style={{ padding: '1rem' }}
                                            className={`px-3 py-2 text-xs rounded-lg cursor-pointer ${selectedJobType === type ? 'bg-[#0055A4]/10 text-[#0055A4] font-medium' : 'text-gray-600 hover:bg-gray-50'}`}
                                        >
                                            {type}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Jenjang Pendidikan */}
                        <div className="relative">
                            <div
                                className="flex items-center justify-between cursor-pointer"
                                onClick={() => toggleDropdown('mobileEduLevel')}
                            >
                                <div className="flex items-center gap-2">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                                        <path d="M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" fill="#666" />
                                    </svg>
                                    <span className={`font-poppins text-xs ${selectedEduLevel !== 'Semua Jenjang' ? 'text-[#0055A4] font-medium' : 'text-gray-500'}`}>
                                        {selectedEduLevel}
                                    </span>
                                </div>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`transition-transform duration-200 text-gray-400 ${activeDropdown === 'mobileEduLevel' ? 'rotate-180' : ''}`}>
                                    <path d="M6 9l6 6 6-6" />
                                </svg>
                            </div>
                            {activeDropdown === 'mobileEduLevel' && (
                                <div className="absolute left-0 right-0 top-full z-50 mt-1 bg-white rounded-lg shadow-xl border border-gray-100 p-2"
                                    style={{ padding: '1rem' }}>
                                    {eduLevels.map((level) => (
                                        <div
                                            key={level}
                                            onClick={() => handleSelectEduLevel(level)}
                                            style={{ padding: '1rem' }}
                                            className={`px-3 py-2 text-xs rounded-lg cursor-pointer ${selectedEduLevel === level ? 'bg-[#0055A4]/10 text-[#0055A4] font-medium' : 'text-gray-600 hover:bg-gray-50'}`}
                                        >
                                            {level}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Button Search */}
                        <button
                            className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#0055A4] hover:bg-[#004080] active:scale-95 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md mt-1"
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="white" />
                            </svg>
                            <span className="font-poppins font-semibold text-[13px] text-white">Search</span>
                        </button>
                    </div>

                    {/* Job Cards */}
                    <div className="flex flex-col gap-3 w-72" style={{ marginTop: '1rem' }}>
                        {paginatedJobs.map((job) => (
                            <div key={job.id} className="bg-white rounded-xl" style={{ padding: '1rem' }}>
                                <h3 className="font-poppins font-semibold text-sm text-[#0055A4] mb-2">
                                    {job.title}
                                </h3>

                                <div className="flex flex-wrap gap-x-4 gap-y-1 mb-2">
                                    <div className="flex items-center gap-1 text-[11px] text-gray-500">
                                        <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor"><path d="M2 2h5v5H2V2zm7 0h5v5H9V2zM2 9h5v5H2V9zm7 3.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0z" /></svg>
                                        <span>{job.department}</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-[11px] text-gray-500">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                                        <span>{job.location}</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-[11px] text-gray-500">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" /></svg>
                                        <span>{job.type}</span>
                                    </div>
                                </div>

                                <p className="font-poppins text-xs text-gray-500 mb-3 leading-relaxed">
                                    {job.description}
                                </p>

                                <div className="flex gap-2">
                                    <button className="flex-1 py-1.5 rounded-lg border border-gray-300 text-xs font-poppins font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                                        Detail
                                    </button>
                                    <button className="flex-1 py-1.5 rounded-lg bg-[#0055A4] text-white text-xs font-poppins font-medium hover:bg-[#004080] transition-colors">
                                        Apply Now
                                    </button>
                                </div>
                            </div>
                        ))}

                        {/* Pagination */}
                        <div className="flex items-center justify-center gap-2 mt-3 pb-2">
                            <button
                                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                                className={`w-8 h-8 rounded-lg border border-gray-300 flex items-center justify-center ${currentPage === 1 ? 'opacity-30' : 'hover:bg-gray-100'}`}
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
                            </button>

                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <button
                                    key={page}
                                    onClick={() => setCurrentPage(page)}
                                    className={`w-8 h-8 rounded-lg text-xs font-poppins font-medium transition-colors ${currentPage === page ? 'bg-[#0055A4] text-white' : 'border border-gray-300 text-gray-600 hover:bg-gray-100'}`}
                                >
                                    {page}
                                </button>
                            ))}

                            <button
                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages}
                                className={`w-8 h-8 rounded-lg border border-gray-300 flex items-center justify-center ${currentPage === totalPages ? 'opacity-30' : 'hover:bg-gray-100'}`}
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Desktop Layout */}
            <section className="hidden lg:block relative w-full" style={{ height: '850px' }}>
                <div
                    className="absolute z-0"
                    style={{
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '850px',
                        backgroundColor: '#D9D9D9',
                        opacity: 0.4,
                        maskImage: 'linear-gradient(to bottom, transparent 0%, black 25px, black calc(100% - 25px), transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 25px, black calc(100% - 25px), transparent 100%)'
                    }}
                />

                <div className="relative z-10 w-full h-full">

                    <AnimateOnScroll animation="fadeUp" delay={0}>
                        <h2
                            className="absolute font-poppins font-semibold text-[60px] leading-[81px]"
                            style={{
                                top: '16px',
                                width: '100%',
                                textAlign: 'center',
                            }}
                        >
                            <span className="text-black">Open </span>
                            <span className="text-[#0055A4]">Positions</span>
                        </h2>
                    </AnimateOnScroll>

                    <AnimateOnScroll animation="fadeUp" delay={50}>
                        <p
                            className="absolute font-poppins font-normal text-[24px] leading-[36px] text-black text-center"
                            style={{
                                top: '116px',
                                width: '100%',
                                textAlign: 'center',
                            }}
                        >
                            Find your dream job and join our team
                        </p>
                    </AnimateOnScroll>

                    {/* Filter */}
                    <div style={{ position: 'relative', zIndex: 100 }}>
                        <AnimateOnScroll animation="fadeUp" delay={100}>
                            <div
                                ref={dropdownRef}
                                className="absolute bg-white border border-black flex items-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                                style={{
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    top: '179px',
                                    width: '1000px',
                                    height: '50px',
                                    borderRadius: '20px',
                                    zIndex: 100,
                                }}
                            >

                                <div className="flex items-center" style={{ paddingLeft: '14px' }}>
                                    <div style={{ width: '30px', height: '30px' }}>
                                        <SearchIcon />
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Cari lowongan yang anda inginkan . . ."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="font-poppins font-extralight text-[15px] text-black ml-[20px] w-[291px] h-[25px] border-none outline-none placeholder-black/80 bg-transparent"
                                    />
                                </div>


                                <div
                                    style={{
                                        position: 'absolute',
                                        left: '385px',
                                        height: '50px',
                                        width: '1px',
                                        backgroundColor: 'black'
                                    }}
                                />


                                <div
                                    className="flex items-center absolute cursor-pointer hover:bg-gray-50 rounded-xl px-2 transition-colors duration-200"
                                    style={{ left: '400px', top: '5px', bottom: '5px' }}
                                    onClick={() => toggleDropdown('jobType')}
                                >
                                    <div style={{ width: '30px', height: '30px' }}>
                                        <BindingIcon />
                                    </div>
                                    <div className="flex items-center justify-between" style={{ width: '160px', marginLeft: '26px' }}>
                                        <span className={`font-poppins text-[15px] truncate w-[139=px] transition-colors ${selectedJobType !== 'Semua lowongan' ? 'text-[#0055A4] font-medium' : 'font-extralight text-black'}`}>
                                            {selectedJobType}
                                        </span>
                                        <div className={`transition-transform duration-300 ${activeDropdown === 'jobType' ? 'rotate-180' : ''}`}>
                                            <ChevronDownIcon />
                                        </div>
                                    </div>


                                    {activeDropdown === 'jobType' && (
                                        <div
                                            className="dropdown-animate"
                                            style={{
                                                position: 'absolute',
                                                top: '10px',
                                                left: '-20px',
                                                width: '280px',
                                                backgroundColor: 'white',
                                                border: '1px solid #f3f4f6',
                                                borderRadius: '16px',
                                                boxShadow: '0 10px 40px -10px rgba(0,0,0,0.15)',
                                                padding: '12px',
                                                zIndex: 100,
                                                marginTop: '50px',
                                            }}
                                        >
                                            {jobTypes.map((type) => (
                                                <div
                                                    key={type}
                                                    style={{
                                                        padding: '12px 16px',
                                                        borderRadius: '12px',
                                                        cursor: 'pointer',
                                                        fontFamily: 'Poppins, sans-serif',
                                                        fontSize: '15px',
                                                        marginBottom: '4px',
                                                        transition: 'all 0.2s',
                                                        backgroundColor: selectedJobType === type ? 'rgba(0, 85, 164, 0.1)' : 'transparent',
                                                        color: selectedJobType === type ? '#0055A4' : '#4b5563',
                                                        fontWeight: selectedJobType === type ? '500' : '400',
                                                    }}
                                                    onClick={() => handleSelectJobType(type)}
                                                    onMouseEnter={(e) => {
                                                        if (selectedJobType !== type) {
                                                            e.currentTarget.style.backgroundColor = '#f9fafb';
                                                            e.currentTarget.style.color = '#000';
                                                        }
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        if (selectedJobType !== type) {
                                                            e.currentTarget.style.backgroundColor = 'transparent';
                                                            e.currentTarget.style.color = '#4b5563';
                                                        }
                                                    }}
                                                >
                                                    {type}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>


                                <div
                                    style={{
                                        position: 'absolute',
                                        left: '681px',
                                        height: '50px',
                                        width: '1px',
                                        backgroundColor: 'black'
                                    }}
                                />


                                <div
                                    className="flex items-center absolute cursor-pointer hover:bg-gray-50 rounded-xl px-2 transition-colors duration-200"
                                    style={{ left: '695px', top: '5px', bottom: '5px' }}
                                    onClick={() => toggleDropdown('eduLevel')}
                                >
                                    <div style={{ width: '30px', height: '30px' }}>
                                        <CollegeIcon />
                                    </div>
                                    <div className="flex items-center justify-between" style={{ width: '160px', marginLeft: '19px' }}>
                                        <span className={`font-poppins text-[15px] truncate w-[139px] transition-colors ${selectedEduLevel !== 'Semua Jenjang' ? 'text-[#0055A4] font-medium' : 'font-extralight text-black'}`}>
                                            {selectedEduLevel}
                                        </span>
                                        <div className={`transition-transform duration-300 ${activeDropdown === 'eduLevel' ? 'rotate-180' : ''}`}>
                                            <ChevronDownIcon />
                                        </div>
                                    </div>


                                    {activeDropdown === 'eduLevel' && (
                                        <div
                                            className="dropdown-animate"
                                            style={{
                                                position: 'absolute',
                                                top: '10px',
                                                left: '-20px',
                                                width: '280px',
                                                backgroundColor: 'white',
                                                border: '1px solid #f3f4f6',
                                                borderRadius: '16px',
                                                boxShadow: '0 10px 40px -10px rgba(0,0,0,0.15)',
                                                padding: '12px',
                                                zIndex: 100,
                                                marginTop: '50px',
                                            }}
                                        >
                                            {eduLevels.map((level) => (
                                                <div
                                                    key={level}
                                                    style={{
                                                        padding: '12px 16px',
                                                        borderRadius: '12px',
                                                        cursor: 'pointer',
                                                        fontFamily: 'Poppins, sans-serif',
                                                        fontSize: '15px',
                                                        marginBottom: '4px',
                                                        transition: 'all 0.2s',
                                                        backgroundColor: selectedEduLevel === level ? 'rgba(0, 85, 164, 0.1)' : 'transparent',
                                                        color: selectedEduLevel === level ? '#0055A4' : '#4b5563',
                                                        fontWeight: selectedEduLevel === level ? '500' : '400',
                                                    }}
                                                    onClick={() => handleSelectEduLevel(level)}
                                                    onMouseEnter={(e) => {
                                                        if (selectedEduLevel !== level) {
                                                            e.currentTarget.style.backgroundColor = '#f9fafb';
                                                            e.currentTarget.style.color = '#000';
                                                        }
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        if (selectedEduLevel !== level) {
                                                            e.currentTarget.style.backgroundColor = 'transparent';
                                                            e.currentTarget.style.color = '#4b5563';
                                                        }
                                                    }}
                                                >
                                                    {level}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                            </div>
                        </AnimateOnScroll>
                    </div>

                    {/* Job Cards */}
                    <div
                        className="absolute flex flex-col items-center"
                        style={{
                            top: '294px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '1000px',
                            gap: '16px',
                            zIndex: 30,
                        }}
                    >

                        {paginatedJobs.map((job) => (
                            <div
                                key={job.id}
                                className="bg-white hover:shadow-lg transition-shadow duration-300"
                                style={{
                                    width: '1000px',
                                    height: '136px',
                                    borderRadius: '20px',
                                    border: '1px solid #E0E0E0',
                                    position: 'relative',
                                }}
                            >

                                <h3
                                    className="font-poppins font-semibold"
                                    style={{
                                        position: 'absolute',
                                        top: '12px',
                                        left: '18px',
                                        fontSize: '18px',
                                        color: '#0055A4',
                                    }}
                                >
                                    {job.title}
                                </h3>


                                <div
                                    className="flex items-center"
                                    style={{
                                        position: 'absolute',
                                        top: '48px',
                                        left: '18px',
                                        gap: '24px',
                                    }}
                                >

                                    <div className="flex items-center" style={{ gap: '6px' }}>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="#000000">
                                            <path d="M2 2h5v5H2V2zm7 0h5v5H9V2zM2 9h5v5H2V9zm7 3.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0z" />
                                        </svg>
                                        <span className="font-poppins font-normal text-[14px] text-black">
                                            {job.department}
                                        </span>
                                    </div>


                                    <div className="flex items-center" style={{ gap: '6px' }}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="#000000">
                                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                        </svg>
                                        <span className="font-poppins font-normal text-[14px] text-black">
                                            {job.location}
                                        </span>
                                    </div>


                                    <div className="flex items-center" style={{ gap: '6px' }}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="#000000">
                                            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                                        </svg>
                                        <span className="font-poppins font-normal text-[14px] text-black">
                                            {job.type}
                                        </span>
                                    </div>
                                </div>


                                <p
                                    className="font-poppins font-normal text-[14px] text-black"
                                    style={{
                                        position: 'absolute',
                                        top: '84px',
                                        left: '18px',
                                        width: '613px',
                                    }}
                                >
                                    {job.description}
                                </p>


                                <div
                                    className="flex items-center"
                                    style={{
                                        position: 'absolute',
                                        top: '48px',
                                        right: '18px',
                                        gap: '12px',
                                    }}
                                >

                                    <button
                                        className="hover:bg-gray-100 transition-all cursor-pointer"
                                        style={{
                                            width: '130px',
                                            height: '40px',
                                            borderRadius: '10px',
                                            backgroundColor: 'transparent',
                                            border: '1px solid #000000',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <span
                                            className="font-poppins font-medium"
                                            style={{ fontSize: '20px', color: '#000000' }}
                                        >
                                            Detail
                                        </span>
                                    </button>


                                    <button
                                        className="hover:opacity-80 transition-opacity cursor-pointer"
                                        style={{
                                            width: '130px',
                                            height: '40px',
                                            borderRadius: '10px',
                                            backgroundColor: '#0055A4',
                                            border: 'none',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <span
                                            className="font-poppins font-medium"
                                            style={{ fontSize: '20px', color: '#FFFFFF' }}
                                        >
                                            Apply Now
                                        </span>
                                    </button>
                                </div>
                            </div>
                        ))}


                        <div
                            className="flex items-center justify-center"
                            style={{ marginTop: '24px', gap: '12px' }}
                        >

                            <button
                                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                                className={`flex items-center justify-center transition-all ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100 cursor-pointer'}`}
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '10px',
                                    backgroundColor: 'transparent',
                                    border: '1px solid #000000',
                                }}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2">
                                    <path d="M15 18l-6-6 6-6" />
                                </svg>
                            </button>


                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <button
                                    key={page}
                                    onClick={() => setCurrentPage(page)}
                                    className="transition-all cursor-pointer"
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '10px',
                                        backgroundColor: currentPage === page ? '#0055A4' : 'transparent',
                                        border: currentPage === page ? 'none' : '1px solid #000000',
                                        fontFamily: 'Poppins, sans-serif',
                                        fontWeight: 500,
                                        fontSize: '16px',
                                        color: currentPage === page ? '#FFFFFF' : '#000000',
                                    }}
                                >
                                    {page}
                                </button>
                            ))}


                            <button
                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages}
                                className={`flex items-center justify-center transition-all ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100 cursor-pointer'}`}
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '10px',
                                    backgroundColor: 'transparent',
                                    border: '1px solid #000000',
                                }}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2">
                                    <path d="M9 18l6-6-6-6" />
                                </svg>
                            </button>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
