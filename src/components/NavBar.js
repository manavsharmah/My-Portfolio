import React , {useState} from "react";
import "../styles/components.css"

const NavBar = () => {

    const [isNavActive, setNavActive] = useState(false);

    const handleClick = () => {
        setNavActive(!isNavActive); // Toggle nav visibility on mobile
    };     

    return (
        <div className="nav-bar">
            <div className="nav-bar-content">
                <div className="nav-bar-logo">
                    <h1>Manav Sharma</h1>
                </div>
                <nav className="nav-bar-links">
                    <ul className={isNavActive ? "nav-link nav-active" : "nav-link"}>
                        <li><a>About Me</a></li>
                        <li><a>Projects</a></li>
                        <li><a>Skills</a></li>
                        <li><a>Experience</a></li>
                        <li><a>Contact</a></li>
                        <li><a>Resume</a></li>
                    </ul>
                    <div className={isNavActive ? "nav-bar-burger toggle" : "nav-bar-burger"} onClick={handleClick}>
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;