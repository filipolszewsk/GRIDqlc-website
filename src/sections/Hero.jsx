import React from 'react';
import { motion } from 'framer-motion';
import heroVisual from '../assets/5142456C-3B21-44D6-BDEA-EEA7088716F6.png';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();

    // Defines the "shake and settle" staggered keyframes
    // Timings are concentrated at the end so it sweeps, shakes, then settles quickly.
    const shakeTransition = { duration: 1.2, times: [0, 0.6, 0.75, 0.85, 1], ease: 'easeOut' };

    return (
        <section className="hero" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Soft, Seamless Mesh Cloud Gradient, 40deg sweep */}
            <motion.div
                initial={{ x: '-150%', y: '-100%', rotate: 40 }}
                animate={{ x: '150%', y: '100%', rotate: 40 }}
                transition={{ duration: 2, ease: [0.3, 0.0, 0.2, 1] }}
                style={{
                    position: 'absolute',
                    top: '-50%',
                    left: '-50%',
                    width: '300%',
                    height: '300%',
                    background: `
                        radial-gradient(ellipse at 40% 50%, rgba(255, 140, 0, 0.4) 10%, transparent 60%),
                        radial-gradient(ellipse at 60% 40%, rgba(218, 165, 32, 0.5) 10%, transparent 60%),
                        radial-gradient(ellipse at 50% 60%, rgba(0, 0, 0, 0.9) 10%, transparent 70%),
                        radial-gradient(ellipse at 30% 30%, rgba(0, 0, 0, 0.8) 10%, transparent 80%),
                        linear-gradient(135deg, transparent 20%, rgba(218, 165, 32, 0.15) 40%, rgba(255, 140, 0, 0.25) 50%, rgba(218, 165, 32, 0.15) 60%, transparent 80%)
                    `,
                    filter: 'blur(50px)', // Extreme blur ensures no distinct edges
                    zIndex: 50,
                    pointerEvents: 'none'
                }}
            />

            <div className="container hero-content" style={{ position: 'relative', zIndex: 1 }}>
                <div className="hero-text">
                    <motion.h1
                        initial={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
                        animate={{ opacity: [0, 1, 1, 1, 1], x: [-50, 15, -8, 4, 0], filter: ['blur(10px)', 'blur(0px)', 'blur(0px)', 'blur(0px)', 'blur(0px)'] }}
                        transition={{ ...shakeTransition, delay: 0.3 }}
                    >
                        {t('hero.headline_1')} <br /><span className="text-gradient">{t('hero.headline_2')}</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
                        animate={{ opacity: [0, 1, 1, 1, 1], x: [-50, 15, -8, 4, 0], filter: ['blur(10px)', 'blur(0px)', 'blur(0px)', 'blur(0px)', 'blur(0px)'] }}
                        transition={{ ...shakeTransition, delay: 0.4 }}
                    >
                        {t('hero.subtitle')}
                    </motion.p>

                    <motion.div
                        className="hero-btns"
                        initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                        animate={{ opacity: [0, 1, 1, 1, 1], y: [30, -10, 5, -2, 0], filter: ['blur(10px)', 'blur(0px)', 'blur(0px)', 'blur(0px)', 'blur(0px)'] }}
                        transition={{ ...shakeTransition, delay: 0.5 }}
                    >
                        <a href={t('hero.walkthrough_link')} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                            <button className="btn-primary">{t('hero.btn_primary')}</button>
                        </a>
                        <a href="#pricing" style={{ textDecoration: 'none' }}>
                            <button className="btn-secondary">{t('hero.btn_secondary')}</button>
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8, filter: 'blur(20px)' }}
                    animate={{ opacity: [0, 1, 1, 1, 1], scale: [0.8, 1.05, 0.98, 1.02, 1], filter: ['blur(20px)', 'blur(0px)', 'blur(0px)', 'blur(0px)', 'blur(0px)'] }}
                    transition={{ ...shakeTransition, delay: 0.6 }}
                    className="hero-image"
                >
                    <div className="image-wrapper">
                        <img src={heroVisual} alt="GRIDqlc Interface" />
                        <div className="glow-overlay"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
