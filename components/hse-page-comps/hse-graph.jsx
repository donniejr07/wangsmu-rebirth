'use client'

import chartData from './hse-chart-data.json'
import { useState, useEffect } from 'react'
import { AnimateOnScroll } from '@/components/animations/scroll-animations'
import { useLanguage } from '@/context/language-context'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts'

const years = [2023, 2024, 2025]

// Format large numbers
function formatMillions(value) {
    if (value >= 1000000) return `${(value / 1000000).toFixed(0)}M`
    if (value >= 1000) return `${(value / 1000).toFixed(0)}K`
    return value
}

// Format thousands
function formatThousands(value) {
    if (value >= 1000) return `${(value / 1000).toFixed(0)}K`
    return value
}

// Custom tooltip
function CustomTooltip({ active, payload, label, unit }) {
    if (!active || !payload?.length) return null
    return (
        <div
            style={{
                background: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                padding: '10px 14px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            }}
        >
            <p style={{ margin: 0, fontSize: '13px', fontWeight: 600, color: '#374151' }}>
                {label}
            </p>
            <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#6b7280' }}>
                {unit === 'tons'
                    ? `${payload[0].value.toFixed(1)}K CO₂`
                    : `${formatMillions(payload[0].value)} CO₂`}
            </p>
        </div>
    )
}

export default function HseGraph() {
    const { t } = useLanguage()
    const [activeYear, setActiveYear] = useState(2023)
    const [isMounted, setIsMounted] = useState(false)
    const data = chartData[activeYear]

    useEffect(() => {
        setIsMounted(true)
    }, [])

    return (
        <section style={{ backgroundColor: '#f8f9fa', padding: '60px 0' }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>

                {/* Header */}
                <AnimateOnScroll animation="fadeUp" delay={0}>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '32px',
                            flexWrap: 'wrap',
                            gap: '16px',
                        }}
                    >
                        <h2
                            className="font-poppins"
                            style={{
                                fontSize: '32px',
                                fontWeight: 700,
                                color: '#111827',
                                margin: 0,
                            }}
                        >
                            {t('hseGraph.title')}
                        </h2>

                        {/* Year Toggle */}
                        <div
                            style={{
                                display: 'flex',
                                gap: '8px',
                                backgroundColor: '#e5e7eb',
                                borderRadius: '9999px',
                                padding: '4px',
                            }}
                        >
                            {years.map((year) => (
                                <button
                                    key={year}
                                    onClick={() => setActiveYear(year)}
                                    style={{
                                        padding: '8px 20px',
                                        borderRadius: '9999px',
                                        border: 'none',
                                        cursor: 'pointer',
                                        fontSize: '14px',
                                        fontWeight: 600,
                                        transition: 'all 0.25s ease',
                                        backgroundColor: activeYear === year ? '#0055A1' : 'transparent',
                                        color: activeYear === year ? '#ffffff' : '#4b5563',
                                    }}
                                >
                                    {year}
                                </button>
                            ))}
                        </div>
                    </div>
                </AnimateOnScroll>

                {/* Cards Grid */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '24px',
                    }}
                    className="hse-graph-grid"
                >
                    {/* Scope 1 */}
                    <AnimateOnScroll animation="fadeUp" delay={100}>
                        <div
                            style={{
                                backgroundColor: '#ffffff',
                                borderRadius: '16px',
                                padding: '28px',
                                boxShadow: '0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.04)',
                            }}
                        >
                            <h3
                                className="font-poppins"
                                style={{
                                    fontSize: '18px',
                                    fontWeight: 600,
                                    color: '#374151',
                                    margin: '0 0 24px 0',
                                }}
                            >
                                {t('hseGraph.scope1Title')}
                            </h3>
                            <div style={{ width: '100%', height: '300px' }}>
                                {isMounted && (
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart
                                            data={data.scope1}
                                            margin={{ top: 10, right: 15, left: -15, bottom: 5 }}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                                            <XAxis
                                                dataKey="month"
                                                axisLine={false}
                                                tickLine={false}
                                                tick={{ fontSize: 12, fill: '#9ca3af' }}
                                            />
                                            <YAxis
                                                axisLine={false}
                                                tickLine={false}
                                                tick={{ fontSize: 12, fill: '#9ca3af' }}
                                                domain={[0, 8]}
                                                ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8]}
                                                tickFormatter={formatThousands}
                                            />
                                            <Tooltip content={<CustomTooltip unit="tons" />} cursor={{ fill: 'rgba(0,0,0,0.03)' }} />
                                            <Bar
                                                dataKey="value"
                                                fill="#f97316"
                                                radius={[6, 6, 0, 0]}
                                                maxBarSize={36}
                                                animationDuration={800}
                                                animationEasing="ease-out"
                                            />
                                        </BarChart>
                                    </ResponsiveContainer>
                                )}
                            </div>
                        </div>
                    </AnimateOnScroll>

                    {/* Scope 2 */}
                    <AnimateOnScroll animation="fadeUp" delay={200}>
                        <div
                            style={{
                                backgroundColor: '#ffffff',
                                borderRadius: '16px',
                                padding: '28px',
                                boxShadow: '0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.04)',
                            }}
                        >
                            <h3
                                className="font-poppins"
                                style={{
                                    fontSize: '18px',
                                    fontWeight: 600,
                                    color: '#374151',
                                    margin: '0 0 24px 0',
                                }}
                            >
                                {t('hseGraph.scope2Title')}
                            </h3>
                            <div style={{ width: '100%', height: '300px' }}>
                                {isMounted && (
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart
                                            data={data.scope2}
                                            margin={{ top: 5, right: 10, left: -10, bottom: 5 }}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                                            <XAxis
                                                dataKey="month"
                                                axisLine={false}
                                                tickLine={false}
                                                tick={{ fontSize: 12, fill: '#9ca3af' }}
                                            />
                                            <YAxis
                                                axisLine={false}
                                                tickLine={false}
                                                tick={{ fontSize: 12, fill: '#9ca3af' }}
                                                domain={[0, 140000000]}
                                                ticks={[0, 20000000, 40000000, 60000000, 80000000, 100000000, 120000000, 140000000]}
                                                tickFormatter={formatMillions}
                                            />
                                            <Tooltip content={<CustomTooltip unit="millions" />} cursor={{ fill: 'rgba(0,0,0,0.03)' }} />
                                            <Bar
                                                dataKey="value"
                                                fill="#3b82f6"
                                                radius={[6, 6, 0, 0]}
                                                maxBarSize={36}
                                                animationDuration={800}
                                                animationEasing="ease-out"
                                            />
                                        </BarChart>
                                    </ResponsiveContainer>
                                )}
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>

            {/* Responsive grid */}
            <style jsx>{`
                .hse-graph-grid {
                    grid-template-columns: repeat(2, 1fr);
                }
                @media (max-width: 768px) {
                    .hse-graph-grid {
                        grid-template-columns: 1fr !important;
                    }
                    section {
                        padding: 40px 0 !important;
                    }
                    h2 {
                        font-size: 24px !important;
                    }
                    button {
                        padding: 6px 14px !important;
                        font-size: 13px !important;
                    }
                }
            `}</style>
        </section>
    )
}