import React from 'react';
import './Incontournables.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom';
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {idee_monument} from "../context.js"

var salut;
export default class Incontournables extends React.Component {
    state = {
        persons: []
    }

    func_test = (intro, id) => {
        var ite = id.length;
        var rendu = "";
        var chemin = "https://devweb.iutmetz.univ-lorraine.fr/~ramier2u/monumix/images/monument" + id[0] + "/image1.jpg";
        for(var i = 0; i < ite ; i++){
            rendu = rendu;
        }

        return(
            <Container>
                <Row className = "block_menu">
                    <Col xs={4} className="see_more" >
                        <Image width="100%" src={chemin} rounded  />
                    </Col>
                    <Col className="description" xs={7}>
                        {intro[0]}
                    </Col>

                    <Col xs={1} className="see_more">
                        <a href=""><i className="fas fa-arrow-circle-right fa-lg"></i></a>
                    </Col>
                </Row>
            </Container>
        )
    }

    componentDidMount() {
        axios.get(`https://devweb.iutmetz.univ-lorraine.fr/~ramier2u/monumix/api/monuments.php?OrderByImportance=1`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
    }
    generate_url = (id) => {
        return "https://devweb.iutmetz.univ-lorraine.fr/~ramier2u/monumix/images/monument" + id + "/image1.jpg"
    }



    render() {
        return (
            <div>

                {this.state.persons.map(x => <Link to="/Descriptif"><Button variant="light" class="btn btn-light" onClick={() => {idee_monument.id=x.id_monu;}}><Container>
                    <Row className = "block_menu">
                        <Col xs={4} className="see_more" >
                            <Image width="100%" src={this.generate_url(x.id_monu)} rounded  />
                        </Col>
                        <Col className="description" xs={7}>
                            {x.introduction}
                        </Col>


                    </Row>
                </Container></Button></Link>)}

            </div>
        )
    }


}
