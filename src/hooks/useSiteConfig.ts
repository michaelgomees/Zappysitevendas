
import siteConfig, { SiteConfig } from "@/config/siteConfig";

// Hook simples para acessar a configuração do site em qualquer componente
export const useSiteConfig = (): SiteConfig => {
  return siteConfig;
};
