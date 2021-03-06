import React  from 'react';
import ReactDOM  from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { createHistory } from 'history';

import App from './components/App';
import NotFound from './components/NotFound';
import Home from './components/Home';


var routes = (
  <Router history={createHistory()}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
)

ReactDOM.render(routes, document.querySelector('#app'));
