import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroImg from "@/assets/hero-coworking.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Almacén 39 Coworking" className="w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-primary font-heading text-lg tracking-widest uppercase mb-4"
        >
          {t.hero.tagline}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          <span className="text-gradient">Almacén</span>{" "}
          <span className="text-foreground">39</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          {t.hero.description}
        </motion.p>

        <motion.a
          href="#contacto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-heading font-semibold text-lg hover:brightness-110 transition glow-orange"
        >
          {t.hero.cta}
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#servicios" className="text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown className="animate-bounce" size={28} />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
