import React, { useEffect, useState } from 'react';
import { projectsData } from '../common/Data';
import WorkCard from '../common/ProjectCard';
import FilterButtons from '../common/FilterButton';
import "../sections/Projects/work.css"


const Projects = () => {
    
    const [item, setItem] = useState({ name: 'all' });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (item.name === "all") {
            setProjects(projectsData)
        }

        else {
            const newProjects = projectsData.filter((project) => {
                return project.category.toLowerCase() === item.name;
            });
            setProjects(newProjects);
        }
    }, [item]);

    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent.toLowerCase() });
        setActive(index);
    };

    return (
        <section id='all-projects' style={{marginTop:-60}}>
            <FilterButtons handleClick={handleClick} active={active} />

            <div className="work__container container grid">
                {projects.map((project) => {
                    return <WorkCard project={project} key={project.id} />
                })}
            </div>
        </section>
    )
}

export default Projects