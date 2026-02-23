import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const WalkthroughVideo = ({ isVisible, videoUrl, onClose }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (isVisible && containerRef.current) {
            // Give it a tiny delay to allow the DOM to render the opening state
            setTimeout(() => {
                const y = containerRef.current.getBoundingClientRect().top + window.scrollY - 100; // offset
                window.scrollTo({ top: y, behavior: 'smooth' });
            }, 100);
        }
    }, [isVisible]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    ref={containerRef}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                        background: '#000',
                        width: '100%',
                        position: 'relative',
                        zIndex: 1,
                        overflow: 'hidden'
                    }}
                >
                    {/* Inner content slides down slightly to reveal from under the Hero */}
                    <motion.div
                        initial={{ y: -100 }}
                        animate={{ y: 0 }}
                        exit={{ y: -100 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        style={{ padding: '6rem 2rem 4rem', display: 'flex', justifyContent: 'center', position: 'relative' }}
                    >
                        <div style={{ width: '100%', maxWidth: '1200px', position: 'relative' }}>
                            {/* Close Button above the video */}
                            <button
                                onClick={onClose}
                                style={{
                                    position: 'absolute',
                                    top: '-40px',
                                    right: '0',
                                    background: 'transparent',
                                    border: 'none',
                                    color: 'rgba(255,255,255,0.7)',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    fontWeight: '500',
                                    fontSize: '14px',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    transition: 'color 0.2s',
                                    zIndex: 10
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                            >
                                ZAMKNIJ <X size={18} />
                            </button>

                            <div style={{ width: '100%', aspectRatio: '16/9', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 0 50px rgba(0,242,255,0.1)' }}>
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={videoUrl.replace('youtu.be/', 'www.youtube.com/embed/').replace('?si=', '?autoplay=1&rel=0&modestbranding=1&controls=1&showinfo=0&iv_load_policy=3&si=')}
                                    frameBorder="0"
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default WalkthroughVideo;
