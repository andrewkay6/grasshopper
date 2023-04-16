import scrollToElement from "./scrollUtilities";
const About = () => {
    return (
        <div className="aboutSection" id="aboutSectionID">
            <div className="aboutContainer">
                <div className="aboutHeroImageContainer">
                    <div className="aboutTextContainer">
                        <div className="heroText">
                            Hi! I'm The Grasshopper. 
                        </div>
                        <div className="heroText">
                            I provide quick, high quality lawn mowing services in the Hamilton area.
                        </div>
                        {/* <span
                            className='clickableText'
                            style={{ fontWeight: "bold" }}
                            onClick={() => scrollToElement('contactSectionID', 'headerID')}>
                            &nbsp;contact me.
                        </span> */}

                        <button
                        className="contactButton" 
                        onClick={() => scrollToElement('contactSectionID', 'headerID')}>
                            Contact Me
                        </button>
                    </div>
                </div>

            </div>


        </div>

    );
};

export default About;