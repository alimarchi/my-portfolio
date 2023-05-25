import "../style/Timeline.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { Fade } from "react-awesome-reveal";

const Education = () => {
  return (
    <div className="timeline">
      <div className="timeline-data left-item">
        <Fade triggerOnce>
          <div>
            <h4>Full Stack Web Development Bootcamp</h4>
            <p className="company-name">CodeSpace Academy (Spain)</p>
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
        <Fade triggerOnce>
          <div>
            <h4>Learn to Program from Scratch with Python</h4>
            <p className="company-name">KeepCoding Tech School (Spain)</p>
            <p className="date">
              <FontAwesomeIcon icon={faCalendarDays} /> 2022
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
        <Fade triggerOnce>
          <div>
            <h4>Erasmus Program</h4>
            <p className="company-name">Univeristy of Kassel (Germany)</p>
            <p className="date">
              <FontAwesomeIcon icon={faCalendarDays} /> 2013-2014
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
        <Fade triggerOnce>
          <div>
            <h4>First Level Degree in Linguistic Sciences</h4>
            <p className="company-name">Catholic University (Italy)</p>
            <p className="date">
              <FontAwesomeIcon icon={faCalendarDays} /> 2011-2015
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
