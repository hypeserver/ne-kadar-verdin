import React, { Component } from 'react';
import Calculator from './Calculator';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-wrapper">
          <header className="App-header">
            <h1>Ne kadar verdin?</h1>
          </header>
          <Calculator />
        </div>
        <footer>
          <a href="https://github.com/hypeserver/ne-kadar-verdin" target="_blank">Ne kadar verdin?</a> GitHub uzerinde barindirilan acik kaynakli bir projedir. Bilgilerinizin asla kaydedilmedigini kodu okuyarak gorebilirsiniz.
        </footer>
      </div>
    );
  }
}

export default App;
