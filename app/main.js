import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import App from './components/App'
import Style from './style.less'

(function () {
    document.getElementsByTagName('html')[0].style.fontSize = (75/375) * window.screen.width + 'px';
})();

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
  </Router>
), document.getElementById('app'));
