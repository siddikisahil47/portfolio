import React from 'react';
import './footer.css'
import { NavLink } from 'react-router-dom';

const Footer = () => {

    return (
        <>
            <hr className='separator'/>
            <footer className='footer'>
                <div className='social'>
                    <div>insta</div>
                    <div>linkdein</div>
                    <div>github</div>
                    <div>kaggle</div>
                    <div>twitter</div>
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
            </footer>
        </>
    )
}

export default Footer