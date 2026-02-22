'use client'

import { AnimateOnScroll } from '@/components/animations/scroll-animations'

export default function CareerIntroSection() {
    return (
        <>
            {/* Mobile Layout */}
            <section className="lg:hidden px-6 py-12 bg-white">
                <AnimateOnScroll animation="fadeUp" delay={0}>
                    <h2 className="font-poppins font-semibold text-[32px] leading-[40px] mb-6">
                        <span className="text-black">Start </span>
                        <span className="text-black">your </span>
                        <span className="text-[#0055A4]">Career </span>
                        <br />
                        <span className="text-black">with </span>
                        <span className="text-[#0055A4]">Us!</span>
                    </h2>
                </AnimateOnScroll>

                {/* Video Player Mobile */}
                <AnimateOnScroll animation="fadeUp" delay={100}>
                    <div className="w-full aspect-video bg-gray-300 rounded-[20px] mb-6 overflow-hidden relative">
                        {/* Ganti VIDEO_ID dengan ID video YouTube yang diinginkan (contoh: dQw4w9WgXcQ) */}
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/lxTQZNfn3EQ?si=pzaosG0N020vO33b"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="absolute inset-0"
                        ></iframe>
                    </div>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fadeUp" delay={200}>
                    <p className="font-poppins font-normal text-[14px] leading-[24px] text-black text-center">
                        PT Wang Sarimulti Utama berfokus pada pengembangan generasi muda yang berpotensi, agar mereka dapat tumbuh, berkarya, dan memberikan kontribusi positif bagi perusahaan dan bangsa. Mulai langkah kariermu di sini dan berkembang bersama kami!
                    </p>
                </AnimateOnScroll>
            </section>

            {/* Desktop */}
            <section className="hidden lg:flex items-center w-full bg-white" style={{ minHeight: '700px', paddingLeft: '4.5%', paddingRight: '4.5%', paddingTop: '60px', paddingBottom: '60px' }}>

                {/* Left: Text */}
                <div style={{ width: '44%', paddingRight: '4%' }}>
                    <AnimateOnScroll animation="fadeUp" delay={0}>
                        <h2 className="font-poppins font-semibold text-[60px] leading-[72px]" style={{ marginBottom: '24px' }}>
                            <span className="text-black">Start </span>
                            <span className="text-black">your </span>
                            <span className="text-[#0055A4]">Career </span>
                            <span className="text-black">with </span>
                            <span className="text-[#0055A4]">Us!</span>
                        </h2>
                    </AnimateOnScroll>
                    <AnimateOnScroll animation="fadeUp" delay={100}>
                        <p className="font-poppins font-normal text-[22px] leading-[36px] text-black">
                            PT Wang Sarimulti Utama berfokus pada pengembangan generasi muda yang berpotensi, agar mereka dapat tumbuh, berkarya, dan memberikan kontribusi positif bagi perusahaan dan bangsa. Mulai langkah kariermu di sini dan berkembang bersama kami!
                        </p>
                    </AnimateOnScroll>
                </div>

                {/* Right: Video */}
                <div style={{ width: '52%' }}>
                    <AnimateOnScroll animation="fadeUp" delay={200}>
                        <div className="rounded-[20px] overflow-hidden shadow-xl bg-black" style={{ width: '100%', aspectRatio: '16/9' }}>
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/lxTQZNfn3EQ?si=pzaosG0N020vO33b"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </AnimateOnScroll>
                </div>

            </section>
        </>
    )
}
