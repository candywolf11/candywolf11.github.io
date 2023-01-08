import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { App } from './app/app';

const HomePage = lazy(() => import('./app/pages/HomePage'));
const LipPage = lazy(() => import('./app/pages/LipPage'));
const MassagePage = lazy(() => import('./app/pages/MassagePage'));

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
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Loading = <div className="flex justify-center items-center">
  <span className="visually-hidden">Loading...</span>
</div>;

root.render(
  <React.StrictMode>
    <Suspense fallback={Loading}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
