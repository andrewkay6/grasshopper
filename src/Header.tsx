import React from "react";

import { ReactComponent as GrassHopperLogo } from './grasshopper.svg';
import KijijiButton from "./KijijiButton";
import scrollToElement from "./scrollUtilities";
const Header = () => {
    
    return (
        <div className='header' id='headerID'>
            <div className='headerLeft'>
                <div className='logoContainer' onClick={() => scrollToElement('heroSectionID', 'headerID')}>
                    <GrassHopperLogo className='grasshopperLogo' />
                    <div className='headerTitle'>
                        The Grasshopper
                    </div>
                </div>

                <div className='headerLinks'>
                    <div className='headerText headerTextHover' onClick={() => scrollToElement('heroSectionID', 'headerID')}>
                        About
                    </div>
                    <div className='headerText headerTextHover' onClick={() => scrollToElement('contactSectionID', 'headerID')}>
                        Contact
                    </div>
                    <div className='headerText headerTextHover' onClick={() => scrollToElement('gallerySectionID', 'headerID')}>
                        Gallery
                    </div>
                    <div className='iconContainer'>
                    <KijijiButton/>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Header;