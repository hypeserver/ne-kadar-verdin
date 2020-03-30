import React, { Component } from "react";
import NumberFormat from "react-number-format";
import { brackets, calculate } from "./util";
import "./style.css";
class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wages: {},
      result: 0
    };
  }

  handleChange = (year, values) => {
    this.setState(
      {
        wages: {
          ...this.state.wages,
          [year]: values.floatValue
        }
      },
      () => {
        this.setState({
          result: calculate(this.state.wages)
        });
      }
    );
  };

  render() {
    return (
      <div className="Calculator">
        <div className="data">
          <p>
            4A Hizmet dökümünüzdeki yıllık ödemelerinizi girmeniz yeterlidir.
          </p>
          <div className="wages">
            {Object.keys(brackets).map(year => (
              <div className="wage" key={year}>
                <label>
                  {year}:
                  <NumberFormat
                    thousandSeparator={true}
                    prefix={"₺"}
                    onValueChange={values => this.handleChange(year, values)}
                    value={this.state.wages[year] || ""}
                  />
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="result">
          <span>Bugüne kadar verdiğiniz vergilerin toplamı:</span>
          <span className="price">
            <NumberFormat
              displayType={"text"}
              thousandSeparator={true}
              prefix={"₺"}
              value={this.state.result}
            />
          </span>
        </div>
      </div>
    );
  }
}

export default Calculator;
