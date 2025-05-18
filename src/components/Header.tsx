
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { MenuIcon, X } from 'lucide-react';
import { useSiteConfig } from '@/hooks/useSiteConfig';

const Header = () => {
  const config = useSiteConfig();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed w-full bg-black/90 backdrop-blur-md z-50 shadow-sm border-b border-[#292826]">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          {/* Logo - facilmente substituível */}
          <a href="/" className="flex items-center">
            <img 
              src={config.images.logo}
              alt="Logo" 
              className="h-14"
            />
          </a>
        </div>

        {/* Menu desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#beneficios" className="text-white hover:text-[#ffbd2f] font-medium transition-colors">Benefícios</a>
          <a href="#funcionalidades" className="text-white hover:text-[#ffbd2f] font-medium transition-colors">Funcionalidades</a>
          <a href="#mobilidade" className="text-white hover:text-[#ffbd2f] font-medium transition-colors">Mobilidade</a>
          <a href="#zappyn" className="text-white hover:text-[#ffbd2f] font-medium transition-colors">Zappyn</a>
          <a href="#configuracao" className="text-white hover:text-[#ffbd2f] font-medium transition-colors">Configuração</a>
          <a href="#precos" className="text-white hover:text-[#ffbd2f] font-medium transition-colors">Preços</a>
          <a href="#faq" className="text-white hover:text-[#ffbd2f] font-medium transition-colors">FAQ</a>
          <Button className="bg-[#ffbd2f] hover:bg-[#ffbd2f]/90 text-black" asChild>
            <a href={config.buttons.startNow}>
              Começar agora
            </a>
          </Button>
        </nav>

        {/* Menu mobile toggle */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white hover:text-[#ffbd2f]">
            {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#292826]">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#beneficios" className="text-white hover:text-[#ffbd2f] font-medium py-2 transition-colors">Benefícios</a>
            <a href="#funcionalidades" className="text-white hover:text-[#ffbd2f] font-medium py-2 transition-colors">Funcionalidades</a>
            <a href="#mobilidade" className="text-white hover:text-[#ffbd2f] font-medium py-2 transition-colors">Mobilidade</a>
            <a href="#zappyn" className="text-white hover:text-[#ffbd2f] font-medium py-2 transition-colors">Zappyn</a>
            <a href="#configuracao" className="text-white hover:text-[#ffbd2f] font-medium py-2 transition-colors">Configuração</a>
            <a href="#precos" className="text-white hover:text-[#ffbd2f] font-medium py-2 transition-colors">Preços</a>
            <a href="#faq" className="text-white hover:text-[#ffbd2f] font-medium py-2 transition-colors">FAQ</a>
            <Button className="bg-[#ffbd2f] hover:bg-[#ffbd2f]/90 text-black w-full" asChild>
              <a href={config.buttons.startNow}>
                Começar agora
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
