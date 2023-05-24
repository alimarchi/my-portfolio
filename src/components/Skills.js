import "../style/Skills.css";
import { Slide } from "react-awesome-reveal";

function Skills() {
  return (
    <section className="main-section" id="skills">
      <div className="container">
        <div className="section-header">
          <div className="divider"></div>
          <h2 className="section-title">Skills</h2>
        </div>
        <div className="all-skills-container">
          <Slide triggerOnce>
            <div className="skills-container">
              <h3>Languages</h3>
              <ul className="skills-items">
                <li className="skills-single-item">
                  <i className="devicon-javascript-plain hvr-pop"></i>
                  <p>JavaScript</p>
                </li>
                <li className="skills-single-item">
                  <i className="devicon-python-plain hvr-pop"></i>
                  <p>Python</p>
                </li>
                <li className="skills-single-item">
                  <i className="devicon-typescript-plain hvr-pop"></i>
                  <p>TypeScript</p>
                </li>
                <li className="skills-single-item">
                  <i className="devicon-html5-plain hvr-pop"></i>
                  <p>HTML</p>
                </li>
                <li className="skills-single-item">
                  <i className="devicon-css3-plain hvr-pop"></i>
                  <p>CSS</p>
                </li>
                <li className="skills-single-item">
                  <i className="devicon-sass-original hvr-pop"></i>
                  <p>Sass</p>
                </li>
              </ul>
            </div>
          </Slide>
          <Slide triggerOnce>
            <div className="skills-container">
              <h3>Frameworks and Libraries</h3>
              <ul className="skills-items">
                <li className="skills-single-item">
                  <i className="devicon-react-original hvr-pop"></i>
                  <p>ReactJS</p>
                </li>
                <li className="skills-single-item">
                  <i className="devicon-bootstrap-plain hvr-pop"></i>
                  <p>Bootstrap</p>
                </li>
                <li className="skills-single-item">
                  <i className="devicon-nodejs-plain hvr-pop"></i>
                  <p>NodeJs</p>
                </li>
                <li className="skills-single-item">
                  <i className="devicon-express-original hvr-pop"></i>
                  <p>ExpressJs</p>
                </li>
                <li className="skills-single-item">
                  <i className="devicon-flask-original hvr-pop"></i>
                  <p>Flask</p>
                </li>
                <li className="skills-single-item">
                  <i className="devicon-jest-plain hvr-pop"></i>
                  <p>Jest</p>
                </li>
              </ul>
            </div>
          </Slide>
          <Slide triggerOnce>
            <div className="skills-container">
              <h3>Databases and Tools</h3>
              <ul className="skills-items">
                <li className="skills-single-item">
                  <i className="devicon-mysql-plain hvr-pop"></i>
                  <p>MySQL</p>
                </li>
                <li className="skills-single-item">
                  <i className="devicon-mongodb-plain hvr-pop"></i>
                  <p>MongoDB</p>
                </li>
                <li className="skills-single-item">
                  <i className="devicon-firebase-plain hvr-pop"></i>
                  <p>Firebase</p>
                </li>
                <li className="skills-single-item">
                  <i className="devicon-azure-plain hvr-pop"></i>
                  <p>Azure</p>
                </li>
                <li className="skills-single-item">
                  <i className="devicon-git-plain hvr-pop"></i>
                  <p>Git</p>
                </li>
                <li className="skills-single-item">
                  <i className="devicon-github-original hvr-pop"></i>
                  <p>Github</p>
                </li>
                <li className="skills-single-item">
                  <i className="devicon-npm-original-wordmark hvr-pop"></i>
                  <p>NPM</p>
                </li>
                <li className="skills-single-item">
                  <i className="devicon-vscode-plain hvr-pop"></i>
                  <p>VS Code</p>
                </li>
              </ul>
            </div>
          </Slide>
        </div>
      </div>
    </section>
  );
}

export default Skills;
