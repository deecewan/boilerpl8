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
        <label htmlFor="name">Enter your name.</label>
        <input name="name" onChange={e => this.setState({ name: e.target.value })} />
      </div>
    );
  }
}
