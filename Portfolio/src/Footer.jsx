import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <div className="work">
                    <div className='headin'><h5>Always compiling better versions of myself.</h5></div>
                    <div className="socials">
                        <a href="https://github.com/HafsaAbid82" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faGithub} className="social-icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/hafsa-a-489ab637a" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
                        </a>
                        <a href="https://www.instagram.com/hafsa_abid82?igsh=MXB1Ym83ajNhd3hsNg==" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
                        </a>
                       
                    </div>
                       <div className="align">
                    <FontAwesomeIcon icon={faEnvelope} className="social-icon" />
                            <p>hafsaabd.82@gmail.com</p>
                </div>
            </div>
            
  )
}

export default Footer