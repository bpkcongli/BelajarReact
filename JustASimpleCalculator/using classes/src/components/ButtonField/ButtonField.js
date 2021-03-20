import React, {Component} from 'react';
import './ButtonField.css';

class ButtonField extends Component {
    render() {
        const {
            number, 
            clear, 
            backspace, 
            plusMinus, 
            addPoint, 
            percent, 
            operation, 
            calculation
        } = this.props.actions;

        return (
            <div className="ButtonField">
                <div className="RowButtonField">
                    <SpecialButton actions={clear} symbol={'C'} />
                    <SpecialButton actions={backspace} symbol={'←'} />
                    <SpecialButton actions={percent} symbol={'%'} />
                    <Button actions={e => {operation(e)}} symbol={'÷'} />
                </div>
                <div className="RowButtonField">
                    <Button actions={e => {number(e)}} symbol={'7'} />
                    <Button actions={e => {number(e)}} symbol={'8'} />
                    <Button actions={e => {number(e)}} symbol={'9'} />
                    <Button actions={e => {operation(e)}} symbol={'x'} />
                </div>
                <div className="RowButtonField">
                    <Button actions={e => {number(e)}} symbol={'4'} />
                    <Button actions={e => {number(e)}} symbol={'5'} />
                    <Button actions={e => {number(e)}} symbol={'6'} />
                    <Button actions={e => {operation(e)}} symbol={'-'} />
                </div>
                <div className="RowButtonField">
                    <Button actions={e => {number(e)}} symbol={'1'} />
                    <Button actions={e => {number(e)}} symbol={'2'} />
                    <Button actions={e => {number(e)}} symbol={'3'} />
                    <Button actions={e => {operation(e)}} symbol={'+'} />
                </div>
                <div className="RowButtonField">
                    <SpecialButton actions={plusMinus} symbol={'+/-'} />
                    <Button actions={e => {number(e)}} symbol={'0'} />
                    <SpecialButton actions={addPoint} symbol={'.'} />
                    <SpecialButton actions={calculation} symbol={'='} />
                </div>
            </div>
        );
    }
}

class Button extends Component {
    render() {
        return (
            <button onClick={e => {this.props.actions(e)}}>
                {this.props.symbol}
            </button>
        );
    }
}

class SpecialButton extends Component {
    render() {
        return (
            <button className="special" onClick={this.props.actions}>
                {this.props.symbol}
            </button>
        );
    }
}

export default ButtonField;