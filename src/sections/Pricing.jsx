import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Pricing = () => {
    const { t } = useLanguage();

    const freeFeatures = t('pricing.free_features') || [];
    const proFeatures = t('pricing.pro_features') || [];
    const ultraFeatures = t('pricing.ultra_features') || [];

    return (
        <section id="pricing" className="pricing-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <h2>{t('pricing.title')}</h2>
                    <p>{t('pricing.subtitle')}</p>
                </motion.div>

                <div className="pricing-grid">
                    {/* Free Package */}
                    <motion.div
                        className="pricing-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className="card-header">
                            <h3>{t('pricing.free_name')}</h3>
                            <div className="price">
                                <span className="currency">{t('pricing.free_currency')}</span>
                                <span className="amount">{t('pricing.free_price')}</span>
                            </div>
                            <p className="desc">{t('pricing.free_desc')}</p>
                        </div>
                        <ul className="feature-list">
                            {freeFeatures.map((feature, idx) => (
                                <li key={idx}>
                                    <Check className="check-icon" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <button className="btn btn-outline">{t('pricing.btn_text')}</button>
                    </motion.div>

                    {/* Pro Package */}
                    <motion.div
                        className="pricing-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="card-header">
                            <h3>{t('pricing.pro_name')}</h3>
                            <div className="price">
                                <span className="currency">{t('pricing.pro_currency')}</span>
                                <span className="amount">{t('pricing.pro_price')}</span>
                            </div>
                            <p className="desc">{t('pricing.pro_desc')}</p>
                        </div>
                        <ul className="feature-list">
                            {proFeatures.map((feature, idx) => (
                                <li key={idx}>
                                    <Check className="check-icon" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <button className="btn btn-outline">{t('pricing.btn_text')}</button>
                    </motion.div>

                    {/* Ultra Package */}
                    <motion.div
                        className="pricing-card ultra-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <div className="popular-badge">{t('pricing.popular_badge')}</div>
                        <div className="card-header">
                            <h3 className="text-gradient">{t('pricing.ultra_name')}</h3>
                            <div className="price">
                                <span className="currency">{t('pricing.ultra_currency')}</span>
                                <span className="amount text-gradient">{t('pricing.ultra_price')}</span>
                            </div>
                            <p className="desc">{t('pricing.ultra_desc')}</p>
                        </div>
                        <ul className="feature-list">
                            {ultraFeatures.map((feature, idx) => (
                                <li key={idx}>
                                    <Check className="check-icon" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <button className="btn btn-primary">{t('pricing.btn_text')}</button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
