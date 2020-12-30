import React, { Component } from "react";
// import {Col, Row, Container} from "reactstrap";

import Header from './components/header';
import Paginate from './components/pagination';
import Questions from './components/questionText'
import Options from './components/options';
import Footer from './components/footer';

import JsonData from './data/data.json';

export default class Main extends Component {
  state = {
    PageData: {},
  }

  getPageData() {
    this.setState({PageData : JsonData})
  }

  componentDidMount(){
    this.getPageData();
  }

  render(){
    return(
      <div id="wrapper">
        <Header data={this.state.PageData.exam}/>
        <Paginate />
        <Questions data={this.state.PageData.exam}/>
        <Options data={this.state.PageData.exam}/>
        <Footer />
      </div>
    );
  }
}


