import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

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
      </main>
    </>
  );
};

export default App;
