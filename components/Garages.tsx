'use client';

import { motion } from 'framer-motion';
import LiquidGlassSection from './ui/LiquidGlassSection';

export default function Garages() {
  return (
    <LiquidGlassSection id="garajes" className="py-16 md:py-20 lg:py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-float-strong"
          >
            <motion.span 
              className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold glass-text tracking-tighter leading-[1.1]"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              Alquila tu garaje por horas
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-gray-500 max-w-xl mx-auto mt-5 font-medium"
          >
            Por horas, días sueltos, franjas horarias
            <br />
            <span className="text-gray-400">durante meses, tú eliges cómo alquilas tu plaza</span>
          </motion.p>
        </div>

        {/* Three phone mockups */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 lg:gap-10">
          {/* Phone 1 - Saved */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-[160px] sm:w-[180px] md:w-[200px] h-[320px] sm:h-[360px] md:h-[400px]"
            >
              <div className="absolute inset-0 bg-gray-900 rounded-[1.75rem] md:rounded-[2rem] glass-phone">
                <div className="absolute inset-[4px] md:inset-[5px] bg-gray-900 rounded-[1.5rem] md:rounded-[1.75rem] overflow-hidden">
                  <div className="w-full h-full pt-5 md:pt-6 px-2 md:px-2.5">
                    <div className="mb-2.5 md:mb-3">
                      <span className="px-2 md:px-2.5 py-0.5 md:py-1 bg-everpark text-white text-[9px] md:text-[10px] rounded-full font-bold">
                        Saved
                      </span>
                    </div>
                    
                    <div className="bg-gray-800 rounded-lg p-1.5 md:p-2 mb-2 md:mb-2.5">
                      <div className="text-[9px] md:text-[10px] text-gray-400">Tus aparcamientos guardados →</div>
                    </div>
                    
                    {/* Location card */}
                    <div className="bg-gray-800 rounded-lg md:rounded-xl overflow-hidden">
                      <div className="h-20 sm:h-24 md:h-28 bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                        <span className="text-2xl sm:text-3xl md:text-4xl">🏛️</span>
                      </div>
                      <div className="p-1.5 md:p-2">
                        <span className="text-white text-[10px] md:text-xs font-bold">Ciutat Vella</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Phone 2 - Main (larger) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="relative w-[200px] sm:w-[240px] md:w-[260px] h-[400px] sm:h-[480px] md:h-[520px]"
            >
              <div className="absolute inset-0 bg-gray-900 rounded-[2rem] md:rounded-[2.5rem] glass-phone">
                <div className="absolute inset-[5px] md:inset-2 bg-white rounded-[1.8rem] md:rounded-[2rem] overflow-hidden">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 md:w-24 h-4 md:h-5 bg-gray-900 rounded-b-xl z-10" />
                  
                  <div className="w-full h-full bg-white pt-6 md:pt-7 px-2.5 md:px-3">
                    <div className="flex items-center justify-between px-1 mb-2.5 md:mb-3">
                      <span className="text-sm md:text-base font-black text-everpark italic">Ever</span>
                      <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gray-100" />
                    </div>
                    
                    <div className="flex items-center gap-1.5 md:gap-2 mb-2.5 md:mb-3">
                      <div className="px-2 md:px-2.5 py-0.5 md:py-1 bg-everpark text-white text-[9px] md:text-[10px] rounded-full font-semibold">
                        Coche de Rafa
                      </div>
                      <div className="px-1.5 md:px-2 py-0.5 md:py-1 bg-gray-100 rounded-full text-[9px] md:text-[10px]">🚗</div>
                    </div>
                    
                    {/* Map */}
                    <div className="relative h-36 sm:h-44 md:h-48 bg-gray-100 rounded-lg md:rounded-xl overflow-hidden mb-2.5 md:mb-3">
                      <div className="absolute inset-0 opacity-50">
                        <div className="absolute top-1/4 left-0 right-0 h-5 md:h-6 bg-gray-200" />
                        <div className="absolute top-2/3 left-0 right-0 h-4 bg-gray-200" />
                        <div className="absolute left-1/3 top-0 bottom-0 w-4 md:w-5 bg-gray-200" />
                      </div>
                      <div className="absolute top-1/3 left-1/3 w-6 h-6 md:w-7 md:h-7 bg-white rounded shadow flex items-center justify-center text-sm md:text-base">🏠</div>
                      <div className="absolute top-1/2 left-1/2 w-4 h-4 md:w-5 md:h-5 bg-everpark rounded-full shadow" />
                      <div className="absolute bottom-1/4 right-1/3 text-base md:text-lg">📍</div>
                    </div>
                    
                    {/* Buttons */}
                    <div className="flex items-center gap-1.5 md:gap-2 mb-2 md:mb-2.5">
                      <div className="w-6 h-6 md:w-7 md:h-7 bg-everpark rounded-full flex items-center justify-center text-white text-xs font-bold">←</div>
                      <div className="flex-1 bg-everpark rounded-full py-1.5 md:py-2 text-center">
                        <span className="text-white text-[10px] md:text-xs font-bold">Aparcar ▼</span>
                      </div>
                    </div>
                    
                    {/* Toggle */}
                    <div className="flex bg-gray-100 rounded-full p-0.5 md:p-1">
                      <div className="flex-1 py-1 md:py-1.5 text-center text-[9px] md:text-[10px] text-gray-500 font-medium">Calle</div>
                      <div className="flex-1 py-1 md:py-1.5 text-center text-[9px] md:text-[10px] bg-white rounded-full shadow-sm text-gray-700 font-bold">Garaje</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Phone 3 - Details */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="relative w-[160px] sm:w-[180px] md:w-[200px] h-[320px] sm:h-[360px] md:h-[400px]"
            >
              <div className="absolute inset-0 bg-gray-900 rounded-[1.75rem] md:rounded-[2rem] glass-phone">
                <div className="absolute inset-[4px] md:inset-[5px] bg-gray-900 rounded-[1.5rem] md:rounded-[1.75rem] overflow-hidden">
                  <div className="w-full h-full pt-5 md:pt-6 px-2 md:px-2.5">
                    <div className="mb-2.5 md:mb-3">
                      <span className="px-2 md:px-2.5 py-0.5 md:py-1 bg-everpark text-white text-[9px] md:text-[10px] rounded-full font-bold">
                        Ciutat Vella
                      </span>
                    </div>
                    
                    {/* Garage image */}
                    <div className="bg-gray-800 rounded-lg md:rounded-xl overflow-hidden mb-2 md:mb-2.5">
                      <div className="h-24 sm:h-28 md:h-32 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                        <span className="text-3xl sm:text-4xl md:text-5xl">🚗</span>
                      </div>
                    </div>
                    
                    {/* Details */}
                    <div className="bg-gray-800 rounded-lg p-2 md:p-2.5">
                      <div className="flex items-center justify-between mb-0.5 md:mb-1">
                        <span className="text-white text-[10px] md:text-xs font-bold">Garaje en Ciutat Vella</span>
                        <span className="text-everpark text-[10px] md:text-xs font-black">1,50€/h</span>
                      </div>
                      <div className="text-gray-400 text-[9px] md:text-[10px]">12m²</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </LiquidGlassSection>
  );
}
