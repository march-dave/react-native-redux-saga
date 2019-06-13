/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 * 
 * @format
 */

import React from 'react';
import { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import AppInput from './AppInput';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import reducer from './Reducer'
import AppOutput from './AppOutput'

import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const myStore = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga)


interface Props { }
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={myStore}>
        <View style={styles.container}>
          <AppInput />
          <AppOutput />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});