import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={() => <h1>Opa</h1>} />
        </Switch>
    </BrowserRouter>
);
