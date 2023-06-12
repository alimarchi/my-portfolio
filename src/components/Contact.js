import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
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
import { Fade } from "react-awesome-reveal";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const notifySuccess = () => {
    toast.success(
      "Thank you! I've received your message and I'll get back to you asap 🚀",
      {
        position: "top-center",
        autoClose: 8000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    );
  };

  const notifyError = () => {
    toast.error(
      "I'm sorry, an error occurred but you can send me an email! ✉️",
      {
        position: "top-center",
        autoClose: 8000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    );
  };

  const form = useRef();
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const name = form.current.user_name.value.trim();
    const email = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();

    let valid = true;

    if (name.length < 1) {
      setNameError("Name is required.");
      valid = false;
    } else {
      setNameError(false);
    }

    if (!validateEmail(email)) {
      setEmailError("Invalid email address.");
      valid = false;
    } else {
      setEmailError(false);
    }

    if (message.length < 5) {
      setMessageError("Message must be at least 5 characters.");
      valid = false;
    } else {
      setMessageError(false);
    }

    return valid;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATED_ID,
          form.current,
          "Iyl0-LSUsgu5Dy0sW"
        )
        .then(
          (result) => {
            e.target.reset();
            notifySuccess();
          },
          (error) => {
            notifyError();
          }
        );
    }
  };

  return (
    <section className="main-section" id="contact">
      <div className="container">
        <div className="section-header">
          <div className="divider"></div>
          <h2 className="section-title">Contact</h2>
        </div>
        <div className="contact-container">
          <Fade triggerOnce>
            <div className="contact-info">
              <h3 className="contact-title">Let's get in touch!</h3>
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
                <a
                  href="https://www.linkedin.com/in/alimarchi/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
                <a
                  href="https://github.com/alimarchi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  alimarchi{" "}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="click-arrow hvr-forward"
                  />
                </a>
              </div>
              <div>
                <div>
                  <a
                    className="contact-button"
                    download="CV_AliceMarchi.pdf"
                    href={CV}
                  >
                    Download CV
                    <FontAwesomeIcon
                      icon={faFileLines}
                      className="contact-logo"
                    />
                  </a>
                </div>
              </div>
            </div>
          </Fade>
          <Fade triggerOnce>
            <div className="contact-form">
              <h3 className="contact-title">Write me a message</h3>
              <form ref={form} onSubmit={sendEmail}>
                <div className="input-container">
                  <label htmlFor="user_name">Name</label>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Your name"
                    className={nameError ? "invalid" : ""}
                  />
                  {nameError && <p className="error-message">{nameError}</p>}
                </div>
                <div className="input-container">
                  <label htmlFor="user_email">Email</label>
                  <input
                    type="text"
                    name="user_email"
                    placeholder="Your email"
                    className={emailError ? "invalid" : ""}
                  />
                  {emailError && <p className="error-message">{emailError}</p>}
                </div>
                <div className="input-container">
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    placeholder="Your message"
                    className={messageError ? "invalid" : ""}
                  ></textarea>
                  {messageError && (
                    <p className="error-message">{messageError}</p>
                  )}
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
          </Fade>
        </div>
        <ToastContainer />
      </div>
    </section>
  );
};

export default Contact;
