import { createBrowserRouter, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import App from './App';

// Lazy load the page components for better performance
const TrendingPage = lazy(() => import('./pages/Trending'));
const SettingsPage = lazy(() => import('./pages/Settings'));

const router = createBrowserRouter([
 {
    path: '/',
    element: <App />,
    children: [
      {
        index: true, // 代表 path: '/'
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
    ]
 }
]);

export default router;
