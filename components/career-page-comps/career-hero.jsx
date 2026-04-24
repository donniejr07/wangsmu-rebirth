'use client'

import Image from 'next/image'

export default function CareerHero() {
    return (
        <>
            {/* Mobile */}
            <section className="lg:hidden relative mx-4 mt-4">
                <div
                    className="relative w-full overflow-hidden bg-[#0055A4]"
                    style={{
                        minHeight: '400px',
                        borderRadius: '0 0 60px 60px',
                        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.35)',
                    }}
                >
                    <div className="absolute inset-0" style={{ paddingTop: '20px' }}>
                        <Image
                            src="/images/careerHero.png"
                            alt="Career Hero Background"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-[#0055A4]/60" />
                    </div>

                    <div className="relative z-10 flex flex-col items-center px-6 pb-12 text-center" style={{ paddingTop: '20px' }}>

                        <Image
                            src="/images/logo-putih.png"
                            alt="Logo PT"
                            width={80}
                            height={84}
                            className="mb-6"
                        />

                        <h1 className="font-poppins font-semibold text-[28px] leading-[36px] text-white mb-4" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.45)' }}>
                            Wang SMU<br />Career
                        </h1>

                        <p className="font-poppins font-normal text-[14px] leading-[24px] text-white max-w-[300px]" style={{ marginTop: '10px', textShadow: '0 1px 6px rgba(0,0,0,0.4)' }}>
                            Join a company where your talent grows, your ideas matter, and your career thrives. 25+ years of excellence, endless opportunities ahead.
                        </p>
                    </div>
                </div>

                <button
                    className="absolute cursor-pointer hover:opacity-80 transition-opacity"
                    style={{
                        top: '15px',
                        right: '28px',
                        width: '55px',
                        height: '40px',
                        backgroundColor: '#E9E9E9',
                        borderRadius: '10px',
                        border: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <i className="fas fa-sign-in-alt"></i>
                </button>
            </section>

            {/* Desktop */}
            <section
                className="hidden lg:flex justify-center relative"
                style={{
                    paddingLeft: '6%',
                    paddingRight: '6%',
                }}
            >
                <div
                    className="relative overflow-hidden bg-[#0055A4] w-full"
                    style={{
                        height: '753px',
                        borderRadius: '0 0 160px 160px',
                        boxShadow: '0 30px 80px rgba(0, 0, 0, 0.4)',
                    }}
                >
                    <div
                        className="absolute left-0 w-full overflow-hidden"
                        style={{
                            top: '-125px',
                            height: '878px',
                            borderRadius: '0 0 160px 160px',
                        }}
                    >
                        <Image
                            src="/images/careerHero.png"
                            alt="Career Hero Background"
                            fill
                            style={{ objectFit: 'cover' }}
                            priority
                        />
                        <div
                            className="absolute inset-0"
                            style={{ backgroundColor: 'rgba(0, 85, 164, 0.6)' }}
                        />
                    </div>

                    <h1
                        className="absolute font-poppins font-semibold text-[60px] leading-[63px] text-white"
                        style={{
                            left: '105px',
                            bottom: '269px',
                            width: '451px',
                            height: '126px',
                            textShadow: '0 4px 20px rgba(0,0,0,0.5)',
                        }}
                    >
                        <span style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '451px', height: '126px' }}>
                            <span>Wang SMU</span>
                            <span>Career</span>
                        </span>
                    </h1>

                    <p
                        className="absolute font-poppins font-normal text-[28px] leading-[42px] text-white max-w-[800px]"
                        style={{
                            left: '105px',
                            bottom: '72px',
                            width: '1029px',
                            height: '147px',
                            textShadow: '0 2px 10px rgba(0,0,0,0.4)',
                        }}
                    >
                        Join a company where your talent grows, your ideas matter, and your career thrives. 25+ years of excellence, endless opportunities ahead.
                    </p>

                    <button
                        className="absolute cursor-pointer hover:opacity-80 transition-opacity"
                        style={{
                            top: '25px',
                            right: '32px',
                            width: '90px',
                            height: '50px',
                            backgroundColor: '#E9E9E9',
                            borderRadius: '10px',
                            border: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <span
                            style={{
                                fontFamily: 'Poppins, sans-serif',
                                fontWeight: 600,
                                fontSize: '20px',
                                color: '#0055A4',
                            }}
                        >
                            Login
                        </span>
                    </button>
                </div>
            </section>
        </>
    )
}
