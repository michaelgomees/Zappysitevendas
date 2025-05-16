
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from 'lucide-react';

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
    popular: false
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
    popular: true
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
    popular: false
  }
];

const PricingSection = () => {
  return (
    <section id="precos" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Planos para todos os tamanhos de negócio
          </h2>
          <p className="text-xl text-gray-600">
            Escolha o plano ideal para suas necessidades e comece a transformar suas conversas em vendas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card 
              key={plan.id} 
              className={`border ${plan.popular ? 'border-primary ring-2 ring-primary/20' : 'border-gray-200'} shadow-lg relative`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  Mais popular
                </div>
              )}
              <CardHeader className={plan.popular ? 'bg-primary/5' : ''}>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className={`${plan.popular ? 'text-primary' : 'text-green-500'} mr-2 flex-shrink-0`} size={20} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : 'bg-gray-800 hover:bg-gray-700'} text-white`}
                >
                  {plan.cta}
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
