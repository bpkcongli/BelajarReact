import React, {Component} from 'react';
import './App.css';
import Title from 'components/Title/Title';
import Order from 'components/Order/Order';

class App extends Component {
    render() {
        return (
          <div className="App">
            <Title />
            <Order />
          </div>
        );
    }
}

export default App;