import React, { Component } from "react";
import ReactNumeric from "react-numeric";
import domtoimage from "dom-to-image";
import { brackets, calculate } from "./util";
import "./style.css";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wages: {},
      stage: "data",
      result: 0,
      resultUSD: 0
    };
  }

  handleChange = (year, value) => {
    this.setState({
      wages: {
        ...this.state.wages,
        [year]: value
      }
    });
  };

  handleShowResults = () => {
    const { result, resultUSD } = calculate(this.state.wages);
    this.setState({
      result,
      resultUSD,
      stage: "result"
    });
  };

  handleShowData = () => {
    this.setState({
      stage: "data"
    });
  };

  handleShare = () => {
    const wrapper = document.body;
    const vw = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
    const isDesktop = vw > 640;
    const width = isDesktop ? 1280 : 750;
    const scale = 1280 / wrapper.offsetWidth;
    const remove1 = document.querySelector(".remove1");
    const remove2 = document.querySelector(".remove2");
    remove1.classList.add("hidden");
    remove2.classList.add("hidden");
    domtoimage
      .toPng(wrapper, {
        height: wrapper.offsetHeight * scale,
        width: wrapper.offsetWidth * scale,
        style: {
          transform: "scale(" + scale + ")",
          transformOrigin: "top left",
          width: wrapper.offsetWidth + "px",
          height: wrapper.offsetHeight + "px"
        }
      })
      .then(dataUrl => {
        const link = document.createElement("a");
        link.download = `nekadarverdin.png`;
        link.href = dataUrl;
        link.click();

        remove1.classList.remove("hidden");
        remove2.classList.remove("hidden");
      });
  };

  render() {
    return (
      <div className="Calculator">
        {this.state.stage === "data" ? (
          <div className="data">
            <p>
              4A detaylı hizmet dökümünüzdeki yıllık "Prime Esas Kazanç (P.E.K)"
              değerini girmeniz yeterlidir.
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
            <button onClick={this.handleShowResults}>HESAPLA</button>
          </div>
        ) : (
          <div className="result">
            <div>
              Bugüne kadar devlete doğrudan <br />
              verdiğim vergilerin toplamı:
            </div>
            <div className="price">
              <ReactNumeric
                className="priceinput"
                readOnly
                currencySymbol=" $"
                decimalCharacter=","
                digitGroupSeparator="."
                value={this.state.resultUSD}
              />
            </div>
            <ReactNumeric
              readOnly
              className="priceinput"
              currencySymbol=" ₺"
              decimalCharacter=","
              digitGroupSeparator="."
              value={this.state.result}
            />
            <div className="nekadarverdin" />
            <div className="hashtag" />
            <div>
              <button className="secondary remove1" onClick={this.handleShare}>
                GÖRÜNTÜ AL
              </button>
              <button
                className="secondary remove2"
                onClick={this.handleShowData}
              >
                TEKRAR DÜZENLE
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Calculator;
