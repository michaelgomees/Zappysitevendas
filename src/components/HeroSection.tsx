
import React from 'react';
import { Button } from "@/components/ui/button";
import { useSiteConfig } from '@/hooks/useSiteConfig';
import CompanyLogos from './CompanyLogos';

const HeroSection = () => {
  const config = useSiteConfig();
  
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Transforme suas <span className="bg-gradient-to-r from-[#FFBD2F] to-[#FFBD2F]/80 bg-clip-text text-transparent">conversas</span> em vendas
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-lg">
              Automatize o atendimento, qualifique leads e aumente suas conversões com nossa plataforma de marketing conversacional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#FFBD2F] hover:bg-[#FFBD2F]/90 text-black text-lg py-6 px-8" asChild>
                <a href={config.buttons.scheduleDemo}>
                  Agendar uma demonstração
                </a>
              </Button>
              <Button variant="outline" className="border-[#FFBD2F] text-[#FFBD2F] hover:bg-[#FFBD2F]/10 text-lg py-6 px-8" asChild>
                <a href={config.buttons.seePlans}>
                  Ver planos
                </a>
              </Button>
            </div>
            <div className="mt-8">
              <p className="text-gray-300 mb-2">
                <span className="font-bold text-[#FFBD2F]">+1.000</span> empresas já utilizam
              </p>
              <CompanyLogos />
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="rounded-xl overflow-hidden shadow-2xl border border-[#292826]/50">
              <div className="aspect-video bg-[#292826] w-full">
                <img
                  src={config.images.hero}
                  alt="Plataforma em ação"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
