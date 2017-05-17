

export const increment = () => {
  const action = {
    type: 'INCREMENT'
  }
  return action;
};

export const decrement = () => {
  return {
    type: 'DECREMENT'
  }
};

export const reset = () => {
  return {
    type: 'RESET'
  }
};
