import React from "react";
import grasscutpreview from './grasscutpreview.webp';
import scrollToElement from "./scrollUtilities";
const About = () => {
    return (
        <div className="aboutSection" id="aboutSectionID">
            <h1>About</h1>
            <span>
                Hi, I'm The Grasshopper. I provide quick, high quality lawn mowing services in the Hamilton area.
                I am very reliable and I take pride in my work. I am currently accepting new clients. If you are interested in my services, please 
            </span>
            <span
            className='clickableText'
            style={{fontWeight: "bold"}} 
            onClick={() => scrollToElement('contactSectionID', 'headerID')}>
                &nbsp;contact me.
            </span>

            <div>
                <img src={grasscutpreview} alt="grasscutpreview" />
            </div>
            
        </div>
        
    );
};

export default About;