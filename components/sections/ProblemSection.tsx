'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect, useCallback } from 'react';
import { useTranslation } from '../LanguageProvider';

// Each slide has a big number and a completing phrase
const slides = {
  es: [
    { number: 'Todos', phrase: 'hemos perdido más de 15 minutos buscando aparcamiento.' },
    { number: '15min', phrase: 'de media cada vez que aparcas.' },
    { number: '100h', phrase: 'al año se pierden dando vueltas por aparcar.' },
  ],
  en: [
    { number: 'Everyone', phrase: 'of us have spent 15+ minutes looking for parking.' },
    { number: '100h', phrase: 'a year circling for a spot.' },
    { number: '25min', phrase: 'on average every single time you park.' },
  ],
};

export default function ProblemSection() {
  const { language } = useTranslation();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  
  const [slideIndex, setSlideIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const currentSlide = slides[language][slideIndex];
  const currentPhrase = currentSlide.phrase;

  // Typewriter effect - runs once per slide
  useEffect(() => {
    // Reset for new slide
    setDisplayText('');
    setIsTypingComplete(false);
    setShowCursor(true);

    let charIndex = 0;
    const typeInterval = setInterval(() => {
      if (charIndex < currentPhrase.length) {
        setDisplayText(currentPhrase.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        // Typing finished - hide cursor after a moment
        setTimeout(() => {
          setShowCursor(false);
          setIsTypingComplete(true);
        }, 600);
      }
    }, 70); // Slower typing: 70ms per character

    return () => clearInterval(typeInterval);
  }, [currentPhrase]);

  // Advance to next slide - only after typing is complete
  useEffect(() => {
    if (!isTypingComplete) return;

    const advanceTimeout = setTimeout(() => {
      setSlideIndex((prev) => (prev + 1) % slides[language].length);
    }, 3500); // Wait 3.5 seconds after typing completes

    return () => clearTimeout(advanceTimeout);
  }, [isTypingComplete, language]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-problem" />

      <motion.div 
        style={{ opacity, scale }}
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
      >
        {/* The big number */}
        <div className="mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={`number-${slideIndex}`}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -60 }}
              transition={{ 
                duration: 1.2, 
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <span className={`font-bold hero-number leading-none tracking-tight ${
                currentSlide.number.length > 4 
                  ? 'text-[5rem] sm:text-[7rem] md:text-[10rem] lg:text-[260px]' 
                  : 'text-[8rem] sm:text-[12rem] md:text-[16rem] lg:text-[22rem]'
              }`}>
                {currentSlide.number}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Typewriter phrase */}
        <div className="h-[100px] sm:h-[120px] md:h-[140px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.h1
              key={`phrase-${slideIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-gray-900 tracking-tight"
            >
              {displayText}
              {showCursor && <span className="typewriter-cursor" />}
            </motion.h1>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 scroll-indicator"
      >
        <div className="flex flex-col items-center gap-3 text-gray-400">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
