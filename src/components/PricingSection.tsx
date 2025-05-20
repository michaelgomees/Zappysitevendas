
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, XCircle } from 'lucide-react';
import { useSiteConfig } from '@/hooks/useSiteConfig';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const PricingSection = () => {
  const config = useSiteConfig();
  
  const plans = [
    {
      id: 'essencial',
      name: 'Essencial',
      description: 'Ideal para pequenas empresas que estão começando.',
      price: 'R$ 100',
      period: '/mês',
      features: [
        '2 usuários',
        '3 conexões WhatsApp',
        '2 filas por conexão (6 no total)',
        'Campanhas',
        'Agendamentos',
        'Chat Interno',
        'API Externa',
        'Integrações',
        {text: 'Talk.Ai', included: false},
        'Relatórios e Kanban'
      ],
      cta: 'Começar agora',
      popular: false,
      color: 'bg-orange-500',
      link: config.buttons.starterPlan
    },
    {
      id: 'professional',
      name: 'Profissional',
      description: 'Ideal para empresas em crescimento que precisam escalar.',
      price: 'R$ 180',
      period: '/mês',
      features: [
        '5 usuários',
        '5 conexões WhatsApp',
        '3 filas por conexão (15 no total)',
        'Campanhas',
        'Agendamentos',
        'Chat Interno',
        'API Externa',
        'Integrações',
        {text: 'Talk.Ai', included: true},
        'Relatórios e Kanban'
      ],
      cta: 'Começar agora',
      popular: true,
      color: 'bg-green-500',
      link: config.buttons.professionalPlan
    },
    {
      id: 'master',
      name: 'Master',
      description: 'Para grandes empresas com demandas complexas.',
      price: 'R$ 280',
      period: '/mês',
      features: [
        '10 usuários',
        '10 conexões WhatsApp',
        '5 filas por conexão (50 no total)',
        'Campanhas',
        'Agendamentos',
        'Chat Interno',
        'API Externa',
        'Integrações',
        {text: 'Talk.Ai', included: true},
        'Relatórios e Kanban',
        'Suporte Prioritário'
      ],
      cta: 'Falar com consultor',
      popular: false,
      color: 'bg-purple-500',
      link: config.buttons.enterprisePlan
    }
  ];

  const extras = [
    {
      name: 'Conexão WhatsApp adicional',
      price: 'R$ 39,99/mês',
      icon: '🔌'
    },
    {
      name: 'Fila adicional (extra)',
      price: 'R$ 14,90/mês',
      icon: '🎫'
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
              <div className={`absolute top-0 left-0 ${plan.id === 'essencial' ? 'bg-orange-500' : plan.id === 'professional' ? 'bg-green-500' : 'bg-purple-500'} w-2 h-full`}></div>
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
                      {typeof feature === 'object' ? (
                        feature.included ? (
                          <CheckCircle className={`${plan.popular ? 'text-[#FFBD2F]' : 'text-green-500'} mr-2 flex-shrink-0`} size={20} />
                        ) : (
                          <XCircle className="text-red-500 mr-2 flex-shrink-0" size={20} />
                        )
                      ) : (
                        <CheckCircle className={`${plan.popular ? 'text-[#FFBD2F]' : 'text-green-500'} mr-2 flex-shrink-0`} size={20} />
                      )}
                      <span className="text-gray-300">
                        {typeof feature === 'object' ? feature.text : feature}
                      </span>
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

        {/* Extras Section */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#FFBD2F]">
              <span className="inline-block p-1">🔌</span> Extras
            </h3>
            <p className="text-lg text-gray-300">
              Adicione mais recursos ao seu plano conforme sua necessidade
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Card className="bg-[#292826] border border-[#292826]/50 shadow-lg">
              <CardContent className="pt-6">
                <Table>
                  <TableHeader>
                    <TableRow className="border-b border-gray-700">
                      <TableHead className="text-left text-gray-300 w-16"></TableHead>
                      <TableHead className="text-left text-gray-300">Item</TableHead>
                      <TableHead className="text-right text-gray-300">Preço</TableHead>
                      <TableHead className="w-32"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {extras.map((extra, index) => (
                      <TableRow key={index} className="border-b border-gray-700">
                        <TableCell className="text-2xl">{extra.icon}</TableCell>
                        <TableCell className="text-white font-medium">{extra.name}</TableCell>
                        <TableCell className="text-right text-[#FFBD2F] font-bold">{extra.price}</TableCell>
                        <TableCell>
                          <Button 
                            size="sm"
                            className="w-full bg-[#292826] hover:bg-[#292826]/80 text-white border border-[#FFBD2F]/30"
                            asChild
                          >
                            <a href={config.buttons.extras || "#"}>
                              Adicionar
                            </a>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
