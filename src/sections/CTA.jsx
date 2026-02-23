import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const CTA = ({ onPlayVideo }) => {
    const { t } = useLanguage();

    return (
        <section
            id="cta"
            style={{
                position: 'relative',
                minHeight: '80vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#000',
                padding: '0 20px',
                overflow: 'hidden'
            }}
        >
            {/* Subtle radial glow from bottom */}
            <div style={{
                position: 'absolute',
                bottom: '-20%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100vw',
                maxWidth: '600px',
                height: '400px',
                background: 'radial-gradient(ellipse, rgba(255,255,255,0.03) 0%, transparent 70%)',
                pointerEvents: 'none',
                zIndex: 0
            }} />

            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '800px', width: '100%' }}>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="web3-text-gradient"
                    style={{
                        fontSize: 'clamp(3rem, 5vw, 5rem)',
                        fontWeight: '600',
                        letterSpacing: '-0.02em',
                        lineHeight: 1.1,
                        marginBottom: '24px'
                    }}
                >
                    {t('cta.title')}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    style={{
                        fontSize: '1.2rem',
                        color: 'rgba(255,255,255,0.6)',
                        lineHeight: 1.6,
                        marginBottom: '48px',
                        maxWidth: '600px'
                    }}
                    dangerouslySetInnerHTML={{ __html: t('cta.desc') }}
                />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}
                >
                    <a href="#pricing" style={{ textDecoration: 'none' }}>
                        <div className="web3-pill-layer web3-pill-layer-inverted" style={{ padding: '4px' }}>
                            <div className="glow-streak"></div>
                            <div className="web3-pill-inner" style={{ fontSize: '1.1rem', padding: '12px 32px' }}>
                                {t('cta.btn_primary')}
                            </div>
                        </div>
                    </a>

                    <div onClick={() => onPlayVideo(t('hero.walkthrough_link'))} style={{ textDecoration: 'none', cursor: 'pointer' }}>
                        <div className="web3-pill-layer" style={{ padding: '4px' }}>
                            <div className="glow-streak"></div>
                            <div className="web3-pill-inner" style={{ fontSize: '1.1rem', padding: '12px 32px' }}>
                                {t('cta.btn_secondary')}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
