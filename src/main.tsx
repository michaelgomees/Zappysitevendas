
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Simple initialization without package.json dependencies
function initializeApp() {
  console.log('Initializing ZappyBot application...');
  
  // Check that we have a root element
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    console.error("Root element not found! Creating a root element.");
    const newRoot = document.createElement("div");
    newRoot.id = "root";
    document.body.appendChild(newRoot);
    return newRoot;
  }
  
  return rootElement;
}

// Initialize and render the app
const rootElement = initializeApp();
createRoot(rootElement).render(<App />);
