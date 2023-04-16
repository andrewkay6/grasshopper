import scrollToElement from "./scrollUtilities";
const Hero = () => {
    return (
        <div className="heroSection" id="heroSectionID">
            <div className="heroContainer">
                <div className="heroImageContainer">
                    <div className="heroTextContainer">
                        <div className="heroText">
                            Hi! I'm The Grasshopper. 
                        </div>
                        <div className="heroText">
                            I provide quick, high quality lawn mowing services in the Hamilton area.
                        </div>

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

export default Hero;