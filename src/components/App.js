import React, { Component } from 'react'
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'
import Contact from './Contact';
import Home from './Home';
import NavHeader from './NavHeader';
import { StickyContainer } from 'react-sticky';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TableTop from 'tabletop';

const SPREADSHEET_URL = 'https://docs.google.com/spreadsheets/d/1QpujZJ378YYALyVtSPPSvZG4P1ZP8JljC7Fcmm0sleo/pub?output=csv';

// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/colors
export const PRIMARY_COLOR = '#2E5CAB';
const bossTheme = getMuiTheme({
  palette: {
    primary1Color: PRIMARY_COLOR,
    textColor: '#444',
  },
  appBar: {
    height: 50,
  },
});


export default class App extends Component {
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
      <BrowserRouter>
        <MuiThemeProvider muiTheme={bossTheme}>
          <StickyContainer>
            <NavHeader/>

            <Route exact path="/" component={Home}/>
            <Route path="/contact" component={Contact}/>
          </StickyContainer>
        </MuiThemeProvider>
      </BrowserRouter>
    )
  }
}

