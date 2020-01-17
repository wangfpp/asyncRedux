import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Store from './store/index.js';
import './App.css';
import Card from './component/card/card'
const store = Store();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <Card></Card>
          </header>
        </div>
      </Provider>
    )
  }
}

export default App;
