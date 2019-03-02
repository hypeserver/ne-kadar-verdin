import React, { Component } from 'react';
import { brackets, calculate } from './util';
import './style.css';
class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wages: {},
      result: 0,
    };
  }

  handleChange = (year, event) => {
    this.setState({
      wages: {
        ...this.state.wages,
        [year]: event.target.value
      }
    }, () => {
      this.setState({
        result: calculate(this.state.wages)
      });
    });
  }

  render() {
    return (
      <div className="Calculator">
        <div className="data">
          <p>Hizmet dokumunuzdeki yillik odemelerinizi girerek ne kadar vergi verdiginizi hesaplayabilirsiniz.</p>
          <div className="wages">
            {Object.keys(brackets).map(year => (
              <div className="wage" key={year}>
                <label>
                  {year}:
                  <input
                    type="number"
                    onChange={(e) => this.handleChange(year, e)}
                    value={this.state.wages[year] || ""}
                  />
                  ₺
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="result">
          Bu zamana kadar verdiginiz vergilerin toplami: ₺{this.state.result}
        </div>
      </div>
    );
  }
}

export default Calculator;
