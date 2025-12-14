'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const targetText = "Buscando dónde aparcar.";

// ============================================
// EFFECT 1: GLITCH/MATRIX
// Characters scramble and resolve to final text
// ============================================
function GlitchMatrixText({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState('');
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
  const [resolvedCount, setResolvedCount] = useState(0);

  useEffect(() => {
    // Initialize with random characters
    setDisplayText(text.split('').map(c => c === ' ' ? ' ' : chars[Math.floor(Math.random() * chars.length)]).join(''));
    
    let resolved = 0;
    const resolveInterval = setInterval(() => {
      if (resolved < text.length) {
        resolved++;
        setResolvedCount(resolved);
      } else {
        clearInterval(resolveInterval);
      }
    }, 100);

    // Scramble unresolved characters
    const scrambleInterval = setInterval(() => {
      setDisplayText(() => {
        return text.split('').map((char, i) => {
          if (i < resolvedCount || char === ' ') return char;
          return chars[Math.floor(Math.random() * chars.length)];
        }).join('');
      });
    }, 50);

    return () => {
      clearInterval(resolveInterval);
      clearInterval(scrambleInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  useEffect(() => {
    setDisplayText(() => {
      return text.split('').map((char, i) => {
        if (i < resolvedCount || char === ' ') return char;
        return chars[Math.floor(Math.random() * chars.length)];
      }).join('');
    });
  }, [resolvedCount, text, chars]);

  return (
    <span className="font-mono">
      {displayText.split('').map((char, i) => (
        <span
          key={i}
          className={`inline-block transition-all duration-200 ${
            i < resolvedCount 
              ? 'text-gray-900' 
              : 'text-[#00b58e] opacity-70'
          }`}
          style={{
            textShadow: i < resolvedCount 
              ? 'none' 
              : '0 0 8px rgba(0, 181, 142, 0.8)',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
}

// ============================================
// EFFECT 2: LIGHT WRITING / LASER
// A glowing cursor writes the text leaving a trail
// ============================================
function LaserWriteText({ text }: { text: string }) {
  const [visibleLength, setVisibleLength] = useState(0);
  const [showGlow, setShowGlow] = useState(true);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= text.length) {
        setVisibleLength(i);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowGlow(false), 500);
      }
    }, 80);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className="relative inline-block">
      {/* The revealed text */}
      <span className="relative">
        {text.split('').map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: i < visibleLength ? 1 : 0,
            }}
            transition={{ duration: 0.1 }}
            className="inline-block"
            style={{
              textShadow: i === visibleLength - 1 && showGlow
                ? '0 0 20px rgba(0, 181, 142, 1), 0 0 40px rgba(0, 181, 142, 0.8), 0 0 60px rgba(0, 181, 142, 0.6)'
                : i < visibleLength - 3
                  ? 'none'
                  : '0 0 10px rgba(0, 181, 142, 0.4)',
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </span>

      {/* The laser cursor */}
      {visibleLength > 0 && visibleLength <= text.length && showGlow && (
        <motion.span
          className="absolute top-0 w-[3px] h-full bg-[#00b58e] rounded-full"
          style={{
            left: `${(visibleLength / text.length) * 100}%`,
            boxShadow: '0 0 15px 5px rgba(0, 181, 142, 0.8), 0 0 30px 10px rgba(0, 181, 142, 0.5)',
          }}
          animate={{
            opacity: [1, 0.6, 1],
          }}
          transition={{
            duration: 0.1,
            repeat: Infinity,
          }}
        />
      )}

      {/* Light trail effect */}
      <motion.span
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{
          background: `linear-gradient(90deg, 
            transparent 0%, 
            transparent ${Math.max(0, ((visibleLength - 5) / text.length) * 100)}%, 
            rgba(0, 181, 142, 0.3) ${((visibleLength - 2) / text.length) * 100}%, 
            rgba(0, 181, 142, 0.6) ${((visibleLength) / text.length) * 100}%, 
            transparent ${((visibleLength + 1) / text.length) * 100}%
          )`,
        }}
      />
    </span>
  );
}

// ============================================
// EFFECT 3: SELECTIVE BLUR
// Each word blurs in separately with stagger
// ============================================
function SelectiveBlurText({ text }: { text: string }) {
  const words = text.split(' ');
  const [revealedWords, setRevealedWords] = useState(0);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= words.length) {
        setRevealedWords(i);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 400);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span className="inline-flex flex-wrap justify-center gap-x-3">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ 
            opacity: 0, 
            filter: 'blur(20px)',
            y: 20,
          }}
          animate={i < revealedWords ? { 
            opacity: 1, 
            filter: 'blur(0px)',
            y: 0,
          } : {
            opacity: 0,
            filter: 'blur(20px)',
            y: 20,
          }}
          transition={{ 
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="inline-block"
          style={{
            textShadow: i === revealedWords - 1 
              ? '0 0 30px rgba(0, 181, 142, 0.6)' 
              : 'none',
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

// ============================================
// DEMO COMPONENT - Shows all 3 effects
// ============================================
export default function EffectsDemo() {
  const [key, setKey] = useState(0);

  // Reset animation every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setKey(prev => prev + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-32">
        
        {/* Title */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Comparación de Efectos
          </h2>
          <p className="text-gray-500 text-sm">
            Se reinician cada 10 segundos
          </p>
        </div>

        {/* Effect 1: Glitch/Matrix */}
        <div className="text-center space-y-6">
          <div className="text-sm uppercase tracking-widest text-[#00b58e] font-medium">
            Opción 1: Glitch / Matrix
          </div>
          <div className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
            <GlitchMatrixText key={`glitch-${key}`} text={targetText} />
          </div>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            Caracteres aleatorios que se estabilizan uno a uno, estilo &ldquo;descifrado&rdquo;
          </p>
        </div>

        {/* Divider */}
        <div className="w-32 h-px bg-gray-200 mx-auto" />

        {/* Effect 2: Laser Writing */}
        <div className="text-center space-y-6">
          <div className="text-sm uppercase tracking-widest text-[#00b58e] font-medium">
            Opción 2: Escritura con Luz
          </div>
          <div className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
            <LaserWriteText key={`laser-${key}`} text={targetText} />
          </div>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            Un cursor brillante escribe dejando un rastro de luz verde
          </p>
        </div>

        {/* Divider */}
        <div className="w-32 h-px bg-gray-200 mx-auto" />

        {/* Effect 3: Selective Blur */}
        <div className="text-center space-y-6">
          <div className="text-sm uppercase tracking-widest text-[#00b58e] font-medium">
            Opción 3: Desenfoque Selectivo
          </div>
          <div className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
            <SelectiveBlurText key={`blur-${key}`} text={targetText} />
          </div>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            Cada palabra emerge del desenfoque de forma escalonada
          </p>
        </div>

        {/* Reset button */}
        <div className="text-center pt-8">
          <button
            onClick={() => setKey(prev => prev + 1)}
            className="px-6 py-3 bg-[#00b58e] text-white rounded-full font-medium hover:bg-[#00a37f] transition-colors"
          >
            Reiniciar animaciones
          </button>
        </div>

      </div>
    </section>
  );
}

