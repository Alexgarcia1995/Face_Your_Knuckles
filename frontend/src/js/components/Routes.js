import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Noticias from './Noticias.js';
import Videos from './Videos.js';

class Routes extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
      <Route exact path="/" component={Noticias} />
      <Route path="/noticias" component={Noticias} />
      <Route path="/videos" component={Videos} />
      </div>
    )
  }
}

export default Routes