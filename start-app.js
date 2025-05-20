
#!/usr/bin/env node

// Local development script for starting the app
// Usage: node start-app.js

const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log('Starting ZappyBot website in development mode...');

// Import and run the bootstrap setup first
const bootstrap = require('./src/bootstrap');
console.log('Running bootstrap to ensure package.json exists...');
bootstrap.setupEnvironment();

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

// Also check for the /dev-server directory which npm seems to be looking for
ensureDirectoryExists('/dev-server');

// Create a script to directly run vite using our bootstrap
const bootstrapScript = `
// Run bootstrap first to ensure package.json exists
require('./src/bootstrap.js');

// Now try to load and run vite
try {
  require('vite');
} catch (error) {
  console.error('Error loading Vite:', error);
  console.log('\\n===== TROUBLESHOOTING =====');
  console.log('1. Try running: SKIP_PACKAGE_JSON_CHECK=true npx vite');
  console.log('2. Or try: node src/bootstrap.js && npx vite');
  console.log('3. Ensure package.json exists in one of the expected paths');
  console.log('===========================\\n');
  process.exit(1);
}
`;

const tempScriptPath = path.join(__dirname, '_temp_start_vite.js');
fs.writeFileSync(tempScriptPath, bootstrapScript);

// Create a DirectVite execution script as an alternative
const directVitePath = path.join(__dirname, '_direct_vite.js');
fs.writeFileSync(directVitePath, `
// Direct execution of Vite bypassing npm
const { createServer } = require('vite');

async function startVite() {
  const server = await createServer({
    configFile: './vite.config.ts',
    server: {
      host: "::",
      port: 8080,
    }
  });
  await server.listen();
}

startVite().catch(error => {
  console.error('Failed to start Vite server:', error);
  process.exit(1);
});
`);

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
  console.log('\nTrying alternative direct Vite execution...');
  
  const directViteProcess = spawn('node', [directVitePath], {
    stdio: 'inherit',
    shell: true,
    env: {
      ...process.env,
      NODE_ENV: 'development',
      SKIP_PACKAGE_JSON_CHECK: 'true',
      FORCE_FALLBACK_CONFIG: 'true'
    }
  });
  
  directViteProcess.on('error', (directError) => {
    console.error('Alternative Vite execution also failed:', directError);
  });
});

viteProcess.on('exit', (code) => {
  // Clean up temp files
  try {
    fs.unlinkSync(tempScriptPath);
    fs.unlinkSync(directVitePath);
  } catch (e) {
    // Ignore cleanup errors
  }
  
  if (code !== 0) {
    console.log('\n===== TROUBLESHOOTING =====');
    console.log('If you continue to have issues:');
    console.log('1. Try running: SKIP_PACKAGE_JSON_CHECK=true npx vite');
    console.log('2. Or try: node src/bootstrap.js && npx vite');
    console.log('3. Check if /dev-server directory exists and has write permissions');
    console.log('===========================\n');
  }
  
  process.exit(code);
});

console.log('Once started, your app will be available at http://localhost:8080');
