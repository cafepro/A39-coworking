import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-heading text-lg font-bold">
          <span className="text-gradient">Almacén</span> 39
        </p>
        <p className="text-muted-foreground text-sm">
          {t.footer.copyright(new Date().getFullYear())}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
