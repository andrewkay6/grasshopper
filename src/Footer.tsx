import React from "react";
import { ReactComponent as GithubLogo } from './github.svg'
import {ReactComponent as LinkedInLogo} from './linkedin.svg'
const Footer = () => {
    const githubUrl = 'https://github.com/andrewkay6';
    const linkedInUrl = 'https://www.linkedin.com/in/andrew-kay-655344211/';
    const handleGithubClick = () => {
        openInNewTab(githubUrl);
    };
    const handleLinkedInClick = () => {
        openInNewTab(linkedInUrl);
    };
    const openInNewTab = (url: string) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    }
    return (
        <div className="footerSection" id="footerSectionID">
            <div>
                Website made by Andrew Kay
            </div>
            
            <div>
                <GithubLogo
                    className="clickableSVG" 
                    onClick={() => {handleGithubClick()}}
                />
                <LinkedInLogo
                    className="clickableSVG"
                    onClick={() => {handleLinkedInClick()}}
                />
            </div>
        </div>
    );
};

export default Footer;