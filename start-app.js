
// Local development script for starting the app
// Usage: node start-app.js

const { spawn } = require('child_process');
const path = require('path');

console.log('Starting ZappyBot website in development mode...');

// Run Vite directly without relying on package.json scripts
const viteProcess = spawn('npx', ['vite'], {
  stdio: 'inherit',
  shell: true,
  env: {
    ...process.env,
    NODE_ENV: 'development',
  }
});

viteProcess.on('error', (error) => {
  console.error('Failed to start development server:', error);
});

console.log('Once started, your app will be available at http://localhost:8080');
