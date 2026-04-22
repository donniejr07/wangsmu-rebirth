'use client'

import { useState } from 'react'
import Image from 'next/image'

const API_URL = "http://127.0.0.1:8000/api"

export default function FormSection() {
    const [subjectOpen, setSubjectOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [errors, setErrors] = useState({})

    // Form state
    const [form, setForm] = useState({
        fullname: '',
        email: '',
        company: '',
        country: '',
        phone: '',
        subject: '',
        message: '',
    })

    const subjectOptions = ['Services', 'Products', 'Careers', 'Other']

    // Update field
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
        // Hapus error field yang sedang diketik
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: null })
        }
    }

    // Pilih subject
    const handleSubjectSelect = (option) => {
        setForm({ ...form, subject: option.toLowerCase() })
        setSubjectOpen(false)
        if (errors.subject) {
            setErrors({ ...errors, subject: null })
        }
    }

    // Submit form ke API
    const handleSubmit = async () => {
        setLoading(true)
        setErrors({})
        setSuccess(false)

        try {
            const res = await fetch(`${API_URL}/mails`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify(form),
            })

            if (res.ok) {
                setSuccess(true)
                setForm({ fullname: '', email: '', company: '', country: '', phone: '', subject: '', message: '' })
                // Auto-hide success setelah 5 detik
                setTimeout(() => setSuccess(false), 5000)
            } else {
                const data = await res.json()
                if (data.errors) {
                    setErrors(data.errors)
                }
            }
        } catch (error) {
            console.error('Gagal kirim pesan:', error)
        } finally {
            setLoading(false)
        }
    }

    // Label subject yang ditampilkan
    const displaySubject = form.subject
        ? subjectOptions.find(o => o.toLowerCase() === form.subject) || form.subject
        : ''

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

                {/* company icon */}
                <Image
                    src="/images/logo-putih.png"
                    alt="WSMU Logo"
                    width={54}
                    height={52}
                    className="absolute top-1 right-4 z-12"
                />

                {/* Success message */}
                {success && (
                    <div className="relative z-10 mb-4 bg-green-500/90 text-white font-poppins font-semibold text-sm text-center py-3 rounded-[15px]">
                        ✅ Pesan berhasil dikirim!
                    </div>
                )}

                {/* form fields stacked vertically */}
                <div className="relative z-10 flex flex-col gap-5">

                    {/* fullname */}
                    <div>
                        <label className="block font-poppins font-bold text-base text-white mb-1.5">
                            Fullname
                        </label>
                        <input
                            type="text"
                            name="fullname"
                            value={form.fullname}
                            onChange={handleChange}
                            placeholder="Type Your name"
                            className="w-full h-[43px] rounded-[15px] bg-[#D9D9D9]/70 border border-white px-4 font-poppins font-bold text-sm text-center text-white outline-none placeholder:text-white/60"
                        />
                        {errors.fullname && <p className="text-red-300 text-xs mt-1">{errors.fullname[0]}</p>}
                    </div>

                    {/* email */}
                    <div>
                        <label className="block font-poppins font-bold text-base text-white mb-1.5">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Type Your email"
                            className="w-full h-[43px] rounded-[15px] bg-[#D9D9D9]/70 border border-white px-4 font-poppins font-bold text-sm text-center text-white outline-none placeholder:text-white/60"
                        />
                        {errors.email && <p className="text-red-300 text-xs mt-1">{errors.email[0]}</p>}
                    </div>

                    {/* company */}
                    <div>
                        <label className="block font-poppins font-bold text-base text-white mb-1.5">
                            Company
                        </label>
                        <input
                            type="text"
                            name="company"
                            value={form.company}
                            onChange={handleChange}
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
                            name="country"
                            value={form.country}
                            onChange={handleChange}
                            placeholder="Type Your country"
                            className="w-full h-[43px] rounded-[15px] bg-[#D9D9D9]/70 border border-white px-4 font-poppins font-bold text-sm text-center text-white outline-none placeholder:text-white/60"
                        />
                        {errors.country && <p className="text-red-300 text-xs mt-1">{errors.country[0]}</p>}
                    </div>

                    {/* phone */}
                    <div>
                        <label className="block font-poppins font-bold text-base text-white mb-1.5">
                            Phone
                        </label>
                        <input
                            type="text"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="Type Your phone number"
                            className="w-full h-[43px] rounded-[15px] bg-[#D9D9D9]/70 border border-white px-4 font-poppins font-bold text-sm text-center text-white outline-none placeholder:text-white/60"
                        />
                        {errors.phone && <p className="text-red-300 text-xs mt-1">{errors.phone[0]}</p>}
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
                                {displaySubject || 'Select your Subject'}
                                <span className="absolute right-4">▼</span>
                            </div>

                            {/* dropdown options */}
                            {subjectOpen && (
                                <div className="absolute left-1/2 -translate-x-1/2 top-[48px] w-[15rem] text-center rounded-[15px] bg-[#D9D9D9]/95 border border-white overflow-hidden z-10 flex flex-col gap-3" style={{ padding: '0.5rem' }}>
                                    {subjectOptions.map((option) => (
                                        <div
                                            key={option}
                                            onClick={() => handleSubjectSelect(option)}
                                            className="px-4 py-3 font-poppins font-bold text-sm text-black cursor-pointer transition-colors duration-200 hover:bg-[#0055A4]/30 hover:rounded-lg"
                                        >
                                            {option}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        {errors.subject && <p className="text-red-300 text-xs mt-1">{errors.subject[0]}</p>}
                    </div>

                    {/* message */}
                    <div>
                        <label className="block font-poppins font-bold text-base text-white mb-1.5">
                            Message
                        </label>
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Type Your message"
                            className="w-full h-[120px] rounded-[15px] bg-[#D9D9D9]/70 border border-white font-poppins font-bold text-sm text-left text-white outline-none placeholder:text-white/60 resize-none"
                            style={{ padding: '12px 15px' }}
                        />
                        {errors.message && <p className="text-red-300 text-xs mt-1">{errors.message[0]}</p>}
                    </div>

                    {/* send button */}
                    <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className="self-end w-[130px] h-[43px] rounded-[15px] bg-white border border-white font-poppins font-bold text-sm text-center text-[#0055A4] outline-none cursor-pointer hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? 'Sending...' : 'Send Now'}
                        {!loading && <i className="fa-solid fa-paper-plane" style={{ marginLeft: '0.5rem' }}></i>}
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

                {/* icon */}
                <Image
                    src="/images/logo-putih.png"
                    alt="WSMU Logo"
                    width={119}
                    height={116}
                    className="absolute z-10"
                    style={{ top: '12px', right: '48px' }}
                />

                {/* Success message desktop */}
                {success && (
                    <div className="absolute top-[50px] left-0 right-0 flex justify-center z-20">
                        <div className="bg-green-500/90 text-white font-poppins font-semibold text-base text-center rounded-[15px] shadow-lg"
                            style={{ padding: '1rem' }}>
                            ✅ Pesan berhasil dikirim!
                        </div>
                    </div>
                )}

                {/* row 1: fullname & email */}
                <div className="absolute top-[120px] left-0 right-0 flex justify-center gap-9">
                    <div>
                        <label className="block w-[103px] h-[30px] font-poppins font-bold text-xl text-left text-white">
                            Fullname
                        </label>
                        <input
                            type="text"
                            name="fullname"
                            value={form.fullname}
                            onChange={handleChange}
                            placeholder="Type Your name"
                            className="w-[420px] h-[43px] mt-2.5 rounded-[15px] bg-[#D9D9D9]/70 border border-white px-5 py-2.5 font-poppins font-bold text-base text-center text-white outline-none placeholder:text-white/60"
                        />
                        {errors.fullname && <p className="text-red-300 text-xs mt-1">{errors.fullname[0]}</p>}
                    </div>

                    <div>
                        <label className="block w-[103px] h-[30px] font-poppins font-bold text-xl text-left text-white">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Type Your email"
                            className="w-[420px] h-[43px] mt-2.5 rounded-[15px] bg-[#D9D9D9]/70 border border-white px-5 py-2.5 font-poppins font-bold text-base text-center text-white outline-none placeholder:text-white/60"
                        />
                        {errors.email && <p className="text-red-300 text-xs mt-1">{errors.email[0]}</p>}
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
                            name="company"
                            value={form.company}
                            onChange={handleChange}
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
                            name="country"
                            value={form.country}
                            onChange={handleChange}
                            placeholder="Type Your country"
                            className="w-[420px] h-[43px] mt-2.5 rounded-[15px] bg-[#D9D9D9]/70 border border-white px-5 py-2.5 font-poppins font-bold text-base text-center text-white outline-none placeholder:text-white/60"
                        />
                        {errors.country && <p className="text-red-300 text-xs mt-1">{errors.country[0]}</p>}
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
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="Type Your phone number"
                            className="w-[420px] h-[43px] mt-2.5 rounded-[15px] bg-[#D9D9D9]/70 border border-white px-5 py-2.5 font-poppins font-bold text-base text-center text-white outline-none placeholder:text-white/60"
                        />
                        {errors.phone && <p className="text-red-300 text-xs mt-1">{errors.phone[0]}</p>}
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
                                {displaySubject || 'Select your Subject'}
                                <span className="absolute right-5">▼</span>
                            </div>

                            {/* dropdown options */}
                            {subjectOpen && (
                                <div className="absolute top-[48px] left-1/2 -translate-x-1/2 w-[220px] rounded-[15px] bg-[#D9D9D9]/95 text-center border border-white flex flex-col gap-3 overflow-hidden z-10" style={{ padding: '0.8rem' }}>
                                    {subjectOptions.map((option) => (
                                        <div
                                            key={option}
                                            onClick={() => handleSubjectSelect(option)}
                                            className="px-5 py-3 font-poppins font-bold text-base text-black cursor-pointer transition-colors duration-200 hover:bg-[#0055A4]/30 hover:rounded-lg gap-3"
                                        >
                                            {option}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        {errors.subject && <p className="text-red-300 text-xs mt-1">{errors.subject[0]}</p>}
                    </div>
                </div>

                {/* row 4: message */}
                <div className="absolute top-[440px] left-0 right-0 flex justify-center gap-9">
                    <div>
                        <label className="block w-[103px] h-[30px] font-poppins font-bold text-xl text-left text-white">
                            Message
                        </label>
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Type Your message"
                            className="w-[875px] h-[113px] mt-2.5 rounded-[15px] bg-[#D9D9D9]/70 border border-white font-poppins font-bold text-base text-left text-white outline-none placeholder:text-white/60 resize-none"
                            style={{ padding: '12px 15px' }}
                        />
                        {errors.message && <p className="text-red-300 text-xs mt-1">{errors.message[0]}</p>}
                    </div>
                </div>

                {/* send button */}
                <div className="absolute top-[600px] left-0 right-0 flex justify-center gap-9" style={{ marginTop: '20px' }}>
                    <div className="w-[875px]">
                        <button
                            onClick={handleSubmit}
                            disabled={loading}
                            className="w-[130px] h-[43px] rounded-[15px] bg-white border border-white font-poppins font-bold text-base text-center text-[#0055A4] outline-none cursor-pointer hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? 'Sending...' : 'Send Now'}
                            {!loading && <i className="fa-solid fa-paper-plane" style={{ marginLeft: '0.3rem' }}></i>}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}