import KijijiButton from "./KijijiButton";
const Contact = () => {
    return (
        <div className="contactSection" id="contactSectionID">
            <div className="sectionHeader">Contact</div>
            <div className="contactContainer" >
                <div
                style={{
                    display: "flex",
                    flexDirection: "column",

                }}>
                    <div>
                        <div >
                            The best way to contact me is through email:
                        </div>
                        <a href="mailto:grasshopperkay@gmail.com" className="emailContainer">
                            grasshopperkay@gmail.com
                        </a>
                    </div>

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
                <div style={{fontWeight: "bold"}}>
                    Please include:
                    <ul title="Please include">
                        <li >Your address</li>
                        <li>How often do you want your lawn mowed?</li>
                        <li>How big is your lawn? (A rough estimate is great).</li>
                        <li>Do you have any pets?</li>
                    </ul>
                </div>



            </div>
        </div>
    );
};

export default Contact;