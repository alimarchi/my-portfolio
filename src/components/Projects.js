import "../style/Projects.css";
import projects from "../data/projects.json";
import Card from "./Card";

const Projects = () => {
  return (
    <section className="main-section">
      <div className="container">
        <div className="section-header">
          <div className="divider"></div>
          <h2 className="section-title">Projects</h2>
        </div>
        <div className="projects-container">
          {projects.map((project) => {
            return <Card project={project} key={project.id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
