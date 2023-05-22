import { useState } from "react";
import "../style/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleDropdown = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <header>
      <div className="mobile-header">
        <nav className="general-nav">
          <div>
            <a
              href="https://www.linkedin.com/in/alimarchi/"
              className="header-link"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                className="social-logo"
              />
            </a>
            <a href="https://github.com/alimarchi" className="header-link">
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                className="social-logo"
              />
            </a>
          </div>
          {!menuVisible ? (
            <FontAwesomeIcon
              icon={faBars}
              size="2x"
              onClick={handleDropdown}
              className="menu-logo"
            />
          ) : (
            <FontAwesomeIcon
              icon={faXmark}
              size="2x"
              onClick={handleDropdown}
              className="menu-logo"
            />
          )}
        </nav>
        {menuVisible && (
          <div className="dropdown-menu">
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#about">About Me</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="desktop-header container">
        <nav className="general-nav">
          <div>
            <a
              href="https://www.linkedin.com/in/alimarchi/"
              className="header-link"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                className="social-logo"
              />
            </a>
            <a href="https://github.com/alimarchi" className="header-link">
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                className="social-logo"
              />
            </a>
          </div>
          <ul className="menu-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
