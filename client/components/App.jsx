import React from 'react';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  render() {
    return (
      <div>
        <h1>Hello, {this.state.name}.</h1>
        <label>Enter your name.</label>
        <input onChange={e => this.setState({ name: e.target.value })} />
      </div>
    );
  }
}
