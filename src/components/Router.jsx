import React from 'react'
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'

const Navigation = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/topics" component={Topics}/>
    </div>
  </BrowserRouter>
);

export default Navigation;
