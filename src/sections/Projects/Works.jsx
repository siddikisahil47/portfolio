import React, { useEffect, useState } from 'react';
import { projectsData } from '../../common/Data';
import WorkCard from '../../common/ProjectCard';
import FilterButtons from '../../common/FilterButton';
import "./work.css"
import { Link } from 'react-router-dom';


const Works = () => {
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
        <div>
            <FilterButtons handleClick={handleClick} active={active} />

            <div className="work__container container grid">
                {projects.slice(0, 5).map((project) => {
                    return <WorkCard project={project} key={project.id} />
                })}
                <div className='workButtonContainer'>
                    <button  className="learn-more">
                        <Link to="/projects">
                        <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">See all Projects</span>
                        </Link>
                        
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Works