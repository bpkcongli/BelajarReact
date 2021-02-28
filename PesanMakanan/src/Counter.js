import React from 'react';

class Counter extends React.Component {
    state = {
        counter: 0
    }
    increment = () => {
        this.setState({
            counter: this.state.counter+1
        });
    }
    reset = () => {
        this.setState({
            counter: 0
        });
    }
    render() {
        return (
            <div>
                <p>{this.state.counter}</p>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    }
}

export default Counter;