import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './components/HomePage'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { RouterProvider } from 'react-router-dom';
import router from './routing/routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { Provider } from 'react-redux';
import { store } from './GlobalState/store';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <Theme>
       <RouterProvider router={router}/>
      </Theme>
    </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
