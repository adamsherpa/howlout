import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
]);
const root = createRoot(document.getElementById('app'));

root.render(
  <RouterProvider value={router}>
    <App />
  </RouterProvider>,
);
