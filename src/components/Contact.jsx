import React, { PureComponent } from 'react';
import 'fastmodel-utility-classes';
import { EMAIL_ADDRESS, PHONE_NUMBER } from "../constants";
import RaisedButton from 'material-ui/RaisedButton';

const LABEL_STYLE = {
  textTransform: 'uppercase',
  fontSize: 12,
  fontWeight: 'bold',
  color: '#6e6e6e',
  marginBottom: 12
};

const INPUT_STYLE = {
  marginBottom: 14,
  padding: 10,
  borderColor: '#bebebe',
  borderRadius: 3,
  borderWidth: 1,
  borderStyle: 'solid',
  fontSize: 14,
  maxWidth: 500
};

const LI_STYLE = {
  border: '1px solid lightgray',
  padding: 18,
  margin: 6,
  width: 300,
  marginLeft: 'auto',
  marginRight: 'auto'
};

const H3_STYLE = {
  margin: 0,
  textAlign: 'center',
  textTransform: 'uppercase',
  fontSize: 18,
  fontWeight: 100,
};

const P_STYLE = {
  fontSize: 14,
  textAlign: 'center',
  lineHeight: 2,
};

export default class Home extends PureComponent {
  render() {
    return (
      <main className="display-flex sm-down-flex-direction-column md-up-flex-direction-row-medium-up max-width">
        <section>
          <div className="">
            <h2>Fill out the form below</h2>
            <p>
              Use the form below to reach out to us. Even if it’s a simple question or a detailed inquiry about one
              of our services, we love to hear from you. Please allow 24 hours for a response. Otherwise, feel
              free to call us.
            </p>
          </div>
          <div>
            <form action={`https://formspree.io/${EMAIL_ADDRESS}`} method="POST">
              <div className="display-flex flex-direction-column">
                <label style={LABEL_STYLE} htmlFor="name">Name</label>
                <input style={INPUT_STYLE} placeholder="Your Name" type="text" name="name"/>
              </div>
              <div className="display-flex flex-direction-column">
                <label style={LABEL_STYLE} htmlFor="email">Email</label>
                <input style={INPUT_STYLE} placeholder="your@email.com" type="email" name="email"/>
              </div>
              <div className="display-flex flex-direction-column">
                <label style={LABEL_STYLE} htmlFor="description">How can we help you?</label>
                <textarea
                  style={INPUT_STYLE}
                  placeholder="e.g. I need a deep cleaning for my house with 3 bedrooms and 2 baths"
                  type="text"
                  name="description"
                />
              </div>
              <RaisedButton
                type="submit"
                label="Submit"
                containerElement="button"
                primary
              />
            </form>
          </div>
        </section>
        <ul style={{ listStyle: 'none', padding: 0 }} className="mg-left-lg-medium-up">
          <li style={LI_STYLE}>
            <h3 style={H3_STYLE}>Contact Info</h3>
            <p style={P_STYLE}>
              Feel free to fill out the contact form above, call, or e-mail us. You can even live chat with one of
              our associates Monday-Friday between 9am-5pm CST.
            </p>
          </li>
          <li style={LI_STYLE}>
            <h3 style={H3_STYLE}>
              Call or Text
            </h3>
            <p style={P_STYLE}>
              {PHONE_NUMBER}
            </p>
          </li>
          <li style={LI_STYLE}>
            <h3 style={H3_STYLE}>
              Email Us
            </h3>
            <p style={{ textAlign: 'center', fontSize: 18 }}>
              <a href={`mailto:${EMAIL_ADDRESS}`}>
                {EMAIL_ADDRESS}
              </a>
            </p>
          </li>
        </ul>
      </main>
    );
  }
}