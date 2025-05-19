
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
    extras: string;
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
    logo: "/lovable-uploads/3a2f0fee-bae1-4a5f-835e-a247d0f7021d.png",
    hero: "/lovable-uploads/9dec70e8-576e-4284-9a81-81a06f353cf2.png",
    zappyn: "/lovable-uploads/29e9dc56-4093-4479-912b-157682756311.png",
    features: {
      chatbots: "https://images.unsplash.com/photo-1531746790731-6bf607ccffaf?auto=format&fit=crop&q=80", // IA e chatbots
      multicanal: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80", // Automação
      analytics: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80", // Análise de dados
      crm: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&q=80" // CRM e gestão
    },
    mobility: {
      phone1: "/lovable-uploads/353666eb-3684-4a77-8259-ed518b46f6d2.png",
      phone2: "/lovable-uploads/353666eb-3684-4a77-8259-ed518b46f6d2.png"
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
    enterprisePlan: "#",
    extras: "#"
  },
  
  socialMedia: {
    facebook: "https://facebook.com/zappybot",
    instagram: "https://instagram.com/zappybot",
    chat: "https://api.whatsapp.com/send?phone=558197672133",
    phone: "tel:+558197672133",
    email: "mailto:zappyautomacoes@gmail.com"
  }
};

export default siteConfig;
