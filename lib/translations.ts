export type Language = 'es' | 'en';

export const translations = {
  es: {
    // Navbar
    nav: {
      howItWorks: '¿Cómo funciona?',
      products: 'Productos',
      problem: 'El Problema',
      cta: 'Pruébalo ahora',
    },
    
    // Hero
    hero: {
      title1: 'Encuentra aparcamiento',
      title2: 'en minutos, siempre',
      subtitle: 'La app todo-en-uno para aparcar',
      description: 'Conectamos quienes buscan plaza con quienes la dejan. Garajes privados, parkings comerciales y un asistente inteligente que elige por ti.',
      cta: 'Empieza gratis',
      stats: {
        hours: '100h/año',
        hoursDesc: 'perdidas buscando parking',
        minutes: '25 min',
        minutesDesc: 'de media dando vueltas',
        jams: '30%',
        jamsDesc: 'de atascos por buscar plaza',
      },
    },
    
    // Problem Section
    problem: {
      title: '¿Por qué seguimos perdiendo tiempo aparcando?',
      subtitle: 'Hemos digitalizado taxis, comida, pagos, y hasta nuestros emails los escribe la IA. Pero seguimos dando 40 vueltas esperando que alguien se vaya.',
      stat1: {
        value: '100',
        suffix: 'h/año',
        label: 'Tiempo perdido buscando parking en Europa',
      },
      stat2: {
        value: '30',
        suffix: '%',
        label: 'De los atascos son por buscar aparcamiento',
      },
      stat3: {
        value: '20',
        suffix: '%',
        label: 'De emisiones de tráfico por este problema',
      },
      conclusion: 'EverPark resuelve un problema de tiempo, movilidad y medio ambiente.',
    },
    
    // Products Section (4 Pillars)
    products: {
      title: 'EverPark 360º',
      subtitle: 'La solución todo-en-uno para aparcar',
      exchanges: {
        name: 'EverPark Exchanges',
        tagline: 'Gana dinero al irte, ahorra tiempo al llegar',
        description: 'Conectamos a quien deja su plaza en la calle con quien busca una en la misma zona y momento.',
        features: ['Ofrece o busca plaza', 'Match por zona y tiempo', 'Recompensas por esperar'],
      },
      garages: {
        name: 'EverPark Garages',
        tagline: 'Tu garaje, tu ingreso extra',
        description: 'Marketplace de plazas de garaje privadas. Alquila por horas, días o períodos.',
        features: ['Monetiza tu plaza vacía', 'Opciones más baratas', 'Alquiler flexible'],
      },
      finder: {
        name: 'Parking Finder',
        tagline: 'La opción rápida cuando hay prisa',
        description: 'Encuentra parkings comerciales cercanos. Compara precios por hora en el mapa.',
        features: ['Parkings cercanos', 'Precios a un vistazo', 'Navegación directa'],
      },
      assistant: {
        name: '360º Assistant',
        tagline: 'Solo quieres aparcar. Nosotros elegimos cómo.',
        description: 'El primer asistente específico de parking. Analiza día, zona, hora y te recomienda la mejor opción.',
        features: ['Análisis de contexto', 'Recomendación inteligente', 'Todo en un flujo'],
        badge: 'IA',
      },
    },
    
    // How It Works
    howItWorks: {
      title: '¿Cómo funciona?',
      subtitle: 'Tres pasos para olvidarte del problema de aparcar',
      step1: {
        title: 'Busca o indica destino',
        description: 'Escribe dónde quieres aparcar o selecciona tus lugares favoritos.',
      },
      step2: {
        title: 'El asistente recomienda',
        description: 'Analizamos zona, hora y opciones para darte la mejor solución.',
      },
      step3: {
        title: 'Aparca y listo',
        description: 'Elige opción, paga si es necesario, y aparca. Todo en la app.',
      },
    },
    
    // Footer / CTA
    footer: {
      tagline: 'El futuro de la movilidad es EverPark',
      taglineEn: 'The future of mobility is EverPark',
      cta: 'Únete a la revolución',
      ctaDescription: 'Sé de los primeros en probar EverPark en Valencia',
      rights: '© EverPark. Todos los derechos reservados',
      madeIn: 'Hecho en España con ❤️',
    },
  },
  
  en: {
    // Navbar
    nav: {
      howItWorks: 'How it works?',
      products: 'Products',
      problem: 'The Problem',
      cta: 'Try it now',
    },
    
    // Hero
    hero: {
      title1: 'Find parking',
      title2: 'in minutes, always',
      subtitle: 'The all-in-one parking app',
      description: 'We connect people searching for a spot with others leaving theirs. Private garages, commercial parking, and a smart assistant that chooses for you.',
      cta: 'Start for free',
      stats: {
        hours: '100h/year',
        hoursDesc: 'lost looking for parking',
        minutes: '25 min',
        minutesDesc: 'average circling around',
        jams: '30%',
        jamsDesc: 'of jams caused by parking search',
      },
    },
    
    // Problem Section
    problem: {
      title: 'Why do we still waste time parking?',
      subtitle: "We've digitized taxis, food, payments, and even our emails are written by AI. But we still circle 40 times hoping someone magically leaves.",
      stat1: {
        value: '100',
        suffix: 'h/year',
        label: 'Time lost searching for parking in Europe',
      },
      stat2: {
        value: '30',
        suffix: '%',
        label: 'Of traffic jams are caused by parking search',
      },
      stat3: {
        value: '20',
        suffix: '%',
        label: 'Of traffic emissions from this problem',
      },
      conclusion: 'EverPark solves a problem of time, mobility, and environment.',
    },
    
    // Products Section (4 Pillars)
    products: {
      title: 'EverPark 360º',
      subtitle: 'The all-in-one parking solution',
      exchanges: {
        name: 'EverPark Exchanges',
        tagline: 'Earn when you leave, save time when you arrive',
        description: 'We connect those leaving their street spot with those searching in the same area and time.',
        features: ['Offer or search spots', 'Match by zone & time', 'Rewards for waiting'],
      },
      garages: {
        name: 'EverPark Garages',
        tagline: 'Your garage, your extra income',
        description: 'Private garage space marketplace. Rent by hours, days, or periods.',
        features: ['Monetize your empty spot', 'Cheaper options', 'Flexible rental'],
      },
      finder: {
        name: 'Parking Finder',
        tagline: 'The quick option when in a hurry',
        description: 'Find nearby commercial parking. Compare hourly rates on the map.',
        features: ['Nearby parking', 'Prices at a glance', 'Direct navigation'],
      },
      assistant: {
        name: '360º Assistant',
        tagline: 'You just want to park. We choose how.',
        description: 'The first parking-specific assistant. Analyzes day, zone, time and recommends the best option.',
        features: ['Context analysis', 'Smart recommendation', 'All in one flow'],
        badge: 'AI',
      },
    },
    
    // How It Works
    howItWorks: {
      title: 'How does it work?',
      subtitle: 'Three steps to forget about the parking problem',
      step1: {
        title: 'Search or set destination',
        description: 'Type where you want to park or select your favorite places.',
      },
      step2: {
        title: 'The assistant recommends',
        description: 'We analyze zone, time, and options to give you the best solution.',
      },
      step3: {
        title: 'Park and done',
        description: 'Choose option, pay if needed, and park. All in the app.',
      },
    },
    
    // Footer / CTA
    footer: {
      tagline: 'The future of mobility is EverPark',
      taglineEn: 'The future of mobility is EverPark',
      cta: 'Join the revolution',
      ctaDescription: 'Be among the first to try EverPark in Valencia',
      rights: '© EverPark. All rights reserved',
      madeIn: 'Made in Spain with ❤️',
    },
  },
} as const;

export type Translations = typeof translations.es;

