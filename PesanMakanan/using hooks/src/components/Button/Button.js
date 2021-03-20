import React from 'react';
import './Button.css';

/*class Button extends React.Component {
    render() {
        return (
            <button className={this.props.type} onClick={this.props.onClick}>{this.props.caption}</button>
        );
    }
}*/

const Button = props => {
    return (
        <button className={props.type} onClick={props.onClick}>{props.caption}</button>
    );
};

export default Button;