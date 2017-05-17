import { createStore } from 'redux';

let initialState = {
  conto: 0
};

const contoReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        conto: currentState.conto + 1
      }
    case 'DECREMENT':
      return {
        conto: currentState.conto - 1
      }
    case 'RESET':
      return {
        conto: 0
      }
    default:
      return currentState;
  }
}

const theStore = createStore(contoReducer);
export default theStore;
