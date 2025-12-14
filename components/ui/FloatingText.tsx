'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FloatingTextProps {
  children: ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  gradient?: boolean;
  glow?: boolean;
  delay?: number;
  stagger?: boolean;
}

export default function FloatingText({ 
  children, 
  className = '',
  as: Tag = 'h1',
  gradient = false,
  glow = false,
  delay = 0,
  stagger = false,
}: FloatingTextProps) {
  // For staggered text animation
  if (stagger && typeof children === 'string') {
    const words = children.split(' ');
    
    return (
      <Tag className={`${gradient ? 'text-gradient' : ''} ${glow ? 'text-glow' : ''} ${className}`}>
        {words.map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.5, 
              delay: delay + index * 0.08,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="inline-block mr-[0.25em]"
          >
            {word}
          </motion.span>
        ))}
      </Tag>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        duration: 0.7, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      <Tag 
        className={`
          ${gradient ? 'text-gradient' : ''} 
          ${glow ? 'text-glow' : ''} 
          ${className}
        `}
      >
        {children}
      </Tag>
    </motion.div>
  );
}

// Special component for the main hero title with extra effects
export function HeroTitle({ 
  children, 
  className = '' 
}: { 
  children: ReactNode; 
  className?: string;
}) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.8, 
        delay: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={`
        font-sora font-bold
        text-5xl md:text-6xl lg:text-7xl xl:text-8xl
        leading-tight tracking-tight
        text-white
        ${className}
      `}
    >
      {/* Subtle text shadow layers for depth */}
      <span className="relative">
        <span 
          className="absolute inset-0 blur-2xl opacity-30 text-everpark"
          aria-hidden="true"
        >
          {children}
        </span>
        <span className="relative">
          {children}
        </span>
      </span>
    </motion.h1>
  );
}

