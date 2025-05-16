
import React from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <section id="funcionalidades" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Funcionalidades completas para seu negócio
          </h2>
          <p className="text-xl text-gray-600">
            Nossa plataforma oferece tudo o que você precisa para criar experiências de conversação que convertem.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Feature 1 */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-4">Chatbots inteligentes</h3>
              <p className="text-gray-600 mb-6">
                Crie chatbots conversacionais que entendem seus clientes e respondem de forma natural, guiando-os pela jornada de compra.
              </p>
              <ul className="space-y-3 mb-8">
                {['Inteligência artificial avançada', 'Fluxos de conversação personalizáveis', 'Respostas automáticas inteligentes', 'Integração com seu CRM'].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-primary mr-2 flex-shrink-0" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Saiba mais
              </Button>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2 rounded-xl overflow-hidden shadow-lg">
              <div className="bg-gray-200 aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
                  alt="Chatbots inteligentes"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg">
              <div className="bg-gray-200 aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692"
                  alt="Jornadas multicanal"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Jornadas multicanal</h3>
              <p className="text-gray-600 mb-6">
                Conecte-se com seus clientes onde eles estiverem, mantendo a consistência em todos os pontos de contato.
              </p>
              <ul className="space-y-3 mb-8">
                {['WhatsApp Business API', 'Instagram Direct', 'Facebook Messenger', 'Live chat no site'].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-primary mr-2 flex-shrink-0" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Saiba mais
              </Button>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-4">Análises e insights</h3>
              <p className="text-gray-600 mb-6">
                Acesse dados detalhados sobre o desempenho das suas conversas e identifique oportunidades de melhoria.
              </p>
              <ul className="space-y-3 mb-8">
                {['Dashboard personalizado', 'Relatórios de conversão', 'Taxa de engajamento', 'Análise de sentimento'].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-primary mr-2 flex-shrink-0" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Saiba mais
              </Button>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2 rounded-xl overflow-hidden shadow-lg">
              <div className="bg-gray-200 aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                  alt="Análises e insights"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg">
              <div className="bg-gray-200 aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                  alt="CRM integrado"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">CRM integrado</h3>
              <p className="text-gray-600 mb-6">
                Gerencie seus leads e clientes em um só lugar, mantendo um histórico completo de interações.
              </p>
              <ul className="space-y-3 mb-8">
                {['Perfil completo do cliente', 'Histórico de conversas', 'Segmentação avançada', 'Automação de follow-up'].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-primary mr-2 flex-shrink-0" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Saiba mais
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
