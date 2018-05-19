import React, {Component} from 'react';

export default class SearchResultHead extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(

            <table border="0" align="right">
            <tbody>
                <tr>
                <td>
                    <a  href="#">
                        <img className="searchImg" height="75" src={this.props.imageUrl[0]} align="middle"/>
                    </a>
                </td>
                <td>
                    <a  href="#">
                        <img className="searchImg" height="75" src={this.props.imageUrl[1]} align="middle"/>
                    </a>
                </td>
                </tr>
            </tbody>
            </table>
        );
    }
}
