import React, {Component} from 'react';
import './HistoryContent.css';

class HistoryContent extends Component {
    render() {
        return this.props.content.length === 0 ? (
            <div className="HistoryContent no-history">
                <p>There's no history yet.</p>
            </div>
        ) : (
            <div className="HistoryContent">
                <ul>
                    {this.props.content.map(eachHist => {
                        const {id, firstNum, secondNum, operation, result} = eachHist;
                        return <li key={id}>
                            <span className="expression-history">{`${firstNum} ${operation} ${secondNum} = `}</span>
                            <br />
                            <span className="result-history">{result}</span>
                        </li>;
                    })}
                </ul>
            </div>
        );
    }
}

export default HistoryContent;