import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Arrow from "./components/Arrow";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Projects />
        <About />
        <Skills />
        <Contact />
        <Arrow />
      </main>
      <Footer />
    </>
  );
};

export default App;
