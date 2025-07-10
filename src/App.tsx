
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';
import { ThemeProvider } from 'next-themes';
import Index from './pages/Index';

// Create a query client instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
          </Routes>
          <Toaster position="top-center" />
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
