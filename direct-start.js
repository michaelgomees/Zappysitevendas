
#!/usr/bin/env node

// Emergency direct starter that bypasses npm completely
// Usage: node direct-start.js

console.log('Starting direct Vite instance without npm...');

// First run the bootstrap script to ensure package.json exists
try {
  require('./src/bootstrap');
  console.log('Bootstrap completed successfully');
} catch (error) {
  console.error('Error during bootstrap:', error);
  // Continue execution even if bootstrap fails
}

// Now try to start Vite directly
try {
  // Create minimal package.json files in all possible locations
  const fs = require('fs');
  const path = require('path');
  
  const minimalPackage = {
    name: "zappybot-website",
    version: "1.0.0",
    private: true,
    type: "module"
  };
  
  // Critical paths that npm might check for package.json
  const criticalPaths = [
    path.resolve(__dirname, 'package.json'),
    '/dev-server/package.json',
    path.resolve(process.cwd(), 'package.json')
  ];
  
  // Ensure all critical paths have a package.json
  for (const packagePath of criticalPaths) {
    try {
      // Ensure directory exists
      const dir = path.dirname(packagePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
        console.log(`Created directory: ${dir}`);
      }
      
      // Write the file if it doesn't exist
      if (!fs.existsSync(packagePath)) {
        fs.writeFileSync(packagePath, JSON.stringify(minimalPackage, null, 2));
        console.log(`Created minimal package.json at: ${packagePath}`);
      }
    } catch (pathError) {
      console.warn(`Could not create package.json at ${packagePath}, error:`, pathError);
    }
  }
  
  // Set environment variables to bypass package.json checks
  process.env.SKIP_PACKAGE_JSON_CHECK = 'true';
  process.env.FORCE_FALLBACK_CONFIG = 'true';
  
  console.log('Starting Vite directly with ESM imports...');
  
  // Dynamic import for ESM modules
  import('vite').then(vite => {
    console.log('Vite module loaded successfully');
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
      console.log('Vite server created');
      return server.listen();
    }).then(() => {
      console.log('Vite server started successfully at http://localhost:8080');
    }).catch(error => {
      console.error('Error starting Vite server:', error);
    });
  }).catch(importError => {
    console.error('Failed to import Vite:', importError);
    console.log('\nPlease try running: npm install vite');
  });
} catch (error) {
  console.error('Failed to start Vite directly:', error);
  console.log('\nTry running: npm install && npx vite');
}
