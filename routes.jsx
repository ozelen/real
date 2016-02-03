import React from 'react';
import {Route} from 'react-router';
import App from './components/app';
import About from './components/about';
import PointsList from './components/points-list';

export default
<Route path="/" component={App}>
  <Route path="/about" component={About} />
  <Route path="/points" component={PointsList} />
</Route>
