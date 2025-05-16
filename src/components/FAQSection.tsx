
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona a integração com o WhatsApp?",
    answer: "Nossa plataforma se integra ao WhatsApp Business API, permitindo que você automatize atendimentos e mantenha conversas com seus clientes de forma escalável, tudo dentro das políticas do WhatsApp."
  },
  {
    question: "É possível personalizar os chatbots conforme minha marca?",
    answer: "Sim, nossos chatbots são totalmente personalizáveis. Você pode definir tom de voz, fluxos de conversa, respostas e até mesmo adicionar elementos visuais alinhados com sua identidade de marca."
  },
  {
    question: "Preciso de conhecimento técnico para utilizar a plataforma?",
    answer: "Não, nossa plataforma foi desenvolvida com foco na experiência do usuário. Oferecemos uma interface intuitiva de arrastar e soltar que permite criar fluxos de conversação sem conhecimento de programação."
  },
  {
    question: "Quanto tempo leva para implementar a solução?",
    answer: "A implementação básica pode ser feita em poucos dias. Para fluxos mais complexos, o prazo pode chegar a algumas semanas, dependendo das suas necessidades específicas. Oferecemos consultoria e suporte durante todo o processo."
  },
  {
    question: "A plataforma se integra com os sistemas que já uso?",
    answer: "Sim, oferecemos integração com diversos CRMs, plataformas de e-commerce e sistemas de gestão populares no mercado. Também temos API documentada para integrações customizadas."
  },
  {
    question: "Como é feita a cobrança e existe período de teste?",
    answer: "Nossos planos são cobrados mensalmente, com desconto para pagamento anual. Oferecemos um período de teste de 14 dias para que você possa experimentar todas as funcionalidades antes de decidir."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Perguntas frequentes
          </h2>
          <p className="text-xl text-gray-600">
            Tire suas dúvidas sobre nossa plataforma de marketing conversacional.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
