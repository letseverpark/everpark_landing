'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from './LanguageProvider';

export default function HowItWorks() {
  const { language } = useTranslation();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const steps = [
    {
      number: '01',
      title: language === 'es' ? 'Dinos dónde' : 'Tell us where',
      description: language === 'es' 
        ? 'Escribe tu destino o selecciona un favorito. Nada más.'
        : 'Type your destination or select a favorite. That\'s it.',
    },
    {
      number: '02',
      title: language === 'es' ? 'Te recomendamos' : 'We recommend',
      description: language === 'es'
        ? 'El asistente analiza precio, tiempo y disponibilidad. Te muestra la mejor opción.'
        : 'The assistant analyzes price, time, and availability. Shows you the best option.',
    },
    {
      number: '03',
      title: language === 'es' ? 'Aparca' : 'Park',
      description: language === 'es'
        ? 'Elige, paga si hace falta, y navega. Menos de un minuto.'
        : 'Choose, pay if needed, navigate. Under a minute.',
    },
  ];

  return (
    <section id="como-funciona" ref={sectionRef} className="py-32 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-[#00b58e] font-medium text-sm tracking-wider uppercase mb-4 block">
            {language === 'es' ? 'Cómo funciona' : 'How it works'}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            {language === 'es' ? 'Tres pasos.' : 'Three steps.'}
            <br />
            <span className="text-gray-400">{language === 'es' ? 'Un minuto.' : 'One minute.'}</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="text-center md:text-left"
            >
              {/* Number */}
              <span className="font-mono text-6xl md:text-7xl font-bold text-gray-100 block mb-4">
                {step.number}
              </span>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-500 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
