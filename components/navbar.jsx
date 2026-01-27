'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/language-context';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { language, setLanguage } = useLanguage();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Menu items data (path)
    const menuItems = [
        { href: '/', label: 'Home', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg> },

        { href: '/about', label: 'About', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg> },

        { href: '/services', label: 'Services', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg> },

        { href: '/product', label: 'Product', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg> },

        { href: '/career', label: 'Career', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg> },

        { href: '/soon', label: 'Gallery', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M3 3h8v8H3zM13 3h8v8h-8zM3 13h8v8H3zM13 13h8v8h-8z" /></svg> },

        { href: '/soon', label: 'Contact', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg> },
    ];

    /**
    * Navbar
    * 
    * Responsive navigation dengan hamburger menu.
    * - Mobile: Slide-in menu dari kiri
    * - Desktop: Panel besar dengan menu items + video preview
    * 
    * Fitur:
    * - Toggle menu open/close
    * - Language switcher (ID/EN)
    * - Animated hamburger icon
    */

    return (
        <>
            {/* Mobile Layout */}
            <div className="lg:hidden">
                <div
                    onClick={toggleMenu}
                    className="fixed cursor-pointer z-[1400]"
                    style={{
                        top: '12px',
                        left: '12px',
                        width: '48px',
                        height: '44px',
                        backgroundColor: '#E9E9E9',
                        borderRadius: '22px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '5px',
                    }}
                >
                    <div style={{
                        width: '22px',
                        height: '2px',
                        backgroundColor: '#000000',
                        transition: 'all 0.3s ease',
                        transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'rotate(0) translate(0)',
                    }} />
                    <div style={{
                        width: '22px',
                        height: '2px',
                        backgroundColor: '#000000',
                        transition: 'all 0.3s ease',
                        opacity: isMenuOpen ? 0 : 1,
                    }} />
                    <div style={{
                        width: '22px',
                        height: '2px',
                        backgroundColor: '#000000',
                        transition: 'all 0.3s ease',
                        transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'rotate(0) translate(0)',
                    }} />
                </div>

                <div
                    className="fixed z-[1400]"
                    style={{
                        top: '12px',
                        left: '68px',
                        width: '90px',
                        height: '44px',
                        backgroundColor: '#E9E9E9',
                        borderRadius: '22px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '4px 6px',
                    }}
                >
                    <div
                        onClick={() => setLanguage('id')}
                        className="cursor-pointer"
                        style={{
                            width: '36px',
                            height: '36px',
                            backgroundColor: language === 'id' ? '#FFFFFF' : 'transparent',
                            border: language === 'id' ? '1px solid #000000' : 'none',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <span className="font-poppins text-[14px] text-black">ID</span>
                    </div>
                    <div
                        onClick={() => setLanguage('en')}
                        className="cursor-pointer"
                        style={{
                            width: '36px',
                            height: '36px',
                            backgroundColor: language === 'en' ? '#FFFFFF' : 'transparent',
                            border: language === 'en' ? '1px solid #000000' : 'none',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <span className="font-poppins text-[14px] text-black">EN</span>
                    </div>
                </div>

                <div
                    className={`fixed inset-0 bg-black/50 z-[1300] transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                    onClick={toggleMenu}
                />
                <div
                    onClick={(e) => e.stopPropagation()}
                    className={`fixed z-[1400] transition-all duration-500 ease-out ${isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
                    style={{
                        top: '0px',
                        left: '0px',
                        right: '0px',
                        maxWidth: '350px',
                        backgroundColor: '#0055A4',
                        borderRadius: '0px 24px 24px 24px',
                        overflow: 'hidden',
                        padding: '20px',
                    }}
                >
                    <nav className="flex flex-col gap-4 mt-8">
                        {menuItems.map((item) => (
                            <Link key={item.href} href={item.href} onClick={toggleMenu}>
                                <div className="flex items-center gap-4 text-white hover:opacity-80 transition-opacity py-2">
                                    <span className="w-6 h-6">{item.icon}</span>
                                    <span className="font-poppins text-[16px]">{item.label}</span>
                                </div>
                            </Link>
                        ))}
                    </nav>

                    <p className="text-white/50 text-[12px] font-poppins text-center border-t border-white/20"
                        style={{ marginTop: '10px' }}
                    >
                        © 2025 Wang Sarimulti Utama
                    </p>
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:block">
                <div
                    onClick={toggleMenu}
                    className="fixed cursor-pointer z-[1400]"
                    style={{
                        top: '16px',
                        left: '16px',
                        width: '56px',
                        height: '52px',
                        backgroundColor: '#E9E9E9',
                        borderRadius: '26px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '6px',
                    }}
                >
                    <div style={{
                        width: '28px',
                        height: '2px',
                        backgroundColor: '#000000',
                        transition: 'all 0.3s ease',
                        transform: isMenuOpen ? 'rotate(45deg) translate(6px, 6px)' : 'rotate(0) translate(0)',
                    }} />
                    <div style={{
                        width: '28px',
                        height: '2px',
                        backgroundColor: '#000000',
                        transition: 'all 0.3s ease',
                        opacity: isMenuOpen ? 0 : 1,
                    }} />
                    <div style={{
                        width: '28px',
                        height: '2px',
                        backgroundColor: '#000000',
                        transition: 'all 0.3s ease',
                        transform: isMenuOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'rotate(0) translate(0)',
                    }} />
                </div>

                {/* language button */}
                <div
                    className="fixed z-[1400]"
                    style={{
                        top: '16px',
                        left: '80px',
                        width: '110px',
                        height: '52px',
                        backgroundColor: '#E9E9E9',
                        borderRadius: '26px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '5px 8px',
                    }}
                >
                    <div
                        onClick={() => setLanguage('id')}
                        className="cursor-pointer"
                        style={{
                            width: '42px',
                            height: '42px',
                            backgroundColor: language === 'id' ? '#FFFFFF' : 'transparent',
                            border: language === 'id' ? '1px solid #000000' : 'none',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <span className="font-poppins text-[16px] text-black">ID</span>
                    </div>
                    <div
                        onClick={() => setLanguage('en')}
                        className="cursor-pointer"
                        style={{
                            width: '42px',
                            height: '42px',
                            backgroundColor: language === 'en' ? '#FFFFFF' : 'transparent',
                            border: language === 'en' ? '1px solid #000000' : 'none',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <span className="font-poppins text-[16px] text-black">EN</span>
                    </div>
                </div>

                <div
                    className={`fixed inset-0 bg-black/50 z-[1300] transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                    onClick={toggleMenu}
                />

                {/* background card */}
                <div
                    onClick={(e) => e.stopPropagation()}
                    className={`fixed z-[1400] transition-all duration-500 ease-out ${isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
                    style={{
                        top: '0px',
                        width: '956px',
                        height: '564px',
                        backgroundColor: '#0055A4',
                        borderRadius: '0px 40px 40px 40px',
                        overflow: 'hidden',
                    }}
                >
                    {menuItems.map((item, index) => (
                        <Link key={item.href} href={item.href} onClick={toggleMenu}>
                            <div
                                className="absolute flex items-center cursor-pointer hover:opacity-80 transition-opacity"
                                style={{ top: `${80 + index * 60}px`, left: '17px' }}
                            >
                                <span className="w-7 h-7 text-white">{item.icon}</span>
                                <span
                                    style={{
                                        marginLeft: '22px',
                                        fontFamily: 'Poppins, sans-serif',
                                        fontWeight: 400,
                                        fontSize: '18px',
                                        color: '#FFFFFF',
                                    }}
                                >
                                    {item.label}
                                </span>
                            </div>
                        </Link>
                    ))}

                    <div
                        className="absolute"
                        style={{
                            left: '280px',
                            top: '90px',
                            width: '2px',
                            height: '360px',
                            backgroundColor: '#FFFFFF',
                        }}
                    />

                    <div
                        className="absolute overflow-hidden"
                        style={{
                            left: '455px',
                            top: '175px',
                            width: '350px',
                            height: '205px',
                            borderRadius: '30px',
                            backgroundColor: '#333',
                        }}
                    >
                        <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/lxTQZNfn3EQ?si=pzaosG0N020vO33b"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                    <span
                        className="absolute"
                        style={{
                            left: '299px',
                            top: '522px',
                            width: '359px',
                            height: '30px',
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: 400,
                            fontSize: '14px',
                            color: 'rgba(255, 255, 255, 0.5)',
                            textAlign: 'center',
                        }}
                    >
                        © 2026 Wang Sarimulti Utama. All rights reserved.
                    </span>
                </div>
            </div>
        </>
    );
}
