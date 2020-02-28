
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Descriptif.css";

import axios from 'axios';
import {idee_monument} from '../context.js'

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
        axios.get(`https://devweb.iutmetz.univ-lorraine.fr/~ramier2u/monumix/api/monuments.php?id=`+idee_monument.id)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
    }

getUrl = (id) => {
  return ("https://devweb.iutmetz.univ-lorraine.fr/~ramier2u/monumix/images/monument" + idee_monument.id + "/image" + id + ".jpg");
}


generateCarousel = (bn) => {

  let res1 = <Carousel.Item><img className="d-block w-100"
                                src={this.getUrl(1)}
                                alt="Image1"/></Carousel.Item>;

  let res2 = null;
  let res3 = null;
  let res4 = null;
  let res5 = null;
  let res6 = null;

  if (bn >= 2) {
     res2 = <Carousel.Item><img className="d-block w-100"
                                src={this.getUrl(2)}
                                alt="Image2"/></Carousel.Item>;
  }
  if (bn >= 3)
     res3 = <Carousel.Item><img className="d-block w-100"
                                src={this.getUrl(3)}
                                alt="Image3"/></Carousel.Item>;
  if (bn >= 4)
     res4 = <Carousel.Item><img className="d-block w-100"
                                src={this.getUrl(4)}
                                alt="Image4"/></Carousel.Item>;
  if (bn >= 5)
     res5 = <Carousel.Item><img className="d-block w-100"
                                src={this.getUrl(5)}
                                alt="Image5"/></Carousel.Item>;
  if (bn >= 6)
     res6 = <Carousel.Item><img className="d-block w-100"
                                src={this.getUrl(6)}
                                alt="Image6"/></Carousel.Item>;





  return (<Carousel className="slider" slide="false">
     {res1}
     {res2}
     {res3}
     {res4}
     {res5}
     {res6}
  </Carousel>);
}


    render() {

        return (
          <div>

                {this.state.persons.map(x =>

                <Container>
                <Link to="/Home">  <Button className="btn_desci" variant="danger" size="lg" >
                      Retour à la carte
                  </Button></Link>
                    <Row>
                        {this.generateCarousel(x.nbimages)}
                    </Row>

                    <Row>
                        <h1>{x.nom_monu}</h1>
                    </Row>
                    <div className="scrollabeleu">
                    <Row>
                        <p>
                            {x.introduction}
                        </p>
                    </Row>
                    <Row>
                        <p>
                            {x.description}
                        </p>
                    </Row>

                    </div>
                </Container>
            )}
            </div>)  }


}
