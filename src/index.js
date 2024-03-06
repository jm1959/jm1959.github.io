import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './styles/index.css';
import App from './App';
import Tron from './Tron';
import MemoryGame from './MemoryGame';
import DormSwapandShop from './DormSwapandShop';
import Otea from './Otea';
import Home from './Home';
import About from './About';
import Projects from './Projects';


const router = createBrowserRouter([
  {
    path: "/",
    element: [<App />, <Home />, <About />, <Projects />],
  },
  {
    path: "/Tron",
    element: [<App />, <Tron />],
  },
  {
    path: "/MemoryGame",
    element: [<App />, <MemoryGame />],
  },
  {
    path: "/DormSwapandShop",
    element: [<App />, <DormSwapandShop />],
  },
  {
    path: "/Otea",
    element: [<App />, <Otea />],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
