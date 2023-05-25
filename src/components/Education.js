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
              This bootcamp provided hands-on experience in creating dynamic
              websites, managing front-end and back-end technologies, and
              developing web applications that connect to databases through a
              RESTful API. The practical approach, combined with individual and
              team projects, deepened my understanding of web development and
              honed my skills in a real-world setting.
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
              This course introduced me to the world of coding. I started from
              the very beginning, learning a programming language from scratch,
              Python. Through the course, I developed my computational and
              logical thinking skills and gained a strong understanding of the
              fundamental concepts in programming.
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
              My Erasmus experience was a truly enriching opportunity that
              allowed me to enhance my German language skills. More importantly,
              however, it provided me with the chance to immerse myself in an
              international environment, where I was able to gain a greater
              understanding of different cultures and perspectives.
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
              I focused my studies on mastering two foreign languages, English
              and German. In addition to language proficiency, I also had the
              opportunity to delve into the field of economics, studying
              subjects such as marketing, business economics, and economic law.
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Education;
