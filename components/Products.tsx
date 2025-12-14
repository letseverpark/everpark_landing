'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from './LanguageProvider';

export default function Products() {
  const { language } = useTranslation();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const features = [
    {
      id: 'assistant',
      name: '360º Assistant',
      tagline: language === 'es' 
        ? 'Tú solo quieres aparcar. Nosotros elegimos cómo.' 
        : 'You just want to park. We choose how.',
      description: language === 'es'
        ? 'El primer asistente de parking con IA. Dile dónde vas y te recomienda la mejor opción según precio, tiempo y disponibilidad.'
        : 'The first AI parking assistant. Tell it where you\'re going and it recommends the best option based on price, time, and availability.',
      gradient: 'from-[#00b58e] to-[#00d4a8]',
      featured: true,
    },
    {
      id: 'exchanges',
      name: 'Exchanges',
      tagline: language === 'es' 
        ? 'Conectamos quien se va con quien llega.' 
        : 'We connect those leaving with those arriving.',
      description: language === 'es'
        ? 'Intercambia plazas en la calle en tiempo real. Gana dinero al irte, ahorra tiempo al llegar.'
        : 'Exchange street spots in real time. Earn money leaving, save time arriving.',
      gradient: 'from-blue-500 to-cyan-400',
    },
    {
      id: 'garages',
      name: 'Garages',
      tagline: language === 'es' 
        ? 'Garajes privados, precios públicos.' 
        : 'Private garages, public prices.',
      description: language === 'es'
        ? 'Alquila plazas de particulares por horas o días. Hasta un 60% más barato que un parking.'
        : 'Rent spots from private owners by hour or day. Up to 60% cheaper than parking lots.',
      gradient: 'from-purple-500 to-pink-400',
    },
    {
      id: 'finder',
      name: 'Finder',
      tagline: language === 'es' 
        ? 'Todos los parkings. Un solo lugar.' 
        : 'All parking lots. One place.',
      description: language === 'es'
        ? 'Compara precios y disponibilidad de parkings comerciales en tiempo real.'
        : 'Compare prices and availability of commercial parking in real time.',
      gradient: 'from-orange-500 to-amber-400',
    },
  ];

  return (
    <section id="productos" ref={sectionRef} className="py-32 px-6 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white" />
      
      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-[#00b58e] font-medium text-sm tracking-wider uppercase mb-4 block">
            {language === 'es' ? 'Producto' : 'Product'}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            {language === 'es' ? 'Cuatro formas de aparcar.' : 'Four ways to park.'}
            <br />
            <span className="text-[#00b58e]">{language === 'es' ? 'Una sola app.' : 'One app.'}</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            {language === 'es'
              ? 'No queremos que elijas cómo aparcar. Queremos que simplemente aparques.'
              : "We don't want you to choose how to park. We want you to just park."
            }
          </p>
        </motion.div>

        {/* Featured: 360º Assistant */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="feature-card p-8 md:p-12 lg:p-16">
            <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
              {/* Content */}
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00b58e]/10 text-[#00b58e] text-sm font-medium mb-6">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {language === 'es' ? 'Destacado' : 'Featured'}
                </div>
                
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  360º Assistant
                </h3>
                
                <p className="text-xl md:text-2xl text-[#00b58e] font-medium mb-6">
                  {features[0].tagline}
                </p>
                
                <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-xl">
                  {features[0].description}
                </p>

                <motion.a
                  href="#descargar"
                  className="btn-glass-primary px-6 py-3 rounded-full inline-flex items-center gap-2 text-base"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {language === 'es' ? 'Probar asistente' : 'Try assistant'}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.a>
              </div>

              {/* Visual placeholder */}
              <div className="flex-1 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-sm aspect-[9/16] bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl border border-gray-200 overflow-hidden">
                  {/* Phone frame hint */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-gray-200 rounded-full" />
                  
                  {/* Placeholder content */}
                  <div className="absolute inset-6 top-14 flex flex-col">
                    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-3">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-full bg-[#00b58e]/10 flex items-center justify-center">
                          <span className="text-sm">🤖</span>
                        </div>
                        <span className="text-xs text-gray-500">360º Assistant</span>
                      </div>
                      <div className="h-3 bg-gray-100 rounded-full w-3/4 mb-2" />
                      <div className="h-3 bg-gray-100 rounded-full w-1/2" />
                    </div>
                    
                    <div className="flex gap-2 mt-auto">
                      <div className="flex-1 bg-[#00b58e]/10 rounded-xl p-3 border border-[#00b58e]/20">
                        <div className="text-xs text-[#00b58e] font-medium mb-1">Exchange</div>
                        <div className="h-2 bg-[#00b58e]/20 rounded-full w-2/3" />
                      </div>
                      <div className="flex-1 bg-gray-50 rounded-xl p-3 border border-gray-100">
                        <div className="text-xs text-gray-400 mb-1">Garage</div>
                        <div className="h-2 bg-gray-200 rounded-full w-2/3" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Replace with your screenshot */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] text-gray-300">
                    Screenshot placeholder
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other features - minimal cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.slice(1).map((feature, i) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
            >
              <div className="feature-card p-8 h-full flex flex-col">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 opacity-80`}>
                  <span className="text-white text-xl">
                    {feature.id === 'exchanges' ? '↔️' : feature.id === 'garages' ? '🏠' : '📍'}
                  </span>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.name}
                </h3>
                
                <p className={`text-sm font-medium mb-3 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                  {feature.tagline}
                </p>
                
                <p className="text-gray-500 text-sm leading-relaxed flex-grow">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
