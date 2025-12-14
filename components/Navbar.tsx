'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className={`max-w-5xl mx-auto px-4 md:px-6 transition-all duration-500 ${
        scrolled ? 'mx-4 md:mx-auto' : ''
      }`}>
        <div className={`flex items-center justify-between transition-all duration-500 ${
          scrolled ? 'nav-glass rounded-full px-6 py-3' : ''
        }`}>
          {/* Logo */}
          <a href="#" className="flex items-center gap-0.5">
            <span className="text-xl font-bold text-[#00b58e]">Ever</span>
            <span className="text-xl font-bold text-gray-900">Park</span>
          </a>

          {/* CTA */}
          <motion.a
            href="#descargar"
            className="btn-liquid px-5 py-2.5 rounded-full text-sm font-semibold text-[#00b58e]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Descargar
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}
