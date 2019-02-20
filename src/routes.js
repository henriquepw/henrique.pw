import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Colors from './styles/colors';

import About from './pages/About/About';

const H1 = styled.h1`
    color: ${Colors.primaryColor};
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export default () => (
    <Switch>
        <Route exact path='/' component={About} />
        <Route path='/' component={() => <H1>Building...</H1>} />
    </Switch>
);
