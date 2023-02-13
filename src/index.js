import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';

import Home from './Home';
import ErrorPage from './ErrorPage';
import Weather from './components/weather/Weather';
import Project from './components/project/Project';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: []
  },
  {
    path: "/weather",
    element: <Weather />,
    errorElement: <ErrorPage />,
  }, {
    path: "/project",
    element: <Project />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
