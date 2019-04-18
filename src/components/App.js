import React, { Component } from 'react';
import '../styles/base.css'
import { Provider } from 'react-redux'
import store from '../store'
import Input from './Input'
import Items from './Items'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div id="main-container">
            <Input/>
            <Items/>
        </div>
      </Provider>
    )
  }
}

export default App;
