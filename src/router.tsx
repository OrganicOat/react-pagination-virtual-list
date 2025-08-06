import { createBrowserRouter, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import App from './App';

const TrendingPage = lazy(() => import('./pages/Trending'));
const SettingsPage = lazy(() => import('./pages/Settings'));

const router = createBrowserRouter([
 {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/trending" replace />,
      },

      {
        path: "/trending",
        element: <TrendingPage />,
      },
      {
        path: "/settings",
        element: <SettingsPage />,
      },
      {
        path: '*',
        element: <Navigate to="/trending" replace />,
      },
    ]
 }
]);

export default router;
