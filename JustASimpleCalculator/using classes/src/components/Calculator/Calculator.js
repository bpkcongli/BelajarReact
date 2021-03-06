import React, {Component} from 'react';
import './Calculator.css';
import ResultField from 'components/ResultField/ResultField';
import ButtonField from 'components/ButtonField/ButtonField';
import HistoryContent from 'components/HistoryContent/HistoryContent';

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [],
            result: '0',
            firstNum: null,
            secondNum: null,
            isNegative: false,
            operator: null,
            trace: ''
        }
    }

    buildTrace(fn, sn, o) {
        const firstNum = fn === null ? '' : String(fn);
        const operator = o === null ? '' : o;
        const secondNum = sn === null ? '' : String(sn);
        return `${firstNum} ${operator} ${secondNum}`;
    }

    updateNumber(num) {
        const {firstNum, operator} = this.state;
        if (firstNum !== null && operator !== null) {
            this.setState({
                result: String(num), 
                secondNum: num, 
                isNegative: num < 0 ? true : false
            });
        } else {
            this.setState({
                result: String(num), 
                firstNum: num, 
                isNegative: num < 0 ? true : false
            });
        }
    }

    number(e) {
        let result = this.state.result;
        const {firstNum, operator, secondNum} = this.state;
        const clickedNumber = e.target.innerText;

        if (result === '0' || (firstNum !== null && operator !== null && secondNum === null) || (operator === null && secondNum !== null)) result = clickedNumber;
        else result += clickedNumber;

        this.updateNumber(Number(result));
    }

    clear() {
        this.setState({
            result: '0',
            firstNum: null,
            secondNum: null,
            isNegative: false,
            operator: null,
            trace: ''
        });
    }

    plusMinus() {
        if (this.state.result === '0') return;
        const result = Number(this.state.result) * -1;
        this.updateNumber(result);
    }

    backspace() {
        const result = this.state.isNegative ? this.state.result.slice(1) : this.state.result;
        const len = result.length;
        let resultAfter = len > 1 ? Number(result.slice(0, len-1)) : 0;
        resultAfter = this.state.isNegative ? resultAfter*-1 : resultAfter;
        this.updateNumber(resultAfter);
    }

    addPoint() {
        if (this.state.result.includes('.') === true) return;
        this.setState({
            result: this.state.result + '.'
        });
    }

    percent() {
        const result = Number(this.state.result) * 0.01;
        this.updateNumber(result);
    }

    operation(e) {
        let result = Number(this.state.result);
        if (this.state.operator && this.state.secondNum !== null) {
            result = this.calculation();
        }
        this.setState({
            firstNum: result, 
            secondNum: null, 
            operator: e.target.innerText, 
            isNegative: false,
            trace: this.buildTrace(result, null, e.target.innerText)
        });
    }

    calculation() {
        let result;
        const firstNum = this.state.firstNum || 0;
        const secondNum = this.state.secondNum || 0;
        const operator = this.state.operator;
        switch (operator) {
            case '+':
                result = firstNum + secondNum;
                break;
            case '-':
                result = firstNum - secondNum;
                break;
            case 'x':
                result = firstNum * secondNum;
                break;
            case '÷':
                result = firstNum / secondNum;
                break;
            default:
                return;
        }

        this.setState({
            result: String(result),
            operator: null,
            isNegative: false,
            trace: `${this.buildTrace(firstNum, secondNum, operator)} =`,
            history: [{
                id: this.state.history.length,
                firstNum: firstNum,
                secondNum: secondNum,
                operator: operator,
                result: result
            }].concat(this.state.history)
        });

        return result;
    }

    clearHistory() {
        this.setState({history: []});
    }

    render() {
        return (
            <div className="Calculator">
                <div className="Main">
                    <ResultField result={this.state.result} trace={this.state.trace} />
                    <ButtonField actions={{
                        number: e => {this.number(e)},
                        clear: () => {this.clear()},
                        backspace: () => {this.backspace()},
                        plusMinus: () => {this.plusMinus()},
                        addPoint: () => {this.addPoint()},
                        percent: () => {this.percent()},
                        operation: e => {this.operation(e)},
                        calculation: () => {this.calculation()}
                    }}/>
                </div>
                <div className="History">
                    <div className="HistoryTitle">History</div>
                    <HistoryContent content={this.state.history} />
                    <div className="ClearHistory">
                        <button onClick={() => this.clearHistory()}>Clear History</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Calculator;