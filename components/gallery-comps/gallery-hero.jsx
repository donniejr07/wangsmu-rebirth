import Image from 'next/image'

export default function GalleryHeroSection() {
    return (
        <>
            {/* Mobile Layout */}
            <section className="lg:hidden relative mx-4 mt-4">
                <div
                    className="relative w-full overflow-hidden bg-[#0055A4]"
                    style={{
                        minHeight: '400px',
                        borderRadius: '0 0 60px 60px',
                    }}
                >
                    {/* Background Image */}
                    <div className="absolute inset-0" style={{ paddingTop: '20px' }}>
                        <Image
                            src="/images/lobby.png"
                            alt="About Hero Background"
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* overlay */}
                        <div className="absolute inset-0 bg-[#0055A4]/60" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center px-6 pb-12 text-center" style={{ paddingTop: '20px' }}>

                        {/* Logo */}
                        <Image
                            src="/images/logo-putih.png"
                            alt="Logo PT"
                            width={70}
                            height={64}
                            className="mb-6"
                        />

                        {/* Title */}
                        <h1 className="font-poppins font-semibold text-[32px] leading-[36px] text-white" style={{ marginBottom: '10px' }}>
                            Wang SMU<br />Gallery
                        </h1>

                        {/* Description */}
                        <p className="font-poppins font-normal text-[16px] leading-[24px] text-white max-w-[300px]">
                            Let's take a closer look at our gallery and explore the visual story behind our company’s journey
                        </p>
                    </div>
                </div>
            </section>

            {/* Desktop Layout */}
            <section
                className="hidden lg:flex justify-center relative"
                style={{
                    paddingLeft: '6%',
                    paddingRight: '6%',
                }}
            >
                {/* a. Rectangle 1 - Blue background */}
                <div
                    className="relative overflow-hidden bg-[#0055A1] w-full"
                    style={{
                        height: '753px',
                        borderRadius: '0 0 160px 160px',
                    }}
                >
                    {/* b. Background Image */}
                    <div
                        className="absolute left-0 w-full overflow-hidden"
                        style={{
                            top: '-125px',
                            height: '878px',
                            borderRadius: '0 0 160px 160px',
                        }}
                    >
                        <Image
                            src="/images/lobby.png"
                            alt="About Hero Background"
                            fill
                            style={{ objectFit: 'cover' }}
                            priority
                        />
                        {/* overlay for better text visibility */}
                        <div
                            className="absolute inset-0"
                            style={{ backgroundColor: 'rgba(0, 85, 164, 0.6)' }}
                        />
                    </div>

                    {/* c. Title Text - Wang SMU Story */}
                    <h1
                        className="absolute font-poppins font-semibold text-[60px] leading-[63px] text-white"
                        style={{
                            left: '7%',
                            bottom: '269px',
                        }}
                    >
                        <span style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <span>Wang SMU</span>
                            <span>Gallery</span>
                        </span>
                    </h1>

                    {/* d. Description Text */}
                    <p
                        className="absolute font-poppins font-normal text-[28px] leading-[42px] text-white max-w-[75%]"
                        style={{
                            left: '7%',
                            bottom: '140px',
                        }}
                    >
                        Let’s take a closer look at our gallery and explore the visual story behind our company’s journey
                    </p>

                    {/* e. Logo PT */}
                    <Image
                        src="/images/logo-putih.png"
                        alt="Logo PT"
                        width={119}
                        height={116}
                        className="absolute"
                        style={{
                            top: '19px',
                            right: '48px',
                        }}
                    />
                </div>
            </section>
        </>
    )
}
