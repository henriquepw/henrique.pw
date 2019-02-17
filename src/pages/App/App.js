import React, { Component } from "react";

import Navigator from "../../components/Navigator/Navigator";
import Routes from "../../routes";
import GlobalStyle from "../../styles/globalStyle";
import { Container } from "./App.style";

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
