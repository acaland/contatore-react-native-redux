import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import { increment, decrement, reset } from './src/actions';
import * as actions from './src/actions';
import store from './src/store';
import { Provider, connect } from 'react-redux';
import Contatore from './src/Contatore';

mapStateToProps = (state) => ({
  conto: state.conto
});

// mapDispatchToProps = (dispatch) => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement()),
//   reset: () => dispatch(reset())
// });

const containerConnector = connect(
  mapStateToProps,
  actions
);

const ContatoreContainer = containerConnector(Contatore);


const App = () => (
    <Provider store={store}>
        <ContatoreContainer />
    </Provider>
);

Expo.registerRootComponent(App);
