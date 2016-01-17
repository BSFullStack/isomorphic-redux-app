import React, { Component, PropTypes } from 'react';


export default class HotTopic extends Component {

    render(){

        return (
            <li className="widget-links__item">
                <a href={this.props.href}>{this.props.title}</a>
                <small className="text-muted">{this.props.answers}回答 | {this.props.isSolved?"已解决":"未解决"}</small>
            </li>
        );


    }
}
