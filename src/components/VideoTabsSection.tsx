
import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useSiteConfig } from '@/hooks/useSiteConfig';

const VideoTabsSection = () => {
  const config = useSiteConfig();
  
  return (
    <section className="py-16 md:py-24 bg-black" id="videos">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#FFBD2F]">
            Veja abaixo como é fácil colocar a Inteligência Artificial para trabalhar 24 horas por dia para você
          </h2>

          <Tabs defaultValue="tab1" className="w-full">
            <TabsList className="w-full mb-6 grid grid-cols-2 bg-[#292826] border border-[#FFBD2F]/20">
              <TabsTrigger value="tab1" className="text-sm md:text-base data-[state=active]:bg-[#FFBD2F] data-[state=active]:text-black">
                Flowbuilder Demo
              </TabsTrigger>
              <TabsTrigger value="tab2" className="text-sm md:text-base data-[state=active]:bg-[#FFBD2F] data-[state=active]:text-black">
                Video Adicional
              </TabsTrigger>
            </TabsList>
            <TabsContent value="tab1" className="mt-4">
              <div className="aspect-video w-full bg-[#292826] rounded-lg overflow-hidden shadow-lg border border-[#292826]/80">
                <iframe 
                  className="w-full h-full"
                  src={config.videos.flowbuilderDemo}
                  title="Flowbuilder Demonstration"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </TabsContent>
            <TabsContent value="tab2" className="mt-4">
              <div className="aspect-video w-full bg-[#292826] rounded-lg overflow-hidden shadow-lg border border-[#292826]/80">
                {config.videos.additional ? (
                  <iframe 
                    className="w-full h-full"
                    src={config.videos.additional}
                    title="Vídeo Adicional"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-gray-300">Vídeo será adicionado em breve.</p>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default VideoTabsSection;
