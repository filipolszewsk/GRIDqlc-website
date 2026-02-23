import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, Youtube, Instagram } from 'lucide-react';
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
        <nav className="web3-nav">
            {/* Left: Logo + Nav Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '60px' }}>
                <a href="#" style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                    <img src={logo} alt="GRIDqlc Logo" style={{ height: '40px', width: 'auto', filter: 'invert(1)', transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} />
                </a>

                {/* Desktop Nav Links */}
                <div className="nav-links desktop-only" style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
                    <a href="#features" style={{ color: '#fff', fontSize: '14px', fontWeight: '500', textDecoration: 'none', transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                        {t('nav.features')}
                    </a>
                    <a href="#workflow" style={{ color: '#fff', fontSize: '14px', fontWeight: '500', textDecoration: 'none', transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                        {t('nav.workflow')}
                    </a>
                    <a href="#pricing" style={{ color: '#fff', fontSize: '14px', fontWeight: '500', textDecoration: 'none', transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                        {t('nav.pricing')}
                    </a>

                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginLeft: '1rem' }}>
                        <a href="https://www.instagram.com/gridqlc/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', transition: 'opacity 0.3s' }} onMouseEnter={e => e.currentTarget.style.opacity = '0.7'} onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
                            <Instagram size={18} />
                        </a>
                        <a href="https://www.youtube.com/channel/UCQGUDiNlMEcNFPFhgVqcTUA" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', transition: 'opacity 0.3s' }} onMouseEnter={e => e.currentTarget.style.opacity = '0.7'} onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
                            <Youtube size={18} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Right: Join / Language Button */}
            <div className="nav-right desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <button onClick={toggleLanguage} style={{ background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '4px', padding: '0.4rem 0.8rem', cursor: 'pointer', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', fontSize: '12px' }}>
                    {language === 'en' ? 'PL' : 'EN'}
                </button>
                <a href="#pricing" style={{ textDecoration: 'none' }}>
                    <div className="web3-pill-layer">
                        <div className="glow-streak"></div>
                        <div className="web3-pill-inner">
                            {t('nav.download')}
                        </div>
                    </div>
                </a>
            </div>

            {/* Mobile Hamburger toggle */}
            <button className="nav-hamburger" style={{ display: 'none', background: 'none', border: 'none', color: '#fff' }} onClick={toggleMenu}>
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Mobile CSS override for hamburger to show up correctly */}
            <style>{`
                @media (max-width: 1024px) {
                    .desktop-only { display: none !important; }
                    .nav-hamburger { display: block !important; cursor: pointer; }
                }
            `}</style>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="mobile-menu"
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        style={{
                            position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
                            background: '#000', zIndex: 90, display: 'flex', flexDirection: 'column',
                            alignItems: 'center', justifyContent: 'center', padding: '20px'
                        }}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center' }}>
                            <a href="#features" onClick={toggleMenu} style={{ color: '#fff', fontSize: '24px', fontWeight: '500', textDecoration: 'none' }}>{t('nav.features')}</a>
                            <a href="#workflow" onClick={toggleMenu} style={{ color: '#fff', fontSize: '24px', fontWeight: '500', textDecoration: 'none' }}>{t('nav.workflow')}</a>
                            <a href="#pricing" onClick={toggleMenu} style={{ color: '#fff', fontSize: '24px', fontWeight: '500', textDecoration: 'none' }}>{t('nav.pricing')}</a>

                            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', margin: '1rem 0', justifyContent: 'center' }}>
                                <a href="https://www.instagram.com/gridqlc/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
                                    <Instagram size={28} />
                                </a>
                                <a href="https://www.youtube.com/channel/UCQGUDiNlMEcNFPFhgVqcTUA" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
                                    <Youtube size={28} />
                                </a>
                            </div>

                            <button onClick={() => { toggleLanguage(); toggleMenu(); }} style={{ background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '4px', padding: '0.6rem 1.2rem', cursor: 'pointer', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', fontSize: '18px', marginBottom: '1rem' }}>
                                {language === 'en' ? 'Zmień na PL' : 'Switch to EN'}
                            </button>

                            <a href="#pricing" onClick={toggleMenu} style={{ textDecoration: 'none', marginTop: '10px' }}>
                                <div className="web3-pill-layer" style={{ transform: 'scale(1.2)' }}>
                                    <div className="glow-streak"></div>
                                    <div className="web3-pill-inner">
                                        {t('nav.download')}
                                    </div>
                                </div>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default NavBar;

