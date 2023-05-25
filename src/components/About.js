import { useState } from "react";
import "../style/About.css";
import mypicture from "../assets/About_photo.png";
import CV from "../assets/CV_Alice_Marchi.pdf";
import Education from "./Education";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileLines,
  faGraduationCap,
  faBriefcase,
  faGlobe,
  faLaptopCode,
  faSquarePollVertical,
} from "@fortawesome/free-solid-svg-icons";
import Experience from "./Experience";
import { Slide } from "react-awesome-reveal";

function About() {
  const [educationOn, setEducationOn] = useState(true);
  const [experienceOn, setExperienceOn] = useState(false);

  const handleEducation = () => {
    if (!educationOn) {
      setEducationOn(true);
      setExperienceOn(false);
    }
  };

  const handleExperience = () => {
    if (!experienceOn) {
      setExperienceOn(true);
      setEducationOn(false);
    }
  };

  return (
    <section className="main-section" id="about">
      <div className="container">
        <div className="section-header">
          <div className="divider"></div>
          <h2 className="section-title">About Me</h2>
        </div>
        <Slide triggerOnce>
          <div className="about-main-container">
            <div className="about-photo-container">
              <div className="my-photo-container">
                <img src={mypicture} alt="Alice Marchi" />
              </div>
            </div>
            <div className="about-info-container">
              <div>
                <FontAwesomeIcon icon={faGlobe} size="2x" />
              </div>
              <p>
                Hi, I'm Alice, an Italian web developer currently based in
                Malaga, Spain. I consider myself a multipotentialite, embracing
                a flexible, organized, and curious approach to life. I have a
                passion for learning, acquiring new skills, and exploring
                diverse cultures, which helps me broaden my horizons. That's why
                I pursued foreign language studies at the university, where I
                focused on English and German with a business-oriented
                perspective.
              </p>
              <div>
                <FontAwesomeIcon icon={faSquarePollVertical} size="2x" />
              </div>
              <p>
                After completing my degree, I embarked on a journey in the
                digital marketing field. For several years, I worked for a
                Spanish e-commerce company, gaining valuable insights into
                website functionality and enhancing the online user experience.
                This experience sparked my interest in web development and
                coding as a whole. I delved into studying <strong>Python</strong> and coding
                principles, eventually venturing into the dynamic world of IT,
                specializing in big data analysis.
              </p>
              <div>
                <FontAwesomeIcon icon={faLaptopCode} size="2x" />
              </div>
              <p>
                Driven by my passion, I decided to transition to web
                development, which had always captivated me. This field allows
                me to channel my creativity and challenge my logical thinking. I
                enrolled in a comprehensive full-stack web development bootcamp,
                focusing on <strong>MERN development</strong> (MongoDB, Express, React, Node.js).
                Through personal projects, I honed my skills and gained
                practical experience. I remain open to learning new frameworks
                and languages, constantly expanding my repertoire. I am actively
                seeking opportunities with a company that values continued
                learning and growth, where I can contribute my expertise and
                knowledge as a web developer.
              </p>
              <a className="cv-button" download="CV_AliceMarchi.pdf" href={CV}>
                Download CV
                <FontAwesomeIcon icon={faFileLines} className="cv-logo" />
              </a>
            </div>
          </div>
        </Slide>
        <div className="experience-title">
          <h4
            onClick={handleEducation}
            className={educationOn ? "selected" : ""}
          >
            <FontAwesomeIcon icon={faGraduationCap} /> Education
          </h4>
          <h4
            onClick={handleExperience}
            className={experienceOn ? "selected" : ""}
          >
            <FontAwesomeIcon icon={faBriefcase} /> Experience
          </h4>
        </div>
        {educationOn && <Education />}
        {experienceOn && <Experience />}
      </div>
    </section>
  );
}

export default About;
