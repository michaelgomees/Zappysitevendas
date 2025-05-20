
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Configuração do Vite
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    fs: {
      strict: false // Permite o acesso a arquivos fora do diretório raiz
    }
  },
  optimizeDeps: {
    exclude: [] // Não excluir nenhuma dependência da otimização
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, ".."), // Ajustado para acessar diretamente da raiz
    },
  },
  build: {
    rollupOptions: {
      // Opções de injeção para evitar problemas de importação
      output: {
        manualChunks: {} // Desabilita a divisão automática de chunks
      }
    },
    outDir: 'dist',
    emptyOutDir: true
  },
}));
