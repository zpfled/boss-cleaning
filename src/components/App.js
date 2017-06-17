import React, { Component } from 'react';
import 'fastmodel-utility-classes';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import background from '../res/images/boss-bg-image.jpg';
import logo from '../res/images/logo.jpg';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { StickyContainer, Sticky } from 'react-sticky';

// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/colors
const bossTheme = getMuiTheme({
  palette: {
    primary1Color: '#4267b2',
    textColor: '#4267b2',
  },
  appBar: {
    height: 50,
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={bossTheme}>
        <StickyContainer className="mg-top-md" style={{ background: '#fefefe' }}>
          <Sticky>
            {({ style, isSticky }) => (
              <header
                style={{
                  ...style,
                  background: '#fefefe',
                  width: '100%',
                  borderBottom: isSticky && '1px solid #ededed',
                  zIndex: 2,
                }}>
                <div className="max-width display-flex justify-content-space-between align-items-center pd-sm">
                  <div className="display-block-small-down display-none-medium-up">
                    <Avatar src={logo} size={50}/>
                  </div>
                  <div className="display-none-small-down display-block-medium-up">
                    <Avatar src={logo} size={100}/>
                  </div>
                  <span>
                  <RaisedButton
                    onTouchTap={() => console.log('link to section below with quote wizard')}
                    label="Get a quote"
                    containerElement="button"
                    primary
                  />
                </span>
                </div>
              </header>
            )}
          </Sticky>

          {/*MAIN BODY*/}
          <main>
            <section
              className="display-flex mg-bottom-lg-small-down"
              style={{
                background: `url(${background}) no-repeat right top`,
                backgroundSize: 'cover',
                minHeight: 150
              }}>

              {/*Small Screens*/}
              <div className="display-block-small-down display-none-medium-up" style={{ marginBottom: 30 }}>
                <div style={{ position: 'relative', top: 130, width: '100vw', textAlign: 'center' }}>
                  <RaisedButton
                    style={{ margin: 'auto', minWidth: '80vw', width: '80vw' }}
                    onTouchTap={() => console.log('link to section below with quote wizard')}
                    label="Schedule a cleaning today"
                    containerElement="button"
                    primary
                    fullWidth
                  />
                </div>
              </div>

              {/*Medium+ Screens*/}
              <div className="display-none-small-down flex-grow-1">
                <div
                  className="display-flex align-items-center flex-direction-column justify-content-center height-500">
                  <h1 style={{ color: '#4267b2' }}>Schedule a cleaning today.</h1>
                  <RaisedButton
                    style={{ height: 100, width: 300 }}
                    labelStyle={{ fontSize: 24 }}
                    onTouchTap={() => console.log('link to section below with quote wizard')}
                    label="Get a quote"
                    containerElement="button"
                    primary
                  />
                </div>
              </div>
              <div className="flex-grow-1"></div>
            </section>
            <section>
              <h2>Services</h2>
            </section>
            <section>
              <h2>Request quote wizard</h2>
            </section>
            <section>
              <h2>reviews</h2>
            </section>
            <section>
              <h2>footer/social</h2>
            </section>
          </main>
        </StickyContainer>
      </MuiThemeProvider>
    );
  }
}

export default App;
