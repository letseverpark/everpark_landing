'use client';

import { motion } from 'framer-motion';
import LiquidGlassSection from './ui/LiquidGlassSection';

export default function Rewards() {
  return (
    <LiquidGlassSection id="recompensas" className="py-16 md:py-20 lg:py-24 px-6 md:px-12 lg:px-20">
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
              className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tighter leading-[1.1]"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              Recibe recompensa por salir
            </motion.span>
            <motion.span 
              className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tighter leading-[1.1] mt-1"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.15 }}
            >
              de tu aparcamiento
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-gray-500 max-w-xl mx-auto mt-5 font-medium"
          >
            Informas de tu salida, gestionamos tu match y ganas dinero.
            <br />
            <span className="text-gray-400">Tanto en la calle como en el garaje particular.</span>
          </motion.p>
        </div>

        {/* Two phone mockups */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 lg:gap-16">
          {/* Phone 1 */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
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
                    <div className="relative h-44 sm:h-52 md:h-56 bg-gray-100 rounded-lg md:rounded-xl overflow-hidden mb-2.5 md:mb-3">
                      <div className="absolute inset-0 opacity-50">
                        <div className="absolute top-1/3 left-0 right-0 h-5 md:h-6 bg-gray-200" />
                        <div className="absolute top-2/3 left-0 right-0 h-4 bg-gray-200" />
                        <div className="absolute left-1/3 top-0 bottom-0 w-4 md:w-5 bg-gray-200" />
                      </div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 md:w-6 md:h-6 bg-everpark rounded-full shadow-md" />
                      <div className="absolute bottom-1/4 right-1/4 text-base md:text-lg">📍</div>
                      <div className="absolute top-1/3 left-1/4 text-base md:text-lg">📍</div>
                    </div>
                    
                    {/* Bottom bar */}
                    <div className="flex items-center gap-1.5 md:gap-2">
                      <div className="w-7 h-7 md:w-8 md:h-8 bg-everpark rounded-full flex items-center justify-center text-white text-sm font-bold">←</div>
                      <div className="flex-1 bg-everpark/10 rounded-full py-1.5 md:py-2 text-center">
                        <span className="text-everpark text-[10px] md:text-xs font-bold">Match</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Phone 2 */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="relative w-[200px] sm:w-[240px] md:w-[260px] h-[400px] sm:h-[480px] md:h-[520px]"
            >
              <div className="absolute inset-0 bg-gray-900 rounded-[2rem] md:rounded-[2.5rem] glass-phone">
                <div className="absolute inset-[5px] md:inset-2 bg-gray-900 rounded-[1.8rem] md:rounded-[2rem] overflow-hidden">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 md:w-24 h-4 md:h-5 bg-black rounded-b-xl z-10" />
                  
                  <div className="w-full h-full pt-6 md:pt-7 px-2.5 md:px-3">
                    <div className="flex items-center justify-between px-1 mb-2.5 md:mb-3">
                      <span className="text-sm md:text-base font-black text-everpark italic">Ever</span>
                      <span className="text-gray-500 text-sm">✕</span>
                    </div>
                    
                    {/* Parking icon */}
                    <div className="flex items-center justify-center h-24 sm:h-28 md:h-32 mb-3 md:mb-4">
                      <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-everpark/20 rounded-2xl flex items-center justify-center">
                        <span className="text-3xl sm:text-4xl md:text-5xl">🅿️</span>
                      </div>
                    </div>
                    
                    {/* Success message */}
                    <div className="text-center mb-3 md:mb-4 px-2">
                      <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 bg-everpark text-white text-[10px] md:text-xs rounded-full font-bold mb-2 md:mb-3">
                        ¡Gracias por avisar!
                      </span>
                      <p className="text-gray-400 text-[10px] md:text-xs leading-relaxed">
                        Avisa cuando salgas de tu sitio de aparcamiento en la calle y recibirás tu recompensa. Tú eliges cómo la quieres recibir.
                      </p>
                    </div>
                    
                    {/* Reward details */}
                    <div className="bg-gray-800 rounded-lg md:rounded-xl p-2.5 md:p-3 mb-2.5 md:mb-3">
                      <span className="inline-block px-2 py-0.5 bg-everpark/20 text-everpark text-[9px] md:text-[10px] rounded font-bold mb-1.5 md:mb-2">
                        Recompensa
                      </span>
                      <div className="flex items-center justify-between text-[10px] md:text-xs mb-1">
                        <span className="text-gray-400">Aviso e intercambio</span>
                        <span className="text-white font-bold">1,00€</span>
                      </div>
                      <div className="flex items-center justify-between text-[10px] md:text-xs">
                        <span className="text-gray-400">Zona de aparcamiento</span>
                        <span className="text-white font-bold">1,30€</span>
                      </div>
                    </div>
                    
                    {/* Total */}
                    <div className="flex items-center justify-between px-1">
                      <span className="text-gray-500 text-[10px] md:text-xs">Total</span>
                      <span className="text-everpark font-black text-sm md:text-base">2,30€</span>
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
