import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { App } from './App';
import './index.scss';
import { HomePage } from './pages/HomePage';
import { LipPage } from './pages/LipPage';
import { MassagePage } from './pages/MassagePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'massage',
        element: <MassagePage />,
      },
      {
        path: 'lip',
        element: <LipPage />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
], {basename: '/candywolf11.github.io'});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
