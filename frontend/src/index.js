import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavigationBar from './js/components/NavigationBar.js';
import Routes from './js/components/Routes.js';

const App = () => (
  <Router>
    <div>
      {<NavigationBar />}
      {<Routes />}
    </div>
  </Router>
);

render(<App />, document.getElementById('formulario'));
