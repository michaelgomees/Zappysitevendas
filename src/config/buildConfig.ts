
// This file provides build configuration fallbacks
// in case the package.json is not accessible or incomplete
export const buildConfig = {
  name: "zappybot-website",
  version: "1.0.0",
  private: true,
  type: "module",
  dependencies: {
    // Core dependencies needed for the app to build
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.26.2"
  },
  devDependencies: {
    // Core dev dependencies for the build process
    "typescript": "^5.0.0",
    "vite": "^5.0.0"
  }
};

// Helper function to access build config
export const getBuildConfig = () => {
  return buildConfig;
};
