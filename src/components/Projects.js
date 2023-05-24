import "../style/Projects.css";
import { projects } from "../data/projects";
import Card from "./Card";
import { Fade } from "react-awesome-reveal";

const Projects = () => {
  return (
    <section className="main-section">
      <div className="container">
        <div className="section-header" id="projects">
          <div className="divider"></div>
          <h2 className="section-title">Projects</h2>
        </div>
        <Fade>
          <div className="projects-container">
            {projects.map((project) => {
              return <Card project={project} key={project.id} />;
            })}
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Projects;
