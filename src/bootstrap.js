
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
      // Try to load build config
      const buildConfigPath = path.resolve(__dirname, './config/buildConfig.js');
      
      // If we can't directly require it in a Node.js context, create a minimal one
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
        dependencies: {},
        devDependencies: {}
      };
      
      // Write temporary package.json
      fs.writeFileSync(packageJsonPath, JSON.stringify(minimalPackageJson, null, 2));
      console.log('Created temporary package.json for this session');
    } catch (error) {
      console.warn('Failed to create temporary package.json:', error);
    }
  }
}

// Run the setup
setupEnvironment();
