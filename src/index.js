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
import Footer from './Footer';


const router = createBrowserRouter([
  {
    path: "/",
    element: [<App />, <Home />, <About />, <Projects />, <Footer />],
  },
  {
    path: "/Tron",
    element: [<App />, <Tron />, <Footer />],
  },
  {
    path: "/MemoryGame",
    element: [<App />, <MemoryGame />, <Footer />],
  },
  {
    path: "/DormSwapandShop",
    element: [<App />, <DormSwapandShop />, <Footer />],
  },
  {
    path: "/Otea",
    element: [<App />, <Otea />, <Footer />],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
