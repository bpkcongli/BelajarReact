import React from 'react';
import Image from 'component/Image/Image';
import ImageCaption from 'component/ImageCaption/ImageCaption';
import './ImageContainer.css';

class ImageContainer extends React.Component {
    render() {
        return (this.props.src === null && this.props.caption === null) ?
        (
            <div className="ImageContainer no-border"></div>
        ) :
        (
            <div className="ImageContainer">
                <Image src={this.props.src} />
                <ImageCaption caption={this.props.caption} />
            </div>
        );
    }
}

export default ImageContainer;