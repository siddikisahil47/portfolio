import React from 'react';
import './header.css';
import useMouseMove from '../assetsfile/animation/useMouseMove';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const handleMouseMove = useMouseMove()

    return (
        <>
            <header className='header'>
                <div className='title'>
                    <span className='title-text'>
                        Sahil <span className='title-surname'>Siddiki</span>
                    </span>
                </div>
                <div>
                    <ul className='options'>
                        <li>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li >
                            <NavLink to='/about'>About</NavLink>
                        </li>
                        <li >
                            <NavLink to='/works'>Works</NavLink>
                        </li>
                        <li >
                            <NavLink to='/services'>Services</NavLink>
                        </li>
                        <li >
                            <NavLink to='/contact'>Contact</NavLink>
                        </li>
                    </ul>
                </div>

                <div>
                    <button onMouseMove={handleMouseMove}>Let's Talk</button>
                </div>
            </header>
            <hr class="separator" />
        </>

    )
}

export default Header;