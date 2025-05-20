
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { getBuildConfig } from './config/buildConfig'

// Make build config available globally for build tools that might need it
if (typeof window !== 'undefined') {
  // @ts-ignore
  window.__BUILD_CONFIG = getBuildConfig();
  console.log('App starting with build config:', getBuildConfig().name, 'v' + getBuildConfig().version);
}

// Check that we have a root element
const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error("Root element not found! Creating a root element.");
  const newRoot = document.createElement("div");
  newRoot.id = "root";
  document.body.appendChild(newRoot);
}

createRoot(document.getElementById("root")!).render(<App />);
