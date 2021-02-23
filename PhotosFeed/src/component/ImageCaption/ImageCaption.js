import React from 'react';
import './ImageCaption.css';

class ImageCaption extends React.Component {
    render() {
        return (
            <div className="ImageCaption">
                <p>{this.props.caption}</p>
            </div>
        );
    }
}

export default ImageCaption;