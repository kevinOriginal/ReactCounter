import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
    this.state = {value: null};
  }

  handleClick(e) {
    if(e === up) {
      this.setState({ value: value++});
    } else if(e === down) {
      this.setState({ value: value--});
    } else {
      console.log('error, the value that came is '+e);
    }
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
         clickUp={this.handleClick}
         clickDown={this.handleClick}
         />
      </div>
    );
  }
}

export default App;
