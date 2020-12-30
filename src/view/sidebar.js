import React, { Component } from "react";

import SideHeader from './sideComponent/header';
import Categories from './sideComponent/categories';
import List from './sideComponent/quesList';
import Footer from './sideComponent/footer';

import img from "../assets/img/avatar.jpg"
export default class Sidebar extends Component {
    render() {
        return(
            <div id="sidebar">
                <SideHeader avatar={img}/>
                <Categories />
                <List />
                <Footer />
            </div>
        );
    }
}