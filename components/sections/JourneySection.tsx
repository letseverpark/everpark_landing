'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';

interface MomentProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

function Moment({ children, className = '', delay = 0 }: MomentProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-35%' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Interactive letter component for the coming soon text
function ComingSoonLetter({ 
  letter, 
  index,
  totalLetters,
  isInView,
}: { 
  letter: string;
  index: number;
  totalLetters: number;
  isInView: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);
  
  if (letter === ' ') {
    return <span className="inline-block w-[0.25em]">&nbsp;</span>;
  }

  // Staggered delay based on letter index
  const delay = 0.3 + (index * 0.06);

  return (
    <motion.span
      className="inline-block cursor-default select-none origin-bottom"
      initial={{ opacity: 0, y: 60, rotateX: -90 }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        rotateX: 0,
        scale: isHovered ? 1.15 : 1,
      } : {}}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.16, 1, 0.3, 1],
        scale: { duration: 0.2 }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        textShadow: isHovered 
          ? '0 0 40px rgba(0, 181, 142, 0.8), 0 0 80px rgba(0, 181, 142, 0.4)'
          : '0 0 30px rgba(0, 181, 142, 0.5)',
      }}
    >
      {letter}
    </motion.span>
  );
}

// Minimal, elegant coming soon banner
function ComingSoonBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-30%' });
  const text = "y próximamente...";
  const letters = text.split('');

  return (
    <div 
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden bg-white"
    >
      {/* Subtle glow background */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00b58e] rounded-full opacity-10 blur-[180px]" />
      </motion.div>
      
      {/* The text */}
      <p className="relative text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold text-[#00b58e] leading-none tracking-tight">
        {letters.map((letter, i) => (
          <ComingSoonLetter
            key={i}
            letter={letter}
            index={i}
            totalLetters={letters.length}
            isInView={isInView}
          />
        ))}
      </p>
    </div>
  );
}

function ExchangesDiagram() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20%' });

  return (
    <motion.div
      ref={ref}
      className="w-full flex-1 relative mt-8 md:mt-12"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.3, delay: 0.4 }}
    >
      <motion.div 
        className="w-full max-w-7xl mx-auto"
        initial={{ 
          opacity: 0, 
          scale: 0.92,
          y: 40,
          filter: 'blur(8px)'
        }}
        animate={isInView ? { 
          opacity: 1, 
          scale: 1,
          y: 0,
          filter: 'blur(0px)'
        } : {}}
        transition={{ 
          duration: 1.2, 
          delay: 0.5,
          ease: [0.16, 1, 0.3, 1],
          // Stagger the properties for a more organic feel
          opacity: { duration: 0.8, delay: 0.5 },
          scale: { duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] },
          filter: { duration: 1, delay: 0.6 },
          y: { duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }
        }}
      >
        <img 
          src="/exchanges-diagram.svg" 
          alt="Diagrama de Exchanges - Intercambio de plazas de parking"
          className="w-full h-auto"
        />
      </motion.div>
    </motion.div>
  );
}

export default function JourneySection() {
  return (
    <section className="bg-white">
      {/* Transición: 4 formas */}
      <div className="min-h-[70vh] flex items-center justify-center px-6 pt-32 md:pt-40">
        <div className="text-center">
          <Moment>
            <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
              <span className="text-[#00b58e]">4</span> formas de aparcar.
            </p>
          </Moment>
          <Moment delay={0.3}>
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-300">
              <span className="text-[#00b58e]">1</span> sola app.
            </p>
          </Moment>
        </div>
      </div>

      {/* Opción 1: Exchanges */}
      <div className="min-h-screen flex flex-col items-center justify-start pt-32 md:pt-40 px-6 relative overflow-hidden">
        <div className="text-center relative z-10">
          <Moment>
            <p className="text-sm font-medium text-gray-400 tracking-widest uppercase mb-6">
              01
            </p>
          </Moment>
          <Moment delay={0.1}>
            <p className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-gray-900 mb-8">
              Exchanges
            </p>
          </Moment>
          <Moment delay={0.3}>
            <p className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-500 max-w-2xl mx-auto">
              Alguien se va.
              <br />
              <span className="text-gray-900">Tú entras.</span>
            </p>
          </Moment>
        </div>
        
        {/* Exchanges diagram - elegant reveal animation */}
        <ExchangesDiagram />
        
        {/* Bottom fade gradient - smooth transition to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-40 md:h-56 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-20" />
      </div>

      {/* Coming Soon Banner - Features coming next */}
      <ComingSoonBanner />

      {/* Opción 2: Garages */}
      <div className="min-h-screen flex items-center justify-center px-6 bg-white">
        <div className="text-center">
          <Moment>
            <p className="text-sm font-medium text-gray-400 tracking-widest uppercase mb-6">
              02
            </p>
          </Moment>
          <Moment delay={0.1}>
            <p className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-gray-900 mb-8">
              Garages
            </p>
          </Moment>
          <Moment delay={0.3}>
            <p className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-500 max-w-2xl mx-auto">
              Plazas privadas por horas.
              <br />
              <span className="text-gray-900">Hasta 60% más barato.</span>
            </p>
          </Moment>
        </div>
      </div>

      {/* Opción 3: Finder */}
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <Moment>
            <p className="text-sm font-medium text-gray-400 tracking-widest uppercase mb-6">
              03
            </p>
          </Moment>
          <Moment delay={0.1}>
            <p className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-gray-900 mb-8">
              Finder
            </p>
          </Moment>
          <Moment delay={0.3}>
            <p className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-500 max-w-2xl mx-auto">
              Todos los parkings.
              <br />
              <span className="text-gray-900">Compara y elige.</span>
            </p>
          </Moment>
        </div>
      </div>

      {/* El 360º cierra */}
      <div className="min-h-[60vh] flex items-center justify-center px-6 bg-white">
        <Moment>
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-gray-500 text-center">
            Y si no sabes cuál elegir...
          </p>
        </Moment>
      </div>

      {/* Opción 4: EverPark 360º */}
      <div className="min-h-screen flex items-center justify-center px-6 bg-white">
        <div className="text-center">
          <Moment>
            <p className="text-sm font-medium text-gray-400 tracking-widest uppercase mb-6">
              04
            </p>
          </Moment>
          <Moment delay={0.1}>
            <div className="flex items-center justify-center gap-6 mb-8">
              <Image
                src="/logo.svg"
                alt="EverPark"
                width={800}
                height={260}
                className="h-[100px] sm:h-[140px] md:h-[180px] lg:h-[220px] w-auto"
              />
              <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-gray-900">
                360º
              </span>
            </div>
          </Moment>
          <Moment delay={0.3}>
            <p className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-500 max-w-2xl mx-auto">
              El primer asistente
              <br />
              <span className="text-gray-900">específico para aparcar.</span>
            </p>
          </Moment>
        </div>
      </div>
    </section>
  );
}
