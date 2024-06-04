import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import themeIcon from "../../assets/sun.svg";
import twitterIcon from "../../assets/twitter-light.svg"
import githubIcon from "../../assets/github-light.svg"
import linkedinIcon from "../../assets/linkedin-light.svg"
import CV from "../../assets/cv.pdf"

const Hero = () => {
    return (
        <section id="hero" className={styles.container}>
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
                    <a href="https://twitter.com/sahil_siddiki" target="_blank" rel="noreferrer">
                        <img src={twitterIcon} alt="Twitter Icon" />
                    </a>
                    <a href="https://github.com/sahil_siddiki" target="_blank" rel="noreferrer">
                        <img src={githubIcon} alt="Github Icon" />
                    </a>
                    <a href="https://linkedin.com/sahil_siddiki" target="_blank" rel="noreferrer">
                        <img src={linkedinIcon} alt="Linkedin Icon" />
                    </a>
                </span>
                <p>
                    I am a AI/ML developer with a passion for developing AI with react web Apps 
                </p> 
                <a href={CV} download>
                    <button className="hover" >Resume</button>
                </a>
            </div>
        </section>
    );
};

export default Hero;
