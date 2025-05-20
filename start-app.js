
#!/usr/bin/env node

// Local development script for starting the app
// Usage: node start-app.js

const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log('Starting ZappyBot website in development mode...');

// Function to ensure directory exists
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    try {
      fs.mkdirSync(dirPath, { recursive: true });
      console.log(`Created directory: ${dirPath}`);
    } catch (error) {
      console.warn(`Failed to create directory ${dirPath}:`, error);
    }
  }
}

// Ensure node_modules directory exists (empty is fine for our fallback)
ensureDirectoryExists(path.join(__dirname, 'node_modules'));

// Check if package.json exists, if not create a temporary one
const packageJsonPath = path.join(__dirname, 'package.json');
if (!fs.existsSync(packageJsonPath)) {
  console.log('No package.json found, will use fallback configuration');
  
  try {
    // Create a comprehensive package.json with minimal information
    const tempPackageJson = {
      name: "zappybot-website",
      version: "1.0.0",
      private: true,
      type: "module",
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
      },
      scripts: {
        "start": "vite",
        "build": "vite build",
        "preview": "vite preview"
      }
    };
    
    // Write temporary package.json
    fs.writeFileSync(packageJsonPath, JSON.stringify(tempPackageJson, null, 2));
    console.log('Created temporary package.json for this session');
    
    // Also create a minimal package-lock.json
    const lockFilePath = path.join(__dirname, 'package-lock.json');
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
    console.warn('Could not create temporary package.json:', error);
    console.log('Proceeding with fallback configuration only');
  }
}

// Create a script to directly run vite using our bootstrap
const bootstrapScript = `
require('./src/bootstrap.js');
require('vite');
`;

const tempScriptPath = path.join(__dirname, '_temp_start_vite.js');
fs.writeFileSync(tempScriptPath, bootstrapScript);

// Run our bootstrapped vite script
console.log('Launching Vite with bootstrap preparation...');
const viteProcess = spawn('node', [tempScriptPath], {
  stdio: 'inherit',
  shell: true,
  env: {
    ...process.env,
    NODE_ENV: 'development',
    SKIP_PACKAGE_JSON_CHECK: 'true', // Tell Vite to use our fallback config
    FORCE_FALLBACK_CONFIG: 'true'   // Additional flag for our custom logic
  }
});

viteProcess.on('error', (error) => {
  console.error('Failed to start development server:', error);
});

viteProcess.on('exit', (code) => {
  // Clean up temp file
  try {
    fs.unlinkSync(tempScriptPath);
  } catch (e) {
    // Ignore cleanup errors
  }
  
  if (code !== 0) {
    console.log('\n===== TROUBLESHOOTING =====');
    console.log('If you continue to have issues:');
    console.log('1. Try running: SKIP_PACKAGE_JSON_CHECK=true npx vite');
    console.log('2. Or try: node src/bootstrap.js && npx vite');
    console.log('===========================\n');
  }
  
  process.exit(code);
});

console.log('Once started, your app will be available at http://localhost:8080');
