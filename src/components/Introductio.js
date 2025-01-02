import React from 'react';
import "../styles/components.css";
import programmer from "../assets/programmer.png";
import Manav from "../assets/Manav.png";



const Introduction = () => {

    return (
        <div className='introduction-section'>
            <div className='intro-para'>
                <h2>Hi</h2>
                <h1>I'm Manav Sharma</h1>               
                <h2>A Full-Stack Web Developer</h2>
            </div>
            <div className="intro-img">
                <div className="img-container">
                    <img src={programmer} alt="Programmer" className="programmer-icon"/>
                    <img src={Manav} alt="Manav" className="manav-image"/>
                </div>
                {/* <div className="background-shapes"></div> */}
            </div>
        </div>
    );
};

export default Introduction;