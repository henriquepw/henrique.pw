import React, { Component, Fragment } from "react";

import Navigator from "../components/Navigator";
import Routes from "../routes";
import GlobalStyle from "../theme/globalStyle";

class App extends Component {
    render() {
        return (
            <Fragment>
                <GlobalStyle />
                <Navigator />
                <Routes />
            </Fragment>
        );
    }
}

export default App;
