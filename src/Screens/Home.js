import React, { Component } from 'react';
import Header from '../Components/Header';
import Search from '../Components/Search';
import '../Resources/style.css';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            <Header/>
            <Search/>
            </div>
        );
    }
}