'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ProductSlideProps {
  id: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  accentColor: string;
  bgGradient: string;
  isLast?: boolean;
}

function ProductSlide({ id, number, name, tagline, description, accentColor, bgGradient, isLast }: ProductSlideProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-30%' });

  return (
    <div 
      ref={ref}
      className={`min-h-screen flex items-center justify-center relative overflow-hidden ${bgGradient}`}
    >
      {/* Background accent */}
      <motion.div
        className="absolute inset-0 opacity-30"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.3 } : {}}
        transition={{ duration: 1.5 }}
      >
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px]"
          style={{ background: accentColor }}
        />
      </motion.div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Number indicator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span 
            className="text-8xl md:text-9xl font-bold opacity-10"
            style={{ color: accentColor }}
          >
            {number}
          </span>
        </motion.div>

        {/* Product name */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
        >
          {name}
        </motion.h2>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8"
          style={{ color: accentColor }}
        >
          {tagline}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto"
        >
          {description}
        </motion.p>

        {/* Visual indicator for scroll */}
        {!isLast && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.5 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 rounded-full border-2 border-gray-300 flex items-start justify-center p-2"
            >
              <motion.div 
                className="w-1.5 h-1.5 rounded-full bg-gray-400"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

function FinalSlide() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-30%' });

  return (
    <div 
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white"
    >
      {/* Multi-color glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-[#00b58e] rounded-full opacity-10 blur-[100px]" />
        <div className="absolute top-1/3 right-1/4 w-[250px] h-[250px] bg-blue-500 rounded-full opacity-10 blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[280px] h-[280px] bg-purple-500 rounded-full opacity-10 blur-[100px]" />
        <div className="absolute bottom-1/3 right-1/3 w-[220px] h-[220px] bg-orange-500 rounded-full opacity-10 blur-[100px]" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xl md:text-2xl text-gray-400 mb-6 font-medium">
            4 soluciones. 1 objetivo.
          </p>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Que aparcar deje de ser
            <br />
            <span className="text-[#00b58e] text-glow">un problema.</span>
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <p className="text-2xl md:text-3xl font-semibold text-gray-600">
              The All-In-One Parking App
            </p>
          </motion.div>
        </motion.div>

        {/* Product icons in orbit */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-16 flex justify-center gap-8 flex-wrap"
        >
          {[
            { icon: '🤖', label: '360º', color: '#00b58e' },
            { icon: '🔄', label: 'Exchanges', color: '#3b82f6' },
            { icon: '🏠', label: 'Garages', color: '#a855f7' },
            { icon: '📍', label: 'Finder', color: '#f97316' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 + i * 0.1 }}
              className="flex flex-col items-center gap-2"
            >
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl"
                style={{ background: `${item.color}15` }}
              >
                {item.icon}
              </div>
              <span className="text-sm font-medium text-gray-500">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default function ProductsCinematic() {
  const products = [
    {
      id: '360',
      number: '01',
      name: '360º Assistant',
      tagline: 'Tú decides el destino. Nosotros el parking.',
      description: 'El primer asistente de parking con IA. Dile dónde vas y te recomienda la mejor opción entre calle, garaje privado o parking comercial.',
      accentColor: '#00b58e',
      bgGradient: 'bg-gradient-to-b from-white via-[#00b58e]/5 to-white',
    },
    {
      id: 'exchanges',
      number: '02',
      name: 'Exchanges',
      tagline: 'Conectamos quien se va con quien llega.',
      description: 'Intercambio de plazas en la calle en tiempo real. Cuando alguien se va, tú ya estás ahí.',
      accentColor: '#3b82f6',
      bgGradient: 'bg-gradient-to-b from-white via-blue-500/5 to-white',
    },
    {
      id: 'garages',
      number: '03',
      name: 'Garages',
      tagline: 'Tu plaza privada por horas.',
      description: 'Alquila garajes de particulares. Hasta un 60% más barato que un parking comercial. Seguro y garantizado.',
      accentColor: '#a855f7',
      bgGradient: 'bg-gradient-to-b from-white via-purple-500/5 to-white',
    },
    {
      id: 'finder',
      number: '04',
      name: 'Finder',
      tagline: 'Todos los parkings. Un solo lugar.',
      description: 'Compara precios, disponibilidad y distancia de todos los parkings comerciales cerca de tu destino.',
      accentColor: '#f97316',
      bgGradient: 'bg-gradient-to-b from-white via-orange-500/5 to-white',
    },
  ];

  return (
    <section>
      {products.map((product, i) => (
        <ProductSlide key={product.id} {...product} />
      ))}
      <FinalSlide />
    </section>
  );
}

