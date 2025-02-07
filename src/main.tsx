import { createRoot } from 'react-dom/client'
import './index.css'
import { AppRoutes } from './routes/index.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <div className="lg:px-12 sm:px-2 bg-zinc-900 text-zinc-50 antialiased">
      <AppRoutes />
    </div>
  </QueryClientProvider>
)
