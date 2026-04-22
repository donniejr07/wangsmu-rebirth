'use client'

import Image from 'next/image'

export default function HeroElectronic() {
    return (
        <section className="relative w-full">
            {/* Mobile Layout */}
            <div className="lg:hidden relative overflow-hidden w-full bg-[#0055A4]"
                style={{ borderRadius: '0 0 60px 60px', padding: '65px 24px 50px', minHeight: '250px' }}
            >
                <img
                    src="/images/product-exp.jpg"
                    alt="Electronic Products"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <Image
                    src="/images/logo-putih.png"
                    alt="WSMU Logo"
                    width={54}
                    height={52}
                    className="absolute top-1 right-4 z-12"
                />
                <h1 className="absolute inset-0 flex justify-center items-center font-poppins font-bold text-[36px] text-white z-10 drop-shadow-lg">
                    Products
                </h1>
                <h2 className="absolute left-0 right-0 top-[60%] flex justify-center items-center gap-1.5 font-poppins font-bold text-[14px] z-10 whitespace-nowrap px-4">
                    <a href="/" className="text-white hover:text-[#93C5FD]">Home</a>
                    <span className="text-white/70">&gt;</span>
                    <a href="/product" className="text-white hover:text-[#93C5FD]">Products</a>
                    <span className="text-white/70">&gt;</span>
                    <span className="text-[#93C5FD]">Electronic</span>
                </h2>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:block relative overflow-hidden w-full h-[700px] bg-[#0055A4] rounded-b-[160px]">
                <img
                    src="/images/product-exp.jpg"
                    alt="Electronic Products Background"
                    className="absolute top-[-103px] left-0 w-full h-[970px] object-cover blur-[3px]"
                />
                <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }} />
                <Image
                    src="/images/logo-putih.png"
                    alt="WSMU Logo"
                    width={119}
                    height={116}
                    className="absolute z-10"
                    style={{ top: '12px', right: '48px' }}
                />
                <h1 className="absolute inset-0 flex justify-center items-center font-poppins font-bold text-[72px] text-white z-10 drop-shadow-lg">
                    Products
                </h1>
                <h2 className="absolute left-0 right-0 top-[57%] flex justify-center items-center gap-2 font-poppins font-bold text-[26px] z-10 whitespace-nowrap px-6">
                    <a href="/" className="text-white hover:text-[#93C5FD]">Home</a>
                    <span className="text-white/70">&gt;</span>
                    <a href="/product" className="text-white hover:text-[#93C5FD]">Products</a>
                    <span className="text-white/70">&gt;</span>
                    <span className="text-[#93C5FD]">Electronic</span>
                </h2>
            </div>
        </section>
    )
}
