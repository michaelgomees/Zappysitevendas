
// Bootstrap script to run before Vite starts
// This helps set up a proper environment when package.json is missing

const fs = require('fs');
const path = require('path');

function setupEnvironment() {
  // Check multiple possible paths for package.json
  const possiblePaths = [
    path.resolve(__dirname, '../package.json'),
    '/dev-server/package.json', // This is the path npm is looking for
    path.resolve(process.cwd(), 'package.json')
  ];
  
  // Log the paths we're checking
  console.log('Checking for package.json in these locations:');
  possiblePaths.forEach(p => console.log(' - ' + p));
  
  // Check if package.json exists in any of these paths
  let packageJsonExists = false;
  let existingPath = null;
  
  for (const packagePath of possiblePaths) {
    if (fs.existsSync(packagePath)) {
      packageJsonExists = true;
      existingPath = packagePath;
      console.log(`Found package.json at: ${packagePath}`);
      break;
    }
  }
  
  // If no package.json found, create one in all necessary locations
  if (!packageJsonExists) {
    console.log('No package.json found, setting up fallback environment');
    
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
      
      // Write package.json to all required locations
      for (const packagePath of possiblePaths) {
        try {
          // Ensure directory exists
          const dir = path.dirname(packagePath);
          if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
            console.log(`Created directory: ${dir}`);
          }
          
          // Write the package.json file
          fs.writeFileSync(packagePath, JSON.stringify(minimalPackageJson, null, 2));
          console.log(`Created package.json at: ${packagePath}`);
          
          // Also create a minimal package-lock.json
          const lockFilePath = path.join(path.dirname(packagePath), 'package-lock.json');
          if (!fs.existsSync(lockFilePath)) {
            fs.writeFileSync(lockFilePath, JSON.stringify({
              name: "zappybot-website",
              version: "1.0.0",
              lockfileVersion: 3,
              requires: true,
              packages: {}
            }, null, 2));
            console.log(`Created package-lock.json at: ${lockFilePath}`);
          }
        } catch (pathError) {
          console.warn(`Could not create package.json at ${packagePath}:`, pathError);
        }
      }
      
    } catch (error) {
      console.warn('Failed to create temporary package.json:', error);
    }
  } else {
    console.log(`Using existing package.json at: ${existingPath}`);
  }
}

// Run the setup
setupEnvironment();

// Export a function that can be called from other modules
module.exports = {
  setupEnvironment
};
