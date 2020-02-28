import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Menu from "./Menu/Menu";
import Home from "./Home/Home";
import Accueil from "./Accueil/Accueil";
import Descriptif from "./Descriptif/Descriptif";
import Incontournables from "./Incontournables/Incontournables";
import Proximite from "./Proximite/Proximite";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
                <Switch>
                     <Route path="/Menu"  component={Menu} />
                    <Route path="/Descriptif"  component={Descriptif} />
                    <Route path="/Incontournables"  component={Incontournables} />
                    <Route path="/Proximite"  component={Proximite} />
                    <Route path="/Home" component={Home} />
                    <Route path="/" component={Accueil} />
                </Switch>
        )
    }
}
