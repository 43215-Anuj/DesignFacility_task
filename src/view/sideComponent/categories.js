import React, {Component} from 'react';
import {Col, Container} from 'reactstrap';

export default class Categories extends Component{
    render() {
        return(
            <Container>
                <div id="categories">
                    <div className="category">
                        <Col lg='3'  className="cat-count nvisit">2</Col>
                        <Col lg='9'><h3>Question not Visited</h3></Col>
                    </div>
                    <div className="category">
                        <Col lg='3'  className="cat-count nans">2</Col>
                        <Col lg='9'><h3>Question not Answered</h3></Col>
                    </div>
                    <div className="category">
                        <Col lg='3' className="cat-count visit">2</Col>
                        <Col lg='9'><h3>Question Visited</h3></Col>
                    </div>
                    <div className="category">
                        <Col lg='3'  className="cat-count marked">4</Col>  
                        <Col lg='9'><h3>Question Marked</h3></Col>
                    </div>
                    <div className="category">
                        <Col lg='3'  className="cat-count amr">5</Col>  
                        <Col lg='9'><h3>Question Answered & Marked for Review</h3></Col>
                    </div>
                </div>
            </Container>
        );
    }
}