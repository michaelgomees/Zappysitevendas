
import { buildConfig } from './buildConfig';
import fs from 'fs';
import path from 'path';

/**
 * This utility generates a temporary package.json file when the real one can't be found
 * It's used as a fallback mechanism during development and build processes
 */
export function generateTemporaryPackageJson(targetDir: string = '.'): void {
  try {
    // Check if package.json already exists
    const packagePath = path.join(targetDir, 'package.json');
    
    if (!fs.existsSync(packagePath)) {
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
      
      // Write the temporary file
      fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
      console.log('Temporary package.json generated successfully');
    }
  } catch (error) {
    console.error('Failed to generate temporary package.json:', error);
  }
}
