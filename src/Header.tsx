import React from "react";

import { ReactComponent as GrassHopperLogo } from './grasshopper.svg';
import KijijiButton from "./KijijiButton";
import scrollToElement from "./scrollUtilities";
const Header = () => {
    


    return (
        <div className='header' id='headerID'>
            <div className='headerLeft'>
                <div className='logoContainer'>
                    <GrassHopperLogo className='grasshopperLogo' />
                    <div className='headerTitle'>
                        The Grasshopper
                    </div>
                </div>

                <div className='headerLinks'>
                    <div className='headerText' onClick={() => scrollToElement('aboutSectionID', 'headerID')}>
                        About
                    </div>
                    <div className='headerText' onClick={() => scrollToElement('contactSectionID', 'headerID')}>
                        Contact
                    </div>
                    <div className='headerText' onClick={() => scrollToElement('gallerySectionID', 'headerID')}>
                        Gallery
                    </div>
                    <div className='iconContainer'>
                    <KijijiButton/>
                    </div>

                </div>

            </div>
            {/* <div className='headerRight'>
                
            </div> */}

        </div>
    );
};

export default Header;