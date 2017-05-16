import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { increment, decrement, reset } from './src/actions';
import ContatoreStore from './src/ContatoreStore';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      conto: ContatoreStore.getConto()
    };
    this.updateStatus = this.updateStatus.bind(this);
  }
  componentDidMount() {
    ContatoreStore.addChangeListener(this.updateStatus);
  }
  updateStatus() {
    this.setState({ conto: ContatoreStore.getConto() })
  }

  componentWillUnmount() {
    ContatoreStore.removeChangeListener(this.updateStatus);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Contatore</Text>
        <Text style={styles.conto}>Conto: {this.state.conto}</Text>
        <TouchableOpacity
          onPress={increment}
          style={styles.button}>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={decrement}
          style={styles.button}>
          <Text style={styles.text}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={reset}
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
