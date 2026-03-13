import { useState } from "react";
import { X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const DisclaimerBanner = () => {
  const [dismissed, setDismissed] = useState(false);
  const { t } = useLanguage();

  if (dismissed) return null;

  return (
    <div className="relative z-50 bg-primary/10 border-b border-primary/20 px-4 py-2.5 flex items-center justify-center gap-3 text-sm text-foreground">
      <p className="text-center">{t.disclaimer.message}</p>
      <button
        onClick={() => setDismissed(true)}
        className="flex-shrink-0 flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary/80 transition-colors border border-primary/30 rounded-md px-2 py-1"
      >
        {t.disclaimer.close}
        <X size={12} />
      </button>
    </div>
  );
};

export default DisclaimerBanner;
