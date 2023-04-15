import React from "react";

const Contact = () => {
    return (
        <div className="contactSection" id="contactSectionID">
            <h1>Contact</h1>
            <div>
                The best way to contact me is through email.
            </div>
            <div>
            Helpful things to include in an email:
            </div>
            <ul>
                <li>How often do you want your lawn mowed?</li>
                <li>How big is your lawn? (A rough estimate is great).</li>
                <li>Do you have any pets?</li>
                <li style={{fontWeight: "bold"}}>Your address</li>          
            </ul>

            <div style={{fontWeight: "bold"}}>
                Your address is the most important thing to include - it allows me to quote you in an accurate and timely manner. 
            </div>
        </div>
    );
};

export default Contact;