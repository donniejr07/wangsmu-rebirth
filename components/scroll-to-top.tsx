'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useLenis } from './smooth-scroll'

export default function ScrollToTop() {
    const pathname = usePathname()
    const lenis = useLenis()

    useEffect(() => {
        // Use Lenis to scroll to top, fallback to window.scrollTo
        if (lenis) {
            lenis.scrollTo(0, { immediate: true })
        } else {
            window.scrollTo({ top: 0, behavior: 'instant' })
        }
    }, [pathname, lenis])

    return null
}
