import KijijiButton from "./KijijiButton";
const Contact = () => {
    return (
        <div className="contactSection" id="contactSectionID">
            <div className="sectionHeader">Contact</div>
            <div className="contactContainer"  >
                <div
                className="roundedDarkBackground"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "5%"

                }}>
                    
                    <div>
                        <div  >
                            The best way to contact me is by email:
                        </div>
                        <a href="mailto:grasshopperkay@gmail.com" className="emailContainer">
                            grasshopperkay@gmail.com
                        </a>
                    </div>
                    <br/>
                    <div>
                        Or, you can reply to one of my Kijiji ads:
                    </div>
                    <div>
                        <div className='iconContainer'>
                            <KijijiButton />
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
               



            </div>
        </div>
    );
};

export default Contact;