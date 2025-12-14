'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface MomentProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

function Moment({ children, className = '', delay = 0 }: MomentProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-35%' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function JourneySection() {
  return (
    <section className="bg-white">
      {/* Intro: El 360º se presenta */}
      <div className="min-h-screen flex items-center justify-center px-6 bg-gray-950 relative overflow-hidden">
        {/* Glow background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00b58e] rounded-full opacity-20 blur-[150px]" />
        </div>
        
        <div className="text-center relative">
          <Moment>
            <p className="font-mono text-[10rem] sm:text-[14rem] md:text-[18rem] lg:text-[24rem] font-bold text-[#00b58e] leading-none text-glow-strong">
              360º
            </p>
          </Moment>
          <Moment delay={0.3}>
            <p className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-400 mt-4">
              Tu asistente de parking.
            </p>
          </Moment>
        </div>
      </div>

      {/* Transición: 4 formas */}
      <div className="min-h-[70vh] flex items-center justify-center px-6">
        <div className="text-center">
          <Moment>
            <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
              4 formas de aparcar.
            </p>
          </Moment>
          <Moment delay={0.3}>
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-300">
              1 sola app.
            </p>
          </Moment>
        </div>
      </div>

      {/* Opción 1: Exchanges */}
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <Moment>
            <p className="text-sm font-medium text-gray-400 tracking-widest uppercase mb-6">
              01
            </p>
          </Moment>
          <Moment delay={0.1}>
            <p className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-gray-900 mb-8">
              Exchanges
            </p>
          </Moment>
          <Moment delay={0.3}>
            <p className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-500 max-w-2xl mx-auto">
              Alguien se va.
              <br />
              <span className="text-gray-900">Tú entras.</span>
            </p>
          </Moment>
        </div>
      </div>

      {/* Opción 2: Garages */}
      <div className="min-h-screen flex items-center justify-center px-6 bg-gray-50">
        <div className="text-center">
          <Moment>
            <p className="text-sm font-medium text-gray-400 tracking-widest uppercase mb-6">
              02
            </p>
          </Moment>
          <Moment delay={0.1}>
            <p className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-gray-900 mb-8">
              Garages
            </p>
          </Moment>
          <Moment delay={0.3}>
            <p className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-500 max-w-2xl mx-auto">
              Plazas privadas por horas.
              <br />
              <span className="text-gray-900">Hasta 60% más barato.</span>
            </p>
          </Moment>
        </div>
      </div>

      {/* Opción 3: Finder */}
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <Moment>
            <p className="text-sm font-medium text-gray-400 tracking-widest uppercase mb-6">
              03
            </p>
          </Moment>
          <Moment delay={0.1}>
            <p className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-gray-900 mb-8">
              Finder
            </p>
          </Moment>
          <Moment delay={0.3}>
            <p className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-500 max-w-2xl mx-auto">
              Todos los parkings.
              <br />
              <span className="text-gray-900">Compara y elige.</span>
            </p>
          </Moment>
        </div>
      </div>

      {/* El 360º cierra */}
      <div className="min-h-[60vh] flex items-center justify-center px-6 bg-gray-50">
        <Moment>
          <p className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-400 text-center">
            Y si no sabes cuál elegir...
          </p>
        </Moment>
      </div>

      {/* El momento "aha" */}
      <div className="min-h-screen flex items-center justify-center px-6 bg-gray-950 relative overflow-hidden">
        {/* Glow background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00b58e] rounded-full opacity-20 blur-[150px]" />
        </div>
        
        <div className="text-center relative">
          <Moment>
            <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#00b58e] text-glow-strong">
              Yo elijo por ti.
            </p>
          </Moment>
          <Moment delay={0.5}>
            <p className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-500 mt-8">
              Solo dime dónde vas.
            </p>
          </Moment>
        </div>
      </div>
    </section>
  );
}
