import "../style/Timeline.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

const Experience = () => {
  return (
    <div className="timeline">
      <div className="timeline-data left-item">
        <div>
          <h4>Junior Full Stack Web Developer</h4>
          <p className="date">
            <FontAwesomeIcon icon={faCalendarDays} /> 2023
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
      <div className="timeline-data">
        <div></div>
        <div>
          <span className="circle"></span>
          <span className="line"></span>
        </div>
        <div>
          <h4>Big Data Consultant</h4>
          <p className="company-name">Bosonit</p>
          <p className="date">
            <FontAwesomeIcon icon={faCalendarDays} /> 2022
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            efficitur convallis malesuada. Maecenas vitae pellentesque urna, vel
            egestas justo. Nunc elementum tincidunt est eu sagittis. Donec
            egestas ex in sapien posuere ornare.
          </p>
        </div>
      </div>
      <div className="timeline-data left-item">
        <div>
          <h4>Community Manager</h4>
          <p className="company-name">Maquillalia</p>
          <p className="date">
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
      <div className="timeline-data">
        <div></div>
        <div>
          <span className="circle"></span>
          <span className="line"></span>
        </div>
        <div>
          <h4>Community Manager</h4>
          <p className="company-name">Belletica</p>
          <p className="date">
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
      <div className="timeline-data left-item">
        <div>
          <h4>Marketing Assistant</h4>
          <p className="company-name">Società Dante Alighieri</p>
          <p className="date">
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
        </div>
      </div>
    </div>
  );
};

export default Experience;
