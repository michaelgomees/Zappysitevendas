
#!/usr/bin/env node

// Emergency direct starter that bypasses npm completely
// Usage: node direct-start.js

console.log('Starting direct Vite instance without npm...');

// First run the bootstrap script to ensure package.json exists
require('./src/bootstrap');

// Now try to start Vite directly
try {
  // Dynamic import for ESM modules
  import('vite').then(vite => {
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
