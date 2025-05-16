
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

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <FeaturesSection />
      <MobilitySection />
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
