'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';

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
        <div className={`flex items-center justify-between transition-all duration-500 h-[70px] ${
          scrolled ? 'nav-glass rounded-full px-6 py-3' : ''
        }`}>
          {/* Logo */}
          <a href="#" className="flex items-center">
            <Logo width={100} height={34} />
          </a>

          {/* CTA */}
          <motion.a
            href="#descargar"
            className="btn-liquid px-2.5 py-2.5 rounded-[15px] text-sm font-semibold text-black"
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
