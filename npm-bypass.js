
#!/usr/bin/env node

// Emergency script to run the app without using npm commands
// Usage: node npm-bypass.js

console.log('Starting ZappyBot website bypassing npm completely...');

const fs = require('fs');
const path = require('path');
const child_process = require('child_process');

// First ensure all critical directories exist
const criticalDirs = [
  '/dev-server',
  path.resolve(__dirname, 'node_modules'),
  '/app'
];

for (const dir of criticalDirs) {
  try {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true, mode: 0o777 });
      console.log(`Created directory with full permissions: ${dir}`);
    }
  } catch (error) {
    console.warn(`Could not create directory ${dir}:`, error);
  }
}

// Create minimal package.json in all required locations
const minimalPackage = {
  name: "zappybot-website",
  version: "1.0.0",
  private: true,
  type: "module",
  dependencies: {
    "vite": "^5.0.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  }
};

const packageLocations = [
  path.resolve(__dirname, 'package.json'),
  '/dev-server/package.json',
  path.resolve(process.cwd(), 'package.json'),
  '/app/package.json'
];

for (const packagePath of packageLocations) {
  try {
    fs.writeFileSync(packagePath, JSON.stringify(minimalPackage, null, 2), { mode: 0o666 });
    console.log(`Created package.json at: ${packagePath}`);
  } catch (error) {
    console.warn(`Could not create package.json at ${packagePath}:`, error);
  }
}

// Now try different methods to start the app
console.log('Trying multiple methods to start the app...');

// Method 1: Use direct-start.js
try {
  console.log('Method 1: Using direct-start.js...');
  child_process.execSync('node direct-start.js', { stdio: 'inherit' });
} catch (error) {
  console.log('Method 1 failed. Trying method 2...');
  
  // Method 2: Try running Vite directly
  try {
    console.log('Method 2: Running bootstrap and Vite directly...');
    require('./src/bootstrap');
    
    // Try to load and run Vite directly
    const viteModulePaths = [
      path.resolve(__dirname, 'node_modules/vite'),
      '/dev-server/node_modules/vite',
      'vite' // global install
    ];
    
    let viteFound = false;
    
    for (const vitePath of viteModulePaths) {
      try {
        console.log(`Trying to require Vite from: ${vitePath}`);
        const vite = require(vitePath);
        console.log('Vite module found! Starting server...');
        
        vite.createServer({
          configFile: './vite.config.ts',
          server: {
            host: "::",
            port: 8080,
          },
          optimizeDeps: {
            force: true
          }
        }).then(server => {
          return server.listen();
        }).then(() => {
          console.log('Vite server started successfully at http://localhost:8080');
          viteFound = true;
        }).catch(err => {
          console.error('Failed to start Vite server:', err);
        });
        
        break; // Exit loop if we found a working Vite
      } catch (viteError) {
        console.warn(`Could not load Vite from ${vitePath}:`, viteError.message);
      }
    }
    
    if (!viteFound) {
      console.log('Method 2 failed. Trying method 3...');
      
      // Method 3: Use node to execute start-app.js
      try {
        console.log('Method 3: Using start-app.js...');
        child_process.execSync('node start-app.js', { stdio: 'inherit' });
      } catch (m3Error) {
        console.error('All methods failed. Please see error messages above for troubleshooting.');
        console.log('\nPlease try one of the following:');
        console.log('1. Install dependencies: npm install');
        console.log('2. Create /dev-server directory with write permissions: sudo mkdir -p /dev-server && sudo chmod 777 /dev-server');
        console.log('3. Run with environment variable: SKIP_PACKAGE_JSON_CHECK=true npx vite');
        console.log('4. See dev-help.js for more troubleshooting options: node dev-help.js');
      }
    }
  } catch (m2Error) {
    console.error('Method 2 failed:', m2Error);
  }
}
