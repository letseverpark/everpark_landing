'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface LiquidGlassSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function LiquidGlassSection({ 
  children, 
  className = '',
  id
}: LiquidGlassSectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`
        relative mx-3 sm:mx-4 md:mx-6 lg:mx-8 my-4 md:my-6
        liquid-section
        rounded-[32px] sm:rounded-[40px] md:rounded-[48px]
        overflow-hidden
        ${className}
      `}
    >
      {/* Subtle inner glow at top */}
      <div 
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none opacity-50"
        style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.8) 0%, transparent 100%)',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.section>
  );
}
