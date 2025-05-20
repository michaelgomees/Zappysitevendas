
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
    // Core dev dependencies for the build process
    "typescript": "^5.0.0",
    "vite": "^5.0.0",
    "@vitejs/plugin-react-swc": "^3.5.0",
    "tailwindcss": "^3.4.1",
    "postcss": "^8.4.35",
    "autoprefixer": "^10.4.18"
  }
};

// Helper function to access build config
export const getBuildConfig = () => {
  return buildConfig;
};
