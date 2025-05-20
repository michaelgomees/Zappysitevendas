
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import FeaturesSection from '@/components/FeaturesSection';
import VideoTabsSection from '@/components/VideoTabsSection';
import EnhancedFeaturesSection from '@/components/EnhancedFeaturesSection';
import MobilitySection from '@/components/MobilitySection';
import ConfigurationServiceSection from '@/components/ConfigurationServiceSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import ZappynSection from '@/components/ZappynSection';
import IntegrationsCarousel from '@/components/IntegrationsCarousel';
// Importando o hook de configuração para estar disponível em toda a aplicação
import { useSiteConfig } from '@/hooks/useSiteConfig';

const Index = () => {
  // Carregando a configuração para ter disponível caso seja necessário
  const config = useSiteConfig();
  
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <FeaturesSection />
      <MobilitySection />
      <IntegrationsCarousel />
      <VideoTabsSection />
      <EnhancedFeaturesSection />
      <ZappynSection />
      <ConfigurationServiceSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
