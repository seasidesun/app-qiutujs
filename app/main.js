import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './components/App'
import Home from './components/Home'
import MovementsPage from './components/MovementsPage'

import BaseStyle from './base.less'

(function () {
    document.getElementsByTagName('html')[0].style.fontSize = (75/375) * window.screen.width + 'px';
})();

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/move" component={MovementsPage}/>
    </Route>
  </Router>
), document.getElementById('app'));
