// @flow weak

/* eslint no-process-env:0 */

import React                    from 'react';
import {
  Route,
  Switch
}                               from 'react-router';
import { App }                  from '../containers';
import {
  Home,
  About,
  Bodies,
  Characters,
  Faces,
  PageNotFound
}                               from '../views';

const Routes = () => {
  return (
    <Switch path="/" component={App} >
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/characters" component={Characters} />
      <Route path="/faces" component={Faces} />
      <Route path="/bodies" component={Bodies} />
      <Route component={PageNotFound} />
    </Switch>
  );
};

export default Routes;
