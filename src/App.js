import React, { Component } from 'react';
import Calculator from './Calculator';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Ne kadar verdin?</h1>
        </header>
        <Calculator />
        <footer>Ne kadar verdin? GitHub uzerinde barindirilan acik kaynakli bir projedir. Bilgilerinizin asla kaydedilmedigini kodu okuyarak gorebilirsiniz.</footer>
      </div>
    );
  }
}

export default App;
