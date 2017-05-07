import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import App from './components/App'
import Home from './components/Home'
import MovementsList from './components/MovementsList'

import Style from './style.less'

(function () {
    document.getElementsByTagName('html')[0].style.fontSize = (75/375) * window.screen.width + 'px';
})();

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/move" component={MovementsList}/>
    </Route>
  </Router>
), document.getElementById('app'));
