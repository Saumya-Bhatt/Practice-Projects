import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Result from './components/result';
import Keypad from './components/keypad';

class App extends Component {
  constructor(){
      super();

      this.state = {
          result: ""
      }
  }

  onClick = button => {
      if(button === "="){
          this.calculate()
      } else if(button === "C"){
          this.reset()
      } else if(button === "CE"){
          this.backspace()
      } else {
          this.setState({
              result: this.state.result + button
          })
      }
  };


  calculate = () => {
      var checkResult = ''
      if(this.state.result.includes('--')){
          checkResult = this.state.result.replace('--','+')
      } else {
          checkResult = this.state.result
      }
      try {
          this.setState({
              // eslint-disable-next-line
              result: (eval(checkResult) || "" ) + ""
          })
      } catch (e) {
          this.setState({
              result: "error"
          })

      }
  };

  reset = () => {
      this.setState({
          result: ""
      })
  };

  backspace = () => {
      this.setState({
          result: this.state.result.slice(0, -1)
      })
  };

  render() {
      return (
          <div>
              <div className="calculator-body">
                  <h1>React Calculator</h1>
                  <p>Made by Saumya Bhatt</p>
                  <Result result={this.state.result}/>
                  <Keypad onClick={this.onClick}/>
                  <br/><br/>
                  <p>The source code for this can be found  <a href='https://github.com/Saumya-Bhatt/React-Calculator'>Here</a></p>
              </div>
          </div>
      );
  }
}

export default App;
