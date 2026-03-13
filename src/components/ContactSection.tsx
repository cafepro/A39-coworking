import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("¡Mensaje enviado! Te responderemos pronto.");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contacto" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-heading text-sm tracking-widest uppercase mb-3">Contacto</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">¡Escríbenos!</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Cuéntanos qué necesitas y te ayudamos a encontrar tu espacio ideal.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >
            <div>
              <label className="text-sm font-medium text-muted-foreground mb-1 block">Nombre</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground mb-1 block">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground mb-1 block">Mensaje</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={5}
                className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition resize-none"
                placeholder="Cuéntanos qué necesitas..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary text-primary-foreground font-heading font-semibold py-3 px-8 rounded-lg hover:brightness-110 transition glow-orange self-start"
            >
              Enviar mensaje
            </button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8 justify-center"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="text-primary" size={20} />
              </div>
              <div>
                <h4 className="font-heading font-semibold mb-1">Ubicación</h4>
                <p className="text-muted-foreground text-sm">Gijón, Asturias, España</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="text-primary" size={20} />
              </div>
              <div>
                <h4 className="font-heading font-semibold mb-1">Email</h4>
                <p className="text-muted-foreground text-sm">info@almacen39coworking.es</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="text-primary" size={20} />
              </div>
              <div>
                <h4 className="font-heading font-semibold mb-1">Teléfono</h4>
                <p className="text-muted-foreground text-sm">Contáctanos por email o redes</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
