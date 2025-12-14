'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlowButtonProps {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  href?: string;
}

export default function GlowButton({ 
  children, 
  className = '',
  variant = 'primary',
  size = 'md',
  onClick,
  href
}: GlowButtonProps) {
  const sizeClasses = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-base',
    lg: 'px-9 py-4 text-lg',
  };

  const variantClasses = {
    primary: `
      bg-gradient-to-r from-everpark to-everpark-light
      text-dark font-semibold
      shadow-glow
      hover:shadow-glow-lg hover:scale-105
      active:scale-95
    `,
    secondary: `
      bg-glass-white backdrop-blur-xl
      border border-glass-green-border
      text-white font-medium
      hover:bg-glass-green hover:border-everpark
      hover:shadow-glow-sm
    `,
    ghost: `
      bg-transparent
      text-everpark font-medium
      hover:bg-glass-green
      border border-transparent hover:border-glass-green-border
    `,
  };

  const ButtonContent = (
    <motion.span
      className={`
        relative inline-flex items-center justify-center gap-2
        rounded-2xl cursor-pointer
        transition-all duration-300
        overflow-hidden
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `}
      whileHover={{ scale: variant === 'primary' ? 1.05 : 1.02 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Shimmer effect for primary */}
      {variant === 'primary' && (
        <motion.span
          className="absolute inset-0 opacity-0 hover:opacity-100"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
            backgroundSize: '200% 100%',
          }}
          animate={{
            backgroundPosition: ['200% 0', '-200% 0'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      )}
      
      {/* Inner glow */}
      <span className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          boxShadow: 'inset 0 0 20px rgba(0, 181, 142, 0.3)',
        }}
      />
      
      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {ButtonContent}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="inline-block">
      {ButtonContent}
    </button>
  );
}

