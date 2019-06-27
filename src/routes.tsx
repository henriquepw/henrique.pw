import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from 'pages/home';
import AboutMe from 'pages/aboutMe';
import Education from 'pages/education';
import Projects from 'pages/projects';

export default () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/about' component={AboutMe} />
    <Route path='/education' component={Education} />
    <Route path='/projects' component={Projects} />
  </Switch>
);
