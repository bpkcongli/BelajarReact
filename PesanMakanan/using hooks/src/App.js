import React from 'react';
import './App.css';
import Title from 'components/Title/Title';
import Order from 'components/Order/Order';

/*class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Title />
        <Order />
      </div>
    );
  }
}*/

const App = () => {
  return (
    <div className="App">
      <Title />
      <Order />
    </div>
  );
};

export default App;