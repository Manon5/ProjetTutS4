import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Menu from "./Menu/Menu";
import Home from "./Home/Home";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
                <Switch>
                     <Route path="/Menu"  component={Menu} />
                    <Route path="/" component={Home} />
                </Switch>
        )
    }
}
