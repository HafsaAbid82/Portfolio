import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Skills from "./Pages/Skills.jsx";
import Project from "./Project.jsx";
import Hire from "./Hire.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <>
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Project /></section>
      <section id="contact"><Hire /></section>
      <Footer />
    </>
  );
}

export default App;
