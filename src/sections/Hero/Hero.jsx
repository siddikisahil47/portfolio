import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import CV from "../../assets/SahilSiddikiResume.pdf"
import { useTheme } from "../../common/ThemeContext";
import { FaSquareXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";


const Hero = () => {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;

    return (
        <section id="home" className={styles.container} >
            <div className={styles.colorModeContainer}>
                <img
                    src={heroImg}
                    alt="Profile picture of Sahil Siddiki"
                    className={styles.hero}
                />
                <img
                    src={themeIcon}
                    alt="Color mode Icon"
                    className={styles.colorMode}
                    onClick={toggleTheme}
                />
            </div>
            <div className={styles.info}>
                <h1>
                    Sahil
                    <br />
                    Siddiki
                </h1>
                <h2>
                    AI/ML Developer
                </h2>
                <span>
                    <a href="https://twitter.com/sahil_siddiki" target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>
                        <FaSquareXTwitter className={styles.icons} />
                    </a>
                    <a href="https://github.com/sahil_siddiki" target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>
                        <FaGithub className={styles.icons} />
                    </a>
                    <a href="https://linkedin.com/sahil_siddiki" target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>
                        <FaLinkedin className={styles.icons} />
                    </a>
                </span>
                <p className={styles.description}>
                    I'm a recent Computer Science graduate with a passion for building innovative AI and Machine Learning solutions. I'm proficient in Python, TensorFlow, PyTorch, ReactJS, and other technologies, and I'm always eager to learn new skills and contribute to exciting projects.
                </p>
                <a href={CV} download>
                    <button className="hover" >Resume</button>
                </a>
            </div>
        </section>
    );
};

export default Hero;
