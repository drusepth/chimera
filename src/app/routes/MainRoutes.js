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
  Voices,
  Backgrounds,
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
      <Route path="/voices" component={Voices} />
      <Route path="/backgrounds" component={Backgrounds} />
      <Route component={PageNotFound} />
    </Switch>
  );
};

export default Routes;
