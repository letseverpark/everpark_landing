'use client';

import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

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
      <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-gray-500 relative inline-block">
        {text}
        <motion.div
          className="absolute left-0 top-1/2 h-[4px] bg-gradient-to-r from-[#00b58e] to-[#00b58e]/40 rounded-full -translate-y-1/2"
          style={{ width }}
        />
      </span>
    </motion.div>
  );
}

export default function ContradictionSection() {
  const sectionRef = useRef(null);
  const [cardRevealed, setCardRevealed] = useState(false);
  const [currentNumber, setCurrentNumber] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  // Phase 1: Strike through (0.15 - 0.45)
  const line1Strike = useTransform(scrollYProgress, [0.15, 0.22], [0, 100]);
  const line2Strike = useTransform(scrollYProgress, [0.22, 0.29], [0, 100]);
  const line3Strike = useTransform(scrollYProgress, [0.29, 0.36], [0, 100]);
  const line4Strike = useTransform(scrollYProgress, [0.36, 0.43], [0, 100]);
  
  const line1Opacity = useTransform(scrollYProgress, [0.20, 0.24], [1, 0.35]);
  const line2Opacity = useTransform(scrollYProgress, [0.27, 0.31], [1, 0.35]);
  const line3Opacity = useTransform(scrollYProgress, [0.34, 0.38], [1, 0.35]);
  const line4Opacity = useTransform(scrollYProgress, [0.41, 0.45], [1, 0.35]);

  // Phase 2: Card reveal (0.48 - 0.60)
  const textOpacity = useTransform(scrollYProgress, [0.48, 0.55], [1, 0]);
  const cardOpacity = useTransform(scrollYProgress, [0.48, 0.55], [0, 1]);
  const cardScale = useTransform(scrollYProgress, [0.48, 0.58], [0.9, 1]);
  const cardY = useTransform(scrollYProgress, [0.48, 0.58], [40, 0]);
  const glowOpacity = useTransform(scrollYProgress, [0.48, 0.55, 0.75], [0, 0.6, 0.3]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (v) => {
      const revealed = v > 0.52;
      setCardRevealed(revealed);
      
      // Animate number
      if (revealed && currentNumber < 40) {
        const timer = setInterval(() => {
          setCurrentNumber(prev => {
            if (prev >= 40) {
              clearInterval(timer);
              return 40;
            }
            return prev + 2;
          });
        }, 40);
        return () => clearInterval(timer);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, currentNumber]);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[300vh] bg-white"
    >
      <div className="sticky top-0 min-h-screen flex items-center justify-center px-6 py-20">
        
        {/* Subtle glow background */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ opacity: glowOpacity }}
        >
          <div
            className="w-[600px] h-[600px]"
            style={{
              background: 'radial-gradient(circle, rgba(0, 181, 142, 0.12) 0%, rgba(0, 181, 142, 0.04) 50%, transparent 70%)',
              filter: 'blur(80px)',
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
            <StrikeLine text="Hemos digitalizado los taxis." strikeProgress={line1Strike} textOpacity={line1Opacity} />
            <StrikeLine text="Hemos digitalizado la comida." strikeProgress={line2Strike} textOpacity={line2Opacity} />
            <StrikeLine text="Hemos digitalizado los pagos." strikeProgress={line3Strike} textOpacity={line3Opacity} />
            <StrikeLine text="Hasta nuestros emails los escribe la IA." strikeProgress={line4Strike} textOpacity={line4Opacity} />
          </motion.div>

          {/* Reveal card - Liquid Glass Light */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{ 
              opacity: cardOpacity, 
              scale: cardScale,
              y: cardY,
            }}
          >
            <div className="w-full max-w-4xl">
              
              {/* Liquid Glass Card */}
              <div 
                className="relative rounded-[2.5rem] p-10 md:p-14 lg:p-16 overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.7))',
                  backdropFilter: 'blur(40px)',
                  WebkitBackdropFilter: 'blur(40px)',
                  boxShadow: `
                    0 8px 32px rgba(0, 0, 0, 0.08),
                    0 0 0 1px rgba(255, 255, 255, 0.5),
                    inset 0 1px 0 rgba(255, 255, 255, 0.8),
                    inset 0 -1px 0 rgba(0, 0, 0, 0.03)
                  `,
                }}
              >
                {/* Subtle light refraction */}
                <div className="absolute inset-0 overflow-hidden rounded-[2.5rem] pointer-events-none">
                  <div 
                    className="absolute top-0 left-0 right-0 h-1/2"
                    style={{ 
                      background: 'linear-gradient(180deg, rgba(255,255,255,0.6) 0%, transparent 100%)',
                    }}
                  />
                  <motion.div
                    className="absolute inset-0"
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 5, repeat: Infinity, repeatDelay: 4, ease: 'easeInOut' }}
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
                      transform: 'skewX(-20deg)',
                    }}
                  />
                </div>
                
                {/* Text content */}
                <div className="relative text-center z-10">
                  <motion.p 
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800 leading-tight tracking-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={cardRevealed ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                  >
                    Pero seguimos dando
                    <br />
                    <span 
                      className="font-bold"
                      style={{
                        background: 'linear-gradient(135deg, #00b58e 0%, #00d4a4 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      {currentNumber} vueltas a la misma manzana
                    </span>
                    <br />
                    <span className="text-gray-500 font-normal text-[0.8em]">esperando que alguien se vaya.</span>
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
