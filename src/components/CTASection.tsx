
import React from 'react';
import { Button } from "@/components/ui/button";
import { useSiteConfig } from '@/hooks/useSiteConfig';

const CTASection = () => {
  const config = useSiteConfig();
  
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#292826] to-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#FFBD2F]">
            Pronto para transformar suas conversas em vendas?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Junte-se a mais de 1.000 empresas que já estão usando nossa plataforma para revolucionar o atendimento e aumentar as conversões.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#FFBD2F] text-black hover:bg-[#FFBD2F]/90 text-lg py-6 px-8" asChild>
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
        </div>
      </div>
    </section>
  );
};

export default CTASection;
