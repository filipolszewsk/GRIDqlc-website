import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo_finals/sygnet.png';
import { useLanguage } from '../context/LanguageContext';

const CTA = () => {
    const { t } = useLanguage();

    return (
        <section className="cta">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="cta-card"
                >
                    <img src={logo} alt="GRIDqlc Symbol" className="cta-logo" />
                    <h2>{t('cta.title')}</h2>
                    <p dangerouslySetInnerHTML={{ __html: t('cta.desc') }}></p>
                    <div className="cta-actions">
                        <a href="#pricing" style={{ textDecoration: 'none' }}>
                            <button className="btn-primary">{t('hero.btn_primary')}</button>
                        </a>
                        <a href={t('hero.walkthrough_link')} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                            <button className="btn-dark">{t('cta.btn_secondary')}</button>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
