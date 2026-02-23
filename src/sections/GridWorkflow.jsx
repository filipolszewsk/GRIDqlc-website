import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Grid, Layers, Zap, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const GridWorkflow = () => {
    const { t } = useLanguage();
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end end"]
    });

    const steps = [
        {
            number: '01',
            title: t('workflow.card1_title'),
            desc: t('workflow.card1_desc'),
            icon: <Grid size={48} strokeWidth={1} />,
        },
        {
            number: '02',
            title: t('workflow.card2_title'),
            desc: t('workflow.card2_desc'),
            icon: <Zap size={48} strokeWidth={1} />,
        },
        {
            number: '03',
            title: t('workflow.card3_title'),
            desc: t('workflow.card3_desc'),
            icon: <Layers size={48} strokeWidth={1} />,
        }
    ];

    return (
        <section id="workflow" style={{ backgroundColor: '#000', position: 'relative', overflow: 'visible' }}>

            {/* Sticky Scroll Section */}
            <div ref={containerRef} style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
                <style>{`
                    .sticky-layout {
                        display: flex;
                        flex-direction: column;
                    }
                    .sticky-header {
                        order: -1; /* Keep visually first */
                        position: sticky;
                        top: 10vh;
                        z-index: 50;
                    }
                    .sticky-content {
                        position: relative;
                        z-index: 1;
                        display: flex;
                        flex-direction: column;
                        gap: 15vh;
                    }

                    @media (min-width: 1024px) {
                        .sticky-layout {
                            flex-direction: row !important;
                            align-items: flex-start;
                        }
                        .sticky-header {
                            top: 15vh;
                            width: 50%;
                            height: 85vh;
                            padding-right: 40px;
                        }
                        .sticky-content {
                            width: 50%;
                            margin-top: 50vh;
                            gap: 20vh;
                        }
                    }
                    @media (max-width: 1023px) {
                        .sticky-header {
                            top: 0;
                            width: 100%;
                            padding-top: 130px; 
                            padding-bottom: 20px;
                            z-index: 20;
                        }
                        .mobile-hide-pill {
                            display: none !important;
                        }
                        /* Use a pseudo-element for robust masking across the entire width */
                        .sticky-header::before {
                            content: '';
                            position: absolute;
                            top: -100px;  /* Guarantee coverage under navbar */
                            left: -20px;  /* Cover container padding */
                            right: -20px; /* Cover container padding */
                            bottom: -40px; /* Pulled up so more text is visible */
                            background: linear-gradient(180deg, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%);
                            z-index: -1;
                            pointer-events: none;
                        }
                        .sticky-content { 
                            padding-top: 10vh; 
                            gap: 120px;
                        }
                        .container-layout {
                            padding: 60px 20px !important;
                        }
                        .comparison-section {
                            padding: 60px 20px !important;
                        }
                        .comparison-title-container {
                            margin-bottom: 40px !important;
                        }
                    }
                `}</style>

                <div className="container sticky-layout container-layout" style={{ margin: '0 auto', maxWidth: '1200px', padding: '120px 20px' }}>

                    {/* Right/Bottom Scrolling Content defaults to order: 0, so it appears after header visually */}
                    <div className="sticky-content" style={{ position: 'relative', zIndex: 1, transform: 'translateZ(0)' }}>
                        {steps.map((step, i) => (
                            <motion.div
                                className="sticky-item"
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                                style={{ position: 'relative' }}
                            >
                                {/* Massive Background Number */}
                                <div style={{
                                    position: 'absolute',
                                    top: '-40px',
                                    left: '-20px',
                                    fontSize: '180px',
                                    fontWeight: '800',
                                    color: 'rgba(255,255,255,0.02)',
                                    lineHeight: 1,
                                    zIndex: 0,
                                    pointerEvents: 'none',
                                    letterSpacing: '-0.05em'
                                }}>
                                    {step.number}
                                </div>

                                <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '24px', paddingLeft: '20px', borderLeft: '1px solid rgba(255,255,255,0.1)' }}>
                                    <div style={{ color: '#fff' }}>
                                        {step.icon}
                                    </div>
                                    <h3 style={{ fontSize: '2.5rem', fontWeight: 500, color: '#fff', letterSpacing: '-0.01em', lineHeight: 1.2 }}>
                                        {step.title}
                                    </h3>
                                    <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, maxWidth: '400px' }}>
                                        {step.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Left/Top Sticky Element DOM swapped to render on top */}
                    <div className="sticky-header" style={{ position: 'sticky', zIndex: 50, transform: 'translateZ(0)' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            style={{ position: 'relative', zIndex: 60 }}
                        >
                            <div className="mobile-hide-pill" style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '6px 14px',
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '20px',
                                marginBottom: '24px'
                            }}>
                                <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#fff' }} />
                                <span style={{ fontSize: '12px', fontWeight: '500', color: '#fff', letterSpacing: '2px' }}>WORKFLOW_ARCHITECTURE</span>
                            </div>

                            <h2 className="web3-text-gradient" style={{ fontSize: 'clamp(3rem, 5vw, 5.5rem)', fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '16px' }}>
                                {t('workflow.title')}
                            </h2>
                            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, maxWidth: '500px' }}>
                                {t('workflow.subtitle')}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* HUD Comparison List Section */}
            <div className="comparison-section" style={{ padding: '120px 20px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <motion.div
                        className="comparison-title-container"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ textAlign: 'center', marginBottom: '80px' }}
                    >
                        <h3 className="web3-text-gradient" style={{ fontSize: '3rem', fontWeight: 600, letterSpacing: '-0.02em', marginBottom: '16px' }}>
                            {t('workflow.comparison_title')}
                        </h3>
                        <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.5)' }}>{t('workflow.comparison_subtitle')}</p>
                    </motion.div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {t('workflow.comparison_rows').map((row, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'minmax(120px, 1fr) 2fr auto 3fr',
                                    gap: '20px',
                                    alignItems: 'center',
                                    padding: 'clamp(16px, 3vw, 24px)',
                                    background: '#050505',
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    borderRadius: '16px',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                            >
                                <style>{`
                                    @media (max-width: 768px) {
                                        .hud-row-${index} {
                                            grid-template-columns: 1fr !important;
                                            gap: 12px !important;
                                        }
                                        .hud-arrow-${index} { transform: rotate(90deg); margin: 8px 0; }
                                    }
                                `}</style>

                                {/* Feature Label */}
                                <div className={`hud-row-${index}`} style={{ gridColumn: '1 / -1', display: 'grid', gridTemplateColumns: 'inherit', gap: 'inherit', alignItems: 'center' }}>
                                    <div style={{ color: '#fff', fontSize: '14px', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase' }}>
                                        {row.feature}
                                    </div>

                                    {/* Old (Crossed out/dimmed) */}
                                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', textDecoration: 'line-through' }}>
                                        {row.old}
                                    </div>

                                    {/* Arrow */}
                                    <div className={`hud-arrow-${index}`} style={{ display: 'flex', justifyContent: 'center', opacity: 0.3 }}>
                                        <ArrowRight size={20} color="#fff" />
                                    </div>

                                    {/* New (Bright and highlighted) */}
                                    <div style={{ color: '#fff', fontSize: '15px', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#fff', boxShadow: '0 0 10px #fff' }} />
                                        {row.new}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
};

export default GridWorkflow;
