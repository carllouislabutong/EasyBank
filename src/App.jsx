import { useEffect, useState } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Logo from "./assets/logo.svg";
import PhoneDesktop from "./assets/bg-intro-desktop.svg";
import PhoneBg from "./assets/image-mockups.png";
function App() {
  useEffect(() => {
    AOS.init({ duration: 900 });
  });

  return (
    <div>
      <header className="nav-header" data-aos="fade-down">
        <nav className="nav-container">
          <div classname="nav-logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="nav-area">
            <ul>
              <li>
                <a className="home">Home</a>
              </li>
              <li>
                <a className="about">About</a>
              </li>
              <li>
                <a className="contact">Contact</a>
              </li>
              <li>
                <a className="blog">Blog</a>
              </li>
              <li>
                <a className="careers">Careers</a>
              </li>
            </ul>
          </div>
          <div className="nav-button">
            <button>Request Invite</button>
          </div>
        </nav>
      </header>

      <main>
        <section className="first-section ">
          <div className="first-section-flex main-container">
            <div className="hero-first-section " data-aos="fade-right">
              <h1>
                Next generation <br />
                digital banking
              </h1>
              <p>
                Take you financial life online. Your Easybank account
                <br /> Will be a one-stop-shop for spending, saving, <br />{" "}
                budgeting, investing, and much more.{" "}
              </p>
              <button>Request Invite</button>
            </div>
            <div className="img-first-section">
              <img
                src={PhoneDesktop}
                alt="background colors"
                className="first-image"
              />
              <img src={PhoneBg} alt="four phones" className="second-image" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
