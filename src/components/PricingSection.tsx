
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from 'lucide-react';
import { useSiteConfig } from '@/hooks/useSiteConfig';

const PricingSection = () => {
  const config = useSiteConfig();
  
  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfeito para pequenas empresas que estão começando.',
      price: 'R$ 197',
      period: '/mês',
      features: [
        'Até 3 canais de atendimento',
        '1.000 conversas mensais',
        'Chatbot básico',
        'Integrações limitadas',
        'Suporte por email'
      ],
      cta: 'Começar agora',
      popular: false,
      link: config.buttons.starterPlan
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Ideal para empresas em crescimento que precisam escalar.',
      price: 'R$ 497',
      period: '/mês',
      features: [
        'Até 5 canais de atendimento',
        '5.000 conversas mensais',
        'Chatbot avançado com IA',
        'Integrações com CRM',
        'Análises detalhadas',
        'Suporte prioritário'
      ],
      cta: 'Começar agora',
      popular: true,
      link: config.buttons.professionalPlan
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Para grandes empresas com demandas complexas.',
      price: 'Personalizado',
      period: '',
      features: [
        'Canais ilimitados',
        'Conversas ilimitadas',
        'IA avançada personalizada',
        'Integrações customizadas',
        'API completa',
        'Gerente de conta dedicado',
        'SLA garantido'
      ],
      cta: 'Falar com consultor',
      popular: false,
      link: config.buttons.enterprisePlan
    }
  ];

  return (
    <section id="precos" className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#FFBD2F]">
            Planos para todos os tamanhos de negócio
          </h2>
          <p className="text-xl text-gray-300">
            Escolha o plano ideal para suas necessidades e comece a transformar suas conversas em vendas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card 
              key={plan.id} 
              className={`bg-[#292826] border ${plan.popular ? 'border-[#FFBD2F] ring-2 ring-[#FFBD2F]/20' : 'border-[#292826]/50'} shadow-lg relative hover-glow`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-[#FFBD2F] text-black text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  Mais popular
                </div>
              )}
              <CardHeader className={plan.popular ? 'bg-[#FFBD2F]/5' : ''}>
                <CardTitle className="text-2xl font-bold text-white">{plan.name}</CardTitle>
                <CardDescription className="text-gray-300">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#FFBD2F]">{plan.price}</span>
                  <span className="text-gray-300">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className={`${plan.popular ? 'text-[#FFBD2F]' : 'text-green-500'} mr-2 flex-shrink-0`} size={20} />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full ${plan.popular ? 'bg-[#FFBD2F] hover:bg-[#FFBD2F]/90 text-black' : 'bg-[#292826] hover:bg-[#292826]/80 text-white border border-[#FFBD2F]/30'}`}
                  asChild
                >
                  <a href={plan.link}>
                    {plan.cta}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
