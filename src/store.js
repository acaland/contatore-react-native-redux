import { createStore } from 'redux';

let initialState = {
  conto: 0
};

const contoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        conto: state.conto + 1
      }
    case 'DECREMENT':
      return {
        conto: state.conto - 1
      }
    case 'RESET':
      return {
        conto: 0
      }
  default:
    return state;
  }

}

const store = createStore(contoReducer);
export default store;
