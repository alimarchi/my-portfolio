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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              efficitur convallis malesuada. Maecenas vitae pellentesque urna,
              vel egestas justo. Nunc elementum tincidunt est eu sagittis. Donec
              egestas ex in sapien posuere ornare. Mauris tempus, diam in
              sollicitudin bibendum, tortor arcu efficitur nibh, nec
              pellentesque massa urna ac dui. Nulla nec arcu at nunc finibus
              varius et quis urna. Vivamus finibus dignissim magna, vitae
              condimentum massa ullamcorper id. Vestibulum vel nibh quis metus
              convallis blandit.
            </p>
            <div>
              <FontAwesomeIcon icon={faSquarePollVertical} size="2x" />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              efficitur convallis malesuada. Maecenas vitae pellentesque urna,
              vel egestas justo. Nunc elementum tincidunt est eu sagittis. Donec
              egestas ex in sapien posuere ornare. Mauris tempus, diam in
              sollicitudin bibendum, tortor arcu efficitur nibh, nec
              pellentesque massa urna ac dui. Nulla nec arcu at nunc finibus
              varius et quis urna. Vivamus finibus dignissim magna, vitae
              condimentum massa ullamcorper id. Vestibulum vel nibh quis metus
              convallis blandit.
            </p>
            <div>
              <FontAwesomeIcon icon={faLaptopCode} size="2x" />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              efficitur convallis malesuada. Maecenas vitae pellentesque urna,
              vel egestas justo. Nunc elementum tincidunt est eu sagittis. Donec
              egestas ex in sapien posuere ornare. Mauris tempus, diam in
              sollicitudin bibendum, tortor arcu efficitur nibh, nec
              pellentesque massa urna ac dui. Nulla nec arcu at nunc finibus
              varius et quis urna. Vivamus finibus dignissim magna, vitae
              condimentum massa ullamcorper id. Vestibulum vel nibh quis metus
              convallis blandit.
            </p>
              <a  className="cv-button" download="CV_AliceMarchi.pdf" href={CV}>
                Download CV
                <FontAwesomeIcon icon={faFileLines} className="cv-logo" />
              </a>
          </div>
        </div>
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
