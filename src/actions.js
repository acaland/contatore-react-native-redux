import Dispatcher from './Dispatcher';

export const increment = () => {
  const action = {
    type: 'INCREMENT'
  }
  // send action to dispatcher
  Dispatcher.dispatch(action);
};

export const decrement = () => {
  const action = {
    type: 'DECREMENT'
  }
  // send action to dispatcher
  Dispatcher.dispatch(action);
};

export const reset = () => {
  const action = {
    type: 'RESET'
  }
  // send action to dispatcher
  Dispatcher.dispatch(action);
};
