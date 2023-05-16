import "../style/Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Card = ({project}) => {
  return (
    <article className="project-card">
      <div className="img-container">
        <img src={project.img} alt="proyecto 1" />
      </div>
      <div className="project-info">
        <h4 className="project-title">{project.name}</h4>
        <p>{project.tech}</p>
      </div>
      <div className="project-logos">
        <FontAwesomeIcon icon={faGithub} size="xl" className="project-logo" />
        <FontAwesomeIcon icon={faDesktop} size="xl" className="project-logo" />
      </div>
    </article>
  );
};

export default Card;
