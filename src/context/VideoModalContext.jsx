import React, { createContext, useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const VideoModalContext = createContext();

export const useVideoModal = () => useContext(VideoModalContext);

export const VideoModalProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [videoUrl, setVideoUrl] = useState('');

    const openModal = (url) => {
        setVideoUrl(url);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setTimeout(() => setVideoUrl(''), 300); // Clear after animation
    };

    return (
        <VideoModalContext.Provider value={{ openModal, closeModal }}>
            {children}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100vw',
                            height: '100vh',
                            backgroundColor: 'rgba(0,0,0,0.9)',
                            backdropFilter: 'blur(10px)',
                            zIndex: 9999,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onClick={closeModal}
                    >
                        <button
                            onClick={closeModal}
                            style={{
                                position: 'absolute',
                                top: '30px',
                                right: '40px',
                                background: 'rgba(255,255,255,0.1)',
                                border: '1px solid rgba(255,255,255,0.2)',
                                borderRadius: '50%',
                                padding: '12px',
                                cursor: 'pointer',
                                color: '#fff',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 10000,
                                transition: 'background 0.2s',
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                        >
                            <X size={24} />
                        </button>

                        <motion.div
                            initial={{ y: '100vh', opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: '100vh', opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            style={{ width: '85%', maxWidth: '960px', aspectRatio: '16/9', background: '#000', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 0 50px rgba(0,0,0,0.5)' }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Convert standard YouTube link to embed format */}
                            <iframe
                                width="100%"
                                height="100%"
                                src={videoUrl.replace('youtu.be/', 'www.youtube.com/embed/').replace('?si=', '?autoplay=1&si=')}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </VideoModalContext.Provider>
    );
};
