import { motion } from "framer-motion";
import { Wifi, Coffee, Printer, Clock, Dog, Bike } from "lucide-react";

const features = [
  { icon: Wifi, title: "WiFi de alta velocidad", desc: "Conexión estable para trabajar sin interrupciones" },
  { icon: Clock, title: "Acceso 24/7", desc: "Trabaja en el horario que mejor se adapte a ti" },
  { icon: Bike, title: "Parking de bicis", desc: "Espacio seguro para dejar tu bici" },
  { icon: Coffee, title: "Café y té", desc: "Y alguna cerveza también para los momentos de relax" },
  { icon: Dog, title: "Pet friendly", desc: "Tu amigo peludo es bienvenida en nuestro espacio" },
  { icon: Printer, title: "Impresora", desc: "Imprime tus documentos siempre que lo necesites" },
];

const AboutSection = () => {
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
          <p className="text-primary font-heading text-sm tracking-widest uppercase mb-3">Nuestros servicios</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            El lugar perfecto para trabajar
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Un espacio acogedor donde reina el buen rollo. Nos adaptamos a tus necesidades y horarios.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-all hover:glow-orange"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
                <f.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
