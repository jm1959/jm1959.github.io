import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './styles/index.css';
import App from './App';
import Home from './Home';
import About from './About';
import Projects from './Projects';

const Index = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/About',
        element: <About />
      },
      {
        path: '/Projects',
        element: <Projects />
      }
    ]
  },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={Index} />
  </React.StrictMode>
);
