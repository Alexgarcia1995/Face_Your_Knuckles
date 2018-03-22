import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavigationBar from './js/components/NavigationBar.js';
import Routes from './js/components/Routes.js';
// import { Router, Route } from 'react-router'

// import createBrowserHistory from 'history/createBrowserHistory'
// const customHistory = createBrowserHistory()

const App = () => (
  <Router>
    <div>
      {<NavigationBar />}
      {<Routes />}
    </div>
  </Router>
);

render(<App />, document.getElementById('formulario'));


// render(<NavigationBar />,document.getElementById("navbar"));
// render( 
// <Router history={customHistory}>
//     <div>
//     <Route path="/" component={FormContainer}/>
//     <Route path="/noticias" component={Noticias}/>
//     </div>
// </Router>,document.getElementById("formulario"));