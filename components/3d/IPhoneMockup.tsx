'use client';

import { useRef } from 'react';
import { motion, useSpring } from 'framer-motion';
import Image from 'next/image';

export default function IPhoneMockup() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const rotateX = useSpring(0, { stiffness: 50, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 50, damping: 20 });
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const x = (e.clientX - centerX) / (rect.width / 2);
    const y = (e.clientY - centerY) / (rect.height / 2);
    
    rotateY.set(x * 15);
    rotateX.set(-y * 10);
  };
  
  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div 
      ref={containerRef}
      className="flex justify-center items-center py-4 select-none relative"
      style={{ perspective: '1200px' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* 3D Scene Container */}
      <motion.div
        className="flex flex-col items-center lg:block"
        style={{ 
          transformStyle: 'preserve-3d',
          rotateX,
          rotateY,
          position: 'relative',
        }}
      >
        {/* "Presen" - Left side - Hidden on mobile, visible on lg+ */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:block absolute pointer-events-none select-none"
          style={{
            right: '50%',
            marginRight: 'clamp(100px, 10vw, 140px)',
            top: 'clamp(160px, 20vw, 220px)',
            transform: 'translateY(-50%) translateZ(-40px)',
            fontFamily: "'Space Grotesk', system-ui, sans-serif",
            fontSize: 'clamp(60px, 10vw, 140px)',
            fontWeight: 700,
            background: 'linear-gradient(135deg, #00b58e 0%, #00d4a4 50%, #00e6b0 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-0.04em',
            whiteSpace: 'nowrap',
            filter: 'drop-shadow(0 8px 30px rgba(0, 181, 142, 0.35))',
            lineHeight: 1,
          }}
        >
          Presen
        </motion.div>
        
        {/* "tamos" - Right side - Hidden on mobile, visible on lg+ */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:block absolute pointer-events-none select-none"
          style={{
            left: '50%',
            marginLeft: 'clamp(100px, 10vw, 140px)',
            top: 'clamp(160px, 20vw, 220px)',
            transform: 'translateY(-50%) translateZ(-40px)',
            fontFamily: "'Space Grotesk', system-ui, sans-serif",
            fontSize: 'clamp(60px, 10vw, 140px)',
            fontWeight: 700,
            background: 'linear-gradient(135deg, #00e6b0 0%, #00d4a4 50%, #00b58e 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-0.04em',
            whiteSpace: 'nowrap',
            filter: 'drop-shadow(0 8px 30px rgba(0, 181, 142, 0.35))',
            lineHeight: 1,
          }}
        >
          tamos
        </motion.div>
        
        {/* "Presentamos" - Mobile version (stacked above phone) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="lg:hidden mb-6 text-center"
          style={{
            fontFamily: "'Space Grotesk', system-ui, sans-serif",
            fontSize: 'clamp(28px, 7vw, 42px)',
            fontWeight: 700,
            background: 'linear-gradient(135deg, #00b58e 0%, #00d4a4 50%, #00e6b0 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-0.02em',
            whiteSpace: 'nowrap',
            filter: 'drop-shadow(0 4px 20px rgba(0, 181, 142, 0.35))',
            lineHeight: 1,
          }}
        >
          Presentamos
        </motion.div>

        {/* Floating animation for phone */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: 'easeInOut',
          }}
          className="lg:mt-0"
          style={{ 
            transformStyle: 'preserve-3d',
            position: 'relative',
            zIndex: 20,
          }}
        >
          {/* iPhone Frame - Responsive sizing */}
          <div 
            className="w-[220px] h-[450px] sm:w-[250px] sm:h-[510px] md:w-[280px] md:h-[572px] rounded-[40px] sm:rounded-[46px] md:rounded-[52px]"
            style={{
              position: 'relative',
              background: '#1c1c1e',
              boxShadow: `
                inset 0 0 0 1px rgba(255,255,255,0.05),
                inset 0 1px 0 rgba(255,255,255,0.06),
                0 1px 2px rgba(0,0,0,0.2),
                0 2px 4px rgba(0,0,0,0.18),
                0 4px 8px rgba(0,0,0,0.15),
                0 8px 16px rgba(0,0,0,0.12),
                0 16px 32px rgba(0,0,0,0.1),
                0 32px 64px rgba(0,0,0,0.08),
                0 0 80px rgba(0,181,142,0.08)
              `,
              cursor: 'grab',
            }}
          >
            {/* Titanium frame gradient */}
            <div
              className="rounded-[40px] sm:rounded-[46px] md:rounded-[52px]"
              style={{
                position: 'absolute',
                inset: 0,
                background: `linear-gradient(
                  150deg,
                  rgba(180,180,185,0.1) 0%,
                  rgba(100,100,105,0.06) 20%,
                  transparent 40%,
                  transparent 60%,
                  rgba(60,60,65,0.05) 80%,
                  rgba(40,40,45,0.08) 100%
                )`,
                pointerEvents: 'none',
              }}
            />

            {/* Edge highlights */}
            <div style={{
              position: 'absolute',
              left: 0,
              top: '15%',
              bottom: '15%',
              width: '1px',
              background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.1), transparent)',
              pointerEvents: 'none',
            }} />
            <div style={{
              position: 'absolute',
              top: 0,
              left: '20%',
              right: '20%',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)',
              pointerEvents: 'none',
            }} />
            
            {/* Side buttons - Hidden on very small screens for cleaner look */}
            <div className="hidden sm:block" style={{
              position: 'absolute',
              right: '-2px',
              top: '35%',
              width: '3px',
              height: '13%',
              background: 'linear-gradient(90deg, #38383a, #58585a 50%, #38383a)',
              borderRadius: '0 2px 2px 0',
              boxShadow: '1px 0 2px rgba(0,0,0,0.25)',
              pointerEvents: 'none',
            }} />
            <div className="hidden sm:block" style={{
              position: 'absolute',
              left: '-2px',
              top: '22%',
              width: '3px',
              height: '5%',
              background: 'linear-gradient(270deg, #38383a, #58585a 50%, #38383a)',
              borderRadius: '2px 0 0 2px',
              boxShadow: '-1px 0 2px rgba(0,0,0,0.25)',
              pointerEvents: 'none',
            }} />
            <div className="hidden sm:block" style={{
              position: 'absolute',
              left: '-2px',
              top: '28%',
              width: '3px',
              height: '8.5%',
              background: 'linear-gradient(270deg, #38383a, #58585a 50%, #38383a)',
              borderRadius: '2px 0 0 2px',
              boxShadow: '-1px 0 2px rgba(0,0,0,0.25)',
              pointerEvents: 'none',
            }} />
            <div className="hidden sm:block" style={{
              position: 'absolute',
              left: '-2px',
              top: '38%',
              width: '3px',
              height: '8.5%',
              background: 'linear-gradient(270deg, #38383a, #58585a 50%, #38383a)',
              borderRadius: '2px 0 0 2px',
              boxShadow: '-1px 0 2px rgba(0,0,0,0.25)',
              pointerEvents: 'none',
            }} />
            
            {/* Screen container */}
            <div 
              className="absolute top-[5px] left-[5px] right-[5px] bottom-[5px] sm:top-[6px] sm:left-[6px] sm:right-[6px] sm:bottom-[6px] rounded-[35px] sm:rounded-[40px] md:rounded-[46px] overflow-hidden bg-black pointer-events-none"
            >
              <div
                className="absolute inset-0 rounded-[35px] sm:rounded-[40px] md:rounded-[46px] overflow-hidden"
              >
                <Image
                  src="/app-screen.svg"
                  alt="EverPark App"
                  fill
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                    userSelect: 'none',
                    pointerEvents: 'none',
                  }}
                  draggable={false}
                  priority
                />
              </div>
              
              <div 
                className="absolute inset-0 rounded-[35px] sm:rounded-[40px] md:rounded-[46px] pointer-events-none"
                style={{
                  background: `linear-gradient(
                    125deg,
                    rgba(255,255,255,0.04) 0%,
                    rgba(255,255,255,0.01) 15%,
                    transparent 30%
                  )`,
                }}
              />
            </div>
          </div>
          
          {/* Ground shadow */}
          <div 
            style={{
              position: 'absolute',
              bottom: '-28px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '180px',
              height: '14px',
              background: 'radial-gradient(ellipse, rgba(0,0,0,0.12) 0%, transparent 70%)',
              filter: 'blur(5px)',
              pointerEvents: 'none',
            }}
          />
          <div 
            style={{
              position: 'absolute',
              bottom: '-45px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '230px',
              height: '20px',
              background: 'radial-gradient(ellipse, rgba(0,0,0,0.05) 0%, transparent 70%)',
              filter: 'blur(10px)',
              pointerEvents: 'none',
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
