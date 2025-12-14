'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ClosingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20%' });

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Epic closing */}
      <div className="min-h-screen flex items-center justify-center bg-gray-950 py-32 px-6 relative" id="descargar">
        {/* Background glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#00b58e] rounded-full opacity-10 blur-[200px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative">
          {/* The cinematic text */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              El futuro de la movilidad
            </p>
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-500 leading-tight mb-12">
              no es elegir cómo aparcar.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-2">
              <span className="text-white">El futuro es </span>
              <span className="text-[#00b58e] text-glow-strong">EverPark.</span>
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2 }}
            className="mt-16"
          >
            <motion.a
              href="#"
              className="btn-liquid-primary px-12 py-5 rounded-full text-xl font-semibold inline-flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Únete a la revolución
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>

          {/* App stores */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.5 }}
            className="mt-10 flex justify-center gap-4 flex-wrap"
          >
            <a href="#" className="group">
              <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all hover:scale-105 border border-white/10">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <div className="text-left">
                  <p className="text-[10px] opacity-70">Download on the</p>
                  <p className="text-sm font-semibold -mt-0.5">App Store</p>
                </div>
              </div>
            </a>
            <a href="#" className="group">
              <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all hover:scale-105 border border-white/10">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                </svg>
                <div className="text-left">
                  <p className="text-[10px] opacity-70">GET IT ON</p>
                  <p className="text-sm font-semibold -mt-0.5">Google Play</p>
                </div>
              </div>
            </a>
          </motion.div>

          {/* German easter egg */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 2 }}
            className="text-gray-600 text-sm font-mono mt-12"
          >
            Die Zukunft der Mobilität ist EverPark.
          </motion.p>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-800 py-8 px-6 bg-gray-950">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1">
            <span className="text-lg font-bold text-[#00b58e]">Ever</span>
            <span className="text-lg font-bold text-white">Park</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="/privacy" className="hover:text-gray-300 transition-colors">Privacidad</a>
            <span>© 2024 EverPark</span>
          </div>
          <p className="text-sm text-gray-500">
            Hecho en Valencia 🇪🇸
          </p>
        </div>
      </div>
    </section>
  );
}
