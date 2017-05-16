class Dispatcher {
  constructor(props) {
    this.isDispatching = false;
    this.actionHandlers = [];
  }

  register(actionHandler) {
    this.actionHandlers.push(actionHandler);
  }

  dispatch(action) {
    if (this.isDispatching) {
      throw new Error("I am sorry but I am busy")
    }
    this.isDispatching = true;
    // Send action to store
    this.actionHandlers.forEach(handler => handler(action));
    this.isDispatching = false;
  }
}

export default new Dispatcher();
