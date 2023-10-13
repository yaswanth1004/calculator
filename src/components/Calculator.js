import { Component } from "react";
import "./style.css";

class Calculator extends Component {
  constructor() {
    super();
    this.state = { history: "", exp: "" };
  }
  add = (event) => {
    this.setState({ exp: this.state.exp + event.target.id });
  };
  calc = () => {
    try{
      let temp=eval(this.state.exp);
      this.setState({exp:temp,history:this.state.history+"\n"+this.state.exp})
    }
    catch(err){
      this.setState({exp:"error"})
    }
  };
  clear = () => {
    this.setState({ exp: "" });
  };
  render() {
    return (
      <div class="container">
        <div class="screen">
            <div className="camera"></div>
            <p className="history">{this.state.history}</p>
            <h1>{this.state.exp}</h1>
        </div>
        <div class="keys">
          <div class="left">
            <div class="key" id="7" onClick={this.add}>7</div>
            <div class="key" id="8" onClick={this.add}>8</div>
            <div class="key" id="9" onClick={this.add}>9</div>
            <div class="key" id="4" onClick={this.add}>4</div>
            <div class="key" id="5" onClick={this.add}>5</div>
            <div class="key" id="6" onClick={this.add}>6</div>
            <div class="key" id="1" onClick={this.add}>1</div>
            <div class="key" id="2" onClick={this.add}>2</div>
            <div class="key" id="3" onClick={this.add}>3</div>
            <div class="key" id="0" onClick={this.add}>0</div>
            <div class="key" id="." onClick={this.add}>.</div>
            <div class="key" id="calc" onClick={this.calc}>=</div>
          </div>
          <div class="right">
            <div class="key" id="back" onClick={this.clear}>back</div>  
            <div class="key" id="/" onClick={this.add}>/</div>
            <div class="key" id="*" onClick={this.add}>x</div>
            <div class="key" id="-" onClick={this.add}>-</div>
            <div class="key" id="+" onClick={this.add}>+</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Calculator;