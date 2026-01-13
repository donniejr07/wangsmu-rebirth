'use client'

import { useEffect, useRef, useState } from 'react'

// custom hook buat detect element masuk viewport
export function useInView(options = {}) {
    const ref = useRef(null)
    const [isInView, setIsInView] = useState(false)

    useEffect(() => {
        const element = ref.current
        if (!element) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                // once in view, stay true (animasi cuma jalan sekali)
                if (entry.isIntersecting) {
                    setIsInView(true)
                }
            },
            {
                threshold: options.threshold || 0.1,
                rootMargin: options.rootMargin || '0px',
                ...options
            }
        )

        observer.observe(element)

        return () => {
            observer.unobserve(element)
        }
    }, [options.threshold, options.rootMargin])

    return [ref, isInView]
}

// komponen wrapper buat animasi scroll
export function AnimateOnScroll({
    children,
    animation = 'fadeUp', // fadeUp, fadeIn, fadeLeft, fadeRight, scaleUp
    delay = 0,
    duration = 700,
    className = ''
}) {
    const [ref, isInView] = useInView({ threshold: 0.1 })

    const animations = {
        fadeUp: {
            hidden: 'opacity-0 translate-y-10',
            visible: 'opacity-100 translate-y-0'
        },
        fadeIn: {
            hidden: 'opacity-0',
            visible: 'opacity-100'
        },
        fadeLeft: {
            hidden: 'opacity-0 -translate-x-10',
            visible: 'opacity-100 translate-x-0'
        },
        fadeRight: {
            hidden: 'opacity-0 translate-x-10',
            visible: 'opacity-100 translate-x-0'
        },
        scaleUp: {
            hidden: 'opacity-0 scale-95',
            visible: 'opacity-100 scale-100'
        },
        slideUp: {
            hidden: 'opacity-0 translate-y-20',
            visible: 'opacity-100 translate-y-0'
        }
    }

    const anim = animations[animation] || animations.fadeUp

    return (
        <div
            ref={ref}
            className={`transition-all ${className} ${isInView ? anim.visible : anim.hidden}`}
            style={{
                transitionDuration: `${duration}ms`,
                transitionDelay: `${delay}ms`,
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
            }}
        >
            {children}
        </div>
    )
}
