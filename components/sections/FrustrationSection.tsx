'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

function AnimatedCounter({ value, suffix = '', duration = 2000 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20%' });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export default function FrustrationSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-30%' });

  const stats = [
    { value: 30, suffix: '%', label: 'de los atascos', subLabel: 'son por buscar aparcamiento' },
    { value: 20, suffix: '%', label: 'de emisiones', subLabel: 'del tráfico por este problema' },
    { value: 25, suffix: 'min', label: 'de media', subLabel: 'dando vueltas cada vez' },
  ];

  const words = ['Dando vueltas.', 'Esperando.', 'Contaminando.'];

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center bg-gray-50 py-32 px-6"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Stats grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: i * 0.2,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="text-center"
            >
              <div className="font-mono text-7xl md:text-8xl lg:text-9xl font-bold text-gray-900 mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2000 + i * 300} />
              </div>
              <p className="text-gray-600 font-medium text-lg">{stat.label}</p>
              <p className="text-gray-400 text-sm mt-1">{stat.subLabel}</p>
            </motion.div>
          ))}
        </div>

        {/* Words */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.8 + i * 0.15,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-500"
            >
              {word}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}

