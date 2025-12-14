'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

export default function TransitionSection() {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Text appears gently as you scroll into view
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.35, 0.65, 0.9], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0.1, 0.35, 0.65, 0.9], [40, 0, 0, -40]);
  const textScale = useTransform(scrollYProgress, [0.1, 0.35, 0.65, 0.9], [0.95, 1, 1, 0.95]);
  
  // Smooth springs for elegant motion
  const smoothOpacity = useSpring(textOpacity, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(textY, { stiffness: 50, damping: 20 });
  const smoothScale = useSpring(textScale, { stiffness: 50, damping: 20 });

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[70vh] bg-white flex items-center justify-center overflow-hidden"
    >
      {/* Subtle ambient glow */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ opacity: smoothOpacity }}
      >
        <div
          className="w-[500px] h-[300px]"
          style={{
            background: 'radial-gradient(ellipse, rgba(0, 181, 142, 0.04) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </motion.div>

      {/* Main content */}
      <motion.div
        className="relative z-10 text-center px-6"
        style={{
          opacity: smoothOpacity,
          y: smoothY,
          scale: smoothScale,
        }}
      >
        {/* Main text - same style as "hemos digitalizado taxis..." */}
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-gray-500">
          Es por eso que...
        </span>
      </motion.div>
    </section>
  );
}
