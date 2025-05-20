
// Bootstrap script to run before Vite starts
// This helps set up a proper environment when package.json is missing

const fs = require('fs');
const path = require('path');

function setupEnvironment() {
  const packageJsonPath = path.resolve(__dirname, '../package.json');
  
  // Check if package.json exists
  if (!fs.existsSync(packageJsonPath)) {
    console.log('No package.json found at project root, setting up fallback environment');
    
    try {
      // Create a more comprehensive minimal package.json
      const minimalPackageJson = {
        name: "zappybot-website",
        version: "1.0.0",
        private: true,
        type: "module",
        scripts: {
          "start": "vite",
          "build": "vite build",
          "preview": "vite preview"
        },
        dependencies: {
          "react": "^18.3.1",
          "react-dom": "^18.3.1",
          "react-router-dom": "^6.26.2",
          "@tanstack/react-query": "^5.56.2",
          "lucide-react": "^0.462.0",
          "clsx": "^2.1.1",
          "tailwind-merge": "^2.5.2",
          "class-variance-authority": "^0.7.1",
          "zod": "^3.23.8",
          "recharts": "^2.12.7",
          "sonner": "^1.5.0"
        },
        devDependencies: {
          "typescript": "^5.0.0",
          "vite": "^5.0.0",
          "@vitejs/plugin-react-swc": "^3.5.0",
          "tailwindcss": "^3.4.1",
          "postcss": "^8.4.35",
          "autoprefixer": "^10.4.18"
        }
      };
      
      // Write temporary package.json
      fs.writeFileSync(packageJsonPath, JSON.stringify(minimalPackageJson, null, 2));
      console.log('Created temporary package.json for this session');
      
      // Make sure we have a lock file as well (minimal)
      const lockFilePath = path.resolve(__dirname, '../package-lock.json');
      if (!fs.existsSync(lockFilePath)) {
        fs.writeFileSync(lockFilePath, JSON.stringify({
          name: "zappybot-website",
          version: "1.0.0",
          lockfileVersion: 3,
          requires: true,
          packages: {}
        }, null, 2));
        console.log('Created minimal package-lock.json');
      }
      
    } catch (error) {
      console.warn('Failed to create temporary package.json:', error);
    }
  }
}

// Run the setup
setupEnvironment();
