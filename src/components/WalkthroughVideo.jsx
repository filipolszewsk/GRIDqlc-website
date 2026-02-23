import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WalkthroughVideo = ({ isVisible, videoUrl }) => {
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
                        style={{ padding: '6rem 2rem 4rem', display: 'flex', justifyContent: 'center' }}
                    >
                        <div style={{ width: '100%', maxWidth: '1200px', aspectRatio: '16/9', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 0 50px rgba(0,242,255,0.1)' }}>
                            <iframe
                                width="100%"
                                height="100%"
                                src={videoUrl.replace('youtu.be/', 'www.youtube.com/embed/').replace('?si=', '?autoplay=1&si=')}
                                frameBorder="0"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default WalkthroughVideo;
