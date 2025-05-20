
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { localViteConfig } from "./src/vite.local";
import { getBuildConfig } from "./src/config/buildConfig";
import fs from 'fs';

// Try to load package.json if it exists
let packageJson: any = null;
try {
  const packageJsonPath = path.resolve(__dirname, 'package.json');
  if (fs.existsSync(packageJsonPath)) {
    packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
  }
} catch (error) {
  console.warn('Unable to load package.json, using fallback configuration');
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Use the fallback build config when package.json isn't available
  const buildConfig = getBuildConfig();
  
  // Determine what configuration to use (package.json or fallback)
  const appName = packageJson?.name || buildConfig.name;
  const appVersion = packageJson?.version || buildConfig.version;

  return {
    // Use local config for server settings
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      mode === 'development' &&
      componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    // Add additional build metadata
    define: {
      __APP_NAME__: JSON.stringify(appName),
      __APP_VERSION__: JSON.stringify(appVersion),
    }
  };
});
