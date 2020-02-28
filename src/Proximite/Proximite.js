import React from 'react';
import './Proximite.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom';
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.min.css';
import {idee_monument} from "../context.js"
import Row from 'react-bootstrap/Row'

import axios from 'axios';
import Geolocation from "@react-native-community/geolocation";
import {number} from "prop-types";

var salut;
export default class Proximite extends React.Component {
    constructor (props) {
        super();
        this.state = {
            lat: 0,
            long: 0,
            persons: [],
        }
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
                    </Col>
                </Row>
            </Container>
        )
    }

    componentDidMount() {
        var error;
        var options;
        Geolocation.getCurrentPosition(position=>{
            this.state.lat = position.coords.latitude;
            this.state.long = position.coords.longitude;
            console.log([this.state.lat,this.state.long])
            position=[this.state.lat,this.state.long];

            console.log(this.state.lat);
            axios.get(`https://devweb.iutmetz.univ-lorraine.fr/~ramier2u/monumix/api/monuments.php?lat=` + this.state.lat + `&long=` + this.state.long)
                .then(res => {
                    const persons = res.data;
                    this.setState({ persons });


                })


            this.setState({marker:[this.state.lat,this.state.long]});}, error, options);


    }
    generate_url = (id) => {
        return "https://devweb.iutmetz.univ-lorraine.fr/~ramier2u/monumix/images/monument" + id + "/image1.jpg"
    }



    render() {
      return (
          <div>

                          {this.state.persons.map(x => <Container>
                              <Row className = "block_menu">
                                  <Col xs={4} className="see_moree" >
                                      <Image width="100%" src={this.generate_url(x.id_monu)} rounded  />
                                  </Col>
                                  <Col className="description" xs={7}>
                                      {x.introduction}
                                  </Col>

                                  <Col xs={1} className="see_more">
                                      <Link to="/Descriptif"><Button class="btn btn-default btn-xs btn-block" onClick={() => {idee_monument.id=x.id_monu;}}>+</Button></Link>
                                  </Col>
                              </Row>
                          </Container>)}

          </div>
      )
    }


}
