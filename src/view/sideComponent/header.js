import React, {Component} from 'react';
import {Row, Container} from 'reactstrap';


export default class SideHeader extends Component {
    render(){
        return(
            <div id="side-header">
                <Container>
                    <Row>
                        <img src={require("./../../assets/img/Group100.png")} alt="icon"/>
                        <h2>Best of luck!</h2>
                    </Row>
                </Container>
            </div>
        );
    }
}