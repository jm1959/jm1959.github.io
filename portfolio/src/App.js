import React from 'react';
import { BrowserRouter } from "react-router-dom";
import './styles/App.css';
import Home from './Home';
import About from './About';
import Projects from './Projects';

function App() {
  return (
    <BrowserRouter>
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
        <Home />
        <About />
        <Projects />
        {/* <div>
          <Routes>
            <Route index path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/About" element={<About />} />
          </Routes>
          <Routes>
            <Route path="/Projects" element={<Projects />} />
          </Routes>
        </div> */}
      </div>
    </BrowserRouter >
  );
}

export default App;
