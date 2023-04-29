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
  const [openMenuLogo, setOpenMenuLogo] = useState(false);

  const handleOpenMenu = () => setOpenMenuLogo(!openMenuLogo);

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
          <div className="hamburger-menu" onClick={handleOpenMenu}>
            {openMenuLogo ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17">
                <g fill="#2D314D" fill-rule="evenodd">
                  <path d="M.868.661l16.97 16.97-.706.708L.162 1.369z" />
                  <path d="M.161 17.632L17.131.662l.708.706-16.97 16.97z" />
                </g>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="11">
                <g fill="#2D314D" fill-rule="evenodd">
                  <path d="M0 0h24v1H0zM0 5h24v1H0zM0 10h24v1H0z" />
                </g>
              </svg>
            )}
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
                <span> Will be a one-stop-shop for spending, saving,</span>{" "}
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

        <section className="second-section">
          <div className="main-container">
            <div className="second-hero-section">
              <h1>Why Choose Easybank?</h1>
              <p>
                We leverage Open Banking to turn your bank account into your
                financial hub.{" "}
                <span>Control your finances like never before.</span>
              </p>
            </div>
            <div className="second-section-flex">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
