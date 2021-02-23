import React from 'react';
import RowFeed from 'component/RowFeed/RowFeed';
import data from 'Model';
import './PhotosFeed.css';

const photosInfo = [];

for (let i=0; i<data.length; i+=3) {
    if (i+3 > data.length) {
        let emptyInfo = [];
        for (let j=0; j<3-(data.length-i); j++) emptyInfo.push({src: null, caption: null})
        photosInfo.push({
            key: parseInt(i/3),
            data: data.slice(i, i+3).concat(emptyInfo)
        });
    } else {
        photosInfo.push({
            key: parseInt(i/3),
            data: data.slice(i, i+3)
        });
    }
}

class PhotosFeed extends React.Component {
    render() {
        return (
            <div className="PhotosFeed">
                {photosInfo.map(each => <RowFeed key={each.key} data={each.data} />)}
            </div>
        );
    }
}

export default PhotosFeed;