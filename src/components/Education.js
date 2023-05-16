import "../style/Education.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

const Education = () => {
  return (
    <div className="education-timeline">
      <div className="education-data left-item">
        <div>
          <h4>Full Stack Web Development Bootcamp</h4>
          <p>CodeSpace Academy</p>
          <p>
            <FontAwesomeIcon icon={faCalendarDays} /> 2022-2023
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            efficitur convallis malesuada. Maecenas vitae pellentesque urna, vel
            egestas justo. Nunc elementum tincidunt est eu sagittis. Donec
            egestas ex in sapien posuere ornare.
          </p>
        </div>
        <div>
          <span className="circle"></span>
          <span className="line"></span>
        </div>
      </div>
      <div className="education-data">
        <div></div>
        <div>
          <span className="circle"></span>
          <span className="line"></span>
        </div>
        <div>
          <h4>Learn to program from scratch</h4>
          <p>KeepCoding</p>
          <p>
            <FontAwesomeIcon icon={faCalendarDays} /> 2022-2023
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            efficitur convallis malesuada. Maecenas vitae pellentesque urna, vel
            egestas justo. Nunc elementum tincidunt est eu sagittis. Donec
            egestas ex in sapien posuere ornare.
          </p>
        </div>
      </div>
      <div className="education-data left-item">
        <div>
          <h4>Erasmus</h4>
          <p>Kassel</p>
          <p>
            <FontAwesomeIcon icon={faCalendarDays} /> 2022-2023
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            efficitur convallis malesuada. Maecenas vitae pellentesque urna, vel
            egestas justo. Nunc elementum tincidunt est eu sagittis. Donec
            egestas ex in sapien posuere ornare.
          </p>
        </div>
        <div>
          <span className="circle"></span>
          <span className="line"></span>
        </div>
      </div>
      <div className="education-data">
        <div></div>
        <div>
          <span className="circle"></span>
        </div>
        <div>
          <h4>Language</h4>
          <p>Catholic University</p>
          <p>
            <FontAwesomeIcon icon={faCalendarDays} /> 2022-2023
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            efficitur convallis malesuada. Maecenas vitae pellentesque urna, vel
            egestas justo. Nunc elementum tincidunt est eu sagittis. Donec
            egestas ex in sapien posuere ornare.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Education;
