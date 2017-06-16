import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import backgroundImage from './res/images/boss-bg-image.jpg';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div
          className="App"
          style={{ backgroundImage: `url(${backgroundImage})`, height: '100vh' }}>
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload. We'll model this site after Cleanify,
            it has a simple interface, and makes it easy for users to request a cleaning. Later, we'll try to
            work on SEO.
          </p>
          <a href="https://www.cleanify.com/">Cleanify</a>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
