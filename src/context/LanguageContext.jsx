import React, { createContext, useState, useContext } from 'react';
import { translations } from '../i18n/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    // Check local storage for saved language or default to 'pl'
    const storedLang = localStorage.getItem('gridqlc_lang') || 'pl';
    const [language, setLanguage] = useState(storedLang);

    const toggleLanguage = () => {
        const newLang = language === 'en' ? 'pl' : 'en';
        setLanguage(newLang);
        localStorage.setItem('gridqlc_lang', newLang);
    };

    const t = (key) => {
        const keys = key.split('.');
        let val = translations[language];
        for (let i = 0; i < keys.length; i++) {
            if (!val) break;
            val = val[keys[i]];
        }
        return val || key;
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    return useContext(LanguageContext);
};
