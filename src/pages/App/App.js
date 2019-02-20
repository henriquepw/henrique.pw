import React, { Component } from 'react';
import Routes from '../../routes';

import Navigator from '../../components/Navigator/Navigator';
import GlobalStyle from '../../styles/globalStyle';
import { Container } from './App.style';

class App extends Component {
    render() {
        return (
            <Container>
                <GlobalStyle />
                <Navigator />
                <Routes />
            </Container>
        );
    }
}

export default App;
