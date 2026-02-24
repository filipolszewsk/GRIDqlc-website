import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutGrid, RefreshCw, Zap, List, Save, Settings2, Terminal, Plus, Minus } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Features = () => {
    const { t } = useLanguage();
    const [isWhatsNewOpen, setIsWhatsNewOpen] = useState(false);

    const features = [
        {
            title: t('features.f1_title'),
            desc: t('features.f1_desc'),
            icon: <LayoutGrid />,
            hoverColor: 'rgba(0, 242, 255, 0.15)',
            borderColor: 'rgba(0, 242, 255, 0.8)'
        },
        {
            title: t('features.f2_title'),
            desc: t('features.f2_desc'),
            icon: <RefreshCw />,
            hoverColor: 'rgba(255, 170, 0, 0.15)',
            borderColor: 'rgba(255, 170, 0, 0.8)'
        },
        {
            title: t('features.f3_title'),
            desc: t('features.f3_desc'),
            icon: <Zap />,
            hoverColor: 'rgba(0, 242, 255, 0.15)',
            borderColor: 'rgba(0, 242, 255, 0.8)'
        },
        {
            title: t('features.f4_title'),
            desc: t('features.f4_desc'),
            icon: <List />,
            hoverColor: 'rgba(255, 170, 0, 0.15)',
            borderColor: 'rgba(255, 170, 0, 0.8)'
        },
        {
            title: t('features.f5_title'),
            desc: t('features.f5_desc'),
            icon: <Save />,
            hoverColor: 'rgba(0, 242, 255, 0.15)',
            borderColor: 'rgba(0, 242, 255, 0.8)'
        },
        {
            title: t('features.f6_title'),
            desc: t('features.f6_desc'),
            icon: <Settings2 />,
            hoverColor: 'rgba(255, 170, 0, 0.15)',
            borderColor: 'rgba(255, 170, 0, 0.8)'
        }
    ];

    return (
        <section id="features" className="features-section" style={{ backgroundColor: '#000', position: 'relative' }}>
            <style>{`
                .features-section { padding: 120px 20px; }
                @media (max-width: 768px) {
                    .features-section { padding: 60px 20px; }
                    .features-header { margin-bottom: 40px !important; }
                }
            `}</style>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>

                {/* Header Section */}
                <motion.div
                    className="features-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
                >
                    <div style={{
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
                        <span style={{ fontSize: '12px', fontWeight: '500', color: '#fff', letterSpacing: '2px' }}>SYSTEM_CAPABILITIES</span>
                    </div>

                    <h2 className="web3-text-gradient" style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', fontWeight: 600, letterSpacing: '-0.02em', marginBottom: '16px' }}>
                        {t('features.title')}
                    </h2>
                    <p style={{ maxWidth: '600px', color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', lineHeight: 1.6 }}>
                        {t('features.subtitle')}
                    </p>
                </motion.div>

                {/* Bento Box Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(1, 1fr)',
                    gap: '20px',
                    // Using styled-jsx equivalent to handle the complex MD breakpoint layout inline
                }}>
                    <style>{`
                        @media (min-width: 768px) {
                            .bento-grid {
                                grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                                grid-auto-rows: 1fr;
                            }
                        }
                    `}</style>
                    <div className="bento-grid" style={{ display: 'grid', gap: '20px', width: '100%' }}>
                        {features.map((f, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                className="console-button"
                                style={{
                                    background: '#0a0a0a',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: '16px',
                                    padding: '40px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-start',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    cursor: 'pointer',
                                    transition: 'background 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease, transform 0.1s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = f.hoverColor;
                                    e.currentTarget.style.borderColor = f.borderColor;
                                    e.currentTarget.style.boxShadow = `0 0 30px ${f.hoverColor}, inset 0 0 20px ${f.hoverColor}`;
                                    e.currentTarget.style.transform = 'scale(0.98)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = '#0a0a0a';
                                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.style.transform = 'scale(1)';
                                }}
                            >
                                {/* Radial subtle hover glow could be added here via JS event listener, keeping static for now */}
                                <div style={{
                                    width: '48px',
                                    height: '48px',
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#fff',
                                    marginBottom: '24px'
                                }}>
                                    {React.cloneElement(f.icon, { size: 24 })}
                                </div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 500, color: '#fff', marginBottom: '12px', letterSpacing: '-0.01em' }}>
                                    {f.title}
                                </h3>
                                <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, fontSize: '15px' }}>
                                    {f.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* What's New Terminal Section */}
                <div style={{ marginTop: '120px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                            background: '#000',
                            border: '1px solid rgba(255, 255, 255, 0.15)',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            fontFamily: 'var(--font-mono, monospace)', // Fallback to monospace
                        }}
                    >
                        {/* Terminal Header */}
                        <div
                            onClick={() => setIsWhatsNewOpen(!isWhatsNewOpen)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: '20px 24px',
                                borderBottom: isWhatsNewOpen ? '1px solid rgba(255,255,255,0.1)' : 'none',
                                background: 'rgba(255,255,255,0.02)',
                                cursor: 'pointer',
                                transition: 'background 0.2s'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                <Terminal size={20} color="#fff" />
                                <span style={{ color: '#fff', fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase' }}>
                                    {t('features.whats_new_title')}
                                </span>
                            </div>
                            <div style={{ color: '#fff', opacity: 0.5 }}>
                                {isWhatsNewOpen ? <Minus size={18} /> : <Plus size={18} />}
                            </div>
                        </div>

                        {/* Terminal Body */}
                        <AnimatePresence>
                            {isWhatsNewOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    style={{ overflow: 'hidden' }}
                                >
                                    <div style={{ padding: '32px 24px', background: '#000' }}>
                                        <div style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '32px', fontSize: '14px' }}>
                                            <span style={{ color: '#00ff00' }}>~/gridqlc/changelog</span> $ cat latest_updates.txt
                                            <br /><br />
                                            <span dangerouslySetInnerHTML={{ __html: t('features.whats_new_desc') }} />
                                        </div>

                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', position: 'relative' }}>
                                            {/* Vertical line connecting terminal logs */}
                                            <div style={{ position: 'absolute', left: '11px', top: '10px', bottom: '10px', width: '1px', background: 'rgba(255,255,255,0.1)' }} />

                                            {t('features.changelog').map((item, index) => (
                                                <div key={index} style={{ padding: '16px 0', display: 'flex', gap: '24px', position: 'relative' }}>
                                                    {/* Node dot */}
                                                    <div style={{ width: '24px', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', paddingTop: '4px' }}>
                                                        <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#fff', zIndex: 2 }} />
                                                    </div>

                                                    <div style={{ flex: 1 }}>
                                                        <div style={{ color: '#fff', fontSize: '14px', fontWeight: 'bold', marginBottom: '8px' }}>
                                                            {item.title}
                                                        </div>
                                                        <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', lineHeight: 1.5 }}>
                                                            {item.desc}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Features;
