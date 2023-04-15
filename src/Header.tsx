import React from "react";
import { ReactComponent as KijijiLogo } from './kijiji.svg';
import { ReactComponent as GrassHopperLogo } from './grasshopper.svg';
const Header = () => {
    return (
        <div className='header'>
            <div className='headerLeft'>
                <GrassHopperLogo className='grasshopperLogo' />
                <div className='headerTitle'>
                    The Grasshopper
                </div>
                <div className='headerLinks'>
                    <div className='headerText'>
                        About
                    </div>
                    <div className='headerText'>
                        Pricing
                    </div>
                    <div className='headerText'>
                        Contact
                    </div>
                </div>

            </div>
            <div className='headerRight'>
                <KijijiLogo className='kijijiLogo' />
            </div>

        </div>
    );
};

export default Header;