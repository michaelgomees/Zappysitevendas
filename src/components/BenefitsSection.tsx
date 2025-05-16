
import React from 'react';

const benefits = [
  {
    id: 1,
    title: "Atendimento automatizado",
    description: "Automatize suas conversas de vendas e suporte com chatbots inteligentes que funcionam 24/7.",
    icon: "📱"
  },
  {
    id: 2,
    title: "Qualificação de leads",
    description: "Identifique e priorize leads qualificados automaticamente, aumentando a eficiência do seu time de vendas.",
    icon: "🎯"
  },
  {
    id: 3,
    title: "Integração multicanal",
    description: "Conecte-se com seus clientes em vários canais como WhatsApp, Instagram, Facebook e site.",
    icon: "🔄"
  },
  {
    id: 4,
    title: "Relatórios detalhados",
    description: "Acesse métricas e insights detalhados para otimizar suas estratégias de conversão.",
    icon: "📊"
  },
  {
    id: 5,
    title: "Personalização avançada",
    description: "Crie experiências únicas para cada cliente com base em dados e comportamentos.",
    icon: "✨"
  },
  {
    id: 6,
    title: "Escalabilidade garantida",
    description: "Cresça seu negócio sem preocupações, nossa plataforma escala junto com você.",
    icon: "📈"
  }
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#FFBD2F]">
            Por que escolher nossa plataforma?
          </h2>
          <p className="text-xl text-gray-300">
            Transforme sua estratégia digital com benefícios que realmente fazem a diferença para seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div 
              key={benefit.id}
              className="bg-[#292826] rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow border border-[#292826]/80 hover-glow"
            >
              <div className="text-4xl mb-4 bg-[#FFBD2F]/20 w-16 h-16 flex items-center justify-center rounded-lg">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#FFBD2F]">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
