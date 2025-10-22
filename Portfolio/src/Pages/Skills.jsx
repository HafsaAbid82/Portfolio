import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, faBootstrap, faJs, faReact, faPython, faGithub, faGitAlt, faNodeJs, } from "@fortawesome/free-brands-svg-icons";
import Mongoose from "../assets/Mongoose.png";
import MUI from "../assets/MUI.png";
import Express from "../assets/express.png";
import ChatGPT from "../assets/chatgpt.png";
import Tailwind from "../assets/tailwind.png";
import MongoCompass from "../assets/mongodb-compass.png";
import Mongodb from "../assets/mongodb.png";

const Skills = () => {
    const skillsRef = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setInView(true);
                }
            },
            { threshold: 0.3 }
        );

        if (skillsRef.current) observer.observe(skillsRef.current);

        return () => {
            if (skillsRef.current) observer.unobserve(skillsRef.current);
        };
    }, []);

    const skillsData = [
        { icon: faHtml5, name: "HTML", level: 90, color: "#e34f26", type: "fa" },
        { icon: faCss3, name: "CSS", level: 85, color: "#1572b6", type: "fa" },
        { icon: faBootstrap, name: "Bootstrap", level: 80, color: "#7952b3", type: "fa" },
        { icon: faJs, name: "JavaScript", level: 75, color: "#f7df1e", type: "fa" },
        { icon: faReact, name: "React", level: 70, color: "#61dafb", type: "fa" },
        { icon: faPython, name: "Python", level: 35, color: "#3776ab", type: "fa" },
        { icon: faGithub, name: "Github", level: 75, color: "#333", type: "fa" },
        { icon: faGitAlt, name: "Git", level: 70, color: "#f05032", type: "fa" },
        { icon: faNodeJs, name: "Node.js", level: 60, color: "#339933", type: "fa" },

        // Image-based
        { icon: Mongoose, name: "Mongoose", level: 65, color: "#800000", type: "img" },
        { icon: Express, name: "Express.js", level: 70, color: "#444", type: "img" },
        { icon: MUI, name: "Material UI", level: 75, color: "#007fff", type: "img" },
        { icon: Tailwind, name: "Tailwind CSS", level: 80, color: "#38bdf8", type: "img" },
        { icon: Mongodb, name: "MongoDB", level: 70, color: "#47a248", type: "img" },
        { icon: ChatGPT, name: "ChatGPT", level: 85, color: "#10a37f", type: "img" },
        { icon: MongoCompass, name: "MongoDB Compass", level: 70, color: "#47a248", type: "img" },
    ];

    return (
        <section className="skills-section" ref={skillsRef} id="skills">
            <div className="skills-container">
                <motion.div
                    className="skills-header"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Technical Skills</h2>
                    <p>Technologies I work with</p>
                </motion.div>

                <div className="skills-grid">
                    {skillsData.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="skill-card"
                            style={{ "--accent-color": skill.color }}
                            initial={{ opacity: 0, y: 30, scale: 0.9 }}
                            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8, transition: { duration: 0.2 } }}
                        >
                            <div className="card-glow"></div>
                            <div className="skill-icon-container">
                                <div className="skill-icon">
                                    {skill.type === "fa" ? (
                                        <FontAwesomeIcon icon={skill.icon} />
                                    ) : (
                                        <img src={skill.icon} alt={skill.name} />
                                    )}
                                </div>
                            </div>

                            <div className="skill-info">
                                <h3>{skill.name}</h3>
                                <div className="skill-level">{skill.level}%</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;







