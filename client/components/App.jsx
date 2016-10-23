import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { updateName } from '../actions/name';

function AppComponent(props) {
  return (
    <div>
      <h1>Hello, {props.name}.</h1>
      <label htmlFor="name">Enter your name: </label>
      <input name="name" onChange={e => props.updateName(e.target.value)} />
    </div>
  );
}

AppComponent.propTypes = {
  name: PropTypes.string,
  updateName: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    name: state.getIn(['name', 'name']), // property `name` inside of store for reducer `name`
  };
}

const App = connect(mapStateToProps, { updateName })(AppComponent);

export { App as default };
