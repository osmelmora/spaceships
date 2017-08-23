import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import CanvasContainer from './containers/CanvasContainer';
import createStore from './store';

const store = createStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CanvasContainer />
      </Provider>
    );
  }
}

export default App;
