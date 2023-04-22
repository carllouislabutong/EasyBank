import { useEffect, useState } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Logo from "./assets/logo.svg";
function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  return (
    <div>
      <header className="nav-container">
        <nav>
          <div>
            <img src={Logo} alt="logo" />
          </div>
          <div className="nav-area">
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Careers</a>
              </li>
            </ul>
          </div>
          <div></div>
        </nav>
      </header>
    </div>
  );
}

export default App;
