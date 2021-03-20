import React from 'react';
import './ResultField.css';

const ResultField = props => {
    return (
        <div className="ResultField">
            <div className="trace">{props.trace}</div>
            <div className="result">{props.result}</div>
        </div>
    );
};

export default ResultField;