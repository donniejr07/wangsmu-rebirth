'use client'

import { useState } from 'react'

export default function FormSection() {
    const [subjectOpen, setSubjectOpen] = useState(false)
    const [selectedSubject, setSelectedSubject] = useState('')

    const subjectOptions = ['Services', 'Products', 'Careers', 'Other']
    return (
        // desktop layout
        <section className="relative w-full">
            {/* Background Main */}
            <div
                className="relative overflow-hidden"
                style={{
                    width: '100%',
                    height: '700px',
                    backgroundColor: '#0055A4',
                    borderRadius: '0 0 160px 160px',
                }}
            >
                {/* Background Image */}
                <img
                    src="images/abss.png"
                    alt="Contact Background"
                    style={{
                        position: 'absolute',
                        top: '-103px',
                        opacity: '0.3',
                        left: '0',
                        width: '100%',
                        height: '970px',
                        objectFit: 'cover',
                    }}
                />

                {/* Form Content row 1 */}
                <div
                    style={{
                        position: 'absolute',
                        top: '120px',
                        left: '0',
                        right: '0',
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '36px',
                    }}
                >
                    <div>
                        <label
                            style={{
                                display: 'block',
                                width: '103px',
                                height: '30px',
                                fontFamily: 'Poppins, sans-serif',
                                fontWeight: 700,
                                fontSize: '20px',
                                textAlign: 'left',
                                color: '#FFFFFF',
                            }}
                        >
                            Fullname
                        </label>

                        <input
                            type="text"
                            placeholder="Type Your name"
                            style={{
                                width: '420px',
                                height: '43px',
                                marginTop: '10px',
                                borderRadius: '15px',
                                backgroundColor: 'rgba(217, 217, 217, 0.7)',
                                border: '1px solid #FFFFFF',
                                padding: '10px 20px',
                                fontFamily: 'Poppins, sans-serif',
                                fontWeight: 700,
                                fontSize: '16px',
                                textAlign: 'center',
                                color: '#FFFFFF',
                                outline: 'none',
                            }}
                        />
                    </div>

                    <div>
                        <label
                            style={{
                                display: 'block',
                                width: '103px',
                                height: '30px',
                                fontFamily: 'Poppins, sans-serif',
                                fontWeight: 700,
                                fontSize: '20px',
                                textAlign: 'left',
                                color: '#FFFFFF',
                            }}
                        >
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="Type Your email"
                            style={{
                                width: '420px',
                                height: '43px',
                                marginTop: '10px',
                                borderRadius: '15px',
                                backgroundColor: 'rgba(217, 217, 217, 0.7)',
                                border: '1px solid #FFFFFF',
                                padding: '10px 20px',
                                fontFamily: 'Poppins, sans-serif',
                                fontWeight: 700,
                                fontSize: '16px',
                                textAlign: 'center',
                                color: '#FFFFFF',
                                outline: 'none',
                            }}
                        />
                    </div>
                </div>

                {/* Form Content row 2 */}
                <div
                    style={{
                        position: 'absolute',
                        top: '230px',
                        left: '0',
                        right: '0',
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '36px',
                    }}
                >
                    <div>
                        <label
                            style={{
                                display: 'block',
                                width: '103px',
                                height: '30px',
                                fontFamily: 'Poppins, sans-serif',
                                fontWeight: 700,
                                fontSize: '20px',
                                textAlign: 'left',
                                color: '#FFFFFF',
                            }}
                        >
                            Company
                        </label>

                        <input
                            type="text"
                            placeholder="Type Your company name"
                            style={{
                                width: '420px',
                                height: '43px',
                                marginTop: '10px',
                                borderRadius: '15px',
                                backgroundColor: 'rgba(217, 217, 217, 0.7)',
                                border: '1px solid #FFFFFF',
                                padding: '10px 20px',
                                fontFamily: 'Poppins, sans-serif',
                                fontWeight: 700,
                                fontSize: '16px',
                                textAlign: 'center',
                                color: '#FFFFFF',
                                outline: 'none',
                            }}
                        />
                    </div>

                    <div>
                        <label
                            style={{
                                display: 'block',
                                width: '103px',
                                height: '30px',
                                fontFamily: 'Poppins, sans-serif',
                                fontWeight: 700,
                                fontSize: '20px',
                                textAlign: 'left',
                                color: '#FFFFFF',
                            }}
                        >
                            Countries
                        </label>

                        <input
                            type="email"
                            placeholder="Type Your country"
                            style={{
                                width: '420px',
                                height: '43px',
                                marginTop: '10px',
                                borderRadius: '15px',
                                backgroundColor: 'rgba(217, 217, 217, 0.7)',
                                border: '1px solid #FFFFFF',
                                padding: '10px 20px',
                                fontFamily: 'Poppins, sans-serif',
                                fontWeight: 700,
                                fontSize: '16px',
                                textAlign: 'center',
                                color: '#FFFFFF',
                                outline: 'none',
                            }}
                        />
                    </div>
                </div>

                {/* Form Content row 3 */}
                <div
                    style={{
                        position: 'absolute',
                        top: '340px',
                        left: '0',
                        right: '0',
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '36px',
                    }}
                >
                    <div>
                        <label
                            style={{
                                display: 'block',
                                width: '103px',
                                height: '30px',
                                fontFamily: 'Poppins, sans-serif',
                                fontWeight: 700,
                                fontSize: '20px',
                                textAlign: 'left',
                                color: '#FFFFFF',
                            }}
                        >
                            Phone
                        </label>

                        <input
                            type="text"
                            placeholder="Type Your phone number"
                            style={{
                                width: '420px',
                                height: '43px',
                                marginTop: '10px',
                                borderRadius: '15px',
                                backgroundColor: 'rgba(217, 217, 217, 0.7)',
                                border: '1px solid #FFFFFF',
                                padding: '10px 20px',
                                fontFamily: 'Poppins, sans-serif',
                                fontWeight: 700,
                                fontSize: '16px',
                                textAlign: 'center',
                                color: '#FFFFFF',
                                outline: 'none',
                            }}
                        />
                    </div>

                    <div>
                        <label
                            style={{
                                display: 'block',
                                width: '103px',
                                height: '30px',
                                fontFamily: 'Poppins, sans-serif',
                                fontWeight: 700,
                                fontSize: '20px',
                                textAlign: 'left',
                                color: '#FFFFFF',
                            }}
                        >
                            Subject
                        </label>

                        <div style={{ position: 'relative', marginTop: '10px' }}>
                            <div
                                onClick={() => setSubjectOpen(!subjectOpen)}
                                style={{
                                    width: '420px',
                                    height: '43px',
                                    borderRadius: '15px',
                                    backgroundColor: 'rgba(217, 217, 217, 0.7)',
                                    border: '1px solid #FFFFFF',
                                    padding: '0 20px',
                                    fontFamily: 'Poppins, sans-serif',
                                    fontWeight: 700,
                                    fontSize: '16px',
                                    color: '#FFFFFF',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                }}
                            >
                                {selectedSubject || 'Select your Subject'}
                                <span style={{ position: 'absolute', right: '20px' }}>▼</span>
                            </div>

                            {subjectOpen && (
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '48px',
                                        left: '0',
                                        width: '420px',
                                        borderRadius: '15px',
                                        backgroundColor: 'rgba(217, 217, 217, 0.95)',
                                        border: '1px solid #FFFFFF',
                                        overflow: 'hidden',
                                        zIndex: 10,
                                    }}
                                >
                                    {subjectOptions.map((option) => (
                                        <div
                                            key={option}
                                            onClick={() => {
                                                setSelectedSubject(option)
                                                setSubjectOpen(false)
                                            }}
                                            style={{
                                                padding: '12px 20px',
                                                fontFamily: 'Poppins, sans-serif',
                                                fontWeight: 700,
                                                fontSize: '16px',
                                                color: '#000',
                                                cursor: 'pointer',
                                                transition: 'background-color 0.2s',
                                            }}
                                            onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(0,85,164,0.3)'}
                                            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                                        >
                                            {option}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Form Content row 4 */}
                <div
                    style={{
                        position: 'absolute',
                        top: '440px',
                        left: '305px',
                        right: '0',
                        display: 'flex',
                        justifyContent: 'left',
                        gap: '36px',
                    }}
                >
                    <div>
                        <label
                            style={{
                                display: 'block',
                                width: '103px',
                                height: '30px',
                                fontFamily: 'Poppins, sans-serif',
                                fontWeight: 700,
                                fontSize: '20px',
                                textAlign: 'left',
                                color: '#FFFFFF',
                            }}
                        >
                            Message
                        </label>

                        <textarea
                            placeholder="Type Your message"
                            style={{
                                width: '875px',
                                height: '113px',
                                marginTop: '10px',
                                borderRadius: '15px',
                                backgroundColor: 'rgba(217, 217, 217, 0.7)',
                                border: '1px solid #FFFFFF',
                                padding: '10px 20px',
                                fontFamily: 'Poppins, sans-serif',
                                fontWeight: 700,
                                fontSize: '16px',
                                textAlign: 'left',
                                color: '#FFFFFF',
                                outline: 'none',
                            }}
                        />
                    </div>
                </div>

                <button style={{
                    position: 'absolute',
                    width: '130px',
                    height: '43px',
                    top: '620px',
                    left: '305px',
                    borderRadius: '15px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #FFFFFF',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 700,
                    fontSize: '16px',
                    textAlign: 'center',
                    color: '#0055A4',
                    outline: 'none',
                    cursor: 'pointer'
                }}>
                    Send Now
                    <i className="fa-solid fa-paper-plane" style={{ marginLeft: '8px' }}></i>
                </button>
            </div>
        </section>
    )
}
