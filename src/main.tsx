import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { Toaster } from 'sonner'
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from './components/provider/ThemeProvider.tsx'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
      <Toaster />
    </QueryClientProvider>
    </Provider>
    </ThemeProvider>
  </React.StrictMode>
)
