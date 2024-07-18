import About from "./Components/About";
import Contact from "./Components/Contact";
import Education from "./Components/Education";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Skills from "./Components/Skills";

function App() {
  

  return (
    <>
      <div className=" text-white bg-gradient-to-t to-black/80 from-blue-500">
      <Nav />
      <Home />
      <About />
      <Education />
      <Skills />
      <Contact />
      </div>
    </>
  );
}

export default App;
