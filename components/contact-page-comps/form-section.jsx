'use client'

import { useState } from 'react'

export default function FormSection() {
    const [subjectOpen, setSubjectOpen] = useState(false)
    const [selectedSubject, setSelectedSubject] = useState('')

    const subjectOptions = ['Services', 'Products', 'Careers', 'Other']

    return (
        <section className="relative w-full">

            {/* Mobile Layout */}
            <div className="lg:hidden relative overflow-hidden w-full bg-[#0055A4]"
                style={{ borderRadius: '0 0 60px 60px', padding: '65px 24px 50px' }}
            >
                {/* background image */}
                <img
                    src="images/abss.png"
                    alt="Contact Background"
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                />

                {/* form fields stacked vertically */}
                <div className="relative z-10 flex flex-col gap-5">

                    {/* fullname */}
                    <div>
                        <label className="block font-poppins font-bold text-base text-white mb-1.5">
                            Fullname
                        </label>
                        <input
                            type="text"
                            placeholder="Type Your name"
                            className="w-full h-[43px] rounded-[15px] bg-[#D9D9D9]/70 border border-white px-4 font-poppins font-bold text-sm text-center text-white outline-none placeholder:text-white/60"
                        />
                    </div>

                    {/* email */}
                    <div>
                        <label className="block font-poppins font-bold text-base text-white mb-1.5">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Type Your email"
                            className="w-full h-[43px] rounded-[15px] bg-[#D9D9D9]/70 border border-white px-4 font-poppins font-bold text-sm text-center text-white outline-none placeholder:text-white/60"
                        />
                    </div>

                    {/* company */}
                    <div>
                        <label className="block font-poppins font-bold text-base text-white mb-1.5">
                            Company
                        </label>
                        <input
                            type="text"
                            placeholder="Type Your company name"
                            className="w-full h-[43px] rounded-[15px] bg-[#D9D9D9]/70 border border-white px-4 font-poppins font-bold text-sm text-center text-white outline-none placeholder:text-white/60"
                        />
                    </div>

                    {/* countries */}
                    <div>
                        <label className="block font-poppins font-bold text-base text-white mb-1.5">
                            Countries
                        </label>
                        <input
                            type="text"
                            placeholder="Type Your country"
                            className="w-full h-[43px] rounded-[15px] bg-[#D9D9D9]/70 border border-white px-4 font-poppins font-bold text-sm text-center text-white outline-none placeholder:text-white/60"
                        />
                    </div>

                    {/* phone */}
                    <div>
                        <label className="block font-poppins font-bold text-base text-white mb-1.5">
                            Phone
                        </label>
                        <input
                            type="text"
                            placeholder="Type Your phone number"
                            className="w-full h-[43px] rounded-[15px] bg-[#D9D9D9]/70 border border-white px-4 font-poppins font-bold text-sm text-center text-white outline-none placeholder:text-white/60"
                        />
                    </div>

                    {/* subject dropdown */}
                    <div>
                        <label className="block font-poppins font-bold text-base text-white mb-1.5">
                            Subject
                        </label>
                        <div className="relative">
                            <div
                                onClick={() => setSubjectOpen(!subjectOpen)}
                                className="w-full h-[43px] rounded-[15px] bg-[#D9D9D9]/70 border border-white px-4 font-poppins font-bold text-sm text-white flex items-center justify-center cursor-pointer"
                            >
                                {selectedSubject || 'Select your Subject'}
                                <span className="absolute right-4">▼</span>
                            </div>

                            {/* dropdown options */}
                            {subjectOpen && (
                                <div className="absolute top-[48px] left-0 w-full rounded-[15px] bg-[#D9D9D9]/95 border border-white overflow-hidden z-10">
                                    {subjectOptions.map((option) => (
                                        <div
                                            key={option}
                                            onClick={() => {
                                                setSelectedSubject(option)
                                                setSubjectOpen(false)
                                            }}
                                            className="px-4 py-3 font-poppins font-bold text-sm text-black cursor-pointer transition-colors duration-200 hover:bg-[#0055A4]/30"
                                        >
                                            {option}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* message */}
                    <div>
                        <label className="block font-poppins font-bold text-base text-white mb-1.5">
                            Message
                        </label>
                        <textarea
                            placeholder="Type Your message"
                            className="w-full h-[120px] rounded-[15px] bg-[#D9D9D9]/70 border border-white font-poppins font-bold text-sm text-left text-white outline-none placeholder:text-white/60 resize-none"
                            style={{ padding: '12px 15px' }}
                        />
                    </div>

                    {/* send button */}
                    <button className="self-end w-[130px] h-[43px] rounded-[15px] bg-white border border-white font-poppins font-bold text-sm text-center text-[#0055A4] outline-none cursor-pointer hover:bg-gray-100 transition-colors">
                        Send Now
                        <i className="fa-solid fa-paper-plane ml-2"></i>
                    </button>
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:block relative overflow-hidden w-full h-[700px] bg-[#0055A4] rounded-b-[160px]">
                {/* background image */}
                <img
                    src="images/abss.png"
                    alt="Contact Background"
                    className="absolute top-[-103px] left-0 w-full h-[970px] object-cover opacity-30"
                />

                {/* row 1: fullname & email */}
                <div className="absolute top-[120px] left-0 right-0 flex justify-center gap-9">
                    <div>
                        <label className="block w-[103px] h-[30px] font-poppins font-bold text-xl text-left text-white">
                            Fullname
                        </label>
                        <input
                            type="text"
                            placeholder="Type Your name"
                            className="w-[420px] h-[43px] mt-2.5 rounded-[15px] bg-[#D9D9D9]/70 border border-white px-5 py-2.5 font-poppins font-bold text-base text-center text-white outline-none placeholder:text-white/60"
                        />
                    </div>

                    <div>
                        <label className="block w-[103px] h-[30px] font-poppins font-bold text-xl text-left text-white">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Type Your email"
                            className="w-[420px] h-[43px] mt-2.5 rounded-[15px] bg-[#D9D9D9]/70 border border-white px-5 py-2.5 font-poppins font-bold text-base text-center text-white outline-none placeholder:text-white/60"
                        />
                    </div>
                </div>

                {/* row 2: company & countries */}
                <div className="absolute top-[230px] left-0 right-0 flex justify-center gap-9">
                    <div>
                        <label className="block w-[103px] h-[30px] font-poppins font-bold text-xl text-left text-white">
                            Company
                        </label>
                        <input
                            type="text"
                            placeholder="Type Your company name"
                            className="w-[420px] h-[43px] mt-2.5 rounded-[15px] bg-[#D9D9D9]/70 border border-white px-5 py-2.5 font-poppins font-bold text-base text-center text-white outline-none placeholder:text-white/60"
                        />
                    </div>

                    <div>
                        <label className="block w-[103px] h-[30px] font-poppins font-bold text-xl text-left text-white">
                            Countries
                        </label>
                        <input
                            type="text"
                            placeholder="Type Your country"
                            className="w-[420px] h-[43px] mt-2.5 rounded-[15px] bg-[#D9D9D9]/70 border border-white px-5 py-2.5 font-poppins font-bold text-base text-center text-white outline-none placeholder:text-white/60"
                        />
                    </div>
                </div>

                {/* row 3: phone & subject */}
                <div className="absolute top-[340px] left-0 right-0 flex justify-center gap-9">
                    <div>
                        <label className="block w-[103px] h-[30px] font-poppins font-bold text-xl text-left text-white">
                            Phone
                        </label>
                        <input
                            type="text"
                            placeholder="Type Your phone number"
                            className="w-[420px] h-[43px] mt-2.5 rounded-[15px] bg-[#D9D9D9]/70 border border-white px-5 py-2.5 font-poppins font-bold text-base text-center text-white outline-none placeholder:text-white/60"
                        />
                    </div>

                    <div>
                        <label className="block w-[103px] h-[30px] font-poppins font-bold text-xl text-left text-white">
                            Subject
                        </label>
                        <div className="relative mt-2.5">
                            <div
                                onClick={() => setSubjectOpen(!subjectOpen)}
                                className="w-[420px] h-[43px] rounded-[15px] bg-[#D9D9D9]/70 border border-white px-5 font-poppins font-bold text-base text-white flex items-center justify-center cursor-pointer"
                            >
                                {selectedSubject || 'Select your Subject'}
                                <span className="absolute right-5">▼</span>
                            </div>

                            {/* dropdown options */}
                            {subjectOpen && (
                                <div className="absolute top-[48px] left-0 w-[420px] rounded-[15px] bg-[#D9D9D9]/95 border border-white overflow-hidden z-10">
                                    {subjectOptions.map((option) => (
                                        <div
                                            key={option}
                                            onClick={() => {
                                                setSelectedSubject(option)
                                                setSubjectOpen(false)
                                            }}
                                            className="px-5 py-3 font-poppins font-bold text-base text-black cursor-pointer transition-colors duration-200 hover:bg-[#0055A4]/30"
                                        >
                                            {option}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* row 4: message */}
                <div className="absolute top-[440px] left-0 right-0 flex justify-center gap-9">
                    <div>
                        <label className="block w-[103px] h-[30px] font-poppins font-bold text-xl text-left text-white">
                            Message
                        </label>
                        <textarea
                            placeholder="Type Your message"
                            className="w-[875px] h-[113px] mt-2.5 rounded-[15px] bg-[#D9D9D9]/70 border border-white font-poppins font-bold text-base text-left text-white outline-none placeholder:text-white/60 resize-none"
                            style={{ padding: '12px 15px' }}
                        />
                    </div>
                </div>

                {/* send button */}
                <div className="absolute top-[600px] left-0 right-0 flex justify-center gap-9">
                    <div className="w-[875px]">
                        <button className="w-[130px] h-[43px] rounded-[15px] bg-white border border-white font-poppins font-bold text-base text-center text-[#0055A4] outline-none cursor-pointer hover:bg-gray-100 transition-colors">
                            Send Now
                            <i className="fa-solid fa-paper-plane ml-2"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}