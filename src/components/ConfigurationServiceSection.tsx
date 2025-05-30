
import React from 'react';
import { Settings, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useSiteConfig } from '@/hooks/useSiteConfig';

const ConfigurationServiceSection = () => {
  const config = useSiteConfig();
  
  return (
    <section id="configuracao" className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-[#292826] rounded-2xl p-8 md:p-12 shadow-lg border border-[#FFBD2F]/20 hover-glow">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/4 flex justify-center">
              <div className="bg-[#FFBD2F]/10 p-6 rounded-full">
                <Settings size={72} className="text-[#FFBD2F]" />
              </div>
            </div>
            
            <div className="w-full md:w-3/4">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#FFBD2F]">
                Serviço de Configuração Assistida
              </h2>
              
              <p className="text-lg mb-6 text-white">
                Sem tempo para configurar o sistema? Nossos especialistas podem fazer isso para você. 
                Oferecemos um serviço completo de configuração por um valor adicional.
              </p>
              
              <ul className="mb-8 space-y-3 text-white">
                <li className="flex items-start">
                  <CheckCircle className="text-[#FFBD2F] mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Configuração de campanhas personalizadas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#FFBD2F] mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Criação de fluxos de conversação otimizados</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#FFBD2F] mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Integração com seus sistemas existentes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#FFBD2F] mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Setup completo de disparos em massa</span>
                </li>
              </ul>
              
              <Button className="bg-[#FFBD2F] hover:bg-[#FFBD2F]/90 text-black" asChild>
                <a href={config.buttons.requestSetup}>
                  Solicitar Configuração
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfigurationServiceSection;
