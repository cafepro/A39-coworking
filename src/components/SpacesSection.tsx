import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import relaxImg from "@/assets/relax-zone.jpg";
import kitchenImg from "@/assets/kitchen.jpg";
import workspaceImg from "@/assets/workspace.jpg";
import petImg from "@/assets/petfriendly.jpg";
import meetingImg from "@/assets/video-booths.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const images = [workspaceImg, meetingImg, kitchenImg, petImg, relaxImg];

const SpacesSection = () => {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowRight" && selected !== null) setSelected((selected + 1) % images.length);
      if (e.key === "ArrowLeft" && selected !== null) setSelected((selected - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  useEffect(() => {
    document.body.style.overflow = selected !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

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
              onClick={() => setSelected(i)}
              className={`group relative overflow-hidden rounded-xl cursor-zoom-in ${i === 0 ? "md:col-span-2 lg:col-span-2 aspect-[2/1]" : i === 1 ? "min-h-full" : "aspect-[4/3]"}`}
            >
              <img src={images[i]} alt={s.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-background/60 backdrop-blur-sm rounded-full p-3">
                  <ZoomIn className="text-foreground" size={22} />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="font-heading text-xl font-semibold mb-1">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-md p-4"
            onClick={() => setSelected(null)}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 bg-card border border-border rounded-full p-2 hover:text-primary transition-colors"
              onClick={() => setSelected(null)}
            >
              <X size={20} />
            </button>

            {/* Prev */}
            <button
              className="absolute left-4 bg-card border border-border rounded-full px-3 py-2 text-sm font-semibold hover:text-primary transition-colors"
              onClick={(e) => { e.stopPropagation(); setSelected((selected - 1 + images.length) % images.length); }}
            >
              ‹
            </button>

            {/* Image */}
            <motion.div
              key={selected}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[selected]}
                alt={t.spaces.items[selected].title}
                className="w-full max-h-[80vh] object-contain rounded-xl"
              />
              <div className="text-center mt-4">
                <h3 className="font-heading font-semibold text-lg">{t.spaces.items[selected].title}</h3>
                <p className="text-muted-foreground text-sm">{t.spaces.items[selected].desc}</p>
              </div>
            </motion.div>

            {/* Next */}
            <button
              className="absolute right-4 bg-card border border-border rounded-full px-3 py-2 text-sm font-semibold hover:text-primary transition-colors"
              onClick={(e) => { e.stopPropagation(); setSelected((selected + 1) % images.length); }}
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SpacesSection;
