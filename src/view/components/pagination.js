import React, { Component } from "react";
import {Container} from "reactstrap";

export default class Pagination extends Component {
    constructor() {
        super();
        this.state = {
          name: "React"
        };
        this.onChangeValue = this.onChangeValue.bind(this);
      }
    
      onChangeValue(event) {
        console.log(event.target.value);
      }

    render() {
        return(
            <div id="pagination">
                <Container>
                    <div className="button-group-pills text-center" data-toggle="buttons" onChange={this.onChangeValue}>
                        <label className="btn btn-default">
                            <input type="radio" value="one" name="section" />
                            <div>Section 1</div>
                        </label>
                        <label className="btn btn-default" >
                            <input type="radio" value="two" name="section" />
                            <div>Section 2</div>
                        </label>
                        <label className="btn btn-default" >
                            <input type="radio" value="three" name="section" />
                            <div>Section 3</div>
                        </label>
                        <label className="btn btn-default" >
                            <input type="radio" value="four" name="section" />
                            <div>Section 4</div>
                        </label>
                        <label className="btn btn-default" >
                            <input type="radio" value="five" name="section" />
                            <div>Section 5</div>
                        </label>
                        <label className="btn btn-default" >
                            <input type="radio" value="six" name="section" />
                            <div>Section 6</div>
                        </label>
                        <label className="btn btn-default" >
                            <input type="radio" value="seven" name="section" />
                            <div>Section 7</div>
                        </label>
                        <label className="btn btn-default" >
                            <input type="radio" value="eight" name="section" />
                            <div>Section 8</div>
                        </label>
                        <label className="btn btn-default" >
                            <input type="radio" value="nine" name="section" />
                            <div>Section 9</div>
                        </label>
                    </div>
                </Container>
            </div>
        )
    }
}