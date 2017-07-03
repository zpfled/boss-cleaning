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
import { LinkButton, LoadingWrapper } from 'fastmodel-layout-components';
import TableTop from 'tabletop';
import Promise from 'bluebird';

const SPREADSHEET_URL = 'https://docs.google.com/spreadsheets/d/1QpujZJ378YYALyVtSPPSvZG4P1ZP8JljC7Fcmm0sleo/pub?output=csv';
// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/colors
const PRIMARY_COLOR = '#1e88e5';
const HEADER_COLOR = { color: PRIMARY_COLOR };
const bossTheme = getMuiTheme({
  palette: {
    primary1Color: PRIMARY_COLOR,
    textColor: '#444',
  },
  appBar: {
    height: 50,
  },
});


class App extends Component {

  state = {
    services: [],
    loadingServices: false,
  };

  componentWillMount() {
    this.setState({ loadingServices: true }, () => {
      TableTop.init({
        key: SPREADSHEET_URL,
        callback: (services) => this.setState({ services, loadingServices: false }),
        simpleSheet: true,
      });
    });
  }

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
                    onTouchTap={() => alert('link to section below with quote wizard')}
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
                    onTouchTap={() => alert('link to section below with quote wizard')}
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
                  <h1 style={HEADER_COLOR}>Schedule a cleaning today.</h1>
                  <RaisedButton
                    style={{ height: 100, width: 300 }}
                    labelStyle={{ fontSize: 24 }}
                    onTouchTap={() => alert(`This will lead to requesting a quote for a Cleaning`)}
                    label="Get a quote"
                    containerElement="button"
                    primary
                  />
                </div>
              </div>
              <div className="flex-grow-1"></div>
            </section>

            <LoadingWrapper className="mg-top-xl" loading={!!this.state.loadingServices}>
              <section className="max-width">
                <h2 style={{ ...HEADER_COLOR, textAlign: 'center' }}>
                  How does it work?
                </h2>
                <p className="xl-font" style={{ textAlign: 'center', lineHeight: 1.5 }}>
                  Here at Boss Cleaning, our mission is to free up your time by handling the jobs that keep you from
                  doing what you really want to be doing. Our reliable, meticulous crews will keep your home or office
                  looking like new while you kick back and relax. We offer a variety of services to revitalize your
                  home or office and help you take back your free time. Just click on any of the services listed below
                  to get started!
                </p>
                <ul className="display-flex flex-wrap-wrap pd-left-none justify-content-center">
                  {
                    this.state.services.map(({ name, cost, basis, description }) => {
                      return (
                        <li style={{ listStyle: 'none' }} className="mg-sm">
                          <RaisedButton
                            style={{ height: 'auto' }}
                            onTouchTap={() => alert(`This will lead to requesting a quote for a ${name}`)}>
                            <Paper className="pd-md max-width-400 min-width-350">
                              <h3 style={HEADER_COLOR} className="mg-top-none mg-bottom-none">
                                {name}
                              </h3>
                              <h4>{cost ? `$${cost}` : 'Price Varies'}{basis == 'hourly'&& ' an hour'}</h4>
                              <p>
                                {description}
                              </p>
                            </Paper>
                          </RaisedButton>
                        </li>
                      )
                    })
                  }
                </ul>
              </section>
            </LoadingWrapper>

            <section style={{ textAlign: 'center' }} className="pd-lg">
              <Paper>
                <h2 className="pd-lg">reviews go here</h2>
              </Paper>
            </section>

            <section style={{ textAlign: 'center' }} className="pd-lg">
              <RaisedButton
                style={{ height: 100, width: 300 }}
                labelStyle={{ fontSize: 24 }}
                onTouchTap={() => alert(`This will lead to requesting a quote for a Cleaning`)}
                label="Get a quote"
                containerElement="button"
                primary
              />
            </section>

            <footer className="bg-color-secondary color-white display-flex justify-content-space-between pd-lg">
              <ul className="max-width">
                <li>Contact Info</li>
                <li>Social Media Info</li>
              </ul>
            </footer>
          </main>
        </StickyContainer>
      </MuiThemeProvider>
    );
  }
}

export default App;
