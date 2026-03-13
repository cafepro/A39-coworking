import { motion } from "framer-motion";
import relaxImg from "@/assets/relax-zone.jpg";
import kitchenImg from "@/assets/kitchen.jpg";
import workspaceImg from "@/assets/workspace.jpg";
import petImg from "@/assets/petfriendly.jpg";
import meetingImg from "@/assets/meeting-room.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const images = [workspaceImg, meetingImg, kitchenImg, petImg, relaxImg];

const SpacesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="espacios" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-heading text-sm tracking-widest uppercase mb-3">{t.spaces.sectionLabel}</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            {t.spaces.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t.spaces.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.spaces.items.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-xl ${i === 0 ? "md:col-span-2 lg:col-span-2 aspect-[2/1]" : i === 1 ? "min-h-full" : "aspect-[4/3]"}`}
            >
              <img src={images[i]} alt={s.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="font-heading text-xl font-semibold mb-1">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpacesSection;
