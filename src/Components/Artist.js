import React, {Component} from 'react';

export default class Artist extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <span claasNmae="round"> 
                <img height="100" src={this.props.imageUrl} align="middle"/>
            </span>
        );
    }
}