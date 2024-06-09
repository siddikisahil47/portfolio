import React from 'react';
import { projectsNav } from './Data';

const FilterButtons = ({ handleClick, active }) => {
    return (
        <div className="work__filters">
            {projectsNav.map((item, index) => {
                return (
                    <span 
                        onClick={(e) => handleClick(e, index)}
                        className={`${active === index ? 'active-work' : ""} work__item`} 
                        key={index}
                    >
                        {item.name}
                    </span>
                );
            })}
        </div>
    );
}

export default FilterButtons;