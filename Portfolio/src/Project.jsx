import { useState } from "react";
import "./Project.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrochip, faRocket } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Psa from './assets/Psa.PNG'
import Tg from './assets/Tg.PNG'
import Eco from './assets/Eco.PNG'
import Eco1 from './assets/Eco1.PNG'

const Project = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("All");

    const projects = [
        {
            id: 1,
            title: "Password Strength Analyzer",
            fullDescription:
                "A React-based tool that analyzes password strength in real-time using entropy calculations. It detects character sets, estimates brute-force cracking time, and provides instant feedback — all client-side for maximum privacy.",
            image: Psa,
            github: "https://github.com/HafsaAbid82/Password-Strength-Analyzer",
            demo: "https://hafsaabid82.github.io/Password-Strength-Analyzer/",
            tech: ["React", "JavaScript", "Custom CSS", "Entropy Logic", "Client-Side Security"],
            category: "IT Tools",
        },

        {
            id: 2,
            title: "React Token Generator",
            fullDescription:
                "A lightweight React-based tool for generating secure random tokens with customizable length and character sets. Users can toggle between uppercase, lowercase, numbers, and symbols, instantly copy results, and enjoy a sleek dark mode UI — all 100% client-side for privacy and speed.",
            image: Tg,
            github: "https://github.com/HafsaAbid82/React-Token-Generator",
            demo: "https://hafsaabid82.github.io/Token-Generator/",
            tech: ["React", "JavaScript", "Custom CSS", "Client-Side Logic"],
            badge: "Security",
            category: "IT Tools",
        },

        {
            id: 3,
            title: "Fencing E-Commerce Solution",
            fullDescription:
                "A responsive React-based e-commerce website for a modern fencing company, featuring interactive product showcases, a quote calculator, testimonial carousel, and lead generation form. Built with Material-UI for a polished, professional interface and smooth animations.",
            image: Eco,
            github: "https://github.com/HafsaAbid82/Fence-Ecommerce-Website",
            demo: "https://hafsaabid82.github.io/Fence-Ecommerce-Website/",
            tech: ["React", "Material-UI", "CSS-in-JS", "React Intersection Observer"],
            badge: "UI/UX",
            category: "E-commerce",
        },

        {
            id: 4,
            title: "E-commerce Platform",
            fullDescription:
                "A scalable full-stack e-commerce solution featuring real-time inventory, AI-based product recommendations, and secure checkout built with Stripe and MongoDB.",
            image: Eco1,
            github: "https://github.com/HafsaAbid82/clone-eccomerce",
            demo: "https://yourliveapp.com",
            tech: ["React", "Node.js", "MongoDB", "Stripe API"],
            badge: "Commerce",
            category: "Full Stack", 
        },
    ];

    const categories = ["All", "IT Tools", "E-commerce", "Full Stack", ];

    const filteredProjects =
        selectedCategory === "All"
            ? projects
            : projects.filter((p) => p.category === selectedCategory);

    const handleCardClick = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    const Modal = ({ isOpen, onClose, content }) => {
        if (!isOpen) return null;
        return (
            <div className="modal-overlay" onClick={onClose}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <button className="modal-close" onClick={onClose}>
                        ×
                    </button>
                    {content}
                </div>
            </div>
        );
    };

    return (
        <div className="tech-showcase">
            <div className="tech-scape">
                <div className="circle-bg"></div>
                <div className="circle-bg"></div>
                <div className="circle-bg"></div>
            </div>

            {/* Header */}
            <div className="showcase-header">
                <h1>My Projects</h1>
                <p>Exploring the boundaries of technology and innovation</p>
            </div>

            {/* Filter Menu */}
            <div className="category-menu">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={`category-btn ${selectedCategory === cat ? "active" : ""
                            }`}
                        onClick={() => setSelectedCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Project Cards */}
            <div className="projects-container">
                {filteredProjects.map((project) => (
                    <div
                        key={project.id}
                        className="tech-project-card"
                        data-category={project.category}
                    >
                        <div className="circular-progress">
                            {project.id}
                        </div>
                        <div className="tech-project-img">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="tech-card-image"
                                loading="lazy"
                            />

                            <div className="tech-card-overlay">
                                <button
                                    className="overlay-btn"
                                    onClick={() =>
                                        handleCardClick(
                                            <div className="modal-tech-content">
                                                <h2>{project.title}</h2>
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="modal-image"
                                                    loading="lazy"
                                                />
                                                <p>{project.fullDescription}</p>
                                                <div className="tech-stack">
                                                    <h4>Technology Stack:</h4>
                                                    <div className="tech-list">
                                                        {project.tech.map((tech, index) => (
                                                            <span key={index} className="tech-item">
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                >
                                    <FontAwesomeIcon icon={faMicrochip} /> Details
                                </button>

                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="overlay-btn"
                                >
                                    <FontAwesomeIcon icon={faGithub} /> Code
                                </a>

                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="overlay-btn"
                                >
                                    <FontAwesomeIcon icon={faRocket} /> Live Demo
                                </a>
                            </div>
                        </div>

                        <div className="tech-card-content">
                            <h3>{project.title}</h3>

                            <div className="tech-tags">
                                {project.tech.map((tech, index) => (
                                    <span key={index} className="tech-tag">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                content={modalContent}
            />
        </div>
    );
};

export default Project;











