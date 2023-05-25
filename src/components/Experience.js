import "../style/Timeline.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { Fade } from "react-awesome-reveal";

const Experience = () => {
  return (
    <div className="timeline">
      <div className="timeline-data left-item">
        <Fade triggerOnce>
          <div>
            <h4>Junior Full Stack Web Developer</h4>
            <p className="date">
              <FontAwesomeIcon icon={faCalendarDays} /> 2023
            </p>
            <p>
              I am currently immersed in working on personal projects, utilizing
              them as a means to gain practical experience, while also
              dedicating myself to continuous learning to improve and reinforce
              my knowledge. My main goal is to find a professional opportunity
              that fosters growth and development.
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
            <h4>Big Data Consultant</h4>
            <p className="company-name">Bosonit (Spain)</p>
            <p className="date">
              <FontAwesomeIcon icon={faCalendarDays} /> 2022
            </p>
            <p>
              During this experience, I gained hands-on expertise in utilizing
              big data technologies such as Hadoop, Spark, Kafka, and
              Databricks, while following the Scrum methodology. Additionally, I
              achieved certifications in{" "}
              <strong>Azure Data Fundamentals</strong> and{" "}
              <strong>Databricks for Apache Spark 3.0</strong>.
            </p>
          </div>
        </Fade>
      </div>
      <div className="timeline-data left-item">
        <Fade triggerOnce>
          <div>
            <h4>Community Manager</h4>
            <p className="company-name">Maquillalia (Spain)</p>
            <p className="date">
              <FontAwesomeIcon icon={faCalendarDays} /> 2018-2022
            </p>
            <p>
              I gained in-depth e-commerce knowledge, focusing on digital
              marketing through Instagram and Facebook. Managed social media,
              led campaigns, collaborated with influencers, and translated
              content into Italian. This experience enhanced my understanding of
              the industry and UX expertise.
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
            <h4>Community Manager</h4>
            <p className="company-name">Belletica (Spain)</p>
            <p className="date">
              <FontAwesomeIcon icon={faCalendarDays} /> 2017-2018
            </p>
            <p>
              Entering the e-commerce world, I gained valuable insights into
              online shop operations, handling customer service, contributing to
              social media management, and providing website translations. These
              diverse responsibilities provided me with a comprehensive
              understanding of the e-commerce industry.
            </p>
          </div>
        </Fade>
      </div>
      <div className="timeline-data left-item">
        <Fade triggerOnce>
          <div>
            <h4>Marketing Intern</h4>
            <p className="company-name">Società Dante Alighieri (Germany)</p>
            <p className="date">
              <FontAwesomeIcon icon={faCalendarDays} /> 2016
            </p>
            <p>
              Throughout my internship, I acquired valuable experience in
              coordinating cultural events, organizing exhibitions, and
              facilitating language courses. Additionally, I assumed
              responsibility for managing the association's website, social
              media presence, and newsletter.
            </p>
          </div>
        </Fade>
        <div>
          <span className="circle"></span>
        </div>
      </div>
    </div>
  );
};

export default Experience;
