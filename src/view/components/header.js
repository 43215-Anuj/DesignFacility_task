import React, { Component } from "react";
import {Col, Row, Container} from "reactstrap";
var $ = require( "jquery" );
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Main extends Component {
  render() {
    return (
      <div id="main">
        <Container>
          <Row>
            <Col lg='8' md='8'>
              <p className="main-title">Design Facility</p> 
                <div className="main-icon"><i  className="fa fa-circle" aria-hidden="true"></i></div>
              <p className="ex-title">{this.props.data ? this.props.data.examTitle : "Loading"}</p>
            </Col>
            <Col lg='4' md='4'>
              <div className="main-time"><p>Time Left : {this.props.data ? this.props.data.examDurationInMinutes : "Loading"}</p></div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}