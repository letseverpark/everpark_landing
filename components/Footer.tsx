'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from './LanguageProvider';

export default function Footer() {
  const { language } = useTranslation();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <footer ref={sectionRef} className="bg-white">
      {/* CTA Section */}
      <section id="descargar" className="py-32 px-6 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white" />
        <div className="gradient-blob w-[800px] h-[400px] bg-[#00b58e] bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-20" />
        
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              The future of mobility
              <br />
              <span className="text-[#00b58e] text-glow">is EverPark</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 text-sm font-mono mb-8"
          >
            Die Zukunft der Mobilität ist EverPark
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-500 text-lg mb-10 max-w-md mx-auto"
          >
            {language === 'es' 
              ? 'Sé de los primeros en probar EverPark. Disponible ahora en Valencia.'
              : 'Be among the first to try EverPark. Available now in Valencia.'
            }
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-12"
          >
            <motion.a
              href="#"
              className="btn-glass-primary px-10 py-5 rounded-full text-xl font-semibold inline-flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {language === 'es' ? 'Únete a la revolución' : 'Join the revolution'}
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Store badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center gap-4 flex-wrap"
          >
            <a href="#" className="group">
              <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-gray-900 text-white hover:bg-gray-800 transition-colors">
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
              <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-gray-900 text-white hover:bg-gray-800 transition-colors">
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
        </div>
      </section>

      {/* Bottom */}
      <div className="border-t border-gray-100 py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1">
            <span className="text-lg font-bold text-[#00b58e]">Ever</span>
            <span className="text-lg font-bold text-gray-900">Park</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="/privacy" className="hover:text-gray-600 transition-colors">
              {language === 'es' ? 'Privacidad' : 'Privacy'}
            </a>
            <span>© 2024 EverPark</span>
          </div>

          <p className="text-sm text-gray-400">
            {language === 'es' ? 'Hecho en Valencia' : 'Made in Valencia'} 🇪🇸
          </p>
        </div>
      </div>
    </footer>
  );
}
