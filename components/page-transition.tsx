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
        if (isFirstLoad.current) {
            isFirstLoad.current = false
            setDisplayChildren(children)
            return
        }

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
                    flexDirection: 'column',
                    backgroundColor: '#FFFFFF',
                    opacity: isLoading ? 1 : 0,
                    visibility: isLoading ? 'visible' : 'hidden',
                    transition: isLoading ? 'none' : 'opacity 500ms, visibility 500ms',
                }}
            >
                {/* Mobile Skeleton */}
                <section className="lg:hidden relative mx-4 mt-4">
                    <div
                        className="w-full bg-slate-100 flex flex-col items-center justify-center text-center pt-5 pb-12 px-6"
                        style={{
                            minHeight: '400px',
                            borderRadius: '0 0 60px 60px',
                        }}
                    >
                        <div className="w-16 h-16 rounded-full skeleton-shimmer mb-6"></div>

                        {/* Skeleton Title */}
                        <div className="flex flex-col items-center gap-2 mb-5">
                            <div className="w-40 h-9 rounded-md skeleton-shimmer"></div>
                            <div className="w-32 h-9 rounded-md skeleton-shimmer"></div>
                        </div>

                        {/* Skeleton Description */}
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-64 h-4 rounded-md skeleton-shimmer"></div>
                            <div className="w-56 h-4 rounded-md skeleton-shimmer"></div>
                        </div>
                    </div>
                </section>

                {/* Desktop Skeleton */}
                <section
                    className="hidden lg:flex justify-center relative w-full"
                    style={{
                        paddingLeft: '6%',
                        paddingRight: '6%',
                    }}
                >
                    <div
                        className="w-full bg-slate-100 relative"
                        style={{
                            height: '753px',
                            borderRadius: '0 0 160px 160px',
                        }}
                    >
                        {/* Skeleton Title */}
                        <div className="absolute flex flex-col gap-4" style={{ left: '7%', bottom: '269px' }}>
                            <div className="w-80 h-16 rounded-lg skeleton-shimmer"></div>
                            <div className="w-64 h-16 rounded-lg skeleton-shimmer"></div>
                        </div>

                        {/* Skeleton Description */}
                        <div className="absolute flex flex-col gap-3 w-full max-w-3xl" style={{ left: '7%', bottom: '140px' }}>
                            <div className="w-11/12 h-7 rounded-md skeleton-shimmer"></div>
                            <div className="w-3/4 h-7 rounded-md skeleton-shimmer"></div>
                        </div>

                        {/* Skeleton Logo */}
                        <div className="absolute w-28 h-28 rounded-full skeleton-shimmer" style={{ top: '30px', right: '48px' }}></div>
                    </div>
                </section>
            </div>

            {/* Page Content */}
            <div style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 300ms' }}>
                {displayChildren}
            </div>
        </>
    )
}
