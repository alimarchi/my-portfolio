import "../../style/Home.css";

const Home = () => {
  return (
    <section className="home-section">
        <div className="container">
            <div className="title">
                <h1>Hi 👋</h1>
                <h1>I'm <span className="name">Alice Marchi</span></h1>
                <h1>Full Stack Web Developer</h1>
            </div>
            <button className="action-button">Get in touch</button>
        </div>
    </section>
  );
}

export default Home;
