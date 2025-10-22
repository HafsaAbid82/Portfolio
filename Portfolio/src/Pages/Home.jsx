import { motion } from "framer-motion";
import Navbar from "../Navbar";
import Scene from "../components/Scene";
import Php from "../assets/php.png";
import "./home.css";
import Bkg from '../assets/bkg.gif'
import Resume from '../assets/Resume.pdf'

function Home() {
    return (
        <motion.div className="home-container">
            <Navbar />
            <div className="scene">
                <Scene />
            </div>
            <div className="background-effects">
                <div className="orb"></div>
               
            </div>

            <motion.div className="home-content-wrapper">

                {/* Left Side - Profile */}
                <div className="left-content">
                    <img src={Php} alt="Profile" className="profile-photo" />
                    <h1 className="typed-text">Hafsa Abid</h1>
                    <h6 className="text">I'm a Passionate Web Developer</h6>
                    <button className="darkmatter-btn" onClick={() => {
    const link = document.createElement("a");
    link.href = Resume;
    link.download = "Hafsa_Abid_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}>Download Resume</button>
                </div>

                {/* Right Side - Rings with Gears */}
                <div className="rings-container">
                    <div className="ring ring-1"></div>
                    <div className="ring ring-2"></div>
                    <div className="ring ring-3"></div>
                    <div className="ring ring-4"></div>
                    <img src={Bkg} alt="Gear" className="gear" />
                    <img src="/ha.png" alt="Hafsa Logo" className='logo' />
                </div>
            </motion.div>
        </motion.div>
    );
}

export default Home;


