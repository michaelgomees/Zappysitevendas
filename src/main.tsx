
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { getBuildConfig } from './config/buildConfig'

// Make build config available globally for build tools that might need it
if (typeof window !== 'undefined') {
  // @ts-ignore
  window.__BUILD_CONFIG = getBuildConfig();
}

createRoot(document.getElementById("root")!).render(<App />);
