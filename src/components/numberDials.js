import React, { Component } from "react";
import "./numberDials.css";

class NumberDials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberA: Math.floor(Math.random() * 10),
      numberB: Math.floor(Math.random() * 10),
      numberC: Math.floor(Math.random() * 10),
      numberD: Math.floor(Math.random() * 10)
    };
  }

  winning = (a, b, c, d) => {
    // Function to check and see if YOUR code (a,b,c,d).
    // matches the secret code (9,6,3,0).
    if (a === 9 && b === 6 && c === 3 && d === 0) {
      return true;
    }
    return false;
  };

  render() {
    // To increase readability we are making variables with shorter names.
    // This also saves us the trouble of unpacking state if we want to modify it later.
    let a = this.state.numberA;
    let b = this.state.numberB;
    let c = this.state.numberC;
    let d = this.state.numberD;

    return (
      <div
        className={
          "NumberDials" + (this.winning(a, b, c, d) ? " winning" : " losing")
        }
      >
        <h1 className="directions">Guess the 4-digit code</h1>
        <div className="hint">
          <h3>Target Sum: 18</h3>
          <h3>
            Your Sum:{" "}
            {this.state.numberA +
              this.state.numberB +
              this.state.numberC +
              this.state.numberD}
          </h3>
        </div>
        <div className="numberPlates">
          <div className="numberPlate">
            <button onClick={() => this.setState({ numberA: a + 1 })}>↑</button>
            <div className="digit">{this.state.numberA}</div>
            <button onClick={() => this.setState({ numberA: a - 1 })}>↓</button>
          </div>
          <div className="numberPlate">
            <button onClick={() => this.setState({ numberB: b + 1 })}>↑</button>
            <div className="digit">{this.state.numberB}</div>
            <button onClick={() => this.setState({ numberB: b - 1 })}>↓</button>
          </div>
          <div className="numberPlate">
            <button onClick={() => this.setState({ numberC: c + 1 })}>↑</button>
            <div className="digit">{this.state.numberC}</div>
            <button onClick={() => this.setState({ numberC: c - 1 })}>↓</button>
          </div>
          <div className="numberPlate">
            <button onClick={() => this.setState({ numberD: d + 1 })}>↑</button>
            <div className="digit">{this.state.numberD}</div>
            <button onClick={() => this.setState({ numberD: d - 1 })}>↓</button>
          </div>
        </div>
      </div>
    );
  }
}

export default NumberDials;
