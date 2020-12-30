import React, { Component } from "react";
import {Col, Row, Container} from "reactstrap";

export default class Options extends Component { 
    render(){
        return(
            <div id="options">
                <Container>
                        <Row>
                            <div className="optns button-group-pills text-center" data-toggle="buttons">
                                <Col>
                                    <div className="optn-num">A</div>
                                    <label className="optn btn btn-default">
                                        <input type="radio" value="one" name="option" />
                                        <div>{this.props.data ? this.props.data.sections[0].Section1[0].option1 : "Loading"}</div>
                                    </label>
                                </Col>
                                <Col>
                                    <div className="optn-num">B</div>
                                    <label className="optn btn btn-default">
                                        <input type="radio" value="two" name="option" />
                                        <div>{this.props.data ? this.props.data.sections[0].Section1[0].option2 : "Loading"}</div>
                                    </label>
                                </Col>
                                <Col>
                                    <div className="optn-num">C</div>
                                    <label className="optn btn btn-default">
                                        <input type="radio" value="four" name="option" />
                                        <div>{this.props.data ? this.props.data.sections[0].Section1[0].option3 : "Loading"}</div>
                                    </label>
                                </Col>
                                <Col>
                                    <div className="optn-num">D</div>
                                    <label className="optn btn btn-default">
                                        <input type="radio" value="four" name="option" />
                                        <div>{this.props.data ? this.props.data.sections[0].Section1[0].option4 : "Loading"}</div>
                                    </label>
                                </Col>
                                
                            </div>
                        </Row>
                </Container>
            </div>
        );
    }
}