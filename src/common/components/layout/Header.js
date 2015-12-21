import React, { Component, PropTypes } from 'react';

export default class Header extends Component {
    render() {
        return (
            <div className="masthead">
                <div className="container">
                    <h3 className="masthead-title">
                      <a href="/" title="Home">Redux 同构</a>

                    </h3>
                </div>
            </div>
        );
    }
}

