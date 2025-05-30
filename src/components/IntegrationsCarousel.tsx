
import React, { useEffect, useRef } from 'react';
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// Lista de integrações disponíveis
const integrations = [
  { name: "Dialogflow", icon: "🤖", bgColor: "bg-blue-500" },
  { name: "n8n", icon: "🔄", bgColor: "bg-orange-500" },
  { name: "Webhooks", icon: "🔌", bgColor: "bg-purple-500" },
  { name: "Typebot", icon: "💬", bgColor: "bg-green-500" },
  { name: "Make", icon: "⚙️", bgColor: "bg-red-500" },
  { name: "Kwify", icon: "🌟", bgColor: "bg-cyan-500" },
  { name: "Eduzz", icon: "💰", bgColor: "bg-yellow-500" },
  { name: "Asaas", icon: "💳", bgColor: "bg-pink-500" }
];

// Componente para o carrossel de integrações
const IntegrationsCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className="w-full py-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold mb-2 text-[#FFBD2F]">
          Integre com suas ferramentas favoritas
        </h3>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Nossa plataforma se conecta facilmente com várias ferramentas através de webhooks e APIs
        </p>
      </div>
      
      <Carousel
        opts={{
          align: "start",
          loop: true,
          dragFree: true
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {integrations.map((integration, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
              <div className="p-1">
                <Card className="bg-[#292826] border border-[#ffbd2f]/20 p-4 h-40 flex flex-col items-center justify-center hover:border-[#ffbd2f]/50 transition-all hover:shadow-lg overflow-hidden relative">
                  <div className={`absolute top-0 left-0 w-full h-1 ${integration.bgColor}`}></div>
                  <div className="text-4xl mb-3">{integration.icon}</div>
                  <h4 className="text-xl font-bold text-white mb-2">{integration.name}</h4>
                  <p className="text-xs text-gray-400 text-center">Integração via Webhooks</p>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-4 gap-2">
          <CarouselPrevious className="relative static left-0 translate-y-0 size-8" />
          <CarouselNext className="relative static right-0 translate-y-0 size-8" />
        </div>
      </Carousel>
    </div>
  );
};

export default IntegrationsCarousel;
