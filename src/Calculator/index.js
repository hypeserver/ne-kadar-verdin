import React, { Component } from "react";
import ReactNumeric from "react-numeric";
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

  handleChange = (year, value) => {
    this.setState(
      {
        wages: {
          ...this.state.wages,
          [year]: value
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
            4A Hizmet dökümünüzdeki yıllık "Prime Esas Kazanc (P.E.K)" degerini
            girmeniz yeterlidir.
          </p>
          <div className="wages">
            {Object.keys(brackets).map(year => (
              <div className="wage" key={year}>
                <label>
                  {year}:
                  <ReactNumeric
                    value={this.state.wages[year] || ""}
                    minimumValue="0"
                    currencySymbol=" ₺"
                    decimalCharacter=","
                    digitGroupSeparator="."
                    onChange={(event, value) => this.handleChange(year, value)}
                  />
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="result">
          <div>Bugüne kadar verdiğiniz vergilerin toplamı:</div>
          <span className="price">
            <ReactNumeric
              readOnly
              currencySymbol=" $"
              value={this.state.resultUSD}
            />
          </span>
          (
          <ReactNumeric
            readOnly
            currencySymbol=" ₺"
            value={this.state.result}
          />
          )
        </div>
      </div>
    );
  }
}

export default Calculator;
