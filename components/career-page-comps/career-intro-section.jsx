'use client'

import { AnimateOnScroll } from '@/components/animations/scroll-animations'

export default function CareerIntroSection() {
    return (
        <>
            {/* Mobile */}
            <section className="lg:hidden bg-white flex flex-col items-start">
                <AnimateOnScroll animation="fadeUp" delay={0}>
                    <h2 className="font-poppins font-semibold text-[24px] leading-[40px]" style={{ padding: '20px' }}>
                        <span className="text-black">Start </span>
                        <span className="text-black">your </span>
                        <span className="text-[#0055A4]">Career </span>
                        <br />
                        <span className="text-black">with </span>
                        <span className="text-[#0055A4]">Us!</span>
                    </h2>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fadeUp" delay={100}>
                    <p className="font-poppins font-normal text-[14px] leading-[24px] text-black mb-6" style={{ padding: '0px 20px 20px 20px' }}>
                        PT Wang Sarimulti Utama berfokus pada pengembangan generasi muda yang berpotensi, agar mereka dapat tumbuh, berkarya, dan memberikan kontribusi positif bagi perusahaan dan bangsa. Mulai langkah kariermu di sini dan berkembang bersama kami!
                    </p>
                </AnimateOnScroll>

                {/* Video */}
                <div className="w-full flex justify-center mt-4" style={{ marginBottom: '1rem' }}>
                    <AnimateOnScroll animation="fadeUp" delay={200}>
                        <div className="w-[300px] aspect-video bg-black rounded-[15px] overflow-hidden">
                            <iframe
                                src="https://www.youtube.com/embed/lxTQZNfn3EQ"
                                title="YouTube video player"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* Desktop */}
            <section className="hidden lg:flex items-center w-full bg-white" style={{ minHeight: '700px', paddingLeft: '4.5%', paddingRight: '4.5%', paddingBottom: '60px' }}>

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
