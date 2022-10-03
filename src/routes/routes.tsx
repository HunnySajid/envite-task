import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Landing, Event, CreateEventForm } from '../pages';

export const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/'>
        <Landing />
      </Route>
      <Route exact path='/event'>
        <Event />
      </Route>
      <Route exact path='/create'>
        <CreateEventForm />
      </Route>
    </Switch>
  </BrowserRouter>
);
