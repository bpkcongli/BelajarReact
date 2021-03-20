import React, {useState} from 'react';
import './Calculator.css';
import ResultField from 'components/ResultField/ResultField';
import ButtonField from 'components/ButtonField/ButtonField';
import HistoryContent from 'components/HistoryContent/HistoryContent';

const Calculator = () => {
    const [history, setHistory] = useState([]);
    const [result, setResult] = useState('0');
    const [firstNum, setFirstNum] = useState(null);
    const [secondNum, setSecondNum] = useState(null);
    const [isNegative, setIsNegative] = useState(false);
    const [operator, setOperator] = useState(null);
    const [trace, setTrace] = useState('');

    const buildTrace = (fn, sn, o) => {
        const firstNum = fn === null ? '' : String(fn);
        const operator = o === null ? '' : o;
        const secondNum = sn === null ? '' : String(sn);
        return `${firstNum} ${operator} ${secondNum}`;
    };

    const updateNumber = num => {
        if (firstNum !== null && operator !== null) {
            setResult(String(num));
            setSecondNum(num);
            setIsNegative(num < 0 ? true : false);
        } else {
            setResult(String(num));
            setFirstNum(num);
            setIsNegative(num < 0 ? true : false);
        }
    };

    const number = e => {
        let tempResult = result;
        const clickedNumber = e.target.innerText;

        if (tempResult === '0' || (firstNum !== null && operator !== null && secondNum === null) || (operator === null && secondNum !== null)) tempResult = clickedNumber;
        else tempResult += clickedNumber;

        updateNumber(Number(tempResult));
    };

    const clear = () => {
        setResult('0');
        setFirstNum(null);
        setSecondNum(null);
        setIsNegative(false);
        setOperator(null);
        setTrace('');
    };

    const plusMinus = () => {
        if (result === '0') return;
        updateNumber(Number(result) * -1);
    };

    const backspace = () => {
        const tempResult = isNegative ? result.slice(1) : result;
        const len = tempResult.length;
        let resultAfter = len > 1 ? Number(tempResult.slice(0, len-1)) : 0;
        resultAfter = isNegative ? resultAfter*-1 : resultAfter;
        updateNumber(resultAfter);
    };

    const addPoint = () => {
        if (result.includes('.') === true) return;
        setResult(result + '.');
    };

    const percent = () => {
        updateNumber(Number(result) * 0.01);
    };

    const operation = e => {
        let tempResult = Number(result);
        if (operator && secondNum !== null) {
            tempResult = calculation();
        }
        setFirstNum(tempResult);
        setSecondNum(null);
        setOperator(e.target.innerText);
        setIsNegative(false);
        setTrace(buildTrace(tempResult, null, e.target.innerText));
    };

    const calculation = () => {
        let tempResult;
        const fn = firstNum || 0;
        const sn = secondNum || 0;
        const o = operator;
        switch (o) {
            case '+':
                tempResult = fn + sn;
                break;
            case '-':
                tempResult = fn - sn;
                break;
            case 'x':
                tempResult = fn * sn;
                break;
            case '÷':
                tempResult = fn / sn;
                break;
            default:
                return;
        }

        const historyAfterCalc = [{
            id: history.length,
            firstNum: fn,
            secondNum: sn,
            operator: o,
            result: tempResult
        }].concat(history);

        setResult(String(tempResult));
        setOperator(null);
        setIsNegative(false);
        setTrace(`${buildTrace(fn, sn, o)} =`);
        setHistory(historyAfterCalc);

        return tempResult;
    };

    const clearHistory = () => {
        setHistory([]);
    };

    return (
        <div className="Calculator">
            <div className="Main">
                <ResultField result={result} trace={trace} />
                <ButtonField actions={{
                    number: e => {number(e)},
                    clear: clear,
                    backspace: backspace,
                    plusMinus: plusMinus,
                    addPoint: addPoint,
                    percent: percent,
                    operation: e => {operation(e)},
                    calculation: calculation
                }}/>
            </div>
            <div className="History">
                <div className="HistoryTitle">History</div>
                <HistoryContent content={history} />
                <div className="ClearHistory">
                    <button onClick={clearHistory}>Clear History</button>
                </div>
            </div>
        </div>
    );
};

export default Calculator;