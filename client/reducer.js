const initialState = {
  counter: 0,
};

function app(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return Object.assign({}, state, {
        counter: state.counter + 1,
      });
    case 'DECREMENT_COUNTER':
      return Object.assign({}, state, {
        counter: state.counter - 1,
      });
    default:
      return state;
  }
}

export default app;
