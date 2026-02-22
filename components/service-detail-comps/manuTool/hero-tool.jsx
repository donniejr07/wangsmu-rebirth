'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function FormSection() {
    const [subjectOpen, setSubjectOpen] = useState(false)
    const [selectedSubject, setSelectedSubject] = useState('')

    const subjectOptions = ['Services', 'Products', 'Careers', 'Other']

    return (
        <section className="relative w-full">

            {/* Mobile Layout */}
            <div className="lg:hidden relative overflow-hidden w-full bg-[#0055A4]"
                style={{ borderRadius: '0 0 60px 60px', padding: '65px 24px 50px', minHeight: '250px' }}
            >

                {/* background image */}
                <img
                    src="/images/services/laser.png"
                    alt="Services"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* company icon */}
                <Image
                    src="/images/logo-putih.png"
                    alt="WSMU Logo"
                    width={54}
                    height={52}
                    className="absolute top-1 right-4 z-12"
                />

                {/* title */}
                <h1 className="absolute inset-0 flex justify-center items-center font-poppins font-bold text-[40px] text-[#0055A4] z-10 opacity-80">
                    Services
                </h1>

                {/* breadcrumb */}
                <h2 className="absolute left-0 right-0 top-[60%] flex justify-center items-center gap-1.5 font-poppins font-bold text-[14px] text-[#0055A4] z-10 opacity-90">
                    <a href="/" className="text-white hover:text-[#0055A4]">Home</a>
                    <span className="text-white">&gt;</span> Manufacture Tooling
                </h2>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:block relative overflow-hidden w-full h-[700px] bg-[#0055A4] rounded-b-[160px]">

                <img
                    src="/images/services/laser.png"
                    alt="Contact Background"
                    className="absolute top-[-103px] left-0 w-full h-[970px] object-cover blur-[3px]"
                />

                {/* icon */}
                <Image
                    src="/images/logo-putih.png"
                    alt="WSMU Logo"
                    width={119}
                    height={116}
                    className="absolute z-10"
                    style={{ top: '12px', right: '48px' }}
                />

                {/* title */}
                <h1 className="absolute inset-0 flex justify-center items-center font-poppins font-bold text-[72px] text-[#0055A4] z-10 opacity-80">
                    Services
                </h1>

                {/* description */}
                <h2 className="absolute inset-105 flex justify-center items-center gap-2 font-poppins font-bold text-[26px] text-[#0055A4] z-10 opacity-90">
                    <a href="/" className="text-white hover:text-[#0055A4]">Home</a>
                    <span className="text-white">&gt;</span> Manufacture Tooling
                </h2>
            </div>
        </section>
    )
}