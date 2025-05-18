
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import siteConfig from '@/config/siteConfig';

/**
 * Este componente é apenas para referência e pode ser usado para 
 * criar um painel de administração posteriormente.
 * 
 * Não está sendo incluído no site principal.
 */
const AdminConfig = () => {
  const [config, setConfig] = useState(siteConfig);
  
  const handleSave = () => {
    console.log('Configuração atual:', config);
    alert('Esta é apenas uma demonstração. Em um sistema real, isso salvaria as configurações em um backend ou em um arquivo.');
  };
  
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Configurações do Site</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Imagens</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Logo</label>
              <input 
                type="text" 
                className="w-full p-2 border rounded" 
                value={config.images.logo} 
                onChange={(e) => setConfig({...config, images: {...config.images, logo: e.target.value}})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Hero</label>
              <input 
                type="text" 
                className="w-full p-2 border rounded" 
                value={config.images.hero} 
                onChange={(e) => setConfig({...config, images: {...config.images, hero: e.target.value}})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Zappyn</label>
              <input 
                type="text" 
                className="w-full p-2 border rounded" 
                value={config.images.zappyn} 
                onChange={(e) => setConfig({...config, images: {...config.images, zappyn: e.target.value}})}
              />
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Vídeos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Flowbuilder Demo</label>
              <input 
                type="text" 
                className="w-full p-2 border rounded" 
                value={config.videos.flowbuilderDemo} 
                onChange={(e) => setConfig({...config, videos: {...config.videos, flowbuilderDemo: e.target.value}})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Vídeo Adicional</label>
              <input 
                type="text" 
                className="w-full p-2 border rounded" 
                value={config.videos.additional} 
                onChange={(e) => setConfig({...config, videos: {...config.videos, additional: e.target.value}})}
              />
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Links de Botões</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Começar Agora</label>
              <input 
                type="text" 
                className="w-full p-2 border rounded" 
                value={config.buttons.startNow} 
                onChange={(e) => setConfig({...config, buttons: {...config.buttons, startNow: e.target.value}})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Agendar Demo</label>
              <input 
                type="text" 
                className="w-full p-2 border rounded" 
                value={config.buttons.scheduleDemo} 
                onChange={(e) => setConfig({...config, buttons: {...config.buttons, scheduleDemo: e.target.value}})}
              />
            </div>
            {/* Outros campos de botões... */}
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Facebook</label>
              <input 
                type="text" 
                className="w-full p-2 border rounded" 
                value={config.socialMedia.facebook} 
                onChange={(e) => setConfig({...config, socialMedia: {...config.socialMedia, facebook: e.target.value}})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Instagram</label>
              <input 
                type="text" 
                className="w-full p-2 border rounded" 
                value={config.socialMedia.instagram} 
                onChange={(e) => setConfig({...config, socialMedia: {...config.socialMedia, instagram: e.target.value}})}
              />
            </div>
            {/* Outros campos de redes sociais... */}
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <Button onClick={handleSave}>
          Salvar Configurações
        </Button>
      </div>
    </div>
  );
};

export default AdminConfig;
