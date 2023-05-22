import "../style/Home.css";
import mylogo from "../assets/logo.png";

const Home = () => {
  return (
    <section className="home-section" id="home">
      <div className="container home-container">
        <div className="title">
          <h1>Hi 👋</h1>
          <h1>
            I'm <span className="name">Alice Marchi</span>
          </h1>
          <h1>Full Stack Web Developer</h1>
          <button className="action-button">
            <a href="#contact">Get in touch</a>
          </button>
        </div>
        <div>
          <div className="home-logo-container">
            <img src={mylogo} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
