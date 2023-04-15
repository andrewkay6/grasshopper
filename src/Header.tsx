import React from "react";
import { ReactComponent as KijijiLogo } from './kijiji.svg';
import { ReactComponent as GrassHopperLogo } from './grasshopper.svg';
import scrollToElement from "./scrollUtilities";
const Header = () => {
    const kijijiProfileUrl = 'https://www.kijiji.ca/o-profile/1001385209/listings/1';
    const handleKijijiClick = () => {
        openInNewTab(kijijiProfileUrl);
    };
    const openInNewTab = (url: string) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    }


    return (
        <div className='header' id='headerID'>
            <div className='headerLeft'>
                <div className='logoContainer' title="The Grasshopper">
                    <GrassHopperLogo className='grasshopperLogo' />
                    <div className='headerTitle'>
                        The Grasshopper
                    </div>
                </div>

                <div className='headerLinks'>
                    <div className='headerText' onClick={() => scrollToElement('aboutSectionID', 'headerID')}>
                        About
                    </div>
                    <div className='headerText'  onClick={() => scrollToElement('pricingSectionID', 'headerID')}>
                        Pricing
                    </div>
                    <div className='headerText' onClick={() => scrollToElement('contactSectionID', 'headerID')}>
                        Contact
                    </div>
                    <div className='iconContainer'>
                        <KijijiLogo
                            className='kijijiLogo'
                            onClick={handleKijijiClick} />
                    </div>

                </div>

            </div>
            {/* <div className='headerRight'>
                
            </div> */}

        </div>
    );
};

export default Header;