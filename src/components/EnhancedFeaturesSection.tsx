
import React from 'react';
import { 
  MessageSquare, 
  Cloud, 
  Webhook, 
  Send, 
  Trello,
  Network,
  BarChart4,
  MessageCircle,
  Users,
  Brain,
  Smartphone,
  Dices
} from 'lucide-react';

interface FeatureBoxProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureBox = ({ icon, title, description }: FeatureBoxProps) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
    <div className="text-primary mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-semibold mb-2 text-primary">{title}</h3>
    <p className="text-center text-gray-600">{description}</p>
  </div>
);

const features = [
  {
    icon: <MessageSquare size={48} strokeWidth={1.5} />,
    title: "Bate-papo ao vivo",
    description: "Central de atendimento para atendentes e abas de organização."
  },
  {
    icon: <Cloud size={48} strokeWidth={1.5} />,
    title: "100% em nuvem",
    description: "Use 24h sem precisar instalar nada no seu computador."
  },
  {
    icon: <Webhook size={48} strokeWidth={1.5} />,
    title: "Webhooks",
    description: "Recupere compras abandonadas e chame os clientes no WhatsApp."
  },
  {
    icon: <Send size={48} strokeWidth={1.5} />,
    title: "Disparos em massa",
    description: "Faça disparos em massa ilimitados usando suas listas de contatos."
  },
  {
    icon: <Trello size={48} strokeWidth={1.5} />,
    title: "Kanban",
    description: "Visualização de clientes no processo de vendas."
  },
  {
    icon: <Network size={48} strokeWidth={1.5} />,
    title: "Integração",
    description: "Faça conexão com vários sistemas usando as funções: post, put e get."
  },
  {
    icon: <BarChart4 size={48} strokeWidth={1.5} />,
    title: "Dashboard",
    description: "Resumo de atendimentos e leads no WhatsApp."
  },
  {
    icon: <MessageCircle size={48} strokeWidth={1.5} />,
    title: "Fluxo de Conversas",
    description: "Criação de atendimentos automáticos (chatbots)."
  },
  {
    icon: <Users size={48} strokeWidth={1.5} />,
    title: "Multi-Acessos",
    description: "Crie acessos para sua equipe usar o mesmo número de WhatsApp."
  },
  {
    icon: <Brain size={48} strokeWidth={1.5} />,
    title: "Use sua IA",
    description: "Faça vendas breve direta com suas IAs."
  },
  {
    icon: <Smartphone size={48} strokeWidth={1.5} />,
    title: "Multi-WhatsApps",
    description: "Mais de um WhatsApp na sua conta para realizar atendimentos."
  },
  {
    icon: <Dices size={48} strokeWidth={1.5} />,
    title: "Multi-Aparelhos",
    description: "Use sua conta nos seus celulares e nos seus computadores."
  }
];

const EnhancedFeaturesSection = () => {
  return (
    <section id="recursos" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Conheça as funções do nosso criador de fluxos
          </h2>
          <p className="text-xl text-gray-600">
            Tenha uma poderosa automação e simples de usar para mudar o jogo do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureBox
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnhancedFeaturesSection;
