import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Menu from "./Menu/Menu";
import Home from "./Home/Home";
import Accueil from "./Accueil/Accueil";
import Descriptif from "./Descriptif/Descriptif";
import Incontournables from "./Incontournables/Incontournables";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
                <Switch>
                     <Route path="/Menu"  component={Menu} />
<<<<<<< HEAD
                     <Route path="/Descriptif"  component={Descriptif} />
=======
                    <Route path="/Descriptif"  component={Descriptif} />
                    <Route path="/Incontournables"  component={Incontournables} />
>>>>>>> 44f3c22b4ecb6ce4c343b2887fa929acbf737ac3
                    <Route path="/Home" component={Home} />
                    <Route path="/" component={Accueil} />
                </Switch>
        )
    }
}
