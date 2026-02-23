import React from 'react';
import { motion } from 'framer-motion';
import heroVisual from '../assets/5142456C-3B21-44D6-BDEA-EEA7088716F6.png';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section className="hero" style={{ position: 'relative', overflow: 'hidden', paddingTop: '10rem', paddingBottom: '6rem' }}>

            <div className="container" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="aura-badge"
                    style={{ marginBottom: '2rem' }}
                >
                    <div className="dot"></div> GRID_SYSTEM_ONLINE
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                    style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', fontWeight: 600, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1.5rem', color: '#FFF' }}
                >
                    {t('hero.headline_1')} <br /><span style={{ background: 'linear-gradient(90deg, #FAFAFA, #888)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{t('hero.headline_2')}</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 3rem auto', lineHeight: 1.6 }}
                >
                    {t('hero.subtitle')}
                </motion.p>

                <motion.div
                    className="hero-actions"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginBottom: '5rem', flexWrap: 'wrap' }}
                >
                    <a href={t('hero.walkthrough_link')} target="_blank" rel="noopener noreferrer" className="aura-btn-base filled-orange">
                        <div className="btn-inner">
                            {t('hero.btn_primary')} <ArrowRight size={18} />
                        </div>
                    </a>

                    <a href="#pricing" className="aura-btn-base">
                        <div className="btn-bg-rotate"></div>
                        <div className="btn-inner">
                            {t('hero.btn_secondary')}
                        </div>
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                    className="hero-image-wrapper"
                    style={{
                        width: '100%',
                        maxWidth: '1100px',
                        margin: '0 auto',
                        background: 'rgba(255,255,255,0.02)',
                        backdropFilter: 'blur(20px)',
                        padding: '1rem',
                        borderRadius: 'calc(var(--card-radius) + 1rem)',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.8), 0 0 100px rgba(0, 242, 255, 0.1)',
                        position: 'relative'
                    }}
                >
                    <div style={{ borderRadius: 'var(--card-radius)', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', position: 'relative' }}>
                        <img src={heroVisual} alt="GRIDqlc Interface" style={{ width: '100%', height: 'auto', display: 'block' }} />
                        <div className="glow-overlay" style={{ position: 'absolute', inset: 0, boxShadow: 'inset 0 0 100px rgba(0, 0, 0, 0.8)', pointerEvents: 'none' }}></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
