import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Youtube, Instagram } from 'lucide-react';
import logo from '../assets/logo_finals/poziom.png';
import { useLanguage } from '../context/LanguageContext';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { language, toggleLanguage, t } = useLanguage();

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 }
    };

    return (
        <nav className="navbar">
            <div className="container nav-content">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="logo-container"
                >
                    <img src={logo} alt="GRIDqlc Logo" className="nav-logo" />
                </motion.div>

                {/* Desktop Menu */}
                <div className="nav-links desktop-only">
                    <a href="#features">{t('nav.features')}</a>
                    <a href="#workflow">{t('nav.workflow')}</a>
                    <a href="#pricing">{t('nav.pricing')}</a>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginLeft: '1rem' }}>
                        <a href="https://www.instagram.com/gridqlc/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-color)', transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-color)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-color)'}>
                            <Instagram size={20} />
                        </a>
                        <a href="https://www.youtube.com/channel/UCQGUDiNlMEcNFPFhgVqcTUA" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-color)', transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-color)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-color)'}>
                            <Youtube size={20} />
                        </a>
                    </div>
                    <button className="lang-switcher" onClick={toggleLanguage} style={{ background: 'transparent', color: 'var(--text-color)', border: '1px solid var(--accent-color)', borderRadius: '4px', padding: '0.4rem 0.8rem', cursor: 'pointer', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', fontSize: '0.8rem', marginLeft: '1rem' }}>
                        {language === 'en' ? 'PL' : 'EN'}
                    </button>
                    <a href="#pricing" style={{ textDecoration: 'none' }}>
                        <button className="btn-primary">{t('nav.download')}</button>
                    </a>
                </div>

                {/* Hamburger Toggle */}
                <button className={`nav-hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="mobile-menu"
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <div className="mobile-links">
                            <a href="#features" onClick={toggleMenu}>{t('nav.features')}</a>
                            <a href="#workflow" onClick={toggleMenu}>{t('nav.workflow')}</a>
                            <a href="#pricing" onClick={toggleMenu}>{t('nav.pricing')}</a>
                            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', margin: '1rem 0', justifyContent: 'center' }}>
                                <a href="https://www.instagram.com/gridqlc/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-color)' }}>
                                    <Instagram size={24} />
                                </a>
                                <a href="https://www.youtube.com/channel/UCQGUDiNlMEcNFPFhgVqcTUA" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-color)' }}>
                                    <Youtube size={24} />
                                </a>
                            </div>
                            <button className="lang-switcher" onClick={toggleLanguage} style={{ background: 'transparent', color: 'var(--text-color)', border: '1px solid var(--accent-color)', borderRadius: '4px', padding: '0.6rem 1.2rem', cursor: 'pointer', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', fontSize: '1.2rem', marginBottom: '1rem' }}>
                                {language === 'en' ? 'Zmień na PL' : 'Switch to EN'}
                            </button>
                            <a href="#pricing" style={{ textDecoration: 'none' }} onClick={toggleMenu}>
                                <button className="btn-primary">{t('nav.download')}</button>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default NavBar;
