import "../style/Arrow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Arrow = () => {
  return (
    <div className="container">
      <div className="arrow-container">
        <FontAwesomeIcon icon={faArrowUp} size="2x" />
      </div>
    </div>
  );
};

export default Arrow;
