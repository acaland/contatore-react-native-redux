import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { increment, decrement, reset } from './src/actions';
import store from './src/store';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.updateStatus = this.updateStatus.bind(this);
    this.state = {
      conto: store.getState().conto,
      unsubscribe: store.subscribe(this.updateStatus)
    };
  }
  // componentDidMount() {
  //   const unsubscribe = store.subscribe(this.updateStatus);
  //   // it's discouraged to save state in the componentDidMount, better to do in the constructor
  //   this.setState({ unsubscribe: unsubscribe })
  // }
  updateStatus() {
    this.setState({ conto: store.getState().conto })
  }

  componentWillUnmount() {
    // ContatoreStore.removeChangeListener(this.updateStatus);
    this.state.unsubscribe();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Contatore</Text>
        <Text style={styles.conto}>Conto: {this.state.conto}</Text>
        <TouchableOpacity
          onPress={() => store.dispatch(increment())}
          style={styles.button}>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => store.dispatch(decrement())}
          style={styles.button}>
          <Text style={styles.text}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => store.dispatch(reset())}
          style={styles.button}>
          <Text style={styles.text}>0</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    width: 50,
    margin: 10,
    padding: 10,
    backgroundColor: 'lightcoral'
  },
  conto: {
    margin: 20,
    fontSize: 24
  },
  text: {
    fontSize: 20
  }
});

Expo.registerRootComponent(App);
