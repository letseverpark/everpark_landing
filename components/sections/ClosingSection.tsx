'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ClosingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20%' });

  return (
    <section ref={ref} className="relative bg-white py-16 md:py-24 px-4 sm:px-6" id="descargar">
      {/* Floating green card */}
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative rounded-[32px] md:rounded-[48px] lg:rounded-[60px] overflow-hidden shadow-2xl"
        >
          {/* Green gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00c896] via-[#00b58e] to-[#009973]" />
          
          {/* Subtle light effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-black/10 blur-3xl" />
          </div>

          {/* Content */}
          <div className="relative px-8 sm:px-12 md:px-16 lg:px-24 py-16 md:py-24 lg:py-32">
            {/* Manifesto text */}
            <div className="space-y-2 md:space-y-3">
              {/* Line 1 */}
              <motion.p
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight"
              >
                El futuro de la movilidad no es elegir cómo aparcar
              </motion.p>

              {/* Line 2 - strikethrough */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative inline-block"
              >
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white/40 leading-tight">
                  es nunca necesitar pensar en ello
                </p>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="absolute left-0 top-1/2 w-full h-[2px] md:h-[3px] bg-white/60 origin-left -translate-y-1/2"
                />
              </motion.div>

              {/* Line 3 - strikethrough */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative inline-block"
              >
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white/40 leading-tight">
                  porque el futuro de la movilidad no es elegir cómo aparcar
                </p>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="absolute left-0 top-1/2 w-full h-[2px] md:h-[3px] bg-white/60 origin-left -translate-y-1/2"
                />
              </motion.div>

              {/* Line 4 - with EverPark text */}
              <motion.p
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight pt-4 md:pt-6"
              >
                el futuro de la movilidad es{' '}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1.6 }}
                  className="text-white font-black"
                >
                  EverPark
                </motion.span>
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Minimal footer below */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 2 }}
        className="max-w-6xl mx-auto mt-10 md:mt-14 px-2"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-6">
            <a href="/privacy" className="hover:text-gray-600 transition-colors">Privacidad</a>
            <span>© 2024 EverPark</span>
          </div>
          <p>
            Hecho con 💚 en Valencia
          </p>
        </div>
      </motion.div>
    </section>
  );
}
