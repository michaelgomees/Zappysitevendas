
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Transforme suas <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">conversas</span> em vendas
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Automatize o atendimento, qualifique leads e aumente suas conversões com nossa plataforma de marketing conversacional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 text-white text-lg py-6 px-8">
                Agendar uma demonstração
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg py-6 px-8">
                Ver planos
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white" />
                ))}
              </div>
              <p className="text-gray-600">
                <span className="font-bold">+1.000</span> empresas já utilizam
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="rounded-xl overflow-hidden shadow-2xl">
              {/* Imagem principal - substituível */}
              <div className="aspect-video bg-gray-200 w-full">
                <img
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                  alt="Plataforma em ação"
                  className="w-full h-full object-cover"
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
