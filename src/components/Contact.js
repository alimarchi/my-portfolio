import "../style/Contact.css";
import CV from "../assets/CV_Alice_Marchi.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faFileLines,
  faEnvelope,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <section className="main-section" id="contact">
      <div className="container">
        <div className="section-header">
          <div className="divider"></div>
          <h2 className="section-title">Contact</h2>
        </div>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Let's get in touch!</h3>
            <div className="contact-card">
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
              <h4>Email</h4>
              <a href="mailto:marchi_alice@yahoo.com">
                Write me{" "}
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="click-arrow hvr-forward"
                />
              </a>
            </div>
            <div className="contact-card">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
              <h4>LinkedIn</h4>
              <a href="https://www.linkedin.com/in/alimarchi/">
                alimarchi{" "}
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="click-arrow hvr-forward"
                />
              </a>
            </div>
            <div className="contact-card">
              <FontAwesomeIcon icon={faGithub} size="2x" />
              <h4>Github</h4>
              <a href="https://github.com/alimarchi">
                alimarchi{" "}
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="click-arrow hvr-forward"
                />
              </a>
            </div>
            <div>
              <div>
                <button className="contact-button">
                  <a download="CV_AliceMarchi.pdf" href={CV}>
                    Download CV
                    <FontAwesomeIcon
                      icon={faFileLines}
                      className="contact-logo"
                    />
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <h3>Write me a message</h3>
            <form>
              <div className="input-container">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="Your name" />
              </div>
              <div className="input-container">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" placeholder="Your email" />
              </div>
              <div className="input-container">
                <label htmlFor="message">Message</label>
                <textarea name="message" placeholder="Your message"></textarea>
              </div>
              <div className="contact-button-container">
                <button type="submit" className="contact-button">
                  Send Message{" "}
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    className="contact-logo"
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
