import React from 'react';
import { motion } from 'framer-motion';
import { Grid, Layers, Zap, MousePointer2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import stageLighting from '../assets/stage_lights_elegant.png';
import consoleAbstract from '../assets/stage_lights_intimate.png';
import concertCrowd from '../assets/stage_lights_festival.png';

const GridWorkflow = () => {
    const { t } = useLanguage();

    const cardBaseStyle = {
        background: 'rgba(10, 10, 10, 0.7)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        borderRadius: 'var(--card-radius)',
        padding: '3rem',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease'
    };

    return (
        <section id="workflow" className="grid-workflow" style={{ position: 'relative' }}>
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header"
                    style={{ marginBottom: '6rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                    <div className="aura-badge" style={{ marginBottom: '1.5rem' }}>
                        <div className="dot"></div> WORKFLOW_ARCHITECTURE
                    </div>
                    <h2 style={{ fontSize: '3rem', fontWeight: 600, letterSpacing: '-0.02em', marginBottom: '1rem' }}>{t('workflow.title')}</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>{t('workflow.subtitle')}</p>
                </motion.div>

                <div className="workflow-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        whileHover={{ y: -5, boxShadow: '0 20px 40px -10px rgba(0, 242, 255, 0.1)', borderTop: '1px solid rgba(0, 242, 255, 0.8)' }}
                        style={{ ...cardBaseStyle, borderTop: '1px solid rgba(0, 242, 255, 0.3)', boxShadow: 'inset 0 20px 40px -20px rgba(0, 242, 255, 0.05)' }}
                    >
                        <div className="card-image-wrapper" style={{ width: '100%', height: '200px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <img src={stageLighting} alt="Stage Lighting Rig" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
                        </div>
                        <Grid style={{ color: 'var(--accent-cyan)', marginBottom: '1.5rem', width: 32, height: 32 }} />
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 500 }}>{t('workflow.card1_title')}</h3>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{t('workflow.card1_desc')}</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        whileHover={{ y: -5, boxShadow: '0 20px 40px -10px rgba(255, 170, 0, 0.15)', borderTop: '1px solid rgba(255, 170, 0, 1)' }}
                        style={{ ...cardBaseStyle, borderTop: '1px solid rgba(255, 170, 0, 0.5)', background: 'linear-gradient(180deg, rgba(255, 170, 0, 0.08) 0%, rgba(10, 10, 10, 0.8) 100%)', boxShadow: 'inset 0 20px 40px -20px rgba(255, 170, 0, 0.1)' }}
                    >
                        <div className="card-image-wrapper" style={{ width: '100%', height: '200px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <img src={consoleAbstract} alt="Lighting Console Abstract" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
                        </div>
                        <Zap style={{ color: 'var(--accent-orange)', marginBottom: '1.5rem', width: 32, height: 32 }} />
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 500, color: 'var(--accent-orange)' }}>{t('workflow.card2_title')}</h3>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{t('workflow.card2_desc')}</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        whileHover={{ y: -5, boxShadow: '0 20px 40px -10px rgba(0, 242, 255, 0.1)', borderTop: '1px solid rgba(0, 242, 255, 0.8)' }}
                        style={{ ...cardBaseStyle, borderTop: '1px solid rgba(0, 242, 255, 0.3)', boxShadow: 'inset 0 20px 40px -20px rgba(0, 242, 255, 0.05)' }}
                    >
                        <div className="card-image-wrapper" style={{ width: '100%', height: '200px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <img src={concertCrowd} alt="Concert Crowd Lights" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
                        </div>
                        <Layers style={{ color: 'var(--accent-cyan)', marginBottom: '1.5rem', width: 32, height: 32 }} />
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 500 }}>{t('workflow.card3_title')}</h3>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{t('workflow.card3_desc')}</p>
                    </motion.div>
                </div>

                <div className="comparison-section" style={{ marginTop: '8rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="comparison-header"
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '4rem' }}
                    >
                        <div className="aura-badge" style={{ marginBottom: '1.5rem' }}>
                            <div className="dot"></div> EFFICIENCY_METRICS
                        </div>
                        <h3 style={{ fontSize: '2.5rem', fontWeight: 600, marginBottom: '1rem' }}>{t('workflow.comparison_title')}</h3>
                        <p style={{ color: 'var(--text-secondary)' }}>{t('workflow.comparison_subtitle')}</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="comparison-table-wrapper"
                        style={{
                            background: 'rgba(10,10,10,0.8)',
                            backdropFilter: 'blur(16px)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: 'var(--card-radius)',
                            overflow: 'hidden',
                            padding: '1px',
                            boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5)'
                        }}
                    >
                        <div style={{ background: '#050505', borderRadius: 'calc(var(--card-radius) - 1px)', padding: '2rem', overflowX: 'auto' }}>
                            <table className="comparison-table" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                                <thead>
                                    <tr>
                                        {t('workflow.comparison_headers').map((header, index) => (
                                            <th key={index} style={{ padding: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-secondary)', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.05em' }}>{header}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {t('workflow.comparison_rows').map((row, index) => (
                                        <tr key={index}>
                                            <td style={{ padding: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#FFF', fontWeight: 500 }}>{row.feature}</td>
                                            <td style={{ padding: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)', color: 'var(--text-secondary)' }}>{row.old}</td>
                                            <td style={{ padding: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)', color: 'var(--accent-cyan)', background: 'rgba(0,242,255,0.02)', fontWeight: 600 }}>
                                                <span style={{ marginRight: '0.5rem' }}>✓</span>
                                                {row.new}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default GridWorkflow;
