import React from 'react';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/App.css';
// import Home from './Home';
// import About from './About';
// import Projects from './Projects';
// import Tron from './Tron';
// import MemoryGame from './MemoryGame';
// import DormSwapandShop from './DormSwapandShop';
// import Otea from './Otea';

function App() {
  return (
    <div>
      <div id="sidebar">
        <nav>
          <ul>
            <li>
              <a href="/#Home">JM</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="/#Home">Home</a>
            </li>
            <li>
              <a href="/#About">About</a>
            </li>
            <li>
              <a href="/#Projects">Projects</a>
            </li>
          </ul>
        </nav>
      </div>
      {/* <Home />
      <About />
      <Projects /> */}
    </div>
  );
}

export default App;
