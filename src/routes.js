import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Colors from './styles/colors';

import Home from './pages/Home/Home';
import AboutMe from './pages/AboutMe/AboutMe';
import Education from './pages/Education/Education';
import Experience from './pages/Experience/Experience';
import Projects from './pages/Projects/Projects';

const H1 = styled.h1`
    color: ${Colors.primaryColor};
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export default () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={AboutMe} />
        <Route path='/education' component={Education} />
        <Route path='/experience' component={Experience} />
        <Route path='/projects' component={Projects} />
        <Route path='/' component={() => <H1>Building...</H1>} />
    </Switch>
);
