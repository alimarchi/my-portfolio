import "../style/Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Card = ({ project }) => {
  return (
    <article className="project-card hvr-float">
      <div className="img-container">
        <img src={project.img} alt="proyecto 1" />
      </div>
      <div className="project-info">
        <h4 className="project-title">{project.name}</h4>
        <p>{project.tech}</p>
      </div>
      <div className="project-logos">
        <a href={project.repoURL} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="xl" className="project-logo" />
        </a>
        <a href={project.webURL} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faDesktop}
            size="xl"
            className="project-logo"
          />
        </a>
      </div>
    </article>
  );
};

export default Card;
