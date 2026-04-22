'use client'

import Link from 'next/link'

const BriefcaseIcon = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
    </svg>
)

const LocationIcon = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
)

const SendIcon = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
    </svg>
)

const ArrowLeftIcon = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 12H5" />
        <path d="M12 19l-7-7 7-7" />
    </svg>
)

const ChevronRightIcon = ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18l6-6-6-6" />
    </svg>
)

const Breadcrumbs = ({ jobTitle, isMobile = false }) => (
    <nav
        className="flex items-center flex-wrap"
        style={{
            paddingLeft: isMobile ? '5%' : '20.56%',
            paddingRight: isMobile ? '5%' : '17.36%',
            paddingTop: isMobile ? '70px' : '4vh',
            gap: '8px',
        }}
    >
        <Link
            href="/"
            className="font-poppins hover:text-[#0055A4] transition-colors"
            style={{ fontSize: isMobile ? '12px' : '14px', color: '#999999' }}
        >
            Home
        </Link>
        <ChevronRightIcon size={isMobile ? 12 : 14} />
        <Link
            href="/career"
            className="font-poppins hover:text-[#0055A4] transition-colors"
            style={{ fontSize: isMobile ? '12px' : '14px', color: '#999999' }}
        >
            Career
        </Link>
        <ChevronRightIcon size={isMobile ? 12 : 14} />
        <span
            className="font-poppins font-medium truncate"
            style={{
                fontSize: isMobile ? '12px' : '14px',
                color: '#0055A4',
                maxWidth: isMobile ? '180px' : '300px',
            }}
        >
            {jobTitle}
        </span>
    </nav>
)

const SectionCard = ({ title, content, isMobile = false }) => {
    if (!content) return null

    return (
        <div
            style={{
                width: '100%',
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                paddingLeft: isMobile ? '20px' : '25px',
                paddingRight: isMobile ? '20px' : '21px',
                paddingTop: isMobile ? '16px' : '15px',
                paddingBottom: isMobile ? '20px' : '25px',
            }}
        >
            <h2
                className="font-poppins font-semibold"
                style={{
                    fontSize: isMobile ? '20px' : '28px',
                    color: '#000000',
                    margin: 0,
                    lineHeight: 1.5,
                }}
            >
                {title}
            </h2>
            <div
                className="rich-text-content font-poppins font-normal"
                style={{
                    fontSize: isMobile ? '14px' : '18px',
                    color: '#000000',
                    marginTop: isMobile ? '10px' : '14px',
                    lineHeight: 1.7,
                }}
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </div>
    )
}

export default function CareerJobDetail({ job }) {
    if (!job) return null

    // Menampilkan section hanya jika konten tersedia di backend
    const descriptionSections = [
        { title: 'About This Role', content: job.about_role || job.description },
        { title: "What You'll Do", content: job.what_you_do },
        { title: "What We're Looking For", content: job.requirements },
        { title: 'What We Offer', content: job.what_we_offer },
    ].filter(s => s.content)

    return (
        <>
            {/* Styling global untuk memastikan tag HTML dari Rich Text editor ter-render dengan benar */}
            <style jsx global>{`
                .rich-text-content p {
                    margin-bottom: 12px;
                }
                .rich-text-content p:last-child {
                    margin-bottom: 0;
                }
                .rich-text-content ul,
                .rich-text-content ol {
                    padding-left: 24px;
                    margin-bottom: 12px;
                }
                .rich-text-content li {
                    margin-bottom: 6px;
                }
                .rich-text-content strong,
                .rich-text-content b {
                    font-weight: 600;
                }
                .rich-text-content a {
                    color: #0055A4;
                    text-decoration: underline;
                }
            `}</style>

            <section className="hidden lg:block" style={{ width: '100%' }}>
                <Breadcrumbs jobTitle={job.title} />

                {/* 
                  * Menggunakan persentase untuk responsivitas yang konsisten dengan Figma (1440px canvas).
                  * paddingLeft 20.56% didapat dari 296/1440 sesuai spesifikasi desain.
                  */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        paddingLeft: '20.56%',
                        paddingRight: '17.36%',
                        marginTop: '5vh',
                    }}
                >
                    <div style={{ width: '55%' }}>
                        <h1
                            className="font-poppins font-semibold"
                            style={{
                                fontSize: '40px',
                                lineHeight: 1.5,
                                color: '#000000',
                                margin: 0,
                            }}
                        >
                            {job.title}
                        </h1>

                        <p
                            className="font-poppins font-normal"
                            style={{
                                fontSize: '18px',
                                color: '#000000',
                                marginTop: '12px',
                            }}
                        >
                            {job.short_description || job.department}
                        </p>

                        <div
                            className="flex items-center"
                            style={{ gap: '24px', marginTop: '4vh' }}
                        >
                            <div className="flex items-center" style={{ gap: '6px' }}>
                                <BriefcaseIcon size={24} />
                                <span
                                    className="font-poppins font-normal"
                                    style={{ fontSize: '16px', color: '#000000' }}
                                >
                                    {job.type}
                                </span>
                            </div>

                            <div className="flex items-center" style={{ gap: '6px' }}>
                                <LocationIcon size={24} />
                                <span
                                    className="font-poppins font-normal"
                                    style={{ fontSize: '16px', color: '#000000' }}
                                >
                                    {job.location}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div
                        style={{
                            width: '25%',
                            minWidth: '280px',
                            backgroundColor: '#D9D9D9',
                            borderRadius: '16px',
                            paddingTop: '15px',
                            paddingBottom: '20px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '16px',
                        }}
                    >
                        <button
                            className="flex items-center justify-center gap-3 hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer"
                            style={{
                                width: '63.89%',
                                maxWidth: '230px',
                                height: '60px',
                                backgroundColor: '#0055A4',
                                borderRadius: '12px',
                                border: 'none',
                            }}
                        >
                            <SendIcon size={24} />
                            <span
                                className="font-poppins font-semibold"
                                style={{ fontSize: '20px', color: '#FFFFFF' }}
                            >
                                Apply Now
                            </span>
                        </button>

                        <Link
                            href="/career"
                            className="flex items-center gap-2 hover:text-[#0055A4] transition-colors"
                            style={{ color: '#555555' }}
                        >
                            <ArrowLeftIcon size={16} />
                            <span
                                className="font-poppins font-normal"
                                style={{ fontSize: '14px' }}
                            >
                                Back to career list
                            </span>
                        </Link>
                    </div>
                </div>

                {descriptionSections.length > 0 && (
                    <div
                        style={{
                            width: '100%',
                            backgroundColor: 'rgba(217, 217, 217, 0.4)',
                            backdropFilter: 'blur(4px)', // Efek blur sesuai desain Figma
                            WebkitBackdropFilter: 'blur(4px)',
                            marginTop: '36px',
                            paddingTop: '66px',
                            paddingBottom: '60px',
                        }}
                    >
                        {/* 
                          * Lebar container card 62.08% didapat dari 894/1440.
                          * Spasi kiri 20.56% menjaga alignment dengan header judul.
                          */}
                        <div
                            style={{
                                width: '62.08%',
                                marginLeft: '20.56%',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '24px',
                            }}
                        >
                            {descriptionSections.map((section, index) => (
                                <SectionCard
                                    key={index}
                                    title={section.title}
                                    content={section.content}
                                />
                            ))}
                        </div>
                    </div>
                )}

                <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        paddingTop: '60px',
                        paddingBottom: '120px',
                    }}
                >
                    <h2
                        className="font-poppins font-semibold"
                        style={{
                            fontSize: '40px',
                            color: '#000000',
                            margin: 0,
                            textAlign: 'center',
                        }}
                    >
                        Ready to Join Our Team?
                    </h2>
                    <p
                        className="font-poppins font-medium"
                        style={{
                            fontSize: '18px',
                            color: '#000000',
                            marginTop: '10px',
                            textAlign: 'center',
                        }}
                    >
                        Take the next step in your career and build the future with us.
                    </p>

                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '14px',
                            marginTop: '26px',
                        }}
                    >
                        <button
                            className="flex items-center justify-center gap-3 hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer"
                            style={{
                                width: '230px',
                                height: '60px',
                                backgroundColor: '#0055A4',
                                borderRadius: '10px',
                                border: 'none',
                            }}
                        >
                            <SendIcon size={24} />
                            <span
                                className="font-poppins font-semibold"
                                style={{ fontSize: '20px', color: '#FFFFFF' }}
                            >
                                Apply Now
                            </span>
                        </button>

                        <Link
                            href="/career"
                            className="flex items-center justify-center hover:bg-black/5 active:scale-[0.98] transition-all cursor-pointer"
                            style={{
                                width: '200px',
                                height: '60px',
                                backgroundColor: 'transparent',
                                borderRadius: '10px',
                                border: '1px solid rgba(0, 0, 0, 0.4)',
                                textDecoration: 'none',
                            }}
                        >
                            <span
                                className="font-poppins font-semibold"
                                style={{ fontSize: '18px', color: '#000000' }}
                            >
                                View all position
                            </span>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="lg:hidden" style={{ width: '100%' }}>
                {/* 
                  * Mobile Breadcrumbs diberi paddingTop 70px untuk menghindari 
                  * overlap dengan Navbar Hamburger & Language Toggle yang posisinya fixed (top: 12px).
                  */}
                <Breadcrumbs jobTitle={job.title} isMobile />

                <div style={{ padding: '0 5%', marginTop: '24px' }}>
                    <h1
                        className="font-poppins font-semibold"
                        style={{
                            fontSize: '24px',
                            lineHeight: 1.3,
                            color: '#000000',
                            margin: 0,
                        }}
                    >
                        {job.title}
                    </h1>

                    <p
                        className="font-poppins font-normal"
                        style={{
                            fontSize: '14px',
                            color: '#000000',
                            marginTop: '8px',
                        }}
                    >
                        {job.short_description || job.department}
                    </p>

                    <div
                        className="flex items-center flex-wrap"
                        style={{ gap: '16px', marginTop: '16px' }}
                    >
                        <div className="flex items-center" style={{ gap: '4px' }}>
                            <BriefcaseIcon size={18} />
                            <span
                                className="font-poppins font-normal"
                                style={{ fontSize: '13px', color: '#000000' }}
                            >
                                {job.type}
                            </span>
                        </div>
                        <div className="flex items-center" style={{ gap: '4px' }}>
                            <LocationIcon size={18} />
                            <span
                                className="font-poppins font-normal"
                                style={{ fontSize: '13px', color: '#000000' }}
                            >
                                {job.location}
                            </span>
                        </div>
                    </div>

                    <div
                        style={{
                            width: '100%',
                            backgroundColor: '#D9D9D9',
                            borderRadius: '16px',
                            padding: '20px',
                            marginTop: '24px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '12px',
                        }}
                    >
                        <button
                            className="flex items-center justify-center gap-2 active:scale-[0.98] transition-all cursor-pointer"
                            style={{
                                width: '100%',
                                maxWidth: '280px',
                                height: '50px',
                                backgroundColor: '#0055A4',
                                borderRadius: '12px',
                                border: 'none',
                            }}
                        >
                            <SendIcon size={20} />
                            <span
                                className="font-poppins font-semibold"
                                style={{ fontSize: '16px', color: '#FFFFFF' }}
                            >
                                Apply Now
                            </span>
                        </button>

                        <Link
                            href="/career"
                            className="flex items-center gap-2 hover:text-[#0055A4] transition-colors"
                            style={{ color: '#555555' }}
                        >
                            <ArrowLeftIcon size={14} />
                            <span
                                className="font-poppins font-normal"
                                style={{ fontSize: '13px' }}
                            >
                                Back to career list
                            </span>
                        </Link>
                    </div>
                </div>

                <div
                    style={{
                        width: '100%',
                        backgroundColor: 'rgba(217, 217, 217, 0.4)',
                        backdropFilter: 'blur(4px)',
                        WebkitBackdropFilter: 'blur(4px)',
                        marginTop: '24px',
                        paddingTop: '24px',
                        paddingBottom: '24px',
                    }}
                >
                    <div
                        style={{
                            width: '90%',
                            marginLeft: '5%',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '16px',
                        }}
                    >
                        {descriptionSections.map((section, index) => (
                            <SectionCard
                                key={index}
                                title={section.title}
                                content={section.content}
                                isMobile
                            />
                        ))}
                    </div>
                </div>

                <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        paddingTop: '40px',
                        paddingBottom: '80px',
                        paddingLeft: '5%',
                        paddingRight: '5%',
                        textAlign: 'center',
                    }}
                >
                    <h2
                        className="font-poppins font-semibold"
                        style={{
                            fontSize: '24px',
                            color: '#000000',
                            margin: 0,
                        }}
                    >
                        Ready to Join Our Team?
                    </h2>
                    <p
                        className="font-poppins font-medium"
                        style={{
                            fontSize: '14px',
                            color: '#000000',
                            marginTop: '8px',
                        }}
                    >
                        Take the next step in your career and build the future with us.
                    </p>

                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                            gap: '12px',
                            marginTop: '20px',
                        }}
                    >
                        <button
                            className="flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer"
                            style={{
                                width: '100%',
                                height: '54px',
                                backgroundColor: '#0055A4',
                                borderRadius: '10px',
                                border: 'none',
                            }}
                        >
                            <SendIcon size={20} />
                            <span
                                className="font-poppins font-semibold"
                                style={{ fontSize: '18px', color: '#FFFFFF' }}
                            >
                                Apply Now
                            </span>
                        </button>

                        <Link
                            href="/career"
                            className="flex items-center justify-center hover:bg-black/5 active:scale-[0.98] transition-all cursor-pointer"
                            style={{
                                width: '100%',
                                height: '54px',
                                backgroundColor: 'transparent',
                                borderRadius: '10px',
                                border: '1px solid rgba(0, 0, 0, 0.4)',
                                textDecoration: 'none',
                            }}
                        >
                            <span
                                className="font-poppins font-semibold"
                                style={{ fontSize: '16px', color: '#000000' }}
                            >
                                View all position
                            </span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
