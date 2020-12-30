import React, { Component } from "react";
import {Col, Row, Container, Button} from "reactstrap";

export default class Footer extends Component { 
    render(){
        return(
            <div id="footer">
                <Container>
                    <Row>
                        <Col className="footer-left" lg='8'>
                            <Button className="footer-btn" outline color="info" size="lg">Mark For Review & Next</Button>{' '} 
                            <Button className="footer-btn" outline color="info" size="lg">Clear Response</Button>{' '}
                        </Col>
                        <Col className="footer-right" lg='4'>
                            <Button className="footer-btn" color="info" size='lg'>Save & Next</Button>
                        </Col>
                        
                    </Row>
                </Container>
            </div>
        );
    }
}