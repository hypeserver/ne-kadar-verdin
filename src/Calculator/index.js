import React, { Component } from "react";
import NumberFormat from "react-number-format";
import { brackets, calculate, yearly_usd } from "./util";
import "./style.css";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wages: {},
      result: 0,
      resultUSD: 0
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
        const resultUSD = Object.entries(this.state.wages).reduce(
          (mem, [year, tax]) => {
            mem += yearly_usd(year, tax);
            return mem;
          },
          0
        );
        this.setState({
          result: calculate(this.state.wages),
          resultUSD: Math.floor(resultUSD)
        });
      }
    );
  };

  render() {
    return (
      <div className="Calculator">
        <div className="data">
          <p>
            4A Hizmet dökümünüzdeki yıllık "Prime Esas Kazanc (P.E.K)" degerini girmeniz yeterlidir.
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
          <div>Bugüne kadar verdiğiniz vergilerin toplamı:</div>
          <span className="price">
            <NumberFormat
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
              value={this.state.resultUSD}
            />
          </span>
          (
          <NumberFormat
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₺"}
            value={this.state.result}
          />
          )
        </div>
      </div>
    );
  }
}

export default Calculator;
