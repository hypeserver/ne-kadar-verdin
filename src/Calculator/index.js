import React, { Component } from "react";
import ReactNumeric from "react-numeric";
import { brackets, calculate } from "./util";
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
        const { result, resultUSD } = calculate(this.state.wages);
        this.setState({
          result,
          resultUSD
        });
      }
    );
  };

  render() {
    return (
      <div className="Calculator">
        <div className="data">
          <p>
            4A detaylı hizmet dökümünüzdeki yıllık "Prime Esas Kazanç (P.E.K)" değerini
            girmeniz yeterlidir.
          </p>
          <div className="wages">
            {Object.keys(brackets)
              .reverse()
              .map(year => (
                <div className="wage" key={year}>
                  <label>
                    {year}:
                    <ReactNumeric
                      className="input-numeric"
                      value={this.state.wages[year] || ""}
                      minimumValue="0"
                      currencySymbol=" ₺"
                      decimalCharacter=","
                      digitGroupSeparator="."
                      onChange={(event, value) =>
                        this.handleChange(year, value)
                      }
                      onInvalidPaste={"ignore"}
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
              className="priceinput"
              readOnly
              currencySymbol=" $"
              decimalCharacter=","
              digitGroupSeparator="."
              value={this.state.resultUSD}
            />
          </span>
          (
          <ReactNumeric
            readOnly
            className="priceinput"
            currencySymbol=" ₺"
            decimalCharacter=","
            digitGroupSeparator="."
            value={this.state.result}
          />
          )
        </div>
      </div>
    );
  }
}

export default Calculator;
