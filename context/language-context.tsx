'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

// Import translations
import landingEn from '@/locales/landing-page-lang/en.json'
import landingId from '@/locales/landing-page-lang/id.json'
import aboutEn from '@/locales/about-page-lang/en.json'
import aboutId from '@/locales/about-page-lang/id.json'
import hseEn from '@/locales/hse-page-lang/en.json'
import hseId from '@/locales/hse-page-lang/id.json'
import serviceEn from '@/locales/service-page-lang/en.json'
import serviceId from '@/locales/service-page-lang/id.json'
import manuToolEn from '@/locales/service-page-lang/manuTool/en.json'
import manuToolId from '@/locales/service-page-lang/manuTool/id.json'
import manuPlasticEn from '@/locales/service-page-lang/manuPlastic/en.json'
import manuPlasticId from '@/locales/service-page-lang/manuPlastic/id.json'
import secProcEn from '@/locales/service-page-lang/secProc/en.json'
import secProcId from '@/locales/service-page-lang/secProc/id.json'
import productEn from '@/locales/product-page-lang/en.json'
import productId from '@/locales/product-page-lang/id.json'
import autoEn from '@/locales/product-page-lang/auto/en.json'
import autoId from '@/locales/product-page-lang/auto/id.json'
import elecEn from '@/locales/product-page-lang/electronics/en.json'
import elecId from '@/locales/product-page-lang/electronics/id.json'
import galleryEn from '@/locales/gallery-page-lang/en.json'
import galleryId from '@/locales/gallery-page-lang/id.json'

type Language = 'en' | 'id'

// Merge translations
const en = { ...landingEn, ...aboutEn, ...hseEn, ...serviceEn, ...manuToolEn, ...manuPlasticEn, ...secProcEn, ...productEn, ...autoEn, ...elecEn, ...galleryEn }
const id = { ...landingId, ...aboutId, ...hseId, ...serviceId, ...manuToolId, ...manuPlasticId, ...secProcId, ...productId, ...autoId, ...elecId, ...galleryId }

type Translations = typeof en

interface LanguageContextType {
    language: Language
    setLanguage: (lang: Language) => void
    t: (key: string) => string
    isChangingLanguage: boolean
}

const translations: Record<Language, Translations> = { en, id }

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>('en')
    const [isLoaded, setIsLoaded] = useState(false)
    const [isChangingLanguage, setIsChangingLanguage] = useState(false)

    // Load language from localStorage on mount
    useEffect(() => {
        const savedLang = localStorage.getItem('language') as Language
        if (savedLang && (savedLang === 'en' || savedLang === 'id')) {
            setLanguageState(savedLang)
        }
        setIsLoaded(true)
    }, [])

    // Save language to localStorage when changed with loading animation
    const setLanguage = (lang: Language) => {
        if (lang === language) return // Don't reload if same language

        setIsChangingLanguage(true)
        localStorage.setItem('language', lang)

        // Delay language change to show loading animation
        setTimeout(() => {
            setLanguageState(lang)
            setIsChangingLanguage(false)
        }, 600)
    }

    // Translation function
    const t = (key: string): string => {
        const keys = key.split('.')
        let value: any = translations[language]

        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k]
            } else {
                return key // Return key if translation not found
            }
        }

        return typeof value === 'string' ? value : key
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t, isChangingLanguage }}>
            {/* Language Change Loading Overlay */}
            <div
                className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#0055A4] transition-all duration-500 ${isChangingLanguage ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
                    }`}
            >
                {/* Loading content */}
                <div className="flex flex-col items-center gap-6">
                    {/* Spinning loader */}
                    <div className="relative">
                        {/* Outer ring */}
                        <div className="w-20 h-20 border-4 border-white/30 rounded-full"></div>
                        {/* Spinning ring */}
                        <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-t-white rounded-full animate-spin"></div>
                        {/* Center dot */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-8 h-8 bg-white rounded-full animate-pulse"></div>
                        </div>
                    </div>

                    {/* Loading text */}
                    <div className="flex items-center gap-1">
                        <span className="text-white font-poppins font-semibold text-lg tracking-wider">
                            Changing Language
                        </span>
                        <span className="flex gap-1">
                            <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                            <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                            <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                        </span>
                    </div>
                </div>
            </div>

            {/* Page content */}
            <div className={`transition-opacity duration-300 ${isChangingLanguage ? 'opacity-0' : 'opacity-100'}`}>
                {children}
            </div>
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }
    return context
}
