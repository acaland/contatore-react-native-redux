import Expo from 'expo';
import React from 'react';

import store from './src/store';
import Contatore from './src/Contatore';
import { Provider, connect } from 'react-redux';
// import { increment, decrement, reset } from './src/actions';
import * as actions from './src/actions';

const mapStateToProps = state => ({
  conto: state.conto
});

// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement()),
//   reset: () => dispatch(reset())
// });

const ContatoreContainer = connect(
  mapStateToProps,
  // mapDispatchToProps
  actions
) (Contatore);

// class App extends React.Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <ContatoreContainer />
//       </Provider>
//     );
//   }
// }

const App = () => (
  <Provider store={store}>
    <ContatoreContainer />
  </Provider>
)


Expo.registerRootComponent(App);
