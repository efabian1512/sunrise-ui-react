import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './components/HomePage'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { RouterProvider } from 'react-router-dom';
import router from './routing/routes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>
);
