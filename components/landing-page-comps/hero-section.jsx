'use client';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';

export default function HeroSection() {
    const [loaded, setLoaded] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        // Trigger entrance animations after mount
        const timer = setTimeout(() => setLoaded(true), 200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {/* Keyframe animations */}
            <style jsx global>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                }
                @keyframes pulse-ring {
                    0% { transform: scale(0.9); opacity: 0.6; }
                    50% { transform: scale(1.05); opacity: 0.3; }
                    100% { transform: scale(0.9); opacity: 0.6; }
                }
                @keyframes slide-up {
                    from { transform: translateY(40px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes bounce-down {
                    0%, 100% { transform: translateX(-50%) translateY(0); }
                    50% { transform: translateX(-50%) translateY(8px); }
                }
                @keyframes shimmer {
                    0% { left: -100%; }
                    100% { left: 200%; }
                }
            `}</style>

            {/* Mobile Layout */}
            <section
                className="lg:hidden"
                style={{
                    position: 'relative',
                    marginTop: '32px',
                    marginLeft: '16px',
                    marginRight: '16px',
                    height: '400px',
                    borderRadius: '20px',
                    border: '1px solid #0055A4',
                    overflow: 'hidden',
                }}
            >
                <Image
                    src="/images/pt-wang-new.png"
                    alt="Hero Background"
                    fill
                    style={{
                        objectFit: 'cover',
                        transition: 'transform 12s ease-out',
                        transform: loaded ? 'scale(1.05)' : 'scale(1)',
                    }}
                    priority
                />

                {/* Gradient overlay */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.1) 40%, transparent 70%)',
                        pointerEvents: 'none',
                    }}
                />

                {/* Minimalist Glow Tagline (Mobile) */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: '24px',
                        left: '20px',
                        paddingLeft: '16px',
                        animation: loaded ? 'slide-up 0.8s ease-out both' : 'none',
                    }}
                >
                    {/* Glowing background */}
                    <div
                        style={{
                            position: 'absolute',
                            top: '-20%',
                            left: '-10%',
                            right: '-20%',
                            bottom: '-20%',
                            background: 'radial-gradient(circle at center, rgba(0, 85, 164, 0.4) 0%, rgba(0, 85, 164, 0) 70%)',
                            filter: 'blur(15px)',
                            pointerEvents: 'none',
                            zIndex: 0,
                        }}
                    />

                    {/* Accent line */}
                    <div
                        style={{
                            position: 'absolute',
                            left: 0,
                            top: '5%',
                            bottom: '5%',
                            width: '4px',
                            background: 'linear-gradient(to bottom, #0055A4, #4DA6FF)',
                            borderRadius: '4px',
                            boxShadow: '0 0 10px rgba(0, 85, 164, 0.5)',
                            zIndex: 1,
                        }}
                    />

                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <h1
                            style={{
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: '22px',
                                fontWeight: 800,
                                color: '#FFFFFF',
                                lineHeight: '1.2',
                                textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                                margin: 0,
                            }}
                        >
                            ONE STOP SOLUTION<br />PROVIDER
                        </h1>
                        <p
                            style={{
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: '9px',
                                fontWeight: 600,
                                color: 'rgba(255, 255, 255, 0.8)',
                                marginTop: '8px',
                                letterSpacing: '2px',
                                textShadow: '0 1px 5px rgba(0,0,0,0.5)',
                                textTransform: 'uppercase',
                            }}
                        >
                            Quality &bull; Integrity &bull; Since 1995
                        </p>
                    </div>
                </div>

                <div
                    style={{
                        position: 'absolute',
                        top: '16px',
                        left: '16px',
                        width: '50px',
                        height: 'auto',
                    }}
                >
                    <Image
                        src="/images/logo-pt.png"
                        alt="Logo PT"
                        width={150}
                        height={113}
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                    />
                </div>
            </section>

            {/* Desktop Layout */}
            <section
                ref={sectionRef}
                className="hidden lg:block"
                style={{
                    position: 'relative',
                    marginTop: '31px',
                    marginLeft: '18px',
                    marginRight: '18px',
                    width: 'calc(100vw - 36px)',
                    height: 'clamp(400px, 55vw, 771px)',
                    borderRadius: '40px',
                    border: '1px solid #0055A4',
                    overflow: 'hidden',
                }}
            >
                {/* Background image with subtle zoom */}
                <Image
                    src="/images/pt-wang-new.png"
                    alt="Hero Background"
                    fill
                    style={{
                        objectFit: 'cover',
                        transition: 'transform 12s ease-out',
                        transform: loaded ? 'scale(1.05)' : 'scale(1)',
                    }}
                    priority
                />

                {/* Gradient overlay
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.15) 35%, transparent 65%)',
                        pointerEvents: 'none',
                    }}
                /> */}

                {/* Floating Stat Cards */}
                <div style={{
                    position: 'absolute', top: '20%', right: '10%',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    padding: '12px 24px',
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                    animation: loaded ? 'slide-up 0.8s ease-out 0.6s both, float 6s ease-in-out infinite 1.4s' : 'none',
                    pointerEvents: 'none',
                }}>
                    <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '24px', fontWeight: 700, color: '#FFF', lineHeight: 1 }}>25+</span>
                    <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '10px', color: 'rgba(255,255,255,0.8)', letterSpacing: '1px', marginTop: '4px' }}>YEARS EXP</span>
                </div>

                <div style={{
                    position: 'absolute', top: '45%', right: '5%',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    padding: '12px 24px',
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                    animation: loaded ? 'slide-up 0.8s ease-out 0.8s both, float 7s ease-in-out infinite 1.6s' : 'none',
                    pointerEvents: 'none',
                }}>
                    <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '24px', fontWeight: 700, color: '#FFF', lineHeight: 1 }}>1000+</span>
                    <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '10px', color: 'rgba(255,255,255,0.8)', letterSpacing: '1px', marginTop: '4px' }}>PROJECTS</span>
                </div>

                <div style={{
                    position: 'absolute', top: '70%', right: '15%',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    padding: '12px 24px',
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                    animation: loaded ? 'slide-up 0.8s ease-out 1s both, float 5s ease-in-out infinite 1.8s' : 'none',
                    pointerEvents: 'none',
                }}>
                    <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '24px', fontWeight: 700, color: '#FFF', lineHeight: 1 }}>ISO</span>
                    <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '10px', color: 'rgba(255,255,255,0.8)', letterSpacing: '1px', marginTop: '4px' }}>CERTIFIED</span>
                </div>

                {/* Minimalist Glow Tagline */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: 'clamp(30px, 5%, 60px)',
                        left: 'clamp(30px, 4%, 60px)',
                        paddingLeft: '28px',
                        animation: loaded ? 'slide-up 0.8s ease-out both' : 'none',
                    }}
                >
                    {/* Glowing background */}
                    <div
                        style={{
                            position: 'absolute',
                            top: '-30%',
                            left: '-10%',
                            right: '-30%',
                            bottom: '-30%',
                            background: 'radial-gradient(circle at center, rgba(0, 85, 164, 0.5) 0%, rgba(0, 85, 164, 0) 70%)',
                            filter: 'blur(20px)',
                            pointerEvents: 'none',
                            zIndex: 0,
                            animation: loaded ? 'fade-in 1.5s ease-out both 0.5s' : 'none',
                        }}
                    />

                    {/* Accent line */}
                    <div
                        style={{
                            position: 'absolute',
                            left: 0,
                            top: '5%',
                            bottom: '5%',
                            width: '6px',
                            background: 'linear-gradient(to bottom, #0055A4, #4DA6FF)',
                            borderRadius: '6px',
                            boxShadow: '0 0 15px rgba(0, 85, 164, 0.6)',
                            zIndex: 1,
                            animation: loaded ? 'slide-up 0.8s ease-out 0.2s both' : 'none',
                        }}
                    />

                    {/* Content */}
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <h1
                            style={{
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: 'clamp(28px, 3.5vw, 56px)',
                                fontWeight: 800,
                                color: '#FFFFFF',
                                lineHeight: 1,
                                margin: 0,
                                letterSpacing: '-0.01em',
                                textShadow: '0 4px 24px rgba(0,0,0,0.5)',
                                animation: loaded ? 'slide-up 0.8s ease-out 0.3s both' : 'none',
                            }}
                        >
                            ONE STOP SOLUTION<br />PROVIDER
                        </h1>
                        <p
                            style={{
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: 'clamp(12px, 1.1vw, 18px)',
                                fontWeight: 600,
                                color: 'rgba(255, 255, 255, 0.9)',
                                marginTop: '20px',
                                letterSpacing: '6px',
                                textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '14px',
                                animation: loaded ? 'slide-up 0.8s ease-out 0.5s both' : 'none',
                            }}
                        >
                            <span>QUALITY</span>
                            <span style={{ width: '6px', height: '6px', backgroundColor: '#4DA6FF', borderRadius: '50%', boxShadow: '0 0 10px #4DA6FF' }}></span>
                            <span>INTEGRITY</span>
                            <span style={{ width: '6px', height: '6px', backgroundColor: '#4DA6FF', borderRadius: '50%', boxShadow: '0 0 10px #4DA6FF' }}></span>
                            <span>SINCE 1995</span>
                        </p>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: '20px',
                        left: '50%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '6px',
                        animation: 'bounce-down 2s ease-in-out infinite, fade-in 1s ease-out 1.5s both',
                        pointerEvents: 'none',
                    }}
                >
                    <span style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '11px',
                        fontWeight: 500,
                        color: 'rgba(255,255,255,0.6)',
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                    }}>Scroll</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                    </svg>
                </div>

                {/* Logo */}
                {/* <Image
                    src="/images/logo-pt.png"
                    alt="Logo PT"
                    width={150}
                    height={113}
                    style={{
                        position: 'absolute',
                        top: 'calc(40 / 771 * 100%)',
                        left: 'calc(34 / 1400 * 100%)',
                        width: 'clamp(70px, 12%, 110px)',
                        height: 'auto',
                        animation: loaded ? 'fade-in 1s ease-out 0.2s both' : 'none',
                    }}
                /> */}
            </section>
        </>
    );
}
