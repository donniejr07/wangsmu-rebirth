import Image from 'next/image';

export default function HeroSection() {
    return (
        <>
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
                    src="/images/wang.jpg"
                    alt="Hero Background"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                />

                <div
                    style={{
                        position: 'absolute',
                        bottom: '30px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: 'rgba(0, 85, 164, 0.6)',
                        padding: '16px 32px',
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)',
                        borderRadius: '30px',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
                        width: 'max-content',
                        maxWidth: '90%',
                        textAlign: 'center',
                    }}
                >
                    <h1
                        style={{
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: '16px',
                            fontWeight: 600,
                            color: '#FFFFFF',
                            lineHeight: '1.2',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <span>ONE STOP SOLUTION</span>
                        <span>PROVIDER</span>
                    </h1>
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
                className="hidden lg:block"
                style={{
                    position: 'relative',
                    marginTop: '61px',
                    marginLeft: '18px',
                    marginRight: '18px',
                    width: 'calc(100vw - 36px)',
                    height: 'clamp(400px, 55vw, 771px)',
                    borderRadius: '40px',
                    border: '1px solid #0055A4',
                    overflow: 'hidden',
                }}
            >
                <Image
                    src="/images/wang.jpg"
                    alt="Hero Background"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                />

                <div
                    style={{
                        position: 'absolute',
                        top: 'calc(117 / 771 * 100%)',
                        left: 'calc(520 / 1400 * 100%)',
                        right: '0',
                        bottom: 'calc(414 / 771 * 100%)',
                        backgroundColor: 'rgba(0, 85, 164, 0.5)',
                        borderRadius: 'clamp(25px, 3.5vw, 50px) 0 0 clamp(25px, 3.5vw, 50px)',
                    }}
                />

                <h1
                    style={{
                        position: 'absolute',
                        top: 'calc(117 / 771 * 100%)',
                        left: 'calc((455 + 123) / 1400 * 100%)',
                        right: 'calc(19 / 1400 * 100%)',
                        bottom: 'calc(414 / 771 * 100%)',
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: 'clamp(18px, 5.7vw, 70px)',
                        fontWeight: 600,
                        color: '#FFFFFF',
                        WebkitTextStroke: '1px #0055A4',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        textAlign: 'left',
                        lineHeight: 1.1,
                    }}
                >
                    <span>ONE STOP SOLUTION</span>
                    <span>PROVIDER</span>
                </h1>

                <Image
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
                    }}
                />
            </section>
        </>
    );
}
