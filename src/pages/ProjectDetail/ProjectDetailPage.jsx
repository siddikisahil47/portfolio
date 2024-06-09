import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from "./ProjectDetailPageStyles.module.css";
import { projectsData } from "../../common/Data";
import { FaGithub, FaKaggle } from "react-icons/fa";
import { FaEarthAsia } from "react-icons/fa6";
import { SiGooglecolab } from "react-icons/si";

const ProjectDetailPage = () => {
    const { id } = useParams();
    const project = projectsData.find(project => project.id === Number(id));

    if (!project) {
        return <div>Project not found</div>;
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section id="Project-detail-ecommerce" className={styles.container}>
            <h1>{project.title}</h1>
            <img src={project.image} alt={project.title} />
            <div className={styles.Icons}>
                {project.liveLink &&
                    <a href={project.liveLink} className="work__button">
                        <FaEarthAsia size={30}/>
                    </a>
                }
                {project.githubLink &&
                    <a href={project.githubLink} className="work__button">
                        <FaGithub size={30} />
                    </a>
                }
                {project.kaggleLink &&
                    <a href={project.kaggleLink} className="work__button">
                        <FaKaggle size={30}/>
                    </a>
                }
                {project.colabLink &&
                    <a href={project.colabLink} className="work__button">
                        <SiGooglecolab size={30} />
                    </a>
                }
            </div>
            <div className={styles.detailBox}>
                <div>
                    <p className={styles.detailSummary}>{project.summary}</p>
                    <br />
                    <p className={styles.detailDescription}>{project.description.split('\n').map((paragraph, index) => <p className={styles.lineBreak} key={index}>{paragraph}</p>)}</p>
                </div>
                <div className={styles.detailTech}>
                    <h2 className={styles.detailTechTitle}>Technology Used</h2>
                    <ul className={styles.detailTechused}>
                        {project.technologyUsed.map((tech, index) => (
                            <li className={styles.detailTechIcons} key={index}>{project.techIcons[tech]}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default ProjectDetailPage;