import "../style/Skills.css";

function Skills() {
  return (
    <section className="main-section" id="skills">
      <div className="container">
        <div className="section-header">
          <div className="divider"></div>
          <h2 className="section-title">Skills</h2>
        </div>
        <div className="all-skills-container">
          <div className="skills-container">
            <h3>Languages</h3>
            <ul className="skills-items">
              <li className="skills-single-item">
                <i className="devicon-javascript-plain"></i>
                <p>JavaScript</p>
              </li>
              <li className="skills-single-item">
                <i className="devicon-python-plain"></i>
                <p>Python</p>
              </li>
              <li className="skills-single-item">
                <i className="devicon-typescript-plain"></i>
                <p>TypeScript</p>
              </li>
              <li className="skills-single-item">
                <i className="devicon-html5-plain"></i>
                <p>HTML</p>
              </li>
              <li className="skills-single-item">
                <i className="devicon-css3-plain"></i>
                <p>CSS</p>
              </li>
              <li className="skills-single-item">
                <i className="devicon-sass-original"></i>
                <p>Sass</p>
              </li>
            </ul>
          </div>
          <div className="skills-container">
            <h3>Frameworks and Libraries</h3>
            <ul className="skills-items">
              <li className="skills-single-item">
                <i className="devicon-react-original"></i>
                <p>ReactJS</p>
              </li>
              <li className="skills-single-item">
                <i className="devicon-bootstrap-plain"></i>
                <p>Bootstrap</p>
              </li>
              <li className="skills-single-item">
                <i className="devicon-nodejs-plain"></i>
                <p>NodeJs</p>
              </li>
              <li className="skills-single-item">
                <i className="devicon-express-original"></i>
                <p>ExpressJs</p>
              </li>
              <li className="skills-single-item">
                <i className="devicon-flask-original"></i>
                <p>Flask</p>
              </li>
              <li className="skills-single-item">
                <i className="devicon-jest-plain"></i>
                <p>Jest</p>
              </li>
            </ul>
          </div>
          <div className="skills-container">
            <h3>Databases and Tools</h3>
            <ul className="skills-items">
              <li className="skills-single-item">
                <i className="devicon-mysql-plain"></i>
                <p>MySQL</p>
              </li>
              <li className="skills-single-item">
                <i className="devicon-mongodb-plain"></i>
                <p>MongoDB</p>
              </li>
              <li className="skills-single-item">
                <i className="devicon-firebase-plain"></i>
                <p>Firebase</p>
              </li>
              <li className="skills-single-item">
                <i className="devicon-azure-plain"></i>
                <p>Azure</p>
              </li>
              <li className="skills-single-item">
                <i className="devicon-git-plain"></i>
                <p>Git</p>
              </li>
              <li className="skills-single-item">
                <i className="devicon-github-original"></i>
                <p>Github</p>
              </li>
              <li className="skills-single-item">
                <i className="devicon-npm-original-wordmark"></i>
                <p>NPM</p>
              </li>
              <li className="skills-single-item">
                <i className="devicon-vscode-plain"></i>
                <p>VS Code</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
