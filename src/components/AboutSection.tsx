import { motion } from "framer-motion";
import { Wifi, Coffee, Printer, Clock, Dog, Bike } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const icons = [Wifi, Clock, Bike, Coffee, Dog, Printer];

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="servicios" className="py-24 bg-warm-gradient">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-heading text-sm tracking-widest uppercase mb-3">{t.about.sectionLabel}</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            {t.about.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t.about.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.about.features.map((f, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-all hover:glow-orange"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
