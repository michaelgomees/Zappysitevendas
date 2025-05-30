
import { buildConfig } from './buildConfig';
import fs from 'fs';
import path from 'path';

/**
 * This utility generates a temporary package.json file when the real one can't be found
 * It's used as a fallback mechanism during development and build processes
 */
export function generateTemporaryPackageJson(targetDir: string = '.'): void {
  try {
    // Check multiple possible locations for package.json
    const possiblePaths = [
      path.join(targetDir, 'package.json'),
      '/dev-server/package.json', // This is the path npm is looking for
      path.resolve(process.cwd(), 'package.json')
    ];
    
    console.log('Checking for package.json in these locations:');
    possiblePaths.forEach(p => console.log(' - ' + p));
    
    // Check if package.json exists in any of these paths
    let packageJsonExists = false;
    
    for (const packagePath of possiblePaths) {
      if (fs.existsSync(packagePath)) {
        packageJsonExists = true;
        console.log(`Found package.json at: ${packagePath}`);
        break;
      }
    }
    
    // If no package.json found, create one in all necessary paths
    if (!packageJsonExists) {
      console.log('No package.json found, generating temporary version from buildConfig');
      
      // Create package.json content from buildConfig
      const packageJson = {
        name: buildConfig.name,
        version: buildConfig.version,
        private: buildConfig.private,
        type: buildConfig.type,
        dependencies: buildConfig.dependencies,
        devDependencies: buildConfig.devDependencies,
        scripts: {
          "start": "vite",
          "build": "vite build",
          "preview": "vite preview"
        }
      };
      
      // Write the package.json to all paths that might be checked
      for (const packagePath of possiblePaths) {
        try {
          // Ensure directory exists
          const dir = path.dirname(packagePath);
          if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
            console.log(`Created directory: ${dir}`);
          }
          
          // Write the file
          fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
          console.log(`Generated temporary package.json at: ${packagePath}`);
          
          // Also create package-lock.json
          const lockFilePath = path.join(path.dirname(packagePath), 'package-lock.json');
          if (!fs.existsSync(lockFilePath)) {
            fs.writeFileSync(lockFilePath, JSON.stringify({
              name: buildConfig.name,
              version: buildConfig.version,
              lockfileVersion: 3,
              requires: true,
              packages: {}
            }, null, 2));
            console.log(`Created minimal package-lock.json at: ${lockFilePath}`);
          }
        } catch (error) {
          console.warn(`Failed to create package.json at ${packagePath}:`, error);
        }
      }
    }
  } catch (error) {
    console.error('Failed to generate temporary package.json:', error);
  }
}
