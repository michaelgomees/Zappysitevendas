
// Arquivo de configuração central para fácil personalização do site
export interface SiteConfig {
  // Imagens do site
  images: {
    logo: string;
    hero: string;
    zappyn: string;
    features: {
      chatbots: string;
      multicanal: string;
      analytics: string;
      crm: string;
    };
    mobility: {
      phone1: string;
      phone2: string;
    };
  };
  
  // Vídeos
  videos: {
    flowbuilderDemo: string;
    additional: string;
  };
  
  // Links de botões
  buttons: {
    // Header
    startNow: string;
    
    // Hero section
    scheduleDemo: string;
    seePlans: string;
    
    // Mobility section
    tryNow: string;
    
    // Zappyn section
    talkToZappyn: string;
    
    // Configuration section
    requestSetup: string;
    
    // Pricing section
    starterPlan: string;
    professionalPlan: string;
    enterprisePlan: string;
  };
  
  // Links de redes sociais
  socialMedia: {
    facebook: string;
    instagram: string;
    chat: string;
    phone: string;
    email: string;
  };
}

// Configuração padrão do site
// Você pode modificar estes valores diretamente neste arquivo
const siteConfig: SiteConfig = {
  images: {
    logo: "/lovable-uploads/f0b58f0b-0691-40da-9ede-94eb8346ef01.png",
    hero: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    zappyn: "/lovable-uploads/c774c106-fa85-4635-9fc0-cc53adae1aeb.png",
    features: {
      chatbots: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
      multicanal: "https://images.unsplash.com/photo-1551434678-e076c223a692",
      analytics: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      crm: "https://images.unsplash.com/photo-1522071820081-009f0129c71c"
    },
    mobility: {
      phone1: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      phone2: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
    }
  },
  
  videos: {
    flowbuilderDemo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    additional: ""
  },
  
  buttons: {
    // Header
    startNow: "#",
    
    // Hero section
    scheduleDemo: "#",
    seePlans: "#precos",
    
    // Mobility section
    tryNow: "#",
    
    // Zappyn section
    talkToZappyn: "#",
    
    // Configuration section
    requestSetup: "#",
    
    // Pricing section
    starterPlan: "#",
    professionalPlan: "#",
    enterprisePlan: "#"
  },
  
  socialMedia: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    chat: "https://api.whatsapp.com/send?phone=5500000000000",
    phone: "tel:+5500000000000",
    email: "mailto:contato@exemplo.com"
  }
};

export default siteConfig;
