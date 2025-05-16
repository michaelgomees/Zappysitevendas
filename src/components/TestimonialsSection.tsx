
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    content: "Implementamos a plataforma há 6 meses e vimos um aumento de 40% na taxa de conversão. O atendimento automático reduziu nosso tempo de resposta e melhorou a experiência do cliente.",
    author: "Ana Silva",
    role: "Diretora de Marketing, TechCorp",
    avatar: "AS",
    rating: 5
  },
  {
    id: 2,
    content: "A facilidade de criar fluxos conversacionais nos permitiu escalar o atendimento sem aumentar a equipe. Os relatórios nos deram insights valiosos para otimizar nossa abordagem.",
    author: "Carlos Mendes",
    role: "CEO, Startup Digital",
    avatar: "CM",
    rating: 5
  },
  {
    id: 3,
    content: "A integração com nosso CRM foi perfeita e agora temos uma visão 360° do cliente. A qualificação automática de leads poupou horas do nosso time comercial.",
    author: "Patricia Lopes",
    role: "Gerente de Vendas, MegaStore",
    avatar: "PL",
    rating: 5
  },
  {
    id: 4,
    content: "Conseguimos automatizar 70% das perguntas frequentes dos clientes, liberando nossa equipe para focar em atendimentos mais complexos e estratégicos.",
    author: "Roberto Almeida",
    role: "Diretor de Operações, Serviços SA",
    avatar: "RA",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-600">
            Histórias reais de empresas que transformaram seu atendimento e aumentaram as vendas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="mb-6">
                  {/* Star rating */}
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.content}"</p>
                </div>
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={`https://ui-avatars.com/api/?name=${testimonial.author}&background=random`} />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold">{testimonial.author}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
