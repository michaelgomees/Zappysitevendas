
import React from 'react';
import { Facebook, Instagram, MessageCircle, Mail, Phone } from 'lucide-react';
import { useSiteConfig } from '@/hooks/useSiteConfig';

const Footer = () => {
  const config = useSiteConfig();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-10">
          <div className="mb-8 md:mb-0">
            {/* Logo */}
            <div className="flex items-center justify-center md:justify-start mb-4">
              <img 
                src={config.images.logo}
                alt="Logo" 
                className="h-20 object-contain"
              />
            </div>
            <p className="text-gray-400 max-w-xs text-center md:text-left">
              Transformando conversas digitais em resultados para o seu negócio.
            </p>
          </div>

          {/* Redes Sociais */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4 text-[#ffbd2f] text-center md:text-left">Conecte-se conosco</h3>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href={config.socialMedia.facebook} className="bg-[#292826] p-3 rounded-full hover:bg-[#ffbd2f] hover:text-black transition-colors">
                <Facebook size={20} />
              </a>
              <a href={config.socialMedia.instagram} className="bg-[#292826] p-3 rounded-full hover:bg-[#ffbd2f] hover:text-black transition-colors">
                <Instagram size={20} />
              </a>
              <a href={config.socialMedia.chat} className="bg-[#292826] p-3 rounded-full hover:bg-[#ffbd2f] hover:text-black transition-colors">
                <MessageCircle size={20} />
              </a>
              <a href={config.socialMedia.phone} className="bg-[#292826] p-3 rounded-full hover:bg-[#ffbd2f] hover:text-black transition-colors">
                <Phone size={20} />
              </a>
              <a href={config.socialMedia.email} className="bg-[#292826] p-3 rounded-full hover:bg-[#ffbd2f] hover:text-black transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Proteção de dados */}
        <div className="bg-[#292826] p-6 rounded-lg mb-8">
          <h3 className="text-[#ffbd2f] font-bold mb-2">Proteção de Dados</h3>
          <p className="text-gray-300">
            Todos os nossos dados são protegidos e cumprimos rigorosamente a LGPD (Lei Geral de Proteção de Dados).
          </p>
        </div>

        <div className="border-t border-[#292826] pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-[#ffbd2f] transition-colors text-sm">Termos de Uso</a>
              <a href="#" className="text-gray-400 hover:text-[#ffbd2f] transition-colors text-sm">Privacidade</a>
              <a href="#" className="text-gray-400 hover:text-[#ffbd2f] transition-colors text-sm">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
