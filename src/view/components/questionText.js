import React, { Component } from "react";
import {div, Container} from "reactstrap";

export default class Questions extends Component {
    state = {
        index: 0,
    } 
    render(){
        return(
            <div id="questionText">
                <Container>
                    <div>
                        <h2 className="ques-num">QUESTION NUMBER: {this.state.index + 1}</h2>
                    </div>
                    <div className="ques-txt">
                        <h2>{this.props.data ? this.props.data.sections[this.state.index].Section1[this.state.index].quesText : "Loading"}</h2>
                    </div>
                </Container>
            </div>
        );
    }
}