import React from 'react';
// import './ProjectDetail.css'; // Import the CSS file

const ProjectDetail = ({ project }) => {
    return (
        <section className="project-detail">
            <h1>{project.title}</h1>
            <img src={project.image} alt={project.title} />
            <p>{project.summary}</p>
            <div>
                <a href={project.liveLink}>Live Link</a>
                <a href={project.githubLink}>GitHub Link</a>
            </div>
        </section>
    );
};

export default ProjectDetail;