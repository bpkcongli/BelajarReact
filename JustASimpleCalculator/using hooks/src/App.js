import React from 'react';
import 'App.css';
import Calculator from 'components/Calculator/Calculator';

const App = () => {
    return (
        <div className="App">
            <div className="Title">Just A <span>Simple Calculator</span>...</div>
            <Calculator />
            <div className="Credit">Created with ♥ by bpkcongli</div>
        </div>
    );
};

export default App;