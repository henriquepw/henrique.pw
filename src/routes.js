import React from "react";
import { Route, Switch } from "react-router-dom";

import About from "./pages/About/About";

export default () => (
    <Switch>
        <Route exact path="/" component={About} />
        <Route path="/" component={() => <h1>Opa</h1>} />
    </Switch>
);
