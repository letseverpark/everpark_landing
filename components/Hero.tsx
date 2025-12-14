'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from './LanguageProvider';

const phrases = {
  es: [
    'Todos hemos perdido más de 15 minutos buscando aparcamiento.',
    '15 minutos de media cada vez que aparcas.',
    '100 horas al año se pierden dando vueltas por aparcar.',
  ],
  en: [
    'Everyone have spent 15+ minutes looking for parking.',
    '100 hours a year circling for a spot.',
    '25 minutes on average every single time you park.',
  ],
};

export default function Hero() {
  const { language } = useTranslation();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % phrases[language].length);
    }, 3400);
    return () => clearInterval(id);
  }, [language]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid" />
      
      {/* Gradient blobs */}
      <div className="gradient-blob w-[600px] h-[600px] bg-[#00b58e] top-0 right-0 translate-x-1/2 -translate-y-1/2" />
      <div className="gradient-blob w-[400px] h-[400px] bg-[#00b58e] bottom-0 left-0 -translate-x-1/2 translate-y-1/2 opacity-20" />

      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-sm text-gray-600 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#00b58e] animate-pulse" />
            {language === 'es' ? 'Disponible en Valencia' : 'Available in Valencia'}
          </span>
        </motion.div>

        {/* The big number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4"
        >
          <span className="text-[8rem] sm:text-[10rem] md:text-[14rem] lg:text-[18rem] font-bold hero-number leading-none tracking-tight">
            100h
          </span>
        </motion.div>

        {/* Rotating claim */}
        <div className="relative h-[110px] sm:h-[120px] md:h-[140px] lg:h-[150px] mb-2">
          <AnimatePresence mode="wait">
            <motion.h1
              key={`${language}-${phraseIndex}`}
              initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(6px)' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight max-w-4xl mx-auto leading-tight px-4"
            >
              {phrases[language][phraseIndex]}
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* Sub-statement */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-800 font-semibold max-w-xl mx-auto mb-12"
        >
          {language === 'es'
            ? 'Buscando dónde aparcar.'
            : 'Looking for a place to park.'}
        </motion.p>

        {/* CTAs - Liquid Glass */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#descargar"
            className="btn-glass-primary px-8 py-4 rounded-full text-lg flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {language === 'es' ? 'Recupera tu tiempo' : 'Get your time back'}
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
          <motion.a
            href="#productos"
            className="btn-glass px-8 py-4 rounded-full text-lg flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {language === 'es' ? 'Descubre cómo' : 'Discover how'}
          </motion.a>
        </motion.div>

      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <div className="scroll-indicator flex flex-col items-center gap-2 text-gray-400">
          <span className="text-xs tracking-wider uppercase">Scroll</span>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
