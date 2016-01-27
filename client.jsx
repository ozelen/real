'use strict';

var React from 'react'
var {render} from 'react-dom'
var {Router, Route} from 'react-router'
var {history} from 'react-router/lib/BrowserHistory'
var {default as AsyncProps} from 'react-router/lib/experimental/AsyncProps';

var getTitle from './utils/getTitle'
var routes from './routes'

function onUpdate() {
  console.log('onUpdate', this.state)
}

AsyncProps.rehydrate(window.__PROPS__)

render(
  <Router history={history} createElement={AsyncProps.createElement} onUpdate={onUpdate}>
    {routes}
  </Router>,
  document.getElementById('app')
)