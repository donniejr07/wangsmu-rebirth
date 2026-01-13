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

            {/* Desktop Layout */}
            <section className="hidden lg:block relative w-full min-h-[700px] bg-white">
                <div className="relative w-full h-full" style={{ minWidth: '1440px' }}>

                    {/* Title */}
                    <AnimateOnScroll animation="fadeUp" delay={0}>
                        <h2
                            className="absolute font-poppins font-semibold text-[60px] leading-[72px]"
                            style={{
                                left: '61px',
                                top: '182px', // 935px (figma y) - 753px (hero height approx)
                                width: '477px',
                                height: '126px',
                            }}
                        >
                            <span className="text-black">Start </span>
                            <span className="text-black">your </span>
                            <span className="text-[#0055A4]">Career </span>
                            <span className="text-black">with </span>
                            <span className="text-[#0055A4]">Us!</span>
                        </h2>
                    </AnimateOnScroll>

                    {/* Description */}
                    <AnimateOnScroll animation="fadeUp" delay={100}>
                        <p
                            className="absolute font-poppins font-normal text-[24px] leading-[36px] text-black"
                            style={{
                                left: '61px',
                                top: '365px', // 1118px (figma y) - 753px (hero height)
                                width: '525px',
                                height: '126px',
                            }}
                        >
                            PT Wang Sarimulti Utama berfokus pada pengembangan generasi muda yang berpotensi, agar mereka dapat tumbuh, berkarya, dan memberikan kontribusi positif bagi perusahaan dan bangsa. Mulai langkah kariermu di sini dan berkembang bersama kami!
                        </p>
                    </AnimateOnScroll>

                    {/* Video Player Desktop */}
                    <AnimateOnScroll animation="fadeUp" delay={200}>
                        <div
                            className="absolute bg-black rounded-[20px] overflow-hidden shadow-xl"
                            style={{
                                left: '664px',
                                top: '201px', // 954px (figma y) - 753px (hero height)
                                width: '685px',
                                height: '379px',
                            }}
                        >
                            {/* Url */}
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
