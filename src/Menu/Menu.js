import React, { Component } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "./Menu.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class Menu extends Component {
    render() {
        return (
            <div className="Menu">

                <Container>
                    <Row>
                        <Button className="btn_menu" variant="info" size="lg" block>
                            Monuments à proximité
                            <i className="fas fa-route fa-2x"></i>
                        </Button>
                    </Row>

                    <Row>
                        <Button className="btn_menu" variant="info" size="lg" block>
                            Les incontournables
                            <i className="fas fa-crown fa-2x"></i>
                        </Button>
                    </Row>

                    <Row>
                        <Button className="btn_menu" variant="info" size="lg" block>
                            Parcours de visite
                            <i className="fas fa-map-marked-alt fa-2x"></i>
                        </Button>
                    </Row>

                    <Row className="ret_row">
                        <Button className="btn_ret" variant="danger" size="lg" href="/">
                            Retour à la carte
                        </Button>
                    </Row>

                </Container>
            </div>
        );
    }
}

export default Menu;