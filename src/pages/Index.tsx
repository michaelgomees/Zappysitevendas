
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Zap, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Zap className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">ZappyBot</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Recursos</a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Preços</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contato</a>
          </div>
          <Button>Começar Agora</Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Transforme suas conversas em <span className="text-blue-600">vendas</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Automatize seu atendimento e aumente suas conversões com o poder da inteligência artificial
        </p>
        <div className="flex justify-center space-x-4">
          <Button size="lg" className="px-8 py-3">
            Teste Grátis por 7 dias
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-3">
            Ver Demonstração
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Por que escolher o ZappyBot?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <MessageSquare className="h-12 w-12 text-blue-600 mb-4" />
              <CardTitle>Conversas Inteligentes</CardTitle>
              <CardDescription>
                IA avançada que entende e responde como um humano
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Nosso sistema aprende com cada interação para oferecer respostas cada vez mais precisas e naturais.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Zap className="h-12 w-12 text-blue-600 mb-4" />
              <CardTitle>Automação Completa</CardTitle>
              <CardDescription>
                24/7 de atendimento sem interrupções
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Atenda seus clientes a qualquer hora do dia, automaticamente, sem perder nenhuma oportunidade.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <CardTitle>Mais Conversões</CardTitle>
              <CardDescription>
                Aumente suas vendas em até 300%
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Leads qualificados e direcionamento inteligente para maximizar suas conversões.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Zap className="h-6 w-6" />
            <span className="text-xl font-bold">ZappyBot</span>
          </div>
          <p className="text-gray-400 mb-4">
            © 2024 ZappyBot. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
