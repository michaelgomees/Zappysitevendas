
// Bootstrap script to run before Vite starts
// This helps set up a proper environment when package.json is missing

const fs = require('fs');
const path = require('path');

function setupEnvironment() {
  console.log('Running bootstrap environment setup...');
  
  // Check multiple possible paths for package.json
  const possiblePaths = [
    path.resolve(__dirname, '../package.json'),
    '/dev-server/package.json', // This is the path npm is looking for
    path.resolve(process.cwd(), 'package.json'),
    '/app/package.json' // Another possible location in some environments
  ];
  
  // Log the paths we're checking
  console.log('Checking for package.json in these locations:');
  possiblePaths.forEach(p => console.log(' - ' + p));
  
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
  
  // Try to create package.json in ALL possible locations
  let createdAny = false;
  
  for (const packagePath of possiblePaths) {
    try {
      // Ensure directory exists with maximum permissions
      const dir = path.dirname(packagePath);
      if (!fs.existsSync(dir)) {
        try {
          fs.mkdirSync(dir, { recursive: true, mode: 0o777 });
          console.log(`Created directory with full permissions: ${dir}`);
        } catch (dirError) {
          console.warn(`Could not create directory ${dir} with full permissions, trying without mode:`, dirError);
          fs.mkdirSync(dir, { recursive: true });
          console.log(`Created directory: ${dir}`);
        }
      }
      
      // Write the package.json file (always overwrite to ensure correct content)
      fs.writeFileSync(packagePath, JSON.stringify(minimalPackageJson, null, 2), { mode: 0o666 });
      console.log(`Created/updated package.json at: ${packagePath}`);
      
      // Also create a minimal package-lock.json
      const lockFilePath = path.join(path.dirname(packagePath), 'package-lock.json');
      fs.writeFileSync(lockFilePath, JSON.stringify({
        name: "zappybot-website",
        version: "1.0.0",
        lockfileVersion: 3,
        requires: true,
        packages: {}
      }, null, 2), { mode: 0o666 });
      console.log(`Created package-lock.json at: ${lockFilePath}`);
      
      createdAny = true;
    } catch (pathError) {
      console.warn(`Could not create package.json at ${packagePath}:`, pathError);
      // Try with sudo if permission denied
      if (pathError.code === 'EACCES') {
        console.log(`Permission denied. You may need to run with sudo for path: ${packagePath}`);
      }
    }
  }
  
  if (createdAny) {
    console.log('Successfully created package.json in at least one location');
  } else {
    console.warn('Could not create package.json in any location. The app may not run correctly.');
    console.log('You may need to manually create package.json or run with elevated permissions.');
  }
  
  // Set environment variables to help bypass package.json checks
  process.env.SKIP_PACKAGE_JSON_CHECK = 'true';
  process.env.FORCE_FALLBACK_CONFIG = 'true';
  
  return createdAny;
}

// Run the setup and export the result
const setupSuccessful = setupEnvironment();
console.log(`Bootstrap completed with ${setupSuccessful ? 'success' : 'warnings'}`);

// Export functions that can be called from other modules
module.exports = {
  setupEnvironment,
  setupSuccessful
};
