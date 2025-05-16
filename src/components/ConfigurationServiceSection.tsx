
import React from 'react';
import { Settings, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ConfigurationServiceSection = () => {
  return (
    <section id="configuracao" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/4 flex justify-center">
              <div className="bg-primary/10 p-6 rounded-full">
                <Settings size={72} className="text-primary" />
              </div>
            </div>
            
            <div className="w-full md:w-3/4">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Serviço de Configuração Assistida
              </h2>
              
              <p className="text-lg mb-6">
                Sem tempo para configurar o sistema? Nossos especialistas podem fazer isso para você. 
                Oferecemos um serviço completo de configuração por um valor adicional.
              </p>
              
              <ul className="mb-8 space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-primary mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Configuração de campanhas personalizadas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Criação de fluxos de conversação otimizados</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Integração com seus sistemas existentes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Setup completo de disparos em massa</span>
                </li>
              </ul>
              
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Solicitar Configuração
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfigurationServiceSection;
