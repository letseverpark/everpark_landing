'use client';

import { motion } from 'framer-motion';
import { useTranslation } from './LanguageProvider';
import type { Language } from '@/lib/translations';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useTranslation();

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className="relative flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/60 backdrop-blur-sm border border-everpark/20 text-sm font-medium text-gray-600 hover:text-everpark hover:border-everpark/40 transition-colors"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      aria-label={`Switch to ${language === 'es' ? 'English' : 'Spanish'}`}
    >
      <span className={`transition-opacity ${language === 'es' ? 'opacity-100 text-everpark font-semibold' : 'opacity-50'}`}>
        ES
      </span>
      <span className="text-gray-300">/</span>
      <span className={`transition-opacity ${language === 'en' ? 'opacity-100 text-everpark font-semibold' : 'opacity-50'}`}>
        EN
      </span>
    </motion.button>
  );
}

