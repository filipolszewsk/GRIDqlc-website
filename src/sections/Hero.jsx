import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import heroBg from '../assets/5142456C-3B21-44D6-BDEA-EEA7088716F6.png';

const Hero = () => {
    const [isMobile, setIsMobile] = useState(false);
    const { t } = useLanguage();

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section
            style={{
                position: 'relative',
                width: '100vw',
                height: '100vh',
                backgroundColor: '#000',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingTop: isMobile ? '200px' : '280px',
                paddingBottom: '102px'
            }}
        >
            {/* Background Image (temporary until video is ready) */}
            <img
                src={heroBg}
                alt="GRIDqlc Hero Background"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: 0
                }}
            />

            {/* 50% Black Overlay */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 1
                }}
            />

            {/* Content Stack */}
            <div
                style={{
                    position: 'relative',
                    zIndex: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '40px',
                    width: '100%',
                    padding: '0 20px'
                }}
            >
                {/* Badge/Pill */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '6px 14px',
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '20px',
                    }}
                >
                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#fff' }} />
                    <div style={{ fontSize: '13px', fontWeight: '500', display: 'flex', gap: '4px', letterSpacing: '0.05em' }}>
                        <span style={{ color: '#fff' }}>GRID_SYSTEM_ONLINE</span>
                    </div>
                </motion.div>

                {/* Heading & Subtitle Container */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                        className="web3-text-gradient"
                        style={{
                            maxWidth: '613px',
                            fontSize: isMobile ? '36px' : '56px',
                            fontWeight: '500',
                            lineHeight: 1.28,
                            textAlign: 'center',
                            margin: 0,
                            letterSpacing: '-0.02em'
                        }}
                    >
                        {t('hero.headline_1')} <br />
                        {t('hero.headline_2')}
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        style={{
                            maxWidth: '680px',
                            fontSize: '15px',
                            fontWeight: '400',
                            color: 'rgba(255, 255, 255, 0.7)',
                            textAlign: 'center',
                            margin: 0,
                            lineHeight: 1.6
                        }}
                    >
                        {t('hero.subtitle')}
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    style={{ display: 'flex', gap: '1rem' }}
                >
                    <a href={t('hero.walkthrough_link')} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <div className="web3-pill-layer web3-pill-layer-inverted">
                            <div className="glow-streak"></div>
                            <div className="web3-pill-inner">
                                {t('hero.btn_primary')}
                            </div>
                        </div>
                    </a>

                    <a href="#pricing" style={{ textDecoration: 'none' }}>
                        <div className="web3-pill-layer">
                            <div className="glow-streak"></div>
                            <div className="web3-pill-inner">
                                {t('hero.btn_secondary')}
                            </div>
                        </div>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
