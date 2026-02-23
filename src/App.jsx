import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Youtube, Instagram } from 'lucide-react';
import Hero from './sections/Hero';
import Features from './sections/Features';
import GridWorkflow from './sections/GridWorkflow';
import Pricing from './sections/Pricing';
import CTA from './sections/CTA';
import NavBar from './components/NavBar';
import WalkthroughVideo from './components/WalkthroughVideo';
import { useLanguage } from './context/LanguageContext';

import logo from './assets/logo_finals/sygnet.png';

function App() {
    const { t } = useLanguage();
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const [videoUrl, setVideoUrl] = useState('');

    const handlePlayVideo = (url) => {
        setVideoUrl(url);
        setIsVideoOpen(true);
    };

    const handleCloseVideo = () => {
        setIsVideoOpen(false);
        // Optional: erase URL after animation finishes so video stops playing
        setTimeout(() => setVideoUrl(''), 800);
    };
    return (
        <div className="app">
            <div className="noise-overlay" />
            <NavBar />
            <main>
                <div style={{ position: 'relative', zIndex: 10 }}>
                    <Hero onPlayVideo={handlePlayVideo} />
                </div>

                {/* Embedded Video Reveal Section */}
                <WalkthroughVideo isVisible={isVideoOpen} videoUrl={videoUrl} onClose={handleCloseVideo} />

                <div style={{ position: 'relative', zIndex: 5, background: 'var(--bg-color)' }}>
                    <GridWorkflow />
                    <Pricing />
                    <Features />
                    <CTA onPlayVideo={handlePlayVideo} />
                </div>
            </main>
            <footer className="footer">
                <div className="container">
                    <img src={logo} alt="GRIDqlc Symbol" className="footer-logo" />
                    <div className="social-links" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginBottom: '2rem' }}>
                        <a href="https://www.instagram.com/gridqlc/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', transform: 'scale(1.2)', transition: 'transform 0.3s' }}>
                            <motion.div whileHover={{ scale: 1.2 }}>
                                <Instagram size={24} />
                            </motion.div>
                        </a>
                        <a href="https://www.youtube.com/channel/UCQGUDiNlMEcNFPFhgVqcTUA" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', transform: 'scale(1.2)', transition: 'transform 0.3s' }}>
                            <motion.div whileHover={{ scale: 1.2 }}>
                                <Youtube size={24} />
                            </motion.div>
                        </a>
                    </div>
                    <p>&copy; 2026 {t('footer.rights')}</p>
                </div>
            </footer>
        </div>
    );
}

export default App;
