import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutGrid, RefreshCw, Zap, List, Save, Cpu, Settings2, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Features = () => {
    const { t } = useLanguage();
    const [isWhatsNewOpen, setIsWhatsNewOpen] = useState(false);

    const features = [
        {
            title: t('features.f1_title'),
            desc: t('features.f1_desc'),
            icon: <LayoutGrid />
        },
        {
            title: t('features.f2_title'),
            desc: t('features.f2_desc'),
            icon: <RefreshCw />
        },
        {
            title: t('features.f3_title'),
            desc: t('features.f3_desc'),
            icon: <Zap />
        },
        {
            title: t('features.f4_title'),
            desc: t('features.f4_desc'),
            icon: <List />
        },
        {
            title: t('features.f5_title'),
            desc: t('features.f5_desc'),
            icon: <Save />
        },
        {
            title: t('features.f6_title'),
            desc: t('features.f6_desc'),
            icon: <Settings2 />
        }
    ];

    const featureCardStyle = {
        background: 'rgba(10, 10, 10, 0.7)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        borderTop: '1px solid rgba(0, 242, 255, 0.3)',
        boxShadow: 'inset 0 20px 40px -20px rgba(0, 242, 255, 0.05)',
        borderRadius: 'var(--card-radius)',
        padding: '2.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        transition: 'all 0.3s ease'
    };

    return (
        <section id="features" className="features" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header"
                    style={{ marginBottom: '5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                    <div className="aura-badge" style={{ marginBottom: '1.5rem' }}>
                        <div className="dot"></div> ADVANCED_CAPABILITIES
                    </div>
                    <h2 style={{ fontSize: '3rem', fontWeight: 600, letterSpacing: '-0.02em', marginBottom: '1rem' }}>{t('features.title')}</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>{t('features.subtitle')}</p>
                </motion.div>

                <div className="features-inner" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                            whileHover={{ y: -5, boxShadow: '0 20px 40px -10px rgba(0, 242, 255, 0.1), inset 0 20px 40px -20px rgba(0, 242, 255, 0.05)', borderTop: '1px solid rgba(0, 242, 255, 0.8)' }}
                            style={featureCardStyle}
                        >
                            <div className="feature-icon" style={{
                                width: '50px',
                                height: '50px',
                                background: 'rgba(0, 242, 255, 0.1)',
                                border: '1px solid rgba(0, 242, 255, 0.2)',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--accent-cyan)'
                            }}>
                                {f.icon}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 500, margin: 0 }}>{f.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="whats-new" style={{ marginTop: '6rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                            background: 'rgba(10, 10, 10, 0.8)',
                            backdropFilter: 'blur(24px)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderTop: '1px solid rgba(255, 170, 0, 0.5)',
                            boxShadow: 'inset 0 20px 40px -20px rgba(255, 170, 0, 0.1), 0 25px 50px -12px rgba(0,0,0,0.5)',
                            borderRadius: 'calc(var(--card-radius) + 8px)',
                            padding: '3rem',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Background subtle glow */}
                        <div style={{ position: 'absolute', top: 0, right: 0, width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(255,170,0,0.1) 0%, transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }}></div>

                        <div
                            className="new-header"
                            onClick={() => setIsWhatsNewOpen(!isWhatsNewOpen)}
                            style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 2 }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                <div style={{
                                    width: '48px',
                                    height: '48px',
                                    background: 'rgba(255, 170, 0, 0.1)',
                                    border: '1px solid rgba(255, 170, 0, 0.2)',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--accent-orange)'
                                }}>
                                    <Cpu size={24} />
                                </div>
                                <h3 style={{ fontSize: '2rem', margin: 0, fontWeight: 600, color: '#FFF' }}>{t('features.whats_new_title')}</h3>
                            </div>
                            <motion.div
                                animate={{ rotate: isWhatsNewOpen ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)' }}
                            >
                                <ChevronDown size={20} color="var(--text-color)" />
                            </motion.div>
                        </div>

                        <AnimatePresence>
                            {isWhatsNewOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    style={{ overflow: 'hidden', position: 'relative', zIndex: 2 }}
                                >
                                    <div className="new-content-inner" style={{ paddingTop: '2.5rem' }}>
                                        <p dangerouslySetInnerHTML={{ __html: t('features.whats_new_desc') }} style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.6 }} />
                                        <ul className="new-list" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '1rem' }}>
                                            {t('features.changelog').map((item, index) => (
                                                <li key={index} style={{ background: 'rgba(0, 0, 0, 0.4)', padding: '1.5rem', borderRadius: '12px', borderLeft: '3px solid var(--accent-orange)', color: 'var(--text-secondary)', borderTop: '1px solid rgba(255,255,255,0.03)', borderRight: '1px solid rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                                                    <strong style={{ color: '#FFF', display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem' }}>{item.title}</strong> {item.desc}
                                                </li>
                                            ))}
                                        </ul>
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
