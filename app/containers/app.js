import React, { Component } from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleWare from 'redux-thunk'; 

import * as reducers from '../reducers';
import YoHoApp from './yohoApp';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleWare)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <YoHoApp />
      </Provider>
    );
  }
}
