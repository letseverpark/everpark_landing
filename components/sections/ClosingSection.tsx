'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useEffect, useState, useMemo } from 'react';

// Premium scramble effect - smoother and more elegant
function ScrambleText({ 
  text, 
  isVisible, 
  delay = 0,
  className = '',
  duration = 1.5, // total duration in seconds
}: { 
  text: string; 
  isVisible: boolean; 
  delay?: number;
  className?: string;
  duration?: number;
}) {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  
  // Use only lowercase letters for a cleaner look
  const chars = 'abcdefghijklmnopqrstuvwxyz';
  
  useEffect(() => {
    if (!isVisible) {
      setDisplayText('');
      setIsComplete(false);
      return;
    }
    
    const timeout = setTimeout(() => {
      const totalFrames = Math.floor(duration * 60); // 60fps
      const textLength = text.length;
      let frame = 0;
      
      const interval = setInterval(() => {
        const progress = frame / totalFrames;
        // Easing function for smoother reveal
        const easedProgress = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        const revealedChars = Math.floor(easedProgress * textLength);
        
        setDisplayText(
          text
            .split('')
            .map((char, index) => {
              if (char === ' ') return ' ';
              if (index < revealedChars) return text[index];
              // Gradually reduce scramble intensity as we approach reveal
              const scrambleIntensity = 1 - (revealedChars / textLength);
              if (Math.random() > scrambleIntensity * 0.7) return text[index];
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('')
        );
        
        frame++;
        
        if (frame >= totalFrames) {
          clearInterval(interval);
          setDisplayText(text);
          setIsComplete(true);
        }
      }, 1000 / 60); // 60fps for smoothness
      
      return () => clearInterval(interval);
    }, delay * 1000);
    
    return () => clearTimeout(timeout);
  }, [isVisible, text, delay, duration]);
  
  return (
    <motion.span 
      className={className}
      animate={{ opacity: isComplete ? 1 : 0.95 }}
    >
      {displayText}
    </motion.span>
  );
}

// Elegant typewriter with smooth cursor
function TypewriterText({
  text,
  isVisible,
  delay = 0,
  className = '',
  duration = 1.8,
}: {
  text: string;
  isVisible: boolean;
  delay?: number;
  className?: string;
  duration?: number;
}) {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  
  useEffect(() => {
    if (!isVisible) {
      setDisplayText('');
      setShowCursor(true);
      return;
    }
    
    const timeout = setTimeout(() => {
      const totalChars = text.length;
      const intervalTime = (duration * 1000) / totalChars;
      let index = 0;
      
      const interval = setInterval(() => {
        setDisplayText(text.slice(0, index + 1));
        index++;
        
        if (index >= totalChars) {
          clearInterval(interval);
          // Hide cursor after a moment
          setTimeout(() => setShowCursor(false), 500);
        }
      }, intervalTime);
      
      return () => clearInterval(interval);
    }, delay * 1000);
    
    return () => clearTimeout(timeout);
  }, [isVisible, text, delay, duration]);
  
  return (
    <span className={className}>
      {displayText}
      <motion.span 
        className="inline-block w-[2px] h-[0.85em] bg-white/70 ml-0.5 align-middle"
        animate={{ opacity: showCursor && displayText.length > 0 && displayText.length < text.length ? [1, 0] : 0 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
      />
    </span>
  );
}

// Animated strikethrough line component
function AnimatedStrike({
  isActive,
  delay = 0,
  className = '',
}: {
  isActive: boolean;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={`absolute left-0 right-0 h-[2.5px] bg-gradient-to-r from-white/50 via-white/80 to-white/50 rounded-full ${className}`}
      initial={{ scaleX: 0, opacity: 0 }}
      animate={isActive ? { 
        scaleX: 1, 
        opacity: 1,
      } : { scaleX: 0, opacity: 0 }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.22, 1, 0.36, 1] // Custom ease for elegance
      }}
      style={{ 
        originX: 0,
        top: '50%',
        transform: 'translateY(-50%)',
      }}
    />
  );
}

export default function ClosingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });
  
  const [phase, setPhase] = useState(0);
  // 0: nothing
  // 1: Line 1 typing
  // 2: Line 2 scramble reveal  
  // 3: Line 3 typing
  // 4: Strike line 1
  // 5: Strike line 3
  // 6: Final reveal

  useEffect(() => {
    if (!isInView) return;
    
    // Phase 1: Start typing line 1
    setPhase(1);
    
    // Phase 2: Line 2 scramble (after line 1 types ~2s)
    const t1 = setTimeout(() => setPhase(2), 2200);
    
    // Phase 3: Line 3 starts (after scramble ~3.8s)
    const t2 = setTimeout(() => setPhase(3), 4000);
    
    // Phase 4: Strike line 1 first (~6.5s)
    const t3 = setTimeout(() => setPhase(4), 6500);
    
    // Phase 5: Strike line 3 (~7.3s) - slightly after line 1
    const t4 = setTimeout(() => setPhase(5), 7500);
    
    // Phase 6: Final revelation (~8.8s)
    const t5 = setTimeout(() => setPhase(6), 9000);
    
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [isInView]);

  return (
    <section 
      ref={ref} 
      id="descargar" 
      className="relative bg-white py-24 sm:py-28 md:py-36 lg:py-44 px-4 sm:px-6 min-h-screen flex items-center justify-center"
    >
      {/* Main card */}
      <div className="w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[36px] sm:rounded-[44px] md:rounded-[52px] overflow-hidden"
          style={{
            boxShadow: phase >= 6 
              ? '0 60px 120px -30px rgba(0, 181, 142, 0.45), 0 30px 60px -20px rgba(0, 181, 142, 0.3)'
              : '0 40px 80px -25px rgba(0, 181, 142, 0.35), 0 20px 40px -15px rgba(0, 181, 142, 0.25)'
          }}
        >
          {/* Background gradient */}
          <motion.div 
            className="absolute inset-0"
            animate={{
              background: phase >= 6 
                ? 'linear-gradient(155deg, #00dba8 0%, #00c896 35%, #00a67a 100%)'
                : 'linear-gradient(155deg, #00c896 0%, #00b58e 45%, #009973 100%)'
            }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          />
          
          {/* Ambient light */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div 
              animate={{ 
                opacity: phase >= 6 ? 0.35 : 0.25,
                scale: phase >= 6 ? 1.15 : 1 
              }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="absolute -top-1/3 -right-1/4 w-[65%] h-[65%] rounded-full bg-white/25 blur-[100px]" 
            />
            <motion.div 
              animate={{ opacity: phase >= 6 ? 0.15 : 0.08 }}
              transition={{ duration: 1.5 }}
              className="absolute -bottom-1/4 -left-1/4 w-[45%] h-[45%] rounded-full bg-black/15 blur-[70px]" 
            />
          </div>

          {/* Subtle glow pulse on finale */}
          <AnimatePresence>
            {phase >= 6 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-transparent"
              />
            )}
          </AnimatePresence>

          {/* Content */}
          <div className="relative px-8 sm:px-12 md:px-16 lg:px-20 py-16 sm:py-20 md:py-28 lg:py-36 text-center">
            <div className="space-y-8 md:space-y-10 lg:space-y-12 max-w-3xl mx-auto">
              
              {/* === LINE 1 === */}
              <div className="relative inline-block w-full">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={phase >= 1 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <motion.p 
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[2.6rem] font-bold leading-[1.3] tracking-tight inline"
                    animate={{ 
                      color: phase >= 4 ? 'rgba(255,255,255,0.35)' : 'rgba(255,255,255,1)',
                    }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                  >
                    <TypewriterText 
                      text="El futuro de la movilidad no es elegir cómo aparcar"
                      isVisible={phase >= 1}
                      delay={0.2}
                      duration={1.6}
                    />
                  </motion.p>
                </motion.div>
                
                {/* Strikethrough - activates at phase 4 */}
                <AnimatedStrike isActive={phase >= 4} delay={0} />
              </div>

              {/* === LINE 2 - KEY INSIGHT with SCRAMBLE === */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={phase >= 2 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[2.6rem] font-bold text-white leading-[1.3] tracking-tight">
                  <ScrambleText 
                    text="es nunca necesitar pensar en ello"
                    isVisible={phase >= 2}
                    delay={0.15}
                    duration={1.4}
                  />
                </p>
              </motion.div>

              {/* === LINE 3 === */}
              <div className="relative inline-block w-full">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={phase >= 3 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <motion.p 
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[2.6rem] font-bold leading-[1.3] tracking-tight inline"
                    animate={{ 
                      color: phase >= 5 ? 'rgba(255,255,255,0.35)' : 'rgba(255,255,255,0.7)',
                    }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                  >
                    <TypewriterText 
                      text="porque el futuro de la movilidad no es elegir cómo aparcar"
                      isVisible={phase >= 3}
                      delay={0.15}
                      duration={1.8}
                    />
                  </motion.p>
                </motion.div>
                
                {/* Strikethrough - activates at phase 5 (after line 1) */}
                <AnimatedStrike isActive={phase >= 5} delay={0} />
              </div>

              {/* === LINE 4 - FINALE === */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={phase >= 6 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="pt-4 sm:pt-6 md:pt-8"
              >
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[2.6rem] font-bold text-white leading-[1.3] tracking-tight">
                  <ScrambleText 
                    text="el futuro de la movilidad es"
                    isVisible={phase >= 6}
                    delay={0}
                    duration={1.2}
                  />
                  {phase >= 6 && (
                    <>
                      {' '}
                      <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
                        className="relative inline-block"
                      >
                        <motion.span
                          animate={{ 
                            textShadow: [
                              '0 0 25px rgba(255,255,255,0.4), 0 0 50px rgba(255,255,255,0.2)',
                              '0 0 40px rgba(255,255,255,0.7), 0 0 80px rgba(255,255,255,0.4)',
                              '0 0 25px rgba(255,255,255,0.4), 0 0 50px rgba(255,255,255,0.2)',
                            ]
                          }}
                          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                          className="font-black"
                        >
                          EverPark
                        </motion.span>
                        
                        {/* Underline */}
                        <motion.div
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 0.6, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute -bottom-1.5 sm:-bottom-2 left-0 right-0 h-[2px] sm:h-[3px] bg-white rounded-full origin-left"
                        />
                      </motion.span>
                    </>
                  )}
                </p>
              </motion.div>
              
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
