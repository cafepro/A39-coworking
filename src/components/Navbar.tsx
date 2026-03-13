import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Language } from "@/i18n/translations";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  const navLinks = [
    { label: t.nav.inicio, href: "#inicio" },
    { label: t.nav.servicios, href: "#servicios" },
    { label: t.nav.espacios, href: "#espacios" },
    { label: t.nav.tarifas, href: "#tarifas" },
    { label: t.nav.contacto, href: "#contacto" },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : ("es" as Language));
  };

  return (
    <nav className="bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#inicio" className="font-heading text-2xl font-bold tracking-tight">
          <span className="text-gradient">Almacén</span>
          <span className="text-foreground"> 39</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleLanguage}
            className="text-sm font-semibold font-heading text-muted-foreground hover:text-primary transition-colors border border-border rounded-md px-2.5 py-1"
          >
            {language === "es" ? "EN" : "ES"}
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="text-sm font-semibold font-heading text-muted-foreground hover:text-primary transition-colors border border-border rounded-md px-2.5 py-1"
          >
            {language === "es" ? "EN" : "ES"}
          </button>
          <button
            className="text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background border-b border-border"
          >
            <div className="flex flex-col gap-4 px-4 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
