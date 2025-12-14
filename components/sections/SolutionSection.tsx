'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import IPhoneMockup from '../3d/IPhoneMockup';
import Image from 'next/image';

export default function SolutionSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-20%' });

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden py-20"
    >
      {/* Background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-solution"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1.5 }}
      />
      
      {/* Radial glow */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00b58e] rounded-full opacity-10 blur-[150px]" />
      </motion.div>

      {/* iPhone Mockup */}
      <motion.div
        className="relative z-10 w-full"
        initial={{ opacity: 0, y: 60, scale: 0.9 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <IPhoneMockup />
      </motion.div>

      {/* Logo and text below */}
      <motion.div
        className="relative z-10 text-center mt-8"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        {/* Logo */}
        <div className="flex justify-center mb-0">
          <Image
            src="/logo.svg"
            alt="EverPark"
            width={180}
            height={60}
            priority
          />
        </div>
        
        {/* Tagline - 3 lines */}
        <h2 
          className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight leading-tight"
          style={{
            fontFamily: "'Space Grotesk', system-ui, sans-serif",
            color: '#0a0a0a',
            letterSpacing: '-0.5px',
          }}
        >
          The
          <br />
          all in one
          <br />
          parking app
        </h2>
      </motion.div>

      {/* ============================================= */}
      {/* BOTTOM FOG - below the text */}
      {/* ============================================= */}
      
      {/* Layer 1: Ultra wide bottom fog */}
      <div 
        className="absolute -bottom-40 left-0 right-0 h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 200% 100% at 50% 100%, rgba(255,255,255,1) 0%, rgba(255,255,255,0.7) 40%, transparent 80%)',
          filter: 'blur(100px)',
        }}
      />
      
      {/* Layer 2: Medium bottom fog */}
      <div 
        className="absolute -bottom-24 left-0 right-0 h-[350px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 160% 80% at 50% 100%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.5) 50%, transparent 85%)',
          filter: 'blur(60px)',
        }}
      />
      
      {/* Layer 3: Closer bottom fog */}
      <div 
        className="absolute -bottom-12 left-0 right-0 h-[250px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 130% 60% at 50% 100%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.4) 60%, transparent 90%)',
          filter: 'blur(40px)',
        }}
      />

      {/* ============================================= */}
      {/* SPECTACULAR FOG/MIST TRANSITION EFFECT */}
      {/* Multiple blurred layers create realistic fog */}
      {/* ============================================= */}
      
      {/* Layer 1: Ultra wide, very blurry base fog */}
      <div 
        className="absolute -bottom-32 left-0 right-0 h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 200% 100% at 50% 100%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.6) 30%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      
      {/* Layer 2: Medium fog cloud */}
      <div 
        className="absolute -bottom-20 left-0 right-0 h-[300px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 150% 80% at 50% 100%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.4) 40%, transparent 80%)',
          filter: 'blur(50px)',
        }}
      />
      
      {/* Layer 3: Closer, less blurry fog */}
      <div 
        className="absolute -bottom-10 left-0 right-0 h-[200px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 120% 60% at 50% 100%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.5) 50%, transparent 90%)',
          filter: 'blur(30px)',
        }}
      />
      
      {/* Layer 4: Sharp transition at very bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[120px] pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.4) 30%, rgba(255,255,255,0.8) 60%, white 100%)',
          filter: 'blur(8px)',
        }}
      />
      
      {/* Layer 5: Final crisp edge */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[40px] pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, white 100%)',
        }}
      />
    </section>
  );
}
