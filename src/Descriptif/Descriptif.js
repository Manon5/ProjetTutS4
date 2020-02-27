import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "./Descriptif.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'

class Descriptif extends Component {
    render() {

        let res1 = null;
        let res2 = null;
        let res3 = null;
        let res4 = null;
        let res5 = null;
        let res6 = null;

        let nom_monu = "Cathédrale de Metz";

        let introduction = "Horaires :\n" +
            "9h30-12h30 et 13h30-17h30 du Lundi au Samedi\n" +
            "14h-18h le Dimanche\n" +
            "\n" +
            "La Cathédrale Saint-Étienne est située au coeur de Metz. Sa construction, commencée en 1240, a duré trois siècles. Elle est la troisième plus haute cathédrale de France.\n";

        let description = "Quelques chiffres\n" +
            "La cathédrale de Metz figure parmi les plus hautes cathédrales de France, grâce à ses voûtes mesurant 43.10 mètres. Le bâtiment a une surface de 3500 m², et la cathédrale possède la plus grande surface de vitraux de France, avec 6500 m² de vitraux au total, ce qui lui a valu le surnom de “la lanterne de Dieu”.\n" +
            "\n" +
            "Architecture\n" +
            "La cathédrale présente une particularité majeure dans sa construction : en effet, elle a été construite par la réunion de deux églises plus petites et anciennes. La cathédrale est assez proche du style gothique, avec une inspiration rhénane. \n" +
            "\n" +
            "Histoire\n" +
            "La construction de la Cathédrale a débuté sous l'Évêque Conrad de Schaffenberg en 1240, et s’est terminée en 1522. Le 7 Mai 1877, un incendie provoqué par un feu d’artifice ravage la toiture, qui sera reconstruite par la suite. Les travaux durèrent plus de 30 ans, et au cours des siècles suivants, la cathédrale subit plusieurs modifications mineures ainsi que des restaurations.\n" +
            "\n" +
            "Visite \n" +
            "La cathédrale est le monument le plus visité de Metz, avec 650 000 visiteurs par an. L’entrée est libre, mais la visite guidée est disponible à partir de 2.50€ par personne. Pour en savoir plus, vous pouvez visiter le site de la cathédrale à l’adresse suivante : cathedrale-metz.fr\n";

        let i = 6;

        res1 = <Carousel.Item><img className="d-block w-100"
                                   src="https://devweb.iutmetz.univ-lorraine.fr/~ramier2u/monumix/images/monument1/image1.jpg"
                                   alt="Image1"/></Carousel.Item>;
        if (i >= 2)
            res2 = <Carousel.Item><img className="d-block w-100"
                                       src="https://devweb.iutmetz.univ-lorraine.fr/~ramier2u/monumix/images/monument1/image2.jpg"
                                       alt="Image2"/></Carousel.Item>;
        if (i >= 3)
            res3 = <Carousel.Item><img className="d-block w-100"
                                       src="https://devweb.iutmetz.univ-lorraine.fr/~ramier2u/monumix/images/monument1/image3.jpg"
                                       alt="Image3"/></Carousel.Item>;
        if (i >= 4)
            res4 = <Carousel.Item><img className="d-block w-100"
                                       src="https://devweb.iutmetz.univ-lorraine.fr/~ramier2u/monumix/images/monument1/image4.jpg"
                                       alt="Image4"/></Carousel.Item>;
        if (i >= 5)
            res5 = <Carousel.Item><img className="d-block w-100"
                                       src="https://devweb.iutmetz.univ-lorraine.fr/~ramier2u/monumix/images/monument1/image5.jpg"
                                       alt="Image5"/></Carousel.Item>;
        if (i >= 6)
            res6 = <Carousel.Item><img className="d-block w-100"
                                       src="https://devweb.iutmetz.univ-lorraine.fr/~ramier2u/monumix/images/monument1/image6.jpg"
                                       alt="Image6"/></Carousel.Item>;
        console.log(i);

        return (
            <div className="Menu">
                <Container>
                    <Row>
                        <Carousel className="slider" slide="false">
                            {res1}
                            {res2}
                            {res3}
                            {res4}
                            {res5}
                            {res6}
                        </Carousel>
                    </Row>
                    <Row>
                        <h1>{nom_monu}</h1>
                    </Row>
                    <div className="scrollabeleu">
                    <Row>
                        <p>
                            {introduction}
                        </p>
                    </Row>
                    <Row>
                        <p>
                            {description}
                        </p>
                    </Row>
                    <Row className="ret_row">
                        <Button className="btn_ret" variant="danger" size="lg" href="/">
                            Retour à la carte
                        </Button>
                    </Row>
                        </div>
                </Container>
            </div>
        );
    }
}

export default Descriptif;