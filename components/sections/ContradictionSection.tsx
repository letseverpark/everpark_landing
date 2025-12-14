'use client';

import { motion, useScroll, useTransform, MotionValue, useSpring } from 'framer-motion';
import { useRef, useState, useCallback } from 'react';

interface StrikeLineProps {
  text: string;
  strikeProgress: MotionValue<number>;
  textOpacity: MotionValue<number>;
}

function StrikeLine({ text, strikeProgress, textOpacity }: StrikeLineProps) {
  const width = useTransform(strikeProgress, (v) => `${v}%`);
  
  return (
    <motion.div 
      className="text-center relative"
      style={{ opacity: textOpacity }}
    >
      <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-gray-500 relative inline-block whitespace-nowrap">
        {text}
        <motion.div
          className="absolute left-0 top-1/2 h-[4px] bg-gradient-to-r from-[#00b58e] to-[#00b58e]/40 rounded-full -translate-y-1/2"
          style={{ width }}
        />
      </span>
    </motion.div>
  );
}

// Interactive letter with magnetic hover effect
function InteractiveLetter({ 
  letter, 
  index,
  onHover,
  hoveredIndex,
  isGreen = false,
  letterOpacity,
  letterY,
}: { 
  letter: string;
  index: number;
  onHover: (index: number | null) => void;
  hoveredIndex: number | null;
  isGreen?: boolean;
  letterOpacity: MotionValue<number>;
  letterY: MotionValue<number>;
}) {
  // Calculate scale based on distance from hovered letter
  const getScale = () => {
    if (hoveredIndex === null) return 1;
    const distance = Math.abs(index - hoveredIndex);
    if (distance === 0) return 1.3;
    if (distance === 1) return 1.15;
    if (distance === 2) return 1.06;
    return 1;
  };

  const getHoverY = () => {
    if (hoveredIndex === null) return 0;
    const distance = Math.abs(index - hoveredIndex);
    if (distance === 0) return -10;
    if (distance === 1) return -5;
    if (distance === 2) return -2;
    return 0;
  };

  const scale = useSpring(getScale(), { stiffness: 500, damping: 28 });
  const hoverY = useSpring(getHoverY(), { stiffness: 500, damping: 28 });

  const combinedY = useTransform(
    [letterY, hoverY] as MotionValue<number>[], 
    ([scrollY, hY]) => (scrollY as number) + (hY as number)
  );

  if (letter === ' ') {
    return <span className="inline-block w-[0.3em]">&nbsp;</span>;
  }

  return (
    <motion.span
      className="inline-block cursor-default select-none"
      style={{ 
        scale,
        y: combinedY,
        opacity: letterOpacity,
        transformOrigin: 'center center',
        paddingBottom: '0.1em',
        ...(isGreen && {
          background: 'linear-gradient(135deg, #00b58e 0%, #00d4a4 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }),
      }}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
    >
      {letter}
    </motion.span>
  );
}

// Single letter component that handles its own hooks
function ScrollLetter({
  letter,
  index,
  scrollProgress,
  letterStart,
  letterEnd,
  onHover,
  hoveredIndex,
  isGreen,
}: {
  letter: string;
  index: number;
  scrollProgress: MotionValue<number>;
  letterStart: number;
  letterEnd: number;
  onHover: (index: number | null) => void;
  hoveredIndex: number | null;
  isGreen: boolean;
}) {
  const opacity = useTransform(scrollProgress, [letterStart, letterEnd], [0, 1]);
  const y = useTransform(scrollProgress, [letterStart, letterEnd], [25, 0]);
  
  const smoothOpacity = useSpring(opacity, { stiffness: 150, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 150, damping: 20 });

  return (
    <InteractiveLetter
      letter={letter}
      index={index}
      onHover={onHover}
      hoveredIndex={hoveredIndex}
      isGreen={isGreen}
      letterOpacity={smoothOpacity}
      letterY={smoothY}
    />
  );
}

// Letter-by-letter scroll-controlled text (appears once and stays)
function ScrollLetterText({ 
  text, 
  isGreen = false,
  className = '',
  scrollProgress,
  startProgress,
  endProgress,
}: { 
  text: string;
  isGreen?: boolean;
  className?: string;
  scrollProgress: MotionValue<number>;
  startProgress: number;
  endProgress: number;
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const handleHover = useCallback((index: number | null) => {
    setHoveredIndex(index);
  }, []);

  const letters = text.split('');
  const nonSpaceLetters = letters.filter(l => l !== ' ');
  const totalLetters = nonSpaceLetters.length;
  const progressPerLetter = (endProgress - startProgress) / totalLetters;

  // Pre-calculate letter indices and timing
  const letterData: Array<{ letter: string; letterIndex: number; letterStart: number; letterEnd: number }> = [];
  let letterIdx = 0;
  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    if (letter === ' ') {
      letterData.push({ letter, letterIndex: -1, letterStart: 0, letterEnd: 0 });
    } else {
      const letterStart = startProgress + (letterIdx * progressPerLetter);
      const letterEnd = letterStart + progressPerLetter * 3;
      letterData.push({ letter, letterIndex: letterIdx, letterStart, letterEnd });
      letterIdx++;
    }
  }

  return (
    <div className={`${className}`}>
      {letterData.map((data, i) => {
        if (data.letter === ' ') {
          return <span key={i} className="inline-block w-[0.3em]">&nbsp;</span>;
        }
        
        return (
          <ScrollLetter
            key={i}
            letter={data.letter}
            index={data.letterIndex}
            scrollProgress={scrollProgress}
            letterStart={data.letterStart}
            letterEnd={data.letterEnd}
            onHover={handleHover}
            hoveredIndex={hoveredIndex}
            isGreen={isGreen}
          />
        );
      })}
    </div>
  );
}

// Single letter component for VueltasText
function VueltasLetter({
  letter,
  index,
  scrollProgress,
  letterStart,
  letterEnd,
  onHover,
  hoveredIndex,
}: {
  letter: string;
  index: number;
  scrollProgress: MotionValue<number>;
  letterStart: number;
  letterEnd: number;
  onHover: (index: number | null) => void;
  hoveredIndex: number | null;
}) {
  // Individual letter appearance
  const letterOpacity = useTransform(scrollProgress, [letterStart, letterEnd], [0, 1]);
  const letterY = useTransform(scrollProgress, [letterStart, letterEnd], [25, 0]);
  
  const smoothLetterOpacity = useSpring(letterOpacity, { stiffness: 150, damping: 20 });
  const smoothLetterY = useSpring(letterY, { stiffness: 150, damping: 20 });

  // Hover effects
  const getScale = () => {
    if (hoveredIndex === null) return 1;
    const distance = Math.abs(index - hoveredIndex);
    if (distance === 0) return 1.3;
    if (distance === 1) return 1.15;
    if (distance === 2) return 1.06;
    return 1;
  };

  const getHoverY = () => {
    if (hoveredIndex === null) return 0;
    const distance = Math.abs(index - hoveredIndex);
    if (distance === 0) return -10;
    if (distance === 1) return -5;
    if (distance === 2) return -2;
    return 0;
  };

  const hoverScale = useSpring(getScale(), { stiffness: 500, damping: 28 });
  const hoverY = useSpring(getHoverY(), { stiffness: 500, damping: 28 });

  const combinedY = useTransform(
    [smoothLetterY, hoverY] as MotionValue<number>[], 
    ([scrollY, hY]) => (scrollY as number) + (hY as number)
  );

  return (
    <motion.span
      className="inline-block cursor-default select-none"
      style={{ 
        scale: hoverScale,
        y: combinedY,
        opacity: smoothLetterOpacity,
        background: 'linear-gradient(135deg, #00b58e 0%, #00d4a4 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        transformOrigin: 'center center',
        paddingBottom: '0.1em',
      }}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
    >
      {letter}
    </motion.span>
  );
}

// "Vueltas" text that appears letter by letter, then disappears/reappears as a whole
function VueltasText({ 
  scrollProgress,
  startProgress,
  endProgress,
  className = '',
}: { 
  scrollProgress: MotionValue<number>;
  startProgress: number;
  endProgress: number;
  className?: string;
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const handleHover = useCallback((index: number | null) => {
    setHoveredIndex(index);
  }, []);

  const text = "vueltas, y vueltas, y vueltas...";
  const letters = text.split('');
  const nonSpaceLetters = letters.filter(l => l !== ' ');
  const totalLetters = nonSpaceLetters.length;
  const progressPerLetter = (endProgress - startProgress) / totalLetters;

  // After all letters appear (endProgress), the whole text does:
  // Stay visible -> Disappear -> Reappear -> Disappear -> Reappear (2 cycles)
  // endProgress = 0.58, then:
  // 0.58-0.62: visible
  // 0.62-0.66: fade out (1st disappear)
  // 0.66-0.70: invisible
  // 0.70-0.74: fade in (1st reappear)
  // 0.74-0.78: visible
  // 0.78-0.82: fade out (2nd disappear)
  // 0.82-0.86: invisible
  // 0.86-0.90: fade in (2nd reappear)
  // 0.90+: stay visible
  
  const wholeTextOpacity = useTransform(
    scrollProgress,
    [0, endProgress, 0.62, 0.66, 0.70, 0.74, 0.78, 0.82, 0.86, 0.90, 1],
    [1, 1,           1,    0,    0,    1,    1,    0,    0,    1,    1]
  );
  
  const wholeTextScale = useTransform(
    scrollProgress,
    [0, endProgress, 0.62, 0.66, 0.70, 0.74, 0.78, 0.82, 0.86, 0.90, 1],
    [1, 1,           1,    0.8,  0.8,  1,    1,    0.8,  0.8,  1,    1]
  );
  
  const wholeTextY = useTransform(
    scrollProgress,
    [0, endProgress, 0.62, 0.66, 0.70, 0.74, 0.78, 0.82, 0.86, 0.90, 1],
    [0, 0,           0,    -25,  25,   0,    0,    -25,  25,   0,    0]
  );

  const smoothWholeOpacity = useSpring(wholeTextOpacity, { stiffness: 80, damping: 20 });
  const smoothWholeScale = useSpring(wholeTextScale, { stiffness: 80, damping: 20 });
  const smoothWholeY = useSpring(wholeTextY, { stiffness: 80, damping: 20 });

  // Pre-calculate letter data
  const letterData: Array<{ letter: string; letterIndex: number; letterStart: number; letterEnd: number }> = [];
  let letterIdx = 0;
  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    if (letter === ' ') {
      letterData.push({ letter, letterIndex: -1, letterStart: 0, letterEnd: 0 });
    } else {
      const letterStart = startProgress + (letterIdx * progressPerLetter);
      const letterEnd = letterStart + progressPerLetter * 3;
      letterData.push({ letter, letterIndex: letterIdx, letterStart, letterEnd });
      letterIdx++;
    }
  }

  return (
    <motion.div 
      className={`${className}`}
      style={{
        opacity: smoothWholeOpacity,
        scale: smoothWholeScale,
        y: smoothWholeY,
      }}
    >
      {letterData.map((data, i) => {
        if (data.letter === ' ') {
          return <span key={i} className="inline-block w-[0.3em]">&nbsp;</span>;
        }

        return (
          <VueltasLetter
            key={i}
            letter={data.letter}
            index={data.letterIndex}
            scrollProgress={scrollProgress}
            letterStart={data.letterStart}
            letterEnd={data.letterEnd}
            onHover={handleHover}
            hoveredIndex={hoveredIndex}
          />
        );
      })}
    </motion.div>
  );
}

export default function ContradictionSection() {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  // Phase 1: Strike through (0.08 - 0.32)
  const line1Strike = useTransform(scrollYProgress, [0.08, 0.14], [0, 100]);
  const line2Strike = useTransform(scrollYProgress, [0.14, 0.20], [0, 100]);
  const line3Strike = useTransform(scrollYProgress, [0.20, 0.26], [0, 100]);
  const line4Strike = useTransform(scrollYProgress, [0.26, 0.32], [0, 100]);
  
  const line1Opacity = useTransform(scrollYProgress, [0.12, 0.16], [1, 0.35]);
  const line2Opacity = useTransform(scrollYProgress, [0.18, 0.22], [1, 0.35]);
  const line3Opacity = useTransform(scrollYProgress, [0.24, 0.28], [1, 0.35]);
  const line4Opacity = useTransform(scrollYProgress, [0.30, 0.34], [1, 0.35]);

  // Phase 2: Card reveal
  const textOpacity = useTransform(scrollYProgress, [0.36, 0.42], [1, 0]);
  const cardOpacity = useTransform(scrollYProgress, [0.40, 0.46], [0, 1]);
  const cardScale = useTransform(scrollYProgress, [0.40, 0.48], [0.96, 1]);
  const cardY = useTransform(scrollYProgress, [0.40, 0.46], [20, 0]);
  const glowOpacity = useTransform(scrollYProgress, [0.44, 0.50, 0.90], [0, 0.5, 0.25]);

  // Smooth springs for card
  const smoothCardScale = useSpring(cardScale, { stiffness: 100, damping: 25 });
  const smoothCardY = useSpring(cardY, { stiffness: 100, damping: 25 });
  const smoothCardOpacity = useSpring(cardOpacity, { stiffness: 100, damping: 25 });

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[500vh] bg-white"
    >
      <div className="sticky top-0 min-h-screen flex items-center justify-center px-6 py-20">
        
        {/* Glow background */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ opacity: glowOpacity }}
        >
          <div
            className="w-[600px] h-[400px]"
            style={{
              background: 'radial-gradient(ellipse, rgba(0, 181, 142, 0.12) 0%, rgba(0, 181, 142, 0.04) 50%, transparent 70%)',
              filter: 'blur(50px)',
            }}
          />
        </motion.div>
        
        {/* Content container */}
        <div className="relative w-full max-w-5xl mx-auto">
          
          {/* Strikethrough text - fades out */}
          <motion.div 
            className="space-y-4 md:space-y-6"
            style={{ opacity: textOpacity }}
          >
            <StrikeLine text="Se ha digitalizado el pedir un taxi." strikeProgress={line1Strike} textOpacity={line1Opacity} />
            <StrikeLine text="Se ha digitalizado el pedir comida" strikeProgress={line2Strike} textOpacity={line2Opacity} />
            <StrikeLine text="Se ha digitalizado el hacer un pago." strikeProgress={line3Strike} textOpacity={line3Opacity} />
            <StrikeLine text="Hasta nuestros emails los escribe una IA." strikeProgress={line4Strike} textOpacity={line4Opacity} />
          </motion.div>

          {/* Reveal card */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{ 
              opacity: smoothCardOpacity, 
              scale: smoothCardScale,
              y: smoothCardY,
            }}
          >
            <div className="w-full max-w-4xl relative">
              
              {/* Glass Card */}
              <div 
                className="relative rounded-[2.5rem] p-10 md:p-14 lg:p-16"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0.92))',
                  backdropFilter: 'blur(40px)',
                  WebkitBackdropFilter: 'blur(40px)',
                  border: '1px solid rgba(0, 0, 0, 0.06)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06)',
                }}
              >
                {/* Text content */}
                <div className="relative text-center z-10">
                  
                  {/* Line 1: "Pero seguimos dando" - appears letter by letter */}
                  <ScrollLetterText
                    text="Pero seguimos dando"
                    scrollProgress={scrollYProgress}
                    startProgress={0.44}
                    endProgress={0.50}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800 leading-tight tracking-tight"
                  />
                  
                  {/* Line 2: "vueltas, y vueltas, y vueltas..." - appears letter by letter, then disappears/reappears 2x */}
                  <VueltasText
                    scrollProgress={scrollYProgress}
                    startProgress={0.50}
                    endProgress={0.58}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-normal tracking-tight mt-2"
                  />
                  
                  {/* Line 3: "esperando a que alguien se vaya." - appears letter by letter */}
                  <ScrollLetterText
                    text="esperando a que alguien se vaya."
                    scrollProgress={scrollYProgress}
                    startProgress={0.58}
                    endProgress={0.62}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800 leading-tight tracking-tight mt-4"
                  />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
