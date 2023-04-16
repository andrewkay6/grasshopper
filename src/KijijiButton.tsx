
import React from 'react';
import { ReactComponent as KijijiLogo } from './kijiji.svg';

const KijijiButton = () => {
    const kijijiProfileUrl = 'https://www.kijiji.ca/o-profile/1001385209/listings/1';
    const handleKijijiClick = () => {
        openInNewTab(kijijiProfileUrl);
    };
    const openInNewTab = (url: string) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    }
    return (
        
            <KijijiLogo
                className='kijijiLogo'
                onClick={handleKijijiClick} />
    );
};

export default KijijiButton;