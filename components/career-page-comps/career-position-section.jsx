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
    const [activeDropdown, setActiveDropdown] = useState(null) // 'jobType' | 'eduLevel' | null
    const [selectedJobType, setSelectedJobType] = useState('Semua lowongan')
    const [selectedEduLevel, setSelectedEduLevel] = useState('Semua Jenjang')

    const dropdownRef = useRef(null)

    // Mock Options
    const jobTypes = ['Semua lowongan', 'Quality Control', 'IT', 'PPIC', 'Moulding']
    const eduLevels = ['Semua Jenjang', 'SMA/SMK', 'Diploma', 'Sarjana (S1)', 'Magister (S2)']

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
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

            {/* Desktop Layout (Pixel Perfect based on Specs) */}
            <section className="hidden lg:block relative w-full" style={{ height: '849px' }}>

                {/* 1. Background Main */}
                <div
                    className="absolute z-0"
                    style={{
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '849px',
                        backgroundColor: '#D9D9D9',
                        opacity: 0.4,
                        maskImage: 'linear-gradient(to bottom, transparent 0%, black 15px, black calc(100% - 15px), transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15px, black calc(100% - 15px), transparent 100%)'
                    }}
                />

                <div className="relative z-10 w-full h-full">
                    {/* 2. Teks Judul "Open Positions" */}
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

                    {/* 3. Teks Subjudul */}
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

                    {/* 4. Filterisasi */}
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
                                zIndex: 50,
                            }}
                        >
                            {/* a). Filter by Pencarian */}
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

                            {/* c. Line Border 1 */}
                            <div
                                style={{
                                    position: 'absolute',
                                    left: '385px', // 605 - 220
                                    height: '50px',
                                    width: '1px',
                                    backgroundColor: 'black'
                                }}
                            />

                            {/* d. Filter by Jenis Lowongan */}
                            <div
                                className="flex items-center absolute cursor-pointer hover:bg-gray-50 rounded-xl px-2 transition-colors duration-200"
                                style={{ left: '400px', top: '5px', bottom: '5px' }} // Adjusted positioning
                                onClick={() => toggleDropdown('jobType')}
                            >
                                <div style={{ width: '30px', height: '30px' }}>
                                    <BindingIcon />
                                </div>
                                <div className="flex items-center justify-between" style={{ width: '160px', marginLeft: '26px' }}>
                                    <span className={`font-poppins text-[15px] truncate w-[139px] transition-colors ${selectedJobType !== 'Semua lowongan' ? 'text-[#0055A4] font-medium' : 'font-extralight text-black'}`}>
                                        {selectedJobType}
                                    </span>
                                    <div className={`transition-transform duration-300 ${activeDropdown === 'jobType' ? 'rotate-180' : ''}`}>
                                        <ChevronDownIcon />
                                    </div>
                                </div>

                                {/* Dropdown Menu */}
                                {activeDropdown === 'jobType' && (
                                    <div
                                        className="dropdown-animate"
                                        style={{
                                            position: 'absolute',
                                            top: '60px',
                                            left: '-20px',
                                            width: '280px',
                                            backgroundColor: 'white',
                                            border: '1px solid #f3f4f6',
                                            borderRadius: '16px',
                                            boxShadow: '0 10px 40px -10px rgba(0,0,0,0.15)',
                                            padding: '12px',
                                            zIndex: 60,
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

                            {/* e. Line Border 2 */}
                            <div
                                style={{
                                    position: 'absolute',
                                    left: '681px', // 901 - 220
                                    height: '50px',
                                    width: '1px',
                                    backgroundColor: 'black'
                                }}
                            />

                            {/* d. Filter by Jenjang Pendidikan */}
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

                                {/* Dropdown Menu */}
                                {activeDropdown === 'eduLevel' && (
                                    <div
                                        className="dropdown-animate"
                                        style={{
                                            position: 'absolute',
                                            top: '60px',
                                            left: '-20px',
                                            width: '280px',
                                            backgroundColor: 'white',
                                            border: '1px solid #f3f4f6',
                                            borderRadius: '16px',
                                            boxShadow: '0 10px 40px -10px rgba(0,0,0,0.15)',
                                            padding: '12px',
                                            zIndex: 60,
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
            </section>

            {/* Mobile Layout (Simplified) */}
            <section className="lg:hidden px-4 py-8 bg-[#D9D9D9]/40 relative">
                <div
                    className="absolute inset-0 bg-[#D9D9D9]/40 z-0"
                    style={{
                        maskImage: 'linear-gradient(to bottom, transparent 0%, black 10px, black calc(100% - 10px), transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10px, black calc(100% - 10px), transparent 100%)'
                    }}
                />
                <div className="relative z-10">
                    <h2 className="font-poppins font-semibold text-[32px] text-center mb-4">
                        <span className="text-black">Open </span>
                        <span className="text-[#0055A4]">Positions</span>
                    </h2>
                    <p className="font-poppins font-normal text-[14px] text-black text-center mb-6">
                        Find your dream job and join our team
                    </p>

                    {/* Search Bar Mobile */}
                    <div className="bg-white rounded-[20px] border border-black p-4 flex flex-col gap-4">
                        {/* Mobile Input */}
                        <div className="flex items-center gap-2 border-b border-gray-200 pb-2">
                            <SearchIcon />
                            <input
                                type="text"
                                placeholder="Cari lowongan..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="font-poppins font-extralight text-[14px] w-full outline-none"
                            />
                        </div>

                        {/* Mobile Filter Dropdown 1 */}
                        <div className="relative">
                            <div
                                className="flex items-center justify-between border-b border-gray-200 pb-2 cursor-pointer"
                                onClick={() => toggleDropdown('mobileJobType')}
                            >
                                <div className="flex items-center gap-2">
                                    <BindingIcon />
                                    <span className="font-poppins font-extralight text-[14px]">{selectedJobType}</span>
                                </div>
                                <div className={`transition-transform duration-300 ${activeDropdown === 'mobileJobType' ? 'rotate-180' : ''}`}>
                                    <ChevronDownIcon />
                                </div>
                            </div>
                            {activeDropdown === 'mobileJobType' && (
                                <div className="dropdown-animate mt-4 bg-white rounded-xl shadow-lg border border-gray-100 p-3">
                                    {jobTypes.map((type) => (
                                        <div
                                            key={type}
                                            onClick={() => handleSelectJobType(type)}
                                            className={`px-4 py-2 text-sm rounded-lg mb-1 last:mb-0 ${selectedJobType === type ? 'bg-[#0055A4]/10 text-[#0055A4]' : 'hover:bg-gray-50'}`}
                                        >
                                            {type}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Mobile Filter Dropdown 2 */}
                        <div className="relative">
                            <div
                                className="flex items-center justify-between pb-2 cursor-pointer"
                                onClick={() => toggleDropdown('mobileEduLevel')}
                            >
                                <div className="flex items-center gap-2">
                                    <CollegeIcon />
                                    <span className="font-poppins font-extralight text-[14px]">{selectedEduLevel}</span>
                                </div>
                                <div className={`transition-transform duration-300 ${activeDropdown === 'mobileEduLevel' ? 'rotate-180' : ''}`}>
                                    <ChevronDownIcon />
                                </div>
                            </div>
                            {activeDropdown === 'mobileEduLevel' && (
                                <div className="dropdown-animate mt-4 bg-white rounded-xl shadow-lg border border-gray-100 p-3">
                                    {eduLevels.map((level) => (
                                        <div
                                            key={level}
                                            onClick={() => handleSelectEduLevel(level)}
                                            className={`px-4 py-2 text-sm rounded-lg mb-1 last:mb-0 ${selectedEduLevel === level ? 'bg-[#0055A4]/10 text-[#0055A4]' : 'hover:bg-gray-50'}`}
                                        >
                                            {level}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
