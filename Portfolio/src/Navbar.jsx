import { Link } from "react-scroll";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <ul>
        <li><Link to="home" smooth={true} duration={600}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={600}>About</Link></li>
        <li><Link to="skills" smooth={true} duration={600}>Skills</Link></li>
        <li><Link to="projects" smooth={true} duration={600}>Projects</Link></li>
        <li><Link to="contact" smooth={true} duration={600}>Contact</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;


