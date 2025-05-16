
import React from 'react';
import { Smartphone, Tablet, Monitor } from 'lucide-react';
import { Button } from "@/components/ui/button";

const MobilitySection = () => {
  return (
    <section id="mobilidade" className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#ffbd2f]">
              Acesso Total em Qualquer Dispositivo
            </h2>
            
            <div className="mb-8">
              <p className="text-lg mb-4 text-white">
                Trabalhe de onde estiver, quando quiser. Nosso sistema foi desenvolvido para proporcionar a melhor 
                experiência em qualquer dispositivo.
              </p>
              
              <div className="bg-[#292826] border-l-4 border-[#ffbd2f] p-4 my-6">
                <p className="text-xl font-medium text-white">
                  "Use nosso sistema na palma da sua mão, onde estiver. Compatível com celulares, tablets e desktops para total liberdade."
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center bg-[#292826] p-3 rounded-lg shadow-sm border border-[#ffbd2f]/20">
                  <Smartphone size={24} className="text-[#ffbd2f] mr-2" />
                  <span className="text-white">Smartphones</span>
                </div>
                <div className="flex items-center bg-[#292826] p-3 rounded-lg shadow-sm border border-[#ffbd2f]/20">
                  <Tablet size={24} className="text-[#ffbd2f] mr-2" />
                  <span className="text-white">Tablets</span>
                </div>
                <div className="flex items-center bg-[#292826] p-3 rounded-lg shadow-sm border border-[#ffbd2f]/20">
                  <Monitor size={24} className="text-[#ffbd2f] mr-2" />
                  <span className="text-white">Desktops</span>
                </div>
              </div>
            </div>
            
            <Button className="bg-[#ffbd2f] hover:bg-[#ffbd2f]/90 text-black">
              Experimente Agora
            </Button>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Primeiro celular (levemente para trás) */}
              <div className="absolute transform -translate-x-8 scale-95 -rotate-6 shadow-xl rounded-3xl overflow-hidden w-72 h-[34rem] border-8 border-[#292826]">
                <div className="w-full h-full bg-[#292826]">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                    alt="ZappyBot no celular" 
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
              </div>
              
              {/* Segundo celular (em primeiro plano) */}
              <div className="relative z-10 shadow-xl rounded-3xl overflow-hidden w-72 h-[34rem] border-8 border-[#292826]">
                <div className="w-full h-full bg-[#292826]">
                  <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
                    alt="ZappyBot no celular" 
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobilitySection;
