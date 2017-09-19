import React, { PureComponent } from 'react';
import 'fastmodel-utility-classes';
import { EMAIL_ADDRESS, PHONE_NUMBER } from "../constants";

const LI_STYLE = {
  border: '1px solid lightgray',
};

export default class Home extends PureComponent {
  render() {
    return (
      <main className="display-flex max-width">

        <section className="">
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
                <label htmlFor="name">Name</label>
                <input placeholder="Your Name" type="text" name="name"/>
              </div>
              <div className="display-flex flex-direction-column">
                <label htmlFor="email">Email</label>
                <input placeholder="your@email.com" type="email" name="email"/>
              </div>
              <div className="display-flex flex-direction-column">
                <label htmlFor="description">How can we help you?</label>
                <textarea
                  placeholder="e.g. I need a deep cleaning for my house with 3 bedrooms and 2 baths"
                  type="text"
                  name="description"
                />
              </div>
              <input type="submit" value="Submit"/>
            </form>
          </div>
        </section>
        <section>
          <ul style={{ listStyle: 'none' }}>
            <li style={LI_STYLE}>
              <h3>Contact Info</h3>
              <p>
                Feel free to fill out the contact form above, call, or e-mail us. You can even live chat with one of
                our associates Monday-Friday between 9am-5pm CST.
              </p>
            </li>
            <li style={LI_STYLE}>
              <h3>
                Call or Text
              </h3>
              <p>
                {PHONE_NUMBER}
              </p>
            </li>
            <li style={LI_STYLE}>
              <h3>
                Email Us
              </h3>
              <p>
                {EMAIL_ADDRESS}
              </p>
            </li>
          </ul>
        </section>
      </main>
    );
  }
}