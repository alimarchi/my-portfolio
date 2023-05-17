import "../style/About.css";
import mypicture from "../assets/Alice_PNG.png";
import mypicture2 from "../assets/alice1.jpg";
import Education from "./Education";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileLines,
  faGraduationCap,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import Experience from "./Experience";

function About() {
  return (
    <section className="main-section">
      <div className="container">
        <div className="section-header">
          <div className="divider"></div>
          <h2 className="section-title">About Me</h2>
        </div>
        <div className="about-main-container">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            efficitur convallis malesuada. Maecenas vitae pellentesque urna, vel
            egestas justo. Nunc elementum tincidunt est eu sagittis. Donec
            egestas ex in sapien posuere ornare. Mauris tempus, diam in
            sollicitudin bibendum, tortor arcu efficitur nibh, nec pellentesque
            massa urna ac dui. Nulla nec arcu at nunc finibus varius et quis
            urna. Vivamus finibus dignissim magna, vitae condimentum massa
            ullamcorper id. Vestibulum vel nibh quis metus convallis blandit.
            Quisque nisi ligula, fringilla vitae elementum vel, dignissim
            imperdiet massa. Donec ac sodales nibh. Ut fermentum placerat sem
            eget fringilla. Donec malesuada nisi ut arcu porta, eget lacinia
            justo tempus. Aliquam bibendum tellus rutrum fermentum suscipit. In
            id arcu et libero iaculis gravida ac sed tortor. Fusce elit dui,
            cursus sed vestibulum sit amet, ullamcorper non libero. Ut lacus
            massa, varius nec ipsum dignissim, lobortis aliquam leo. Morbi
            commodo pharetra nisi ut ornare. In hac habitasse platea dictumst.
            In et odio et sapien rhoncus pretium. Duis sed feugiat nulla.
            Maecenas rhoncus vehicula lacus quis efficitur. Nunc vulputate
            porttitor justo, sit amet ultricies libero efficitur vel. Praesent
            malesuada neque nec dignissim auctor. Proin suscipit iaculis odio
            sed hendrerit. Vestibulum leo leo, rutrum a ullamcorper vel, luctus
            ac tellus. Morbi interdum metus ut augue mattis, eu posuere est
            ultricies. Duis dui ligula, semper et commodo a, fermentum in
            tortor. Nulla facilisi. Donec at odio in enim malesuada ornare a et
            magna. Nam fringilla bibendum lectus non laoreet.
          </p>
          <button className="cv-button">
            Download CV
            <FontAwesomeIcon icon={faFileLines} className="cv-logo" />
          </button>
        </div>
        <div className="experience-title">
          <h4>
            <FontAwesomeIcon icon={faGraduationCap} /> Education
          </h4>
          <h4>
            <FontAwesomeIcon icon={faBriefcase} /> Experience
          </h4>
        </div>
        {/* <Education /> */}
        <Experience />
      </div>
    </section>
  );
}

export default About;
