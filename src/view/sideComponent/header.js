import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';


export default class SideHeader extends Component {
    render(props){
        return(
            <div id="side-header">
                <Container>
                    <Row>
                        <Col className="pic" lg='3' md='3'>
                            <img src={this.props.avatar} alt="icon"/>
                        </Col>
                        <Col className='text' lg='9' md='9 '>
                            <h2>Best of luck!</h2>
                        </Col>                        
                    </Row>
                </Container>
            </div>
        );
    }
}