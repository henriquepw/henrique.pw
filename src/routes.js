import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Projects from './pages/Projects';

export default () => (
	<Switch>
		<Route exact path='/' component={Home} />
		<Route path='/about' component={AboutMe} />
		<Route path='/education' component={Education} />
		<Route path='/experience' component={Experience} />
		<Route path='/projects' component={Projects} />
	</Switch>
);
