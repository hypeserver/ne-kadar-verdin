import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
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

  handleChange = (year, values) => {
    this.setState({
      wages: {
        ...this.state.wages,
        [year]: values.floatValue,
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
                  <NumberFormat
                    thousandSeparator={true}
                    prefix={'₺'}
                    onValueChange={(values) => this.handleChange(year, values)}
                    value={this.state.wages[year] || ""}
                  />
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="result">
          <span>Bu zamana kadar verdiginiz vergilerin toplami:</span>
          <NumberFormat
            displayType={'text'}
            thousandSeparator={true}
            prefix={'₺'}
            value={this.state.result}
          />
        </div>
      </div>
    );
  }
}

export default Calculator;
