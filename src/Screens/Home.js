import React, { Component } from 'react';
import Header from '../Components/Header';
import '../Resources/style.css';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Header/>
        );
    }
}