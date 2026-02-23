import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Pricing = () => {
    const { t } = useLanguage();

    const freeFeatures = t('pricing.free_features') || [];
    const proFeatures = t('pricing.pro_features') || [];
    const ultraFeatures = t('pricing.ultra_features') || [];

    const baseCardStyle = {
        background: '#0D0D0D',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        borderRadius: '24px',
        padding: '3rem',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        transition: 'all 0.4s ease'
    };

    return (
        <section id="pricing" className="pricing-section" style={{ paddingTop: '8rem', paddingBottom: '8rem', position: 'relative' }}>
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header"
                    style={{ marginBottom: '6rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                    <div className="aura-badge" style={{ marginBottom: '1.5rem' }}>
                        <div className="dot"></div> SELECT_UPLINK_TIER
                    </div>
                    <h2 style={{ fontSize: '3.5rem', fontWeight: 600, letterSpacing: '-0.02em', marginBottom: '1rem', color: '#FFF' }}>{t('pricing.title')}</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>{t('pricing.subtitle')}</p>
                </motion.div>

                <div className="pricing-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'stretch' }}>

                    {/* Free Package */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0,0,0,0.8), inset 0 0 0 1px rgba(255,255,255,0.1)' }}
                        style={baseCardStyle}
                    >
                        <div style={{ display: 'inline-block', padding: '0.25rem 0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '2rem', alignSelf: 'flex-start' }}>
                            BASIC / FORK
                        </div>
                        <div className="card-header" style={{ marginBottom: '2.5rem', paddingBottom: '2.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 500, color: '#FFF', marginBottom: '0.5rem' }}>{t('pricing.free_name')}</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '1.5rem', height: '48px' }}>{t('pricing.free_desc')}</p>

                            <div className="price" style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                                <span style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{t('pricing.free_currency')}</span>
                                <span style={{ fontSize: '3.5rem', fontWeight: 700, letterSpacing: '-0.02em', color: '#FFF', fontFamily: 'var(--font-mono)' }}>{t('pricing.free_price')}</span>
                                <span style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 500, marginLeft: '0.25rem', textTransform: 'uppercase' }}>/ CYCLE</span>
                            </div>
                        </div>

                        <ul className="feature-list" style={{ listStyle: 'none', padding: 0, margin: '0 0 3rem 0', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {freeFeatures.map((feature, idx) => (
                                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', lineHeight: 1.5 }}>
                                    <Check style={{ color: 'var(--text-secondary)', marginRight: '1rem', width: 20, height: 20, flexShrink: 0, marginTop: '2px' }} />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <a href={t('pricing.free_url')} style={{ textDecoration: 'none', display: 'block', width: '100%', marginTop: 'auto' }}>
                            <button style={{ width: '100%', padding: '1.25rem', background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', color: '#FFF', borderRadius: '12px', fontSize: '1.1rem', fontWeight: 600, cursor: 'pointer', transition: 'all 0.3s' }} onMouseOver={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }} onMouseOut={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}>
                                {t('pricing.btn_text')}
                            </button>
                        </a>
                    </motion.div>

                    {/* Pro Package */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0,242,255,0.15), inset 0 0 0 1px rgba(0,242,255,0.5)' }}
                        style={{ ...baseCardStyle, border: '1px solid rgba(0, 242, 255, 0.2)', background: 'linear-gradient(180deg, rgba(0, 242, 255, 0.05) 0%, rgba(10, 10, 10, 0.9) 100%)' }}
                    >
                        <div style={{ display: 'inline-block', padding: '0.25rem 0.75rem', background: 'rgba(0,242,255,0.1)', border: '1px solid rgba(0,242,255,0.2)', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent-cyan)', marginBottom: '2rem', alignSelf: 'flex-start' }}>
                            CYAN / STANDARD
                        </div>
                        <div className="card-header" style={{ marginBottom: '2.5rem', paddingBottom: '2.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 500, color: '#FFF', marginBottom: '0.5rem' }}>{t('pricing.pro_name')}</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '1.5rem', height: '48px' }}>{t('pricing.pro_desc')}</p>

                            <div className="price" style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                                <span style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{t('pricing.pro_currency')}</span>
                                <span style={{ fontSize: '3.5rem', fontWeight: 700, letterSpacing: '-0.02em', color: '#FFF', fontFamily: 'var(--font-mono)' }}>{t('pricing.pro_price')}</span>
                                <span style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 500, marginLeft: '0.25rem', textTransform: 'uppercase' }}>/ CYCLE</span>
                            </div>
                        </div>

                        <ul className="feature-list" style={{ listStyle: 'none', padding: 0, margin: '0 0 3rem 0', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {proFeatures.map((feature, idx) => (
                                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', lineHeight: 1.5 }}>
                                    <Check style={{ color: 'var(--accent-cyan)', marginRight: '1rem', width: 20, height: 20, flexShrink: 0, marginTop: '2px' }} />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <a href={t('pricing.pro_url')} className="lemonsqueezy-button" style={{ textDecoration: 'none', display: 'block', width: '100%', marginTop: 'auto' }}>
                            <button style={{ width: '100%', padding: '1.25rem', background: 'transparent', border: '1px solid var(--accent-cyan)', color: 'var(--accent-cyan)', borderRadius: '12px', fontSize: '1.1rem', fontWeight: 600, cursor: 'pointer', transition: 'all 0.3s' }} onMouseOver={e => { e.currentTarget.style.background = 'rgba(0,242,255,0.1)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(0,242,255,0.2)'; }} onMouseOut={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.boxShadow = 'none'; }}>
                                {t('pricing.btn_text')}
                            </button>
                        </a>
                    </motion.div>

                    {/* Ultra Package */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        whileHover={{ y: -5, boxShadow: '0 30px 60px -15px rgba(255,170,0,0.3), inset 0 0 0 1px rgba(255,170,0,0.8)' }}
                        style={{ ...baseCardStyle, border: '1px solid rgba(255, 170, 0, 0.4)', background: 'linear-gradient(180deg, rgba(255, 170, 0, 0.08) 0%, rgba(10, 10, 10, 0.95) 100%)', boxShadow: '0 20px 40px -10px rgba(255,170,0,0.15)' }}
                    >
                        <div style={{ position: 'absolute', top: -12, right: 30, background: 'var(--accent-orange)', color: '#000', padding: '0.4rem 1rem', borderRadius: '99px', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', boxShadow: '0 4px 15px rgba(255,170,0,0.4)' }}>
                            {t('pricing.popular_badge')}
                        </div>

                        <div style={{ display: 'inline-block', padding: '0.25rem 0.75rem', background: 'rgba(255,170,0,0.1)', border: '1px solid rgba(255,170,0,0.2)', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent-orange)', marginBottom: '2rem', alignSelf: 'flex-start' }}>
                            ORANGE / ELEVATED
                        </div>
                        <div className="card-header" style={{ marginBottom: '2.5rem', paddingBottom: '2.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--accent-orange)', marginBottom: '0.5rem' }}>{t('pricing.ultra_name')}</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '1.5rem', height: '48px' }}>{t('pricing.ultra_desc')}</p>

                            <div className="price" style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                                <span style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{t('pricing.ultra_currency')}</span>
                                <span style={{ fontSize: '3.5rem', fontWeight: 700, letterSpacing: '-0.02em', color: '#FFF', fontFamily: 'var(--font-mono)', textShadow: '0 0 20px rgba(255,170,0,0.3)' }}>{t('pricing.ultra_price')}</span>
                                <span style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 500, marginLeft: '0.25rem', textTransform: 'uppercase' }}>/ CYCLE</span>
                            </div>
                        </div>

                        <ul className="feature-list" style={{ listStyle: 'none', padding: 0, margin: '0 0 3rem 0', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {ultraFeatures.map((feature, idx) => (
                                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', color: '#FFF', fontSize: '1.05rem', lineHeight: 1.5, fontWeight: 500 }}>
                                    <Check style={{ color: 'var(--accent-orange)', marginRight: '1rem', width: 20, height: 20, flexShrink: 0, marginTop: '2px' }} />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <a href={t('pricing.ultra_url')} className="lemonsqueezy-button" style={{ textDecoration: 'none', display: 'block', width: '100%', marginTop: 'auto' }}>
                            <button style={{ width: '100%', padding: '1.25rem', background: 'var(--accent-orange)', border: 'none', color: '#000', borderRadius: '12px', fontSize: '1.1rem', fontWeight: 700, cursor: 'pointer', transition: 'all 0.3s', boxShadow: '0 10px 20px -5px rgba(255,170,0,0.4)' }} onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 15px 30px -5px rgba(255,170,0,0.6)'; }} onMouseOut={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 10px 20px -5px rgba(255,170,0,0.4)'; }}>
                                {t('pricing.btn_text')}
                            </button>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
