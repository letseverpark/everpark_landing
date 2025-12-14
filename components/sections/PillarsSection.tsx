'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const products = [
  {
    id: 'exchanges',
    name: 'Exchanges',
    icon: '🔄',
    color: 'from-blue-500 to-cyan-400',
    tagline: 'Intercambia plazas en la calle',
    description: 'Conectamos a quien se va con quien llega. En tiempo real.',
  },
  {
    id: 'garages',
    name: 'Garages',
    icon: '🏠',
    color: 'from-purple-500 to-pink-400',
    tagline: 'Garajes privados por horas',
    description: 'Alquila plazas de particulares. Hasta un 60% más barato.',
  },
  {
    id: 'finder',
    name: 'Finder',
    icon: '📍',
    color: 'from-orange-500 to-amber-400',
    tagline: 'Todos los parkings',
    description: 'Compara precios y disponibilidad en tiempo real.',
  },
];

export default function PillarsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-20%' });
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen py-32 px-6 bg-white relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/50" />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-[#00b58e] font-medium text-sm tracking-wider uppercase mb-4 block">
            4 formas de aparcar
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
            Una sola app.
          </h2>
        </motion.div>

        {/* Central 360º Assistant */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-16"
        >
          <div className="pill-card featured p-8 md:p-12 lg:p-16 text-center relative">
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#00b58e]/10 via-transparent to-[#00b58e]/10 animate-pulse" />
            
            <div className="relative">
              {/* Icon */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="inline-flex items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-gradient-to-br from-[#00b58e] to-[#008f6f] text-5xl md:text-6xl mb-8 shadow-2xl shadow-[#00b58e]/30"
              >
                🤖
              </motion.div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00b58e]/10 text-[#00b58e] text-sm font-semibold mb-6">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                El cerebro de EverPark
              </div>

              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                360º Assistant
              </h3>

              <p className="text-xl md:text-2xl text-[#00b58e] font-medium mb-4">
                Tú solo quieres aparcar. Nosotros elegimos cómo.
              </p>

              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                El primer asistente de parking con IA. Dile dónde vas y te recomienda 
                la mejor opción entre calle, garaje o parking comercial.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Other products */}
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 + i * 0.15 }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className={`pill-card p-8 h-full transition-all duration-500 ${
                hoveredProduct === product.id ? 'scale-[1.02]' : ''
              }`}>
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center text-2xl mb-6 transition-transform duration-500 ${
                  hoveredProduct === product.id ? 'scale-110 rotate-3' : ''
                }`}>
                  {product.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>

                <p className={`text-sm font-medium mb-3 bg-gradient-to-r ${product.color} bg-clip-text text-transparent`}>
                  {product.tagline}
                </p>

                <p className="text-gray-500 text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

