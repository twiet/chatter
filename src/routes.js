import React from 'react';
import { Route, IndexRoute } from 'react-router';
import layout from './components/layout';
import homePage from './components/homePage';
import aboutPage from './components/aboutPage';

export default (
  <Route path="/" component={layout}>
    <IndexRoute component={homePage} />
    <Route path="about" component={aboutPage} />
  </Route>
);
