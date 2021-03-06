import React, {Component} from 'react';
import './Button.css';

class Button extends Component {
    render() {
        return (
            <button className={this.props.type} onClick={this.props.onClick}>{this.props.caption}</button>
        );
    }
}

export default Button;