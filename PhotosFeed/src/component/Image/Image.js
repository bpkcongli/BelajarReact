import React from 'react';
import './Image.css';

class Image extends React.Component {
    render() {
        return (
            <div className="Image">
                <img src={this.props.src} />
            </div>
        )
    }
}

export default Image;