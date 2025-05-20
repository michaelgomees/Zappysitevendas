
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { localViteConfig } from "./src/vite.local";
import { getBuildConfig } from "./src/config/buildConfig";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Use the fallback build config when package.json isn't available
  const buildConfig = getBuildConfig();

  return {
    // Use local config for server settings
    server: localViteConfig.server,
    plugins: [
      react(),
      mode === 'development' &&
      componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: localViteConfig.resolve.alias,
    },
    // Add additional build metadata
    define: {
      __APP_NAME__: JSON.stringify(buildConfig.name),
      __APP_VERSION__: JSON.stringify(buildConfig.version),
    }
  };
});
