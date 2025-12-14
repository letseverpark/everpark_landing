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
        style={{ 
          transformStyle: 'preserve-3d',
          rotateX,
          rotateY,
          position: 'relative',
        }}
      >
        {/* "Presen" - Left side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'absolute',
            right: '50%',
            marginRight: '140px',
            top: '220px', // Higher position
            transform: 'translateY(-50%) translateZ(-40px)',
            fontFamily: "'Space Grotesk', system-ui, sans-serif",
            fontSize: '140px',
            fontWeight: 700,
            background: 'linear-gradient(135deg, #00b58e 0%, #00d4a4 50%, #00e6b0 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-6px',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            userSelect: 'none',
            filter: 'drop-shadow(0 8px 30px rgba(0, 181, 142, 0.35))',
            lineHeight: 1,
          }}
        >
          Presen
        </motion.div>
        
        {/* "tamos" - Right side */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'absolute',
            left: '50%',
            marginLeft: '140px',
            top: '220px', // Higher position
            transform: 'translateY(-50%) translateZ(-40px)',
            fontFamily: "'Space Grotesk', system-ui, sans-serif",
            fontSize: '140px',
            fontWeight: 700,
            background: 'linear-gradient(135deg, #00e6b0 0%, #00d4a4 50%, #00b58e 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-6px',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            userSelect: 'none',
            filter: 'drop-shadow(0 8px 30px rgba(0, 181, 142, 0.35))',
            lineHeight: 1,
          }}
        >
          tamos
        </motion.div>

        {/* Floating animation for phone */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: 'easeInOut',
          }}
          style={{ 
            transformStyle: 'preserve-3d',
            position: 'relative',
            zIndex: 20,
          }}
        >
          {/* iPhone Frame */}
          <div 
            style={{
              position: 'relative',
              width: '280px',
              height: '572px',
              borderRadius: '52px',
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
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '52px',
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
            
            {/* Side buttons */}
            <div style={{
              position: 'absolute',
              right: '-2px',
              top: '155px',
              width: '3px',
              height: '75px',
              background: 'linear-gradient(90deg, #38383a, #58585a 50%, #38383a)',
              borderRadius: '0 2px 2px 0',
              boxShadow: '1px 0 2px rgba(0,0,0,0.25)',
              pointerEvents: 'none',
            }} />
            <div style={{
              position: 'absolute',
              left: '-2px',
              top: '100px',
              width: '3px',
              height: '28px',
              background: 'linear-gradient(270deg, #38383a, #58585a 50%, #38383a)',
              borderRadius: '2px 0 0 2px',
              boxShadow: '-1px 0 2px rgba(0,0,0,0.25)',
              pointerEvents: 'none',
            }} />
            <div style={{
              position: 'absolute',
              left: '-2px',
              top: '140px',
              width: '3px',
              height: '48px',
              background: 'linear-gradient(270deg, #38383a, #58585a 50%, #38383a)',
              borderRadius: '2px 0 0 2px',
              boxShadow: '-1px 0 2px rgba(0,0,0,0.25)',
              pointerEvents: 'none',
            }} />
            <div style={{
              position: 'absolute',
              left: '-2px',
              top: '198px',
              width: '3px',
              height: '48px',
              background: 'linear-gradient(270deg, #38383a, #58585a 50%, #38383a)',
              borderRadius: '2px 0 0 2px',
              boxShadow: '-1px 0 2px rgba(0,0,0,0.25)',
              pointerEvents: 'none',
            }} />
            
            {/* Screen container */}
            <div 
              style={{
                position: 'absolute',
                top: '6px',
                left: '6px',
                right: '6px',
                bottom: '6px',
                borderRadius: '46px',
                overflow: 'hidden',
                background: '#000',
                pointerEvents: 'none',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '46px',
                  overflow: 'hidden',
                  clipPath: 'inset(0 round 46px)',
                }}
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
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: `linear-gradient(
                    125deg,
                    rgba(255,255,255,0.04) 0%,
                    rgba(255,255,255,0.01) 15%,
                    transparent 30%
                  )`,
                  borderRadius: '46px',
                  pointerEvents: 'none',
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
