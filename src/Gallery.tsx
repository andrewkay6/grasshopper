import grasscutpreview from './grasscutpreview.webp';

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