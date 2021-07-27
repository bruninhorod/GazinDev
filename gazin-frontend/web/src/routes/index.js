import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NewDev from '../views/NewDev';
import Home from '../views/Home';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dev" exact component={NewDev} />
        <Route path="/dev/:id" exact component={NewDev} />
      </Switch>
    </BrowserRouter>
  );
}
