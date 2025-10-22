import { motion } from "framer-motion";
import User from "../assets/User.gif";
import School from "../assets/School.gif";
import BookOpen from "../assets/Book.gif";
import "./About.css";
import MiniRings from "../components/MiniRings";

const timelineData = [
    {
        title: "About Me",
        subtitle: null,
        description: "I'm Hafsa Abid, a passionate web developer and graphic designer who loves creating modern, interactive web experiences. I'm always learning new technologies and methods to build high-quality websites and engaging social media content that deliver real results.",
        icon: User,
    },
    {
        title: "Education",
        subtitle: "Bachelor in Business and Information Technology",
        description: "Virtual University — 2022 - 2026",
        icon: School,
    },
    {
        title: "Courses",
        subtitle: null,
        description: (
            <>
                - Full Stack Development <br />
                - E-commerce  <br />
                - Freelancing   <br />
                - Content Writing  <br />
                - Graphic Designing <br />
                - Social Media Management  <br />


                - Python for AI (Continue) <br />
            </>
        ),
        icon: BookOpen,
    },
];

const About = () => {
    return (
        <section className="about-section">
            {/* Animated background elements */}
            <div className="background-design">
                <div className="bg-circle bg-circle-1"></div>
                <div className="bg-circle bg-circle-2"></div>
                <div className="bg-circle bg-circle-3"></div>
                <div className="bg-grid"></div>
                <div className="bg-dots"></div>
            </div>

            <motion.div
                className="timeline"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >

                <div className="timeline-content-wrapper">
                    {timelineData.map((item, index) => (
                        <motion.div
                            key={index}
                            className="timeline-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            <div className="timeline-icon">
                                <MiniRings />
                                <img src={item.icon} alt={item.title} loading="lazy" />
                            </div>

                            <div className="timeline-content">
                                <h3>{item.title}</h3>
                                {item.subtitle && <h4>{item.subtitle}</h4>}
                                <p>{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default About;


