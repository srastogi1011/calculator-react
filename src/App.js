import React, {Component} from 'react';
import './App.css';
import Display from './Components/Display';
import Button from './Components/Button';
import Clear from './Components/Clear';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      storedValue: '',
      binaryOperation: '',
    };
  }

  clearInput = () => {
    this.setState({value: ""})
    this.setState({storedValue: ""})
    this.setState({binaryOperation: ""})
  }

  changeInput = num => {
    this.setState({value: this.state.value.concat(num)})
  };

  appendDecimal = num => {
    if (!this.state.value.includes(".")) {
      this.setState({value: this.state.value.concat(num)})
    }
  };x

  binOp = binOp => {
    this.setState({binaryOperation: binOp})
    this.setState({storedValue: this.state.value})
    this.setState({value: ""})
  }

  evaluate = () => {
    switch (this.state.binaryOperation) {
      case "+":
        this.setState({value: parseFloat(this.state.value) + parseFloat(this.state.storedValue)})
        break;
      case "-":
        this.setState({value: parseFloat(this.state.storedValue) - parseFloat(this.state.value)})
        break;
      case "*":
        this.setState({value: parseFloat(this.state.value) * parseFloat(this.state.storedValue)})
        break;
      case "/":
        if (parseFloat(this.state.value) === 0.0) {
          this.setState({value: "undef"})
        } else {
          this.setState({value: parseFloat(this.state.storedValue) / parseFloat(this.state.value)})
        }
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div className="App">
        <div className="Calc">
          <div className="row">
            <Clear handleClick={this.clearInput}>Clear</Clear>
          </div>
          <div className="row">
            <Button handleClick={this.binOp}>+</Button>
            <Button handleClick={this.binOp}>-</Button>
            <Button handleClick={this.binOp}>*</Button>
            <Button handleClick={this.binOp}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.changeInput}>1</Button>
            <Button handleClick={this.changeInput}>2</Button>
            <Button handleClick={this.changeInput}>3</Button>
            <Button handleClick={this.changeInput}>4</Button>
          </div>
          <div className="row">
            <Button handleClick={this.changeInput}>5</Button>
            <Button handleClick={this.changeInput}>6</Button>
            <Button handleClick={this.changeInput}>7</Button>
            <Button handleClick={this.changeInput}>8</Button>
          </div>
          <div className="row">
            <Button handleClick={this.changeInput}>9</Button>
            <Button handleClick={this.changeInput}>0</Button>
            <Button handleClick={this.appendDecimal}>.</Button>
            <Button handleClick={this.evaluate}>=</Button>
          </div>
          <div className="row">
            <Display>{this.state.value}</Display>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
