import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavigationBar from './js/components/NavigationBar.js';
import Routes from './js/components/Routes.js';
import css from '../stylesheets/styles.css';
const App = () => (
  <Router>
    <div>
      {<NavigationBar noticias={['boxeo','karate','kick-boxing']} videos={['boxeo','karate','kick-boxing']} />}
      {<Routes noticias={['boxeo','karate','kick-boxing']} videos={['boxeo','karate','kick-boxing']} />}
    </div>
  </Router>
);

render(<App />, document.getElementById('formulario'));
