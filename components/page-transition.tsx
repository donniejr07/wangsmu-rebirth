'use client'

import { useEffect, useState, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function PageTransition({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const [isLoading, setIsLoading] = useState(false)
    const [displayChildren, setDisplayChildren] = useState(children)
    const isFirstLoad = useRef(true)
    const prevPathname = useRef(pathname)

    useEffect(() => {
        // First load - skip
        if (isFirstLoad.current) {
            isFirstLoad.current = false
            setDisplayChildren(children)
            return
        }

        // Navigation
        if (prevPathname.current !== pathname) {
            prevPathname.current = pathname
            setIsLoading(true)

            const timer = setTimeout(() => {
                setDisplayChildren(children)
                setIsLoading(false)
            }, 800)

            return () => clearTimeout(timer)
        } else {
            setDisplayChildren(children)
        }
    }, [pathname, children])

    return (
        <>
            {/* Loading Overlay */}
            <div
                style={{
                    position: 'fixed',
                    inset: 0,
                    zIndex: 9999,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#0055A4',
                    opacity: isLoading ? 1 : 0,
                    visibility: isLoading ? 'visible' : 'hidden',
                    transition: isLoading ? 'none' : 'opacity 500ms, visibility 500ms',
                }}
            >
                <div className="flex flex-col items-center gap-8">
                    <div className="relative w-[180px] h-[100px] animate-pulse">
                        <Image
                            src="/images/logo-pt-puteh.png"
                            alt="Wait a Sec..."
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>

                    <div className="flex items-center gap-1">
                        <span className="text-white font-poppins font-semibold text-lg tracking-wider">
                            Wait a sec
                        </span>
                        <span className="flex gap-1">
                            <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                            <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                            <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                        </span>
                    </div>
                </div>
            </div>

            {/* Page Content */}
            <div style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 300ms' }}>
                {displayChildren}
            </div>
        </>
    )
}
