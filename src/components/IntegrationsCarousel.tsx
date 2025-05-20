
import React from 'react';
import { useSiteConfig } from '@/hooks/useSiteConfig';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const IntegrationsCarousel = () => {
  const config = useSiteConfig();
  
  const integrations = [
    { name: "Dialogflow", image: config.images.integrations.dialogflow },
    { name: "n8n", image: config.images.integrations.n8n },
    { name: "Webhooks", image: config.images.integrations.webhooks },
    { name: "Typebot", image: config.images.integrations.typebot },
    { name: "Make", image: config.images.integrations.make },
    { name: "Kwify", image: config.images.integrations.kwify },
    { name: "Eduzz", image: config.images.integrations.eduzz },
    { name: "Asaas", image: config.images.integrations.asaas }
  ];

  return (
    <section id="integracoes" className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#FFBD2F]">
            Integrações Disponíveis
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Conecte sua plataforma com as principais ferramentas do mercado
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {integrations.map((integration, index) => (
                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                  <div className="p-2">
                    <div className="bg-[#292826] border border-[#292826]/80 rounded-lg p-4 h-32 flex items-center justify-center hover:border-[#FFBD2F]/30 transition-colors">
                      <img 
                        src={integration.image} 
                        alt={`${integration.name} logo`} 
                        className="max-h-16 max-w-full object-contain"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-2">
              <CarouselPrevious className="static transform-none mx-2" />
              <CarouselNext className="static transform-none mx-2" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsCarousel;
