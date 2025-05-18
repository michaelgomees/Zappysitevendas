
import React from 'react';
import { Bot, Clock, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useSiteConfig } from '@/hooks/useSiteConfig';

const ZappynSection = () => {
  const config = useSiteConfig();
  
  return (
    <section id="zappyn" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#292826]"></div>
      {/* Elementos decorativos de IA */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full border border-[#ffbd2f] animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full border border-[#ffbd2f] animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-16 h-16 rounded-full border border-[#ffbd2f] animate-pulse"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full border border-[#ffbd2f] animate-pulse"></div>
        
        {/* Linhas tecnológicas */}
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ffbd2f]/30 to-transparent"></div>
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ffbd2f]/30 to-transparent"></div>
        <div className="absolute left-1/3 top-0 w-px h-full bg-gradient-to-b from-transparent via-[#ffbd2f]/30 to-transparent"></div>
        <div className="absolute left-2/3 top-0 w-px h-full bg-gradient-to-b from-transparent via-[#ffbd2f]/30 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            {/* Removido o box e containers para permitir uma imagem maior */}
            <img
              src={config.images.zappyn}
              alt="Assistente de IA Zappyn"
              className="max-w-full max-h-[500px] object-contain"
            />
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#ffbd2f]">
              Conheça o Zappyn
            </h2>
            
            <p className="text-lg text-white mb-6">
              Seu assistente de IA disponível <span className="text-[#ffbd2f] font-bold">24 horas por dia</span>, 
              pronto para responder todas as dúvidas dos seus clientes instantaneamente.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start bg-[#292826] border border-[#ffbd2f]/30 p-4 rounded-lg">
                <Bot className="text-[#ffbd2f] mr-4 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-[#ffbd2f] mb-1">Suporte Inteligente</h3>
                  <p className="text-gray-300">Atendimento automático e personalizado para cada cliente, com capacidade de aprendizado contínuo.</p>
                </div>
              </div>
              
              <div className="flex items-start bg-[#292826] border border-[#ffbd2f]/30 p-4 rounded-lg">
                <Clock className="text-[#ffbd2f] mr-4 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-[#ffbd2f] mb-1">Disponível 24/7</h3>
                  <p className="text-gray-300">Nunca mais perca um cliente por falta de atendimento. O Zappyn está sempre online.</p>
                </div>
              </div>
              
              <div className="flex items-start bg-[#292826] border border-[#ffbd2f]/30 p-4 rounded-lg">
                <MessageCircle className="text-[#ffbd2f] mr-4 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-[#ffbd2f] mb-1">Conversas Naturais</h3>
                  <p className="text-gray-300">Interações que parecem humanas, criando uma experiência de atendimento excepcional.</p>
                </div>
              </div>
            </div>
            
            <Button className="bg-[#ffbd2f] hover:bg-[#ffbd2f]/90 text-black group" asChild>
              <a href={config.buttons.talkToZappyn}>
                Converse com Zappyn agora
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZappynSection;
