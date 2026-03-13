export const translations = {
  es: {
    nav: {
      inicio: "Inicio",
      servicios: "Servicios",
      espacios: "Espacios",
      tarifas: "Tarifas",
      contacto: "Contacto",
    },
    hero: {
      tagline: "Coworking en Gijón",
      description:
        "Tu espacio de trabajo en Asturias. Mesas individuales, ambiente acogedor y todo lo que necesitas para ser productivo.",
      cta: "Ven a conocernos",
    },
    about: {
      sectionLabel: "Nuestros servicios",
      title: "El lugar perfecto para trabajar",
      subtitle:
        "Un espacio acogedor donde reina el buen rollo. Nos adaptamos a tus necesidades y horarios.",
      features: [
        { title: "WiFi de alta velocidad", desc: "Conexión estable para trabajar sin interrupciones" },
        { title: "Acceso 24/7", desc: "Trabaja en el horario que mejor se adapte a ti" },
        { title: "Parking de bicis", desc: "Espacio seguro para dejar tu bici" },
        { title: "Café y té", desc: "Y alguna cerveza también para los momentos de relax" },
        { title: "Pet friendly", desc: "Tu amigo peludo es bienvenido en nuestro espacio" },
        { title: "Impresora", desc: "Imprime tus documentos siempre que lo necesites" },
      ],
    },
    spaces: {
      sectionLabel: "Nuestros espacios",
      title: "Porque los detalles cuentan",
      subtitle: "Descubre todo lo que significa ser un Coworker39.",
      items: [
        { title: "Espacio de trabajo", desc: "Mesas individuales con todo lo necesario" },
        { title: "Cabinas de videollamadas", desc: "Espacio privado y silencioso para tus calls" },
        { title: "Cocina equipada", desc: "Café, nevera y todo para tu pausa" },
        { title: "Pet friendly", desc: "Trae a tu peludo compañero" },
        { title: "Zona de relax", desc: "Desconecta y recarga energías" },
      ],
    },
    pricing: {
      sectionLabel: "Tarifas",
      title: "¿Cuánto me va a costar?",
      subtitle: "Todos los precios tienen el IVA incluido.",
      popular: "Popular",
      contactBtn: "Contactar",
      footnote: "¿Tienes otras necesidades? Cuéntanoslo y te ayudamos",
      plans: [
        {
          name: "1 día",
          period: "/día",
          features: ["Acceso de lunes a viernes", "Espacio individual", "Uso de áreas comunes", "Horario de oficina"],
        },
        {
          name: "1 semana",
          period: "/semana",
          features: ["Acceso de lunes a viernes", "Espacio individual", "Uso de áreas comunes", "Uso de impresora"],
        },
        {
          name: "Mensual",
          period: "/mes",
          features: ["Acceso 24/7", "Espacio individual", "Uso de áreas comunes", "Uso de impresora"],
        },
      ],
    },
    contact: {
      sectionLabel: "Contacto",
      title: "¡Escríbenos!",
      subtitle: "Cuéntanos qué necesitas y te ayudamos a encontrar tu espacio ideal.",
      nameLbl: "Nombre",
      namePlaceholder: "Tu nombre",
      emailLbl: "Email",
      emailPlaceholder: "tu@email.com",
      messageLbl: "Mensaje",
      messagePlaceholder: "Cuéntanos qué necesitas...",
      submit: "Enviar mensaje",
      submitting: "Enviando...",
      successToast: "¡Mensaje enviado! Te responderemos pronto.",
      errorToast: "Algo salió mal. Por favor, inténtalo de nuevo.",
      connectionError: "Error de conexión. Por favor, inténtalo de nuevo.",
      emailSubject: (name: string) => `Nuevo mensaje de contacto de ${name}`,
      locationLbl: "Ubicación",
      locationValue: "Calle Alarcón 39, Gijón, Asturias, España",
      emailContactLbl: "Email",
    },
    disclaimer: {
      message: "🚧 Web en construcción. Las imágenes mostradas son ilustrativas y no corresponden al espacio real.",
      close: "Entendido",
    },
    footer: {
      copyright: (year: number) => `© ${year} Almacén 39 Coworking. Gijón, Asturias.`,
    },
  },

  en: {
    nav: {
      inicio: "Home",
      servicios: "Services",
      espacios: "Spaces",
      tarifas: "Pricing",
      contacto: "Contact",
    },
    hero: {
      tagline: "Coworking in Gijón",
      description:
        "Your workspace in Asturias. Individual desks, a welcoming atmosphere and everything you need to be productive.",
      cta: "Come meet us",
    },
    about: {
      sectionLabel: "Our services",
      title: "The perfect place to work",
      subtitle:
        "A cozy space with a great vibe. We adapt to your needs and schedule.",
      features: [
        { title: "High-speed WiFi", desc: "Stable connection to work without interruptions" },
        { title: "24/7 access", desc: "Work whenever suits you best" },
        { title: "Bike parking", desc: "Secure space to leave your bike" },
        { title: "Coffee & tea", desc: "And the occasional beer for those relaxing moments" },
        { title: "Pet friendly", desc: "Your furry friend is welcome in our space" },
        { title: "Printer", desc: "Print your documents whenever you need" },
      ],
    },
    spaces: {
      sectionLabel: "Our spaces",
      title: "Because details matter",
      subtitle: "Discover what it means to be a Coworker39.",
      items: [
        { title: "Workspace", desc: "Individual desks with everything you need" },
        { title: "Video call booths", desc: "Private and quiet space for your calls" },
        { title: "Equipped kitchen", desc: "Coffee, fridge and everything for your break" },
        { title: "Pet friendly", desc: "Bring your furry companion" },
        { title: "Relax zone", desc: "Disconnect and recharge" },
      ],
    },
    pricing: {
      sectionLabel: "Pricing",
      title: "How much will it cost?",
      subtitle: "All prices include VAT.",
      popular: "Popular",
      contactBtn: "Get in touch",
      footnote: "Have other needs? Tell us and we'll help you out",
      plans: [
        {
          name: "1 day",
          period: "/day",
          features: ["Monday to Friday access", "Individual desk", "Common areas", "Office hours"],
        },
        {
          name: "1 week",
          period: "/week",
          features: ["Monday to Friday access", "Individual desk", "Common areas", "Printer included"],
        },
        {
          name: "Monthly",
          period: "/month",
          features: ["24/7 access", "Individual desk", "Common areas", "Printer included"],
        },
      ],
    },
    contact: {
      sectionLabel: "Contact",
      title: "Write to us!",
      subtitle: "Tell us what you need and we'll help you find your ideal space.",
      nameLbl: "Name",
      namePlaceholder: "Your name",
      emailLbl: "Email",
      emailPlaceholder: "you@email.com",
      messageLbl: "Message",
      messagePlaceholder: "Tell us what you need...",
      submit: "Send message",
      submitting: "Sending...",
      successToast: "Message sent! We'll get back to you soon.",
      errorToast: "Something went wrong. Please try again.",
      connectionError: "Connection error. Please try again.",
      emailSubject: (name: string) => `New contact message from ${name}`,
      locationLbl: "Location",
      locationValue: "Calle Alarcón 39, Gijón, Asturias, Spain",
      emailContactLbl: "Email",
    },
    disclaimer: {
      message: "🚧 Site under construction. Images shown are illustrative and do not represent the actual space.",
      close: "Got it",
    },
    footer: {
      copyright: (year: number) => `© ${year} Almacén 39 Coworking. Gijón, Asturias.`,
    },
  },
} as const;

export type Language = keyof typeof translations;
export type Translations = typeof translations.es;
