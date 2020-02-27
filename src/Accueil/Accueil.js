import React, { Component } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import {withRouter, Link} from 'react-router-dom';
import "./Accueil.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class Accueil extends Component {
    render() {
        return (
            <div className="Menu">
                <Container>
                    <Row>
                        <img src = "Logo.png" alt = "Monu'Mix" />
                    </Row>
                    <Row>
                        <Link to="/Home" className = "btn_menu"><Button className="btn_menu" variant="info" size="lg" block>
                            Accéder à la carte
                        </Button></Link>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Accueil;
