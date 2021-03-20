import React from 'react';
import './HistoryContent.css';

const HistoryContent = props => {
    return props.content.length === 0 ? (
        <div className="HistoryContent no-history">
            <p>There's no history yet.</p>
        </div>
    ) : (
        <div className="HistoryContent">
            <ul>
                {props.content.map(eachHist => {
                    const {id, firstNum, secondNum, operator, result} = eachHist;
                    return <li key={id}>
                        <span className="expression-history">{`${firstNum} ${operator} ${secondNum} = `}</span>
                        <br />
                        <span className="result-history">{result}</span>
                    </li>;
                })}
            </ul>
        </div>
    );
};

export default HistoryContent;