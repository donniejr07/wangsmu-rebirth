'use client';

const steps = [
    { number: '1', title: 'Submit CV', desc: 'Submit your CV and supporting documents through our recruitment system to begin the application process.' },
    { number: '2', title: 'HR Screening', desc: 'Our HR team reviews your qualifications, experience, and overall suitability for the applied position.' },
    { number: '3', title: 'Interview', desc: 'Shortlisted candidates will be invited to attend an interview to assess competencies and cultural fit.' },
    { number: '4', title: 'Psychological Test', desc: 'Candidates may undergo a psychological assessment to evaluate personality traits, potential, and cognitive abilities.' },
    { number: '5', title: 'Offering', desc: 'Selected candidates will receive a formal job offer outlining the position, compensation, and benefits package.' },
    { number: '6', title: 'Medical Check Up', desc: 'A medical examination is conducted to ensure candidates meet the company\'s health requirements.' },
];

const lastStep = {
    title: 'Hiring Decision',
    desc: 'After completing all stages, the company will issue the final hiring decision.',
};

// Step component
function StepItem({ number, title, desc, isLast, isMobile }) {
    const bubbleSize = isMobile ? 'w-[3rem] h-[3rem]' : 'w-[4.5rem] h-[4.5rem]';
    const numSize = isMobile ? 'text-base' : 'text-xl';
    const titleSize = isMobile ? 'text-base' : 'text-xl';
    const descSize = isMobile ? 'text-sm leading-relaxed' : 'text-lg leading-relaxed';
    const gap = isMobile ? 'gap-3' : 'gap-5';

    return (
        <div className={`flex items-stretch ${gap}`}>
            {/* Bubble + Line */}
            <div className="flex flex-col items-center flex-shrink-0">
                <div className={`${bubbleSize} rounded-full flex items-center justify-center relative z-10 ${isLast ? 'bg-[#00CC44]' : 'bg-[#0055A4]'}`}>
                    <span className={`font-poppins font-semibold ${numSize} text-white`}>
                        {isLast ? '✓' : number}
                    </span>
                </div>
                {!isLast && (
                    <div className="w-[3px] flex-1 bg-[#0055A4]" />
                )}
            </div>

            {/* Content */}
            <div className="min-w-0" style={{ paddingTop: isMobile ? '2px' : '4px', paddingBottom: isLast ? '0' : (isMobile ? '40px' : '56px') }}>
                <h3 className={`font-poppins font-semibold ${titleSize} text-black`}>
                    {title}
                </h3>
                <p className={`font-poppins font-normal ${descSize} text-gray-600 mt-1`}>
                    {desc}
                </p>
            </div>
        </div>
    );
}

const CareerAppProcess = () => {
    return (
        <section className="w-full bg-white py-12 lg:py-24 flex justify-center">
            <div className="max-w-3xl w-full px-6">

                {/* Title */}
                <div className="text-center mb-10 lg:mb-14">
                    <h2 className="font-poppins font-semibold text-3xl lg:text-5xl text-black leading-tight">
                        Our <span className="text-[#0055A4]">Application</span> Process
                    </h2>
                    <p className="font-poppins text-sm lg:text-xl text-black mt-2 lg:mt-3" style={{ marginBottom: '20px' }}>
                        A clear, transparent journey from application to hiring
                    </p>
                </div>

                {/* MOBILE */}
                <div className="lg:hidden flex flex-col" style={{ padding: '1.5rem' }}>
                    {steps.map((step, i) => (
                        <StepItem key={i} {...step} isMobile isLast={false} />
                    ))}
                    <StepItem title={lastStep.title} desc={lastStep.desc} isMobile isLast />
                </div>

                {/* DESKTOP */}
                <div className="hidden lg:flex lg:flex-col">
                    {steps.map((step, i) => (
                        <StepItem key={i} {...step} isMobile={false} isLast={false} />
                    ))}
                    <StepItem title={lastStep.title} desc={lastStep.desc} isMobile={false} isLast />
                </div>

            </div>
        </section>
    );
}

export default CareerAppProcess;