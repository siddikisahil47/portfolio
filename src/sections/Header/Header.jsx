import React, { useEffect, useState } from "react";
import { PiSquaresFour } from "react-icons/pi";
import { IoClose, IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineContactPhone } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";
import "./header.css";
import { HashLink as Link } from 'react-router-hash-link';


const Header = () => {
    /*=============== Change Background Header ===============*/
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");

        // when the scroll is higher than 200 viewport height , add the scroll-header class to a tag with the header tag
        if (this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    /*=============== Toggle Menu ===============*/
    const [Toggle, ShowMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");
    return (
        <header className="header">
            <nav className="nav container">
                <a href="/" className="nav__logo">
                    Sahil <span className="logoName">Siddiki</span>
                </a>

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link
                                to={`/#home`}
                                onClick={() => setActiveNav("#home")}
                                className={
                                    activeNav === "#home" ? "nav__link active-link" : "nav__link"
                                }>
                                <FaHome className="nav__icon" />
                                Home
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link
                                to={`/#projects`}
                                onClick={() => setActiveNav("#projects")}
                                className={
                                    activeNav === "#projects" ? "nav__link active-link" : "nav__link"
                                }>
                                <GoProjectRoadmap className="nav__icon" />
                                Project
                            </Link>
                        </li>

                        <li className="nav__item">
                            <Link
                                to={`/#skills`}
                                onClick={() => setActiveNav("#skills")}
                                className={
                                    activeNav === "#skills"
                                        ? "nav__link active-link"
                                        : "nav__link"
                                }>
                                < IoDocumentTextOutline className="nav__icon" />
                                Skill
                            </Link>
                        </li>

                        <li className="nav__item">
                            <Link
                                to={`/#contact`}
                                scroll={el => el.scrollIntoView({ behavior: 'instant', block: 'end' })}
                                onClick={() => setActiveNav("#contact")}
                                className={
                                    activeNav === "#contact"
                                        ? "nav__link active-link"
                                        : "nav__link"
                                }>
                                <MdOutlineContactPhone className="nav__icon" />
                                Contact
                            </Link>
                        </li>
                    </ul>

                    <IoClose className="nav__close" onClick={() => ShowMenu(!Toggle)} />
                </div>

                <div className="nav__toggle" onClick={() => ShowMenu(!Toggle)}>
                    <PiSquaresFour className="menu" />
                </div>
            </nav>
        </header>
    );
};

export default Header;
