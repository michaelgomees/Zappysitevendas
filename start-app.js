
// Local development script for starting the app
// Usage: node start-app.js

const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log('Starting ZappyBot website in development mode...');

// Check if package.json exists, if not create a temporary one
const packageJsonPath = path.join(__dirname, 'package.json');
if (!fs.existsSync(packageJsonPath)) {
  console.log('No package.json found, will use fallback configuration');
  
  try {
    // Try to load the build config directly using require
    const buildConfig = require('./src/config/buildConfig').buildConfig;
    
    // Create a basic package.json with minimal information
    const tempPackageJson = {
      name: buildConfig.name || "zappybot-website",
      version: buildConfig.version || "1.0.0",
      private: true,
      type: "module",
      dependencies: buildConfig.dependencies || {},
      devDependencies: buildConfig.devDependencies || {},
      scripts: {
        "start": "vite",
        "build": "vite build",
        "preview": "vite preview"
      }
    };
    
    // Write temporary package.json
    fs.writeFileSync(packageJsonPath, JSON.stringify(tempPackageJson, null, 2));
    console.log('Created temporary package.json for this session');
  } catch (error) {
    console.warn('Could not create temporary package.json:', error);
    console.log('Proceeding with fallback configuration only');
  }
}

// Run Vite directly without relying on package.json scripts
const viteProcess = spawn('npx', ['vite'], {
  stdio: 'inherit',
  shell: true,
  env: {
    ...process.env,
    NODE_ENV: 'development',
    SKIP_PACKAGE_JSON_CHECK: 'true' // Add this flag to tell Vite to use our fallback config
  }
});

viteProcess.on('error', (error) => {
  console.error('Failed to start development server:', error);
});

console.log('Once started, your app will be available at http://localhost:8080');
