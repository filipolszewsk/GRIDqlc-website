import React from 'react';
import { motion } from 'framer-motion';
import { Grid, Layers, Zap, MousePointer2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import stageLighting from '../assets/stage_lights_elegant.png';
import consoleAbstract from '../assets/stage_lights_intimate.png';
import concertCrowd from '../assets/stage_lights_festival.png';

const GridWorkflow = () => {
    const { t } = useLanguage();

    return (
        <section id="workflow" className="grid-workflow">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <h2>{t('workflow.title')}</h2>
                    <p>{t('workflow.subtitle')}</p>
                </motion.div>

                <div className="workflow-grid">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        whileHover={{ y: -10 }}
                        className="feature-card"
                    >
                        <div className="card-image-wrapper">
                            <img src={stageLighting} alt="Stage Lighting Rig" />
                        </div>
                        <Grid className="icon" />
                        <h3>{t('workflow.card1_title')}</h3>
                        <p>{t('workflow.card1_desc')}</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        whileHover={{ y: -10 }}
                        className="feature-card highlight-card"
                    >
                        <div className="card-image-wrapper">
                            <img src={consoleAbstract} alt="Lighting Console Abstract" />
                        </div>
                        <Zap className="icon text-gradient" />
                        <h3 className="text-gradient">{t('workflow.card2_title')}</h3>
                        <p>{t('workflow.card2_desc')}</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        whileHover={{ y: -10 }}
                        className="feature-card"
                    >
                        <div className="card-image-wrapper">
                            <img src={concertCrowd} alt="Concert Crowd Lights" />
                        </div>
                        <Layers className="icon" />
                        <h3>{t('workflow.card3_title')}</h3>
                        <p>{t('workflow.card3_desc')}</p>
                    </motion.div>
                </div>

                <div className="comparison-section">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="comparison-header"
                    >
                        <h3>{t('workflow.comparison_title')}</h3>
                        <p>{t('workflow.comparison_subtitle')}</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="comparison-table-wrapper"
                    >
                        <table className="comparison-table">
                            <thead>
                                <tr>
                                    {t('workflow.comparison_headers').map((header, index) => (
                                        <th key={index}>{header}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {t('workflow.comparison_rows').map((row, index) => (
                                    <tr key={index}>
                                        <td className="table-feature">{row.feature}</td>
                                        <td className="table-old">{row.old}</td>
                                        <td className="table-new">
                                            <span className="success-icon">✓</span>
                                            {row.new}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default GridWorkflow;
