import React, {Component} from 'react';
import {div, Col, Container} from 'reactstrap';

export default class QuestionList extends Component {
    render() {
        return(
            <div id="list">
                <div className='list-head'>
                    <h2>Name of Section</h2>
                </div>  
                <Container>
                    
                    <div>
                        <h4>Choose a question:</h4>
                    </div>
                    <div>
                        <div className="button-group text-center" data-toggle="buttons">
                            <Col lg='3' sm='4' md='4'>
                                <label className="btn btn-default">
                                    <input type="radio" value="one" name="section" />
                                    <div>1</div>
                                </label>
                            </Col>
                            <Col lg='3' sm='4' md='4'>
                                <label className="btn btn-default">
                                    <input type="radio" value="one" name="section" />
                                    <div>2</div>
                                </label>
                            </Col>
                            <Col lg='3' sm='4' md='4'>
                                <label className="btn btn-default">
                                    <input type="radio" value="one" name="section" />
                                    <div>3</div>
                                </label>
                            </Col>
                            <Col lg='3' sm='4' md='4'>
                                <label className="btn btn-default">
                                    <input type="radio" value="one" name="section" />
                                    <div>4</div>
                                </label>
                            </Col>
                        </div>
                        
                    </div>
                    
                </Container>
            </div>
        );
    }
}