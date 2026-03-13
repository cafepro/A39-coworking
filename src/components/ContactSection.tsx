import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Mail, Instagram } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          name,
          email,
          message,
          subject: t.contact.emailSubject(name),
        }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success(t.contact.successToast);
        setName("");
        setEmail("");
        setMessage("");
      } else {
        toast.error(t.contact.errorToast);
      }
    } catch {
      toast.error(t.contact.connectionError);
    } finally {
      setIsLoading(false);
    }
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
          <p className="text-primary font-heading text-sm tracking-widest uppercase mb-3">{t.contact.sectionLabel}</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">{t.contact.title}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            {t.contact.subtitle}
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
              <label className="text-sm font-medium text-muted-foreground mb-1 block">{t.contact.nameLbl}</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                placeholder={t.contact.namePlaceholder}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground mb-1 block">{t.contact.emailLbl}</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                placeholder={t.contact.emailPlaceholder}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground mb-1 block">{t.contact.messageLbl}</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={5}
                className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition resize-none"
                placeholder={t.contact.messagePlaceholder}
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="bg-primary text-primary-foreground font-heading font-semibold py-3 px-8 rounded-lg hover:brightness-110 transition glow-orange self-start disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isLoading ? t.contact.submitting : t.contact.submit}
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
                <h4 className="font-heading font-semibold mb-1">{t.contact.locationLbl}</h4>
                <p className="text-muted-foreground text-sm">{t.contact.locationValue}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="text-primary" size={20} />
              </div>
              <div>
                <h4 className="font-heading font-semibold mb-1">{t.contact.emailContactLbl}</h4>
                <p className="text-muted-foreground text-sm">almacen39.coworking@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Instagram className="text-primary" size={20} />
              </div>
              <div>
                <h4 className="font-heading font-semibold mb-1">Instagram</h4>
                <a
                  href="https://www.instagram.com/almacen39.coworking"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  @almacen39.coworking
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
