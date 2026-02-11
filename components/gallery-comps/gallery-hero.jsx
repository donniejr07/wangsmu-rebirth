'use client'

import Image from 'next/image'

export default function CareerHero() {
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
                            src="/images/gallery-wsu.png"
                            alt="Career Hero Background"
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
                            src="/images/logo-pt-puteh.png"
                            alt="Logo PT"
                            width={80}
                            height={84}
                            className="mb-6"
                        />

                        {/* Title */}
                        <h1 className="font-poppins font-semibold text-[32px] leading-[36px] text-white mb-4">
                            Wang SMU<br />Gallery
                        </h1>

                        {/* Description */}
                        <p className="font-poppins font-normal text-[18px] leading-[24px] text-white max-w-[300px]">
                            Explore our state-of-the-art manufacturing capabilities, precision tooling, and quality production processes. From mold making to plastic injection and secondary processing, witness the engineering excellence that drives our industry leadership.
                        </p>
                    </div>
                </div>
            </section>

            {/* Desktop Layout */}
            <section
                className="hidden lg:flex justify-center relative"
                style={{
                    minWidth: '1440px',
                    paddingLeft: '61px',
                    paddingRight: '61px',
                }}
            >
                {/* a. Blue background */}
                <div
                    className="relative overflow-hidden bg-[#0055A1] flex-shrink-0"
                    style={{
                        width: '1317px',
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
                            src="/images/gallery-wsu.png"
                            alt="Career Hero Background"
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

                    {/* c. Title Text */}
                    <h1
                        className="absolute font-poppins font-semibold text-[60px] leading-[63px] text-white"
                        style={{
                            left: '105px',
                            bottom: '269px',
                            width: '451px',
                            height: '126px',
                        }}
                    >
                        <span style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '451px', height: '126px' }}>
                            <span>Wang SMU</span>
                            <span>Gallery</span>
                        </span>
                    </h1>

                    {/* d. Description Text */}
                    <p
                        className="absolute font-poppins font-normal text-[30px] leading-[42px] text-white"
                        style={{
                            left: '105px',
                            bottom: '72px',
                            width: '1029px',
                            height: '147px',
                        }}
                    >
                        a curated collection of our work, facilities, and team in action, highlighting the standards and values that define our company
                    </p>

                    {/* e. Icon */}
                    <Image
                        src="/images/logo-pt-puteh.png"
                        alt="Gallery Icon"
                        width={150}
                        height={144}
                        className="mb-6"
                        style={{
                            position: 'absolute',
                            top: '25px',
                            right: '32px',
                        }}
                    />
                </div>
            </section>
        </>
    )
}
