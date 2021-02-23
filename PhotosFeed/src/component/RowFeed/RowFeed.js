import React from 'react';
import ImageContainer from 'component/ImageContainer/ImageContainer';
import './RowFeed.css';

class RowFeed extends React.Component {
    render() {
        return (
            <div className="RowFeed">
                {this.props.data.map(each => <ImageContainer key={each.key} src={each.src} caption={each.caption} />)}
            </div>
        );
    }
}

export default RowFeed;