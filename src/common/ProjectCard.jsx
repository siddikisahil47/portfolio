import React from 'react'
import { FaGithub, FaKaggle } from "react-icons/fa";
import { FaEarthAsia } from "react-icons/fa6";
import { SiGooglecolab } from "react-icons/si";
import { Link } from 'react-router-dom';

const WorkCard = ({ project }) => {
    return (
        <div className="work__card" key={project.id}>
            <img src={project.image} alt="" className='work__img' />
            <h3 className="work__title">{project.title}</h3>
            <p className="work__summary">{project.summary}</p>
            <div className='workBottons'>
                <div className='WorkIcons'>
                {project.liveLink &&
                    <a href={project.liveLink} className="work__button">
                        <FaEarthAsia className='workButtonIcon' />
                    </a>
                }
                {project.githubLink &&
                    <a href={project.githubLink} className="work__button">
                        <FaGithub className='workButtonIcon'/>
                    </a>
                }
                {project.kaggleLink &&
                    <a href={project.kaggleLink} className="work__button">
                        <FaKaggle className='workButtonIcon'/>
                    </a>
                }
                {project.colabLink &&
                    <a href={project.colabLink} className="work__button">
                        <SiGooglecolab className='workButtonIcon'/>
                    </a>
                }
                </div>
                <Link to={`/projects/${project.id}`}>
                    <span>Read More</span>
                </Link>
                
            </div>

        </div>
    )
}

export default WorkCard