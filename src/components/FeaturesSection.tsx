
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const FeaturesSection = () => {
  return (
    <section id="funcionalidades" className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#FFBD2F]">
            Funcionalidades completas para seu negócio
          </h2>
          <p className="text-xl text-white">
            Nossa plataforma oferece tudo o que você precisa para criar experiências de conversação que convertem.
          </p>
        </div>

        <Tabs defaultValue="features" className="w-full">
          <TabsList className="w-full mb-10 grid grid-cols-2 bg-[#292826] border border-[#292826]">
            <TabsTrigger value="features" className="text-sm md:text-base data-[state=active]:bg-[#FFBD2F] data-[state=active]:text-black text-white">
              Recursos Principais
            </TabsTrigger>
            <TabsTrigger value="multi-whatsapps" className="text-sm md:text-base data-[state=active]:bg-[#FFBD2F] data-[state=active]:text-black text-white">
              Multi-Whatsapps
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="features" className="mt-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Feature 1 */}
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/2 order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-4 text-[#FFBD2F]">Chatbots inteligentes</h3>
                  <p className="text-white mb-6">
                    Crie chatbots conversacionais que entendem seus clientes e respondem de forma natural, guiando-os pela jornada de compra.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {['Inteligência artificial avançada', 'Fluxos de conversação personalizáveis', 'Respostas automáticas inteligentes', 'Integração com seu CRM'].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="text-[#FFBD2F] mr-2 flex-shrink-0" size={24} />
                        <span className="text-white">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-[#FFBD2F] hover:bg-[#FFBD2F]/90 text-black">
                    Saiba mais
                  </Button>
                </div>
                <div className="w-full md:w-1/2 order-1 md:order-2 rounded-xl overflow-hidden shadow-lg glass-effect">
                  <div className="bg-[#292826] aspect-square">
                    <img
                      src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
                      alt="Chatbots inteligentes"
                      className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg glass-effect">
                  <div className="bg-[#292826] aspect-square">
                    <img
                      src="https://images.unsplash.com/photo-1551434678-e076c223a692"
                      alt="Jornadas multicanal"
                      className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4 text-[#FFBD2F]">Jornadas multicanal</h3>
                  <p className="text-white mb-6">
                    Conecte-se com seus clientes onde eles estiverem, mantendo a consistência em todos os pontos de contato.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {['WhatsApp Business API', 'Instagram Direct', 'Facebook Messenger', 'Live chat no site'].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="text-[#FFBD2F] mr-2 flex-shrink-0" size={24} />
                        <span className="text-white">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-[#FFBD2F] hover:bg-[#FFBD2F]/90 text-black">
                    Saiba mais
                  </Button>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/2 order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-4 text-[#FFBD2F]">Análises e insights</h3>
                  <p className="text-white mb-6">
                    Acesse dados detalhados sobre o desempenho das suas conversas e identifique oportunidades de melhoria.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {['Dashboard personalizado', 'Relatórios de conversão', 'Taxa de engajamento', 'Análise de sentimento'].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="text-[#FFBD2F] mr-2 flex-shrink-0" size={24} />
                        <span className="text-white">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-[#FFBD2F] hover:bg-[#FFBD2F]/90 text-black">
                    Saiba mais
                  </Button>
                </div>
                <div className="w-full md:w-1/2 order-1 md:order-2 rounded-xl overflow-hidden shadow-lg glass-effect">
                  <div className="bg-[#292826] aspect-square">
                    <img
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                      alt="Análises e insights"
                      className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg glass-effect">
                  <div className="bg-[#292826] aspect-square">
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                      alt="CRM integrado"
                      className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4 text-[#FFBD2F]">CRM integrado</h3>
                  <p className="text-white mb-6">
                    Gerencie seus leads e clientes em um só lugar, mantendo um histórico completo de interações.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {['Perfil completo do cliente', 'Histórico de conversas', 'Segmentação avançada', 'Automação de follow-up'].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="text-[#FFBD2F] mr-2 flex-shrink-0" size={24} />
                        <span className="text-white">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-[#FFBD2F] hover:bg-[#FFBD2F]/90 text-black">
                    Saiba mais
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="multi-whatsapps" className="mt-4">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl font-bold mb-6 text-[#FFBD2F]">Multi-Whatsapps</h3>
                
                <p className="text-lg mb-4 text-white">
                  No ZappyBot você pode ter vários números trabalhando em uma mesma conta.
                </p>
                
                <p className="text-lg mb-6 text-white">
                  Com o BlackConversa, você pode integrar vários números de WhatsApp na mesma conta, cada um com seu próprio fluxo personalizado, webhook exclusivo e leads individualizados para um atendimento impecável.
                </p>
                
                <p className="text-lg mb-8 text-white">
                  Precisa que todos os números trabalhem juntos para impulsionar seu produto? Ou prefere que cada um opere de forma independente? A escolha é sua - e o poder também.
                </p>
                
                <div className="bg-gradient-to-r from-[#292826] to-[#292826]/80 p-6 rounded-lg mb-6 border border-[#FFBD2F]/20 glass-effect hover-glow">
                  <p className="text-xl font-medium text-[#FFBD2F]">
                    Enquanto outros complicam,<br/>
                    nós simplificamos e<br/>
                    potencializamos.
                  </p>
                </div>
                
                <Button className="bg-[#FFBD2F] hover:bg-[#FFBD2F]/90 text-black">
                  Experimentar Multi-Whatsapps
                </Button>
              </div>
              
              <div className="w-full lg:w-1/2 rounded-xl overflow-hidden shadow-lg glass-effect">
                <div className="bg-[#292826] aspect-video">
                  <img
                    src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
                    alt="Multi-Whatsapps"
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default FeaturesSection;
