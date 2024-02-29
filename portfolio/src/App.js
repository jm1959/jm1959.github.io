//import logo from './assets/images/logo.svg';
import { Outlet, Link } from "react-router-dom";
//import headshot from './assets/images/headshot.png';
import './styles/App.css';

function App() {
  return (
    <div>
      <div id="sidebar">
        <nav>
          <ul>
            <li>
              <Link to="/">JM</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Projects">Projects</Link>
            </li>
          </ul>
        </nav>

        <Outlet />
      </div>
    </div>
  );
}

export default App;
