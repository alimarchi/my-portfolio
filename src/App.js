import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Projects />
        <About />
      </main>
    </>
  );
};

export default App;
