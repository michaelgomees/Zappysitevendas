
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { localViteConfig } from "./src/vite.local";
import { getBuildConfig } from "./src/config/buildConfig";
import fs from 'fs';

// Function to check and create package.json in critical paths
function ensurePackageJson() {
  // Check multiple paths including /dev-server which npm looks for
  const possiblePaths = [
    path.resolve(__dirname, 'package.json'),
    '/dev-server/package.json',
    path.resolve(process.cwd(), 'package.json')
  ];
  
  // For each path, check if package.json exists or try to create it
  for (const packagePath of possiblePaths) {
    try {
      if (!fs.existsSync(packagePath)) {
        // Create directory if it doesn't exist
        const dir = path.dirname(packagePath);
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }
        
        // Create minimal package.json
        const minimalPackageJson = {
          name: "zappybot-website",
          version: "1.0.0",
          private: true,
          type: "module",
          dependencies: {
            "react": "^18.3.1",
            "react-dom": "^18.3.1"
          }
        };
        
        fs.writeFileSync(packagePath, JSON.stringify(minimalPackageJson, null, 2));
        console.log(`Created package.json at ${packagePath}`);
      }
    } catch (error) {
      console.warn(`Failed to create package.json at ${packagePath}:`, error);
    }
  }
}

// Try to ensure package.json exists in all needed locations
if (!process.env.SKIP_PACKAGE_JSON_CHECK) {
  try {
    ensurePackageJson();
  } catch (error) {
    console.warn('Error in package.json creation:', error);
  }
}

// Try to load package.json if it exists or create a minimal one if needed
let packageJson: any = null;
try {
  const packageJsonPath = path.resolve(__dirname, 'package.json');
  
  if (fs.existsSync(packageJsonPath)) {
    // Normal case - package.json exists
    packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
  } else if (fs.existsSync('/dev-server/package.json')) {
    // Try the /dev-server path that npm is looking for
    packageJson = JSON.parse(fs.readFileSync('/dev-server/package.json', 'utf-8'));
  }
} catch (error) {
  console.warn('Unable to load package.json, using fallback configuration:', error);
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Always use the fallback build config as base
  const buildConfig = getBuildConfig();
  
  // Determine what configuration to use (package.json or fallback)
  const appName = packageJson?.name || buildConfig.name;
  const appVersion = packageJson?.version || buildConfig.version;

  // Use console logs to debug the configuration
  console.log(`Building ${appName} v${appVersion} using ${packageJson ? 'package.json' : 'fallback config'}`);

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
