import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

class Sidebar extends Component {

  constructor(props){
      super(props);
  }

  render() {
      const {version,user} = this.props;
      return (
        <div className="sidebar">
          
        </div>
      );
  }
}

export default Sidebar;
