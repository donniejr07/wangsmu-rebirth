import Image from "next/image";

export default function ServiceDetail() {
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
                            alt="Service Hero Background"
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
                            Our<br />Services
                        </h1>

                        {/* New Text Mobile */}
                        <div className="flex flex-col gap-6 w-full max-w-[300px]">
                            {/* Stat 1 */}
                            <div className="flex flex-col items-center text-center">
                                <span className="font-poppins font-normal text-white text-[20px] leading-[28px]">25+</span>
                                <span className="font-poppins font-normal text-white text-[12px] leading-[24px]">Years Experiences</span>
                            </div>

                            {/* Stat 2 */}
                            <div className="flex flex-col items-center text-center">
                                <span className="font-poppins font-normal text-white text-[20px] leading-[28px]">1000+</span>
                                <span className="font-poppins font-normal text-white text-[12px] leading-[24px]">Projects Finished</span>
                            </div>

                            {/* Stat 3 */}
                            <div className="flex flex-col items-center text-center">
                                <span className="font-poppins font-normal text-white text-[20px] leading-[28px]">90%</span>
                                <span className="font-poppins font-normal text-white text-[12px] leading-[24px]">Happy Customers</span>
                            </div>
                        </div>
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
                {/* a. Rectangle 1 - Blue background */}
                <div
                    className="relative overflow-hidden bg-[#0055A4] flex-shrink-0"
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
                            alt="Service Hero Background"
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

                    {/* c. Title Text - Our Products */}
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
                            <span>Services</span>
                        </span>
                    </h1>

                    {/* d. Stats Blocks */}
                    <div
                        className="absolute text-white font-poppins font-normal flex flex-col justify-between"
                        style={{
                            left: '105px',
                            bottom: '87px',
                            width: '215px',
                            height: '90px',
                        }}
                    >
                        <span style={{ fontSize: '40px', lineHeight: '48px' }}>25+</span>
                        <span style={{ fontSize: '24px', lineHeight: '36px' }}>Years Experiences</span>
                    </div>

                    <div
                        className="absolute text-white font-poppins font-normal flex flex-col justify-between"
                        style={{
                            left: '50%',
                            transform: 'translateX(-50%)',
                            bottom: '87px',
                            width: '215px',
                            height: '90px',
                            textAlign: 'center'
                        }}
                    >
                        <span style={{ fontSize: '40px', lineHeight: '48px' }}>1000+</span>
                        <span style={{ fontSize: '24px', lineHeight: '36px' }}>Projects Finished</span>
                    </div>

                    <div
                        className="absolute text-white font-poppins font-normal flex flex-col justify-between"
                        style={{
                            right: '105px',
                            bottom: '87px',
                            width: '215px',
                            height: '90px',
                            textAlign: 'right'
                        }}
                    >
                        <span style={{ fontSize: '40px', lineHeight: '48px' }}>90%</span>
                        <span style={{ fontSize: '24px', lineHeight: '36px' }}>Happy Customers</span>
                    </div>

                    {/* e. Logo PT */}
                    <Image
                        src="/images/logo-pt-puteh.png"
                        alt="Logo PT"
                        width={139}
                        height={146}
                        className="absolute"
                        style={{
                            top: '19px',
                            right: '28px',
                        }}
                    />
                </div>
            </section>
        </>
    )
}