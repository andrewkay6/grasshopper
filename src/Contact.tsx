import React from "react";
import { ReactComponent as KijijiLogo } from "./kijiji.svg";
import KijijiButton from "./KijijiButton";
const Contact = () => {
    return (
        <div className="contactSection" id="contactSectionID">
            <h1>Contact</h1>
            <div className="contactContainer" >
                <div >
                    The best way to contact me is through email:
                </div>
                <a href="mailto:grasshopperkay@gmail.com" className="emailContainer">
                    grasshopperkay@gmail.com
                </a>

                <div >
                    Or, you can reply to one of my Kijiji ads:
                </div>
                <div className='iconContainer'>
                    <KijijiButton />
                </div>


                <div>
                    Here are some helpful things to include in an email:
                </div>
                <ul>
                    <li style={{ fontWeight: "bold" }}>Your address</li>
                    <li>How often do you want your lawn mowed?</li>
                    <li>How big is your lawn? (A rough estimate is great).</li>
                    <li>Do you have any pets?</li>
                    
                </ul>

            
            </div>
        </div>
    );
};

export default Contact;