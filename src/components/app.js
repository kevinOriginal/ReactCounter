import React, { Component } from 'react';
import Counter from './Counter';
import Controlls from './Controlls';

class App extends Component {
  constructor(props) {
    super(props)
    this.handleClickUp = this.handleClickUp.bind(this);
    this.handleClickDown = this.handleClickDown.bind(this);

    this.state = {value: 0};
  }

  handleClickUp() {
    let value = this.state.value;
    value = value+1;
    this.setState({ value: value});
    console.log(this.state.value);
  }

  handleClickDown() {
    let value = this.state.value;
    value= value -1;
    this.setState({ value: value});
    console.log(this.state.value);
  }

  render() {
    return (
      <div>
        <div>
          진짜 노잼이지만 연습용으로 제격인 숫자 세는 프로그램
        </div>
        <Counter
          count={this.state.value}
          />
        <Controlls
         clickUp={this.handleClickUp}
         clickDown={this.handleClickDown}
         />
      </div>
    );
  }
}

export default App;
