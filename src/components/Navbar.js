import React from 'react';
import './Navbar.css';
import {Navbar, Nav, Form, Button} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import {withRouter} from 'react-router-dom';

import Col from 'react-bootstrap/Col'
import FormControl from "react-bootstrap/FormControl";

const Navigation = (props) => {
    console.log(props);
    return (

        <Navbar bg="dark" variant="dark">
            <Col sm={11}>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" expand="md" size="sm"/>
            </Col>
            <Col sm={0.5}>
                <Button className="btn" variant="outline-light" ><i className="fa fa-search"></i></Button>
            </Col>

            <Col sm={0.5}>
                <Button className="btn" variant="light" href="/Menu"><i className="fa fa-bars"></i></Button>
            </Col>
        </Navbar>
    )
}

export default withRouter(Navigation);