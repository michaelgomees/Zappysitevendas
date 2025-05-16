
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { MenuIcon, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          {/* Logo - facilmente substituível */}
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Black Conversa</span>
          </a>
        </div>

        {/* Menu desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#beneficios" className="text-gray-700 hover:text-primary font-medium transition-colors">Benefícios</a>
          <a href="#funcionalidades" className="text-gray-700 hover:text-primary font-medium transition-colors">Funcionalidades</a>
          <a href="#mobilidade" className="text-gray-700 hover:text-primary font-medium transition-colors">Mobilidade</a>
          <a href="#configuracao" className="text-gray-700 hover:text-primary font-medium transition-colors">Configuração</a>
          <a href="#precos" className="text-gray-700 hover:text-primary font-medium transition-colors">Preços</a>
          <a href="#faq" className="text-gray-700 hover:text-primary font-medium transition-colors">FAQ</a>
          <Button className="bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 text-white">
            Começar agora
          </Button>
        </nav>

        {/* Menu mobile toggle */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-gray-700 hover:text-primary">
            {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#beneficios" className="text-gray-700 hover:text-primary font-medium py-2 transition-colors">Benefícios</a>
            <a href="#funcionalidades" className="text-gray-700 hover:text-primary font-medium py-2 transition-colors">Funcionalidades</a>
            <a href="#mobilidade" className="text-gray-700 hover:text-primary font-medium py-2 transition-colors">Mobilidade</a>
            <a href="#configuracao" className="text-gray-700 hover:text-primary font-medium py-2 transition-colors">Configuração</a>
            <a href="#precos" className="text-gray-700 hover:text-primary font-medium py-2 transition-colors">Preços</a>
            <a href="#faq" className="text-gray-700 hover:text-primary font-medium py-2 transition-colors">FAQ</a>
            <Button className="bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 text-white w-full">
              Começar agora
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
