import React from "react";
import { ReactComponent as KijijiLogo } from './kijiji.svg';
import { ReactComponent as GrassHopperLogo } from './grasshopper.svg';
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
        <div className='header'>
            <div className='headerLeft'>
                <div className='logoContainer' title="The Grasshopper">
                    <GrassHopperLogo className='grasshopperLogo' />
                    <div className='headerTitle'>
                        The Grasshopper
                    </div>
                </div>
                
                <div className='headerLinks'>
                    <div className='headerText' onClick={
                        () => {
                            const about = document.getElementById('aboutSectionID');
                            if (about) {
                                about.scrollIntoView({ behavior: 'smooth' });
                            }
                        }
                    }>
                        About
                    </div>
                    <div className='headerText' title="Pricing">
                        Pricing
                    </div>
                    <div className='headerText' title="Contact">
                        Contact
                    </div>
                    <KijijiLogo 
                className='kijijiLogo' 
                title="Kijiji" 
                onClick={handleKijijiClick}/>
                </div>

            </div>
            {/* <div className='headerRight'>
                
            </div> */}

        </div>
    );
};

export default Header;