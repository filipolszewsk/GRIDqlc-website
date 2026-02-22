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

    return (
        <section id="features" className="features">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <h2>{t('features.title')}</h2>
                    <p>{t('features.subtitle')}</p>
                </motion.div>
                <div className="features-inner">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="feature-item"
                        >
                            <div className="feature-icon">{f.icon}</div>
                            <h3>{f.title}</h3>
                            <p>{f.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="whats-new">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="new-card"
                    >
                        <div
                            className="new-header"
                            onClick={() => setIsWhatsNewOpen(!isWhatsNewOpen)}
                            style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                <Cpu className="icon text-gradient" />
                                <h3>{t('features.whats_new_title')}</h3>
                            </div>
                            <motion.div
                                animate={{ rotate: isWhatsNewOpen ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ChevronDown size={28} color="var(--text-color)" />
                            </motion.div>
                        </div>

                        <AnimatePresence>
                            {isWhatsNewOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    style={{ overflow: 'hidden' }}
                                >
                                    <div className="new-content-inner" style={{ paddingTop: '2rem' }}>
                                        <p dangerouslySetInnerHTML={{ __html: t('features.whats_new_desc') }}></p>
                                        <ul className="new-list">
                                            {t('features.changelog').map((item, index) => (
                                                <li key={index}>
                                                    <strong>{item.title}</strong> {item.desc}
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
