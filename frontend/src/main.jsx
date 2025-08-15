import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import HomePage from './pages/HomePage.jsx';
import About from './pages/About.jsx'; // Make sure to import About
import Login from './pages/Login.jsx';
import TaskList from './pages/TaskList.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true, // This replaces path: '/' for the default route
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <About />, // Add the About route
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'tasks',
        element: <TaskList />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);