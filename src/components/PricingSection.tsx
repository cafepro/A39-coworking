import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const prices = ["15€", "55€", "155€"];
const highlighted = [false, true, false];

const PricingSection = () => {
  const { t } = useLanguage();

  return (
    <section id="tarifas" className="py-24 bg-warm-gradient">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-heading text-sm tracking-widest uppercase mb-3">{t.pricing.sectionLabel}</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            {t.pricing.title}
          </h2>
          <p className="text-muted-foreground text-lg">{t.pricing.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto items-center">
          {t.pricing.plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`rounded-xl border flex flex-col ${
                highlighted[i]
                  ? "border-primary bg-card glow-orange z-10 py-6 px-7"
                  : "border-border bg-card py-6 px-6"
              }`}
            >
              {highlighted[i] && (
                <span className="text-xs font-heading font-semibold text-primary uppercase tracking-wider mb-2">
                  {t.pricing.popular}
                </span>
              )}
              <h3 className="font-heading text-xl font-semibold mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-heading font-bold text-gradient">{prices[i]}</span>
                <span className="text-muted-foreground text-sm">{plan.period}</span>
              </div>
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check size={16} className="text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contacto"
                className={`text-center py-3 rounded-lg font-heading font-semibold transition ${
                  highlighted[i]
                    ? "bg-primary text-primary-foreground hover:brightness-110"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {t.pricing.contactBtn}
              </a>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-8">
          {t.pricing.footnote}
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
