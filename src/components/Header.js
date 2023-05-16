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
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2x"
              className="social-logo"
            />
            <FontAwesomeIcon
              icon={faGithub}
              size="2x"
              className="social-logo"
            />
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
                <a>Home</a>
              </li>
              <li>
                <a>Projects</a>
              </li>
              <li>
                <a>About Me</a>
              </li>
              <li>
                <a>Skills</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="desktop-header container">
        <nav className="general-nav">
          <div>
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2x"
              className="social-logo"
            />
            <FontAwesomeIcon
              icon={faGithub}
              size="2x"
              className="social-logo"
            />
          </div>
          <ul className="menu-links">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Projects</a>
              </li>
              <li>
                <a>About Me</a>
              </li>
              <li>
                <a>Skills</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
