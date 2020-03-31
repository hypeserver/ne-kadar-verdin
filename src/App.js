import React, { Component } from "react";
import Calculator from "./Calculator";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-wrapper">
          <header className="App-header">
            <div className="logo" />
          </header>
          <Calculator />
        </div>
        <footer>
          <a
            href="https://github.com/hypeserver/ne-kadar-verdin"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ne kadar verdin?
          </a>{" "}
          GitHub üzerinde barındırılan açık kaynaklı bir projedir.
          Bilgilerinizin asla kaydedilmediğine emin olabilirsiniz.
          <br />
          <i>Dolar değeri her yılın kur seviyesine göre hesaplanır.</i>
        </footer>
      </div>
    );
  }
}

export default App;
