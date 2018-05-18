import React, {Component} from 'react';

export default class Artist extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
              <img className="round" height="100" src={this.props.imageUrl} />
        );
    }
}
