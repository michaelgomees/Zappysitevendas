
// Local Vite configuration fallback
// This helps with local development when package.json might not be properly loaded

export const localViteConfig = {
  server: {
    host: "::",
    port: 8080,
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  }
};
