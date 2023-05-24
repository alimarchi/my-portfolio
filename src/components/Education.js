import "../style/Timeline.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { Fade } from "react-awesome-reveal";

const Education = () => {
  return (
    <div className="timeline">
      <div className="timeline-data left-item">
        <Fade>
          <div>
            <h4>Full Stack Web Development Bootcamp</h4>
            <p className="company-name">CodeSpace Academy</p>
            <p className="date">
              <FontAwesomeIcon icon={faCalendarDays} /> 2022-2023
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              efficitur convallis malesuada. Maecenas vitae pellentesque urna,
              vel egestas justo. Nunc elementum tincidunt est eu sagittis. Donec
              egestas ex in sapien posuere ornare.
            </p>
          </div>
        </Fade>
        <div>
          <span className="circle"></span>
          <span className="line"></span>
        </div>
      </div>
      <div className="timeline-data">
        <div></div>
        <div>
          <span className="circle"></span>
          <span className="line"></span>
        </div>
        <Fade>
          <div>
            <h4>Learn to program from scratch</h4>
            <p className="company-name">KeepCoding</p>
            <p className="date">
              <FontAwesomeIcon icon={faCalendarDays} /> 2022-2023
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              efficitur convallis malesuada. Maecenas vitae pellentesque urna,
              vel egestas justo. Nunc elementum tincidunt est eu sagittis. Donec
              egestas ex in sapien posuere ornare.
            </p>
          </div>
        </Fade>
      </div>
      <div className="timeline-data left-item">
        <Fade>
          <div>
            <h4>Erasmus</h4>
            <p className="company-name">Kassel</p>
            <p className="date">
              <FontAwesomeIcon icon={faCalendarDays} /> 2022-2023
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              efficitur convallis malesuada. Maecenas vitae pellentesque urna,
              vel egestas justo. Nunc elementum tincidunt est eu sagittis. Donec
              egestas ex in sapien posuere ornare.
            </p>
          </div>
        </Fade>
        <div>
          <span className="circle"></span>
          <span className="line"></span>
        </div>
      </div>
      <div className="timeline-data">
        <div></div>
        <div>
          <span className="circle"></span>
        </div>
        <Fade>
          <div>
            <h4>Language</h4>
            <p className="company-name">Catholic University</p>
            <p className="date">
              <FontAwesomeIcon icon={faCalendarDays} /> 2022-2023
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              efficitur convallis malesuada. Maecenas vitae pellentesque urna,
              vel egestas justo. Nunc elementum tincidunt est eu sagittis. Donec
              egestas ex in sapien posuere ornare.
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Education;
