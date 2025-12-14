'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function SolutionSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-30%' });

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background transition */}
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

      <div className="relative z-10 text-center px-6">
        {/* Logo reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 40 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ 
            duration: 1, 
            delay: 0.3,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2">
            <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-[#00b58e] text-glow-strong">
              Ever
            </span>
            <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-gray-900">
              Park
            </span>
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#00b58e] mb-4">
            The All-In-One Parking App
          </p>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <p className="text-lg md:text-xl text-gray-500 max-w-lg mx-auto">
            No elijas cómo aparcar.
            <br />
            <span className="text-gray-900 font-medium">Solo aparca.</span>
          </p>
        </motion.div>

        {/* Floating badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="mt-12"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-[#00b58e]/20 text-sm font-medium text-gray-600 shadow-lg shadow-[#00b58e]/10">
            <span className="w-2 h-2 rounded-full bg-[#00b58e] animate-pulse" />
            Disponible ahora en Valencia
          </span>
        </motion.div>
      </div>
    </section>
  );
}

