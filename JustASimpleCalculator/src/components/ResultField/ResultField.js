import React, {Component} from 'react';
import './ResultField.css';

class ResultField extends Component {
    render() {
        return (
            <div className="ResultField">
                <div className="trace">{this.props.trace}</div>
                <div className="result">{this.props.result}</div>
            </div>
        );
    }
}

export default ResultField;