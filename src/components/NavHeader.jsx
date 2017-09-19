import React, { Component } from 'react';
import 'fastmodel-utility-classes';
import logo from '../res/images/logo-green.jpg';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import { Sticky } from 'react-sticky';
import TableTop from 'tabletop';

const SPREADSHEET_URL = 'https://docs.google.com/spreadsheets/d/1QpujZJ378YYALyVtSPPSvZG4P1ZP8JljC7Fcmm0sleo/pub?output=csv';

export default class Home extends Component {

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
    );
  }
}