'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from './LanguageProvider';
import Logo from './Logo';

export default function Footer() {
  const { language } = useTranslation();
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: '-50px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <footer ref={footerRef} className="relative px-4 sm:px-6 py-12 md:py-16">
      {/* Ambient gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-50/80 via-white to-white pointer-events-none" />
      
      <div className="relative max-w-5xl mx-auto">
        {/* Main Glass Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="nav-glass rounded-[32px] md:rounded-[40px] p-8 md:p-12"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Top: Logo centered with tagline */}
            <motion.div variants={itemVariants} className="text-center mb-12">
              <div className="inline-block mb-4">
                <Logo width={110} height={38} />
              </div>
              <p className="text-gray-400 text-sm max-w-sm mx-auto">
                {language === 'es' 
                  ? 'La revolución del parking urbano.'
                  : 'The urban parking revolution.'
                }
              </p>
            </motion.div>

            {/* Links row - horizontal on desktop */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12 text-sm"
            >
              <a href="#como-funciona" className="text-gray-500 hover:text-[#00b58e] transition-colors duration-300">
                {language === 'es' ? 'Cómo funciona' : 'How it works'}
              </a>
              <a href="#garajes" className="text-gray-500 hover:text-[#00b58e] transition-colors duration-300">
                {language === 'es' ? 'Garajes' : 'Garages'}
              </a>
              <a href="/privacy" className="text-gray-500 hover:text-[#00b58e] transition-colors duration-300">
                {language === 'es' ? 'Privacidad' : 'Privacy'}
              </a>
              <a href="/terms" className="text-gray-500 hover:text-[#00b58e] transition-colors duration-300">
                {language === 'es' ? 'Términos' : 'Terms'}
              </a>
              <a href="mailto:hello@everpark.app" className="text-gray-500 hover:text-[#00b58e] transition-colors duration-300">
                {language === 'es' ? 'Contacto' : 'Contact'}
              </a>
            </motion.div>

            {/* Divider */}
            <motion.div 
              variants={itemVariants}
              className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-8"
            />

            {/* Bottom: Social + Copyright */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-between gap-6"
            >
              {/* Social icons */}
              <div className="flex items-center gap-1">
                {[
                  { 
                    name: 'Instagram', 
                    href: 'https://www.instagram.com/everpark_?igsh=MXJsams2Z2xjMDhoZg%3D%3D&utm_source=qr',
                    icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  },
                  { 
                    name: 'X', 
                    href: 'https://x.com/letseverpark?s=21&t=w_dtvgLAfRITZPzchgaYOQ',
                    icon: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  },
                  { 
                    name: 'LinkedIn', 
                    href: 'https://www.linkedin.com/company/everparkapp',
                    icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  },
                  { 
                    name: 'TikTok', 
                    href: 'https://www.tiktok.com/@everpark?_r=1&_t=ZN-92Xp3n9uSRi',
                    icon: <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  },
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-400 hover:text-[#00b58e] hover:bg-[#00b58e]/5 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                      {social.icon}
                    </svg>
                  </motion.a>
                ))}
              </div>

              {/* Copyright */}
              <p className="text-xs text-gray-400 flex items-center gap-2">
                <span>© 2025 EverPark</span>
                <span className="text-gray-300">·</span>
                <span className="flex items-center gap-1">
                  {language === 'es' ? 'Hecho con' : 'Made with'}
                  <motion.span
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="text-[#00b58e]"
                  >
                    ♥
                  </motion.span>
                  {language === 'es' ? 'en Valencia' : 'in Valencia'}
                </span>
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
