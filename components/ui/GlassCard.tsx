'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  delay?: number;
}

export default function GlassCard({ 
  children, 
  className = '', 
  hover = true,
  glow = false,
  delay = 0
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={hover ? { 
        y: -8,
        transition: { duration: 0.3 }
      } : undefined}
      className={`
        relative overflow-hidden
        bg-glass-white backdrop-blur-xl
        border border-glass-border
        rounded-3xl
        transition-all duration-500
        ${hover ? 'hover:bg-glass-white-strong hover:border-glass-green-border hover:shadow-glow-sm' : ''}
        ${glow ? 'shadow-glow border-glass-green-border' : 'shadow-glass'}
        ${className}
      `}
    >
      {/* Inner shine effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, transparent 100%)',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Subtle border glow on hover */}
      {hover && (
        <motion.div
          className="absolute inset-0 rounded-3xl opacity-0 pointer-events-none"
          style={{
            background: 'transparent',
            boxShadow: 'inset 0 0 30px rgba(0, 181, 142, 0.1)',
          }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.div>
  );
}

