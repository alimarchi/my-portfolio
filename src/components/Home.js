import "../style/Home.css";
import mylogo from "../assets/logo.png";

const Home = () => {
  return (
    <section className="home-section" id="home">
      <div className="container home-container" >
        <div className="title">
          <h1>Hi 👋</h1>
          <h1>
            I'm <span>Alice Marchi</span>
          </h1>
          <h1 className="animate-charcter">Full Stack Web Developer</h1>
          <a href="#contact" className="action-button">Get in touch</a>
        </div>
        <div>
          <div className="home-logo-container">
            <img src={mylogo} alt="Alice's logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
