import React, { Component } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import {withRouter, Link} from 'react-router-dom';

import "./Menu.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class Menu extends Component {
    render() {
        return (
            <div className="Menu">

                <Container>
                    <Row>
                        <Link to="/Proximite" className="btn_menu"><Button className="btn_menu" variant="info" size="lg" block>
                            Monuments à proximité
                            <i className="fas fa-route fa-2x"></i>
                        </Button></Link>
                    </Row>

                    <Row>
                        <Link to="/Incontournables" className="btn_menu"><Button className="btn_menu" variant="info" size="lg" block>
                            Les incontournables
                            <i className="fas fa-crown fa-2x"></i>
                        </Button></Link>
                    </Row>

                    <Row>
                        <Link to="/Parcours" className="btn_menu"><Button className="btn_menu" variant="info" size="lg" block disabled>
                            Parcours de visite (Prochainement)
                            <i className="fas fa-map-marked-alt fa-2x"></i>
                        </Button></Link>
                    </Row>

                    <Row className="ret_row">
                        <Link to="/Home"><Button className="btn_ret" variant="danger" size="lg" >
                            Retour à la carte
                        </Button>
                        </Link>
                    </Row>

                </Container>
            </div>
        );
    }
}

export default Menu;
