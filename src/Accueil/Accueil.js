import React, { Component } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import {withRouter, Link} from 'react-router-dom';
import {idee_monument} from "../context";
import "./Accueil.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class Accueil extends Component {
    render() {
        return (
            <div className="Menu">
                <Container>
                    <Row>
                        <img src = "Logo.png" alt = "Monu'Mix" />
                        <Button className="btn_menu" variant="info" size="lg" block onClick = {() => {console.log(idee_monument.id);}}>
                            Accéder à la carte

                        </Button>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Accueil;
