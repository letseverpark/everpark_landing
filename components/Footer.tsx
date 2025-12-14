'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from './LanguageProvider';
import Logo from './Logo';

export default function Footer() {
  const { language } = useTranslation();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const lines = [
    { text: 'El futuro de la movilidad no es elegir cómo aparcar', strike: false },
    { text: 'es nunca necesitar pensar en ello', strike: true },
    { text: 'porque el futuro de la movilidad no es elegir cómo aparcar', strike: true },
    { text: 'el futuro de la movilidad es', logo: true },
  ];

  return (
    <footer ref={sectionRef} className="bg-white py-16 md:py-24 px-4 sm:px-6">
      {/* Main floating green card */}
      <section id="descargar" className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative rounded-[40px] md:rounded-[60px] overflow-hidden"
        >
          {/* Green background with gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00b58e] via-[#00a080] to-[#008f6f]" />
          
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-white/20 blur-3xl -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-black/10 blur-3xl translate-y-1/2 -translate-x-1/3" />
          </div>

          {/* Content */}
          <div className="relative px-8 sm:px-12 md:px-20 py-16 md:py-24 lg:py-32">
            {/* Manifesto text */}
            <div className="max-w-4xl">
              {lines.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ 
                    duration: 0.7, 
                    delay: 0.3 + index * 0.4,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className="mb-2 md:mb-3"
                >
                  {line.logo ? (
                    <div className="flex flex-wrap items-center gap-3 md:gap-4">
                      <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white/90">
                        {line.text}
                      </span>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ 
                          duration: 0.5, 
                          delay: 0.3 + lines.length * 0.4 + 0.3,
                          ease: 'backOut'
                        }}
                        className="inline-flex items-center bg-white rounded-2xl px-4 py-2 md:px-6 md:py-3 shadow-xl"
                      >
                        <Logo width={120} height={40} className="w-24 md:w-32 h-auto" />
                      </motion.div>
                    </div>
                  ) : (
                    <div className="relative inline-block">
                      <span 
                        className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${
                          line.strike ? 'text-white/40' : 'text-white/90'
                        }`}
                      >
                        {line.text}
                        {!line.logo && <span className="text-white/40"> —</span>}
                      </span>
                      {line.strike && (
                        <motion.div
                          initial={{ scaleX: 0 }}
                          animate={isInView ? { scaleX: 1 } : {}}
                          transition={{ 
                            duration: 0.6, 
                            delay: 0.3 + index * 0.4 + 0.5,
                            ease: [0.25, 0.46, 0.45, 0.94]
                          }}
                          className="absolute left-0 top-1/2 w-full h-[3px] md:h-[4px] bg-white/60 origin-left"
                          style={{ transform: 'translateY(-50%)' }}
                        />
                      )}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* CTA and store buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 2.2 }}
              className="mt-12 md:mt-16"
            >
              <p className="text-white/70 text-lg md:text-xl mb-8 max-w-md">
                {language === 'es' 
                  ? 'Sé de los primeros en probar EverPark. Disponible ahora en Valencia.'
                  : 'Be among the first to try EverPark. Available now in Valencia.'
                }
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#" className="group">
                  <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl">
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
                  <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                    </svg>
                    <div className="text-left">
                      <p className="text-[10px] opacity-70">GET IT ON</p>
                      <p className="text-sm font-semibold -mt-0.5">Google Play</p>
                    </div>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Bottom minimal footer */}
      <div className="max-w-6xl mx-auto mt-8 md:mt-12 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-6">
            <a href="/privacy" className="hover:text-gray-600 transition-colors">
              {language === 'es' ? 'Privacidad' : 'Privacy'}
            </a>
            <span>© 2024 EverPark</span>
          </div>

          <p>
            {language === 'es' ? 'Hecho con' : 'Made with'} 💚 {language === 'es' ? 'en Valencia' : 'in Valencia'}
          </p>
        </div>
      </div>
    </footer>
  );
}
