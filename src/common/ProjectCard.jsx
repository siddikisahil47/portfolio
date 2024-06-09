import React from 'react'

const WorkCard = ({ project }) => {
    return (
        <div className="work__card" key={project.id}>
            <img src={project.image} alt="" className='work__img' />
            <h3 className="work__title">{project.title}</h3>
            <div className='workBottons'>
                {project.liveLink &&
                    <a href={project.liveLink} className="work__button">
                        Live Demo
                    </a>
                }
                {project.githubLink &&
                    <a href={project.githubLink} className="work__button">
                        GitHub
                    </a>
                }
            </div>

        </div>
    )
}

export default WorkCard