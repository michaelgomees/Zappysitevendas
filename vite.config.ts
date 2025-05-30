
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { localViteConfig } from "./src/vite.local";
import { getBuildConfig } from "./src/config/buildConfig";
import fs from 'fs';

// Function to create a package.json file in the specified path if it doesn't exist
function createPackageJsonIfNeeded(packagePath: string, logPrefix: string = ''): boolean {
  try {
    if (!fs.existsSync(packagePath)) {
      // Create directory if it doesn't exist
      const dir = path.dirname(packagePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true, mode: 0o777 });
        console.log(`${logPrefix}Created directory: ${dir}`);
      }
      
      // Create minimal package.json
      const minimalPackageJson = {
        name: "zappybot-website",
        version: "1.0.0",
        private: true,
        type: "module",
        dependencies: {
          "react": "^18.3.1",
          "react-dom": "^18.3.1",
          "vite": "^5.0.0" 
        }
      };
      
      fs.writeFileSync(packagePath, JSON.stringify(minimalPackageJson, null, 2), { mode: 0o666 });
      console.log(`${logPrefix}Created package.json at ${packagePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.warn(`${logPrefix}Failed to create package.json at ${packagePath}:`, error);
    return false;
  }
}

// Function to check and create package.json in critical paths
function ensurePackageJson() {
  console.log('Ensuring package.json exists in critical paths...');
  
  // Check multiple paths including /dev-server which npm looks for
  const possiblePaths = [
    path.resolve(__dirname, 'package.json'),
    '/dev-server/package.json',
    path.resolve(process.cwd(), 'package.json'),
    '/app/package.json'
  ];
  
  let createdAny = false;
  
  // For each path, check if package.json exists or try to create it
  for (const packagePath of possiblePaths) {
    const created = createPackageJsonIfNeeded(packagePath, '[vite.config] ');
    createdAny = createdAny || created;
  }
  
  if (createdAny) {
    console.log('[vite.config] Successfully created at least one package.json');
  } else {
    console.log('[vite.config] No new package.json files needed to be created');
  }
}

// Try to ensure package.json exists in all needed locations
if (!process.env.SKIP_PACKAGE_JSON_CHECK) {
  try {
    ensurePackageJson();
  } catch (error) {
    console.warn('[vite.config] Error in package.json creation:', error);
  }
}

// Try to load package.json if it exists or create a minimal one if needed
let packageJson: any = null;
try {
  const packageJsonPath = path.resolve(__dirname, 'package.json');
  
  if (fs.existsSync(packageJsonPath)) {
    // Normal case - package.json exists
    packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
    console.log('[vite.config] Using package.json from project root');
  } else if (fs.existsSync('/dev-server/package.json')) {
    // Try the /dev-server path that npm is looking for
    packageJson = JSON.parse(fs.readFileSync('/dev-server/package.json', 'utf-8'));
    console.log('[vite.config] Using package.json from /dev-server');
  } else {
    // Create a minimal package.json in the project directory
    createPackageJsonIfNeeded(packageJsonPath, '[vite.config] ');
    if (fs.existsSync(packageJsonPath)) {
      packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
      console.log('[vite.config] Created and using new package.json');
    }
  }
} catch (error) {
  console.warn('[vite.config] Unable to load package.json, using fallback configuration:', error);
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Always use the fallback build config as base
  const buildConfig = getBuildConfig();
  
  // Determine what configuration to use (package.json or fallback)
  const appName = packageJson?.name || buildConfig.name;
  const appVersion = packageJson?.version || buildConfig.version;

  // Use console logs to debug the configuration
  console.log(`[vite.config] Building ${appName} v${appVersion} using ${packageJson ? 'package.json' : 'fallback config'}`);

  // Set environment variable to help with package.json detection
  if (!packageJson) {
    process.env.FORCE_FALLBACK_CONFIG = 'true';
  }

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
    },
    // More robust error handling
    build: {
      rollupOptions: {
        onwarn(warning, warn) {
          // Ignore certain warnings
          if (warning.code === 'MISSING_NODE_BUILTINS') return;
          warn(warning);
        }
      }
    }
  };
});
