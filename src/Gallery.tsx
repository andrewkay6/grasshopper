import React from "react";
import grasscutpreview from './grasscutpreview.webp';
import { ReactComponent as GrassHopperLogo } from "./grasshopper.svg";
import KijijiButton from "./KijijiButton";
import scrollToElement from "./scrollUtilities";
const Gallery = () => { 
    return (
        <>
        <div className="gallerySection" id="gallerySectionID">
        <div className="sectionHeader">Gallery</div>
        <div className="galleryContainer">
            <div className="galleryImageContainer">
                <img src={grasscutpreview} alt="Lawn Mowing" className="galleryImage" />

        </div>
        </div>
    </div>
    </>
    );
};

export default Gallery;