import React, { PureComponent } from 'react';
import 'fastmodel-utility-classes';
import background from '../res/images/boss-bg-image.jpg';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import { LoadingWrapper } from 'fastmodel-layout-components';
import { PRIMARY_COLOR } from "./App";

const HEADER_COLOR = { color: PRIMARY_COLOR };

export default class Home extends PureComponent {
  render() {
    return (
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
                          <h4>{cost ? `$${cost}` : 'Price Varies'}{basis == 'hourly' && ' an hour'}</h4>
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

        <section style={{ textAlign: 'center', backgroundColor: PRIMARY_COLOR, color: 'white' }} className="pd-lg">
          <h2 style={{ textAlign: 'center' }}>
            Our Clients Love Us!
          </h2>
          <ul className="display-flex flex-wrap-wrap pd-left-none justify-content-center">
            <li style={{ listStyle: 'none' }} className="mg-sm">
              <Paper className="pd-md max-width-400 min-width-350">
                <h3 style={HEADER_COLOR} className="mg-top-none mg-bottom-none">
                  Nancy R.
                </h3>
                <p>
                  Absolute best!
                  This husband and wife team will make your home gleam!!!
                  They are timely, efficient, honest and I trust them to go above and beyond !
                </p>
              </Paper>
            </li>

            <li style={{ listStyle: 'none' }} className="mg-sm">
              <Paper className="pd-md max-width-400 min-width-350">
                <h3 style={HEADER_COLOR} className="mg-top-none mg-bottom-none">
                  Jessica W.
                </h3>
                <p>
                  I just had a cleaning of my 2 bathrooms and kitchen, and also the carpet in my living room
                  this past week. Not only are we very satisfied with the work that was done, they went above
                  and beyond to do the little extras. Their prices are fair and competitive. They are professional
                  and hard working. I would recommend them to anyone looking to get any sort or house cleaning
                  done!! Call them, don't hesitate!
                </p>
              </Paper>
            </li>

            <li style={{ listStyle: 'none' }} className="mg-sm">
              <Paper className="pd-md max-width-400 min-width-350">
                <h3 style={HEADER_COLOR} className="mg-top-none mg-bottom-none">
                  Lauren L.
                </h3>
                <p>
                  #1 cleaning team in the Bay area! Never left me with out a full 100% satisfaction with my home!
                </p>
              </Paper>
            </li>
          </ul>
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
    );
  }
}