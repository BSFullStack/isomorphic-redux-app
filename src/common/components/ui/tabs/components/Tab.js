import React, {PropTypes} from 'react';
import { findDOMNode } from 'react-dom';
import cx from 'classnames';

function syncNodeAttributes(node, props) {
  if (props.selected) {
    node.setAttribute('tabindex', 0);
    node.setAttribute('selected', 'selected');
    if (props.focus) {
      node.focus();
    }
  } else {
    node.removeAttribute('tabindex');
    node.removeAttribute('selected');
  }
}

module.exports = React.createClass({
  displayName: 'Tab',



  getDefaultProps() {
    return {
      focus: false,
      selected: false,
      id: null,
      panelId: null
    };
  },

  componentDidMount() {
    syncNodeAttributes(findDOMNode(this), this.props);
  },

  componentDidUpdate() {
    syncNodeAttributes(findDOMNode(this), this.props);
  },

  render() {
    return (
      <a
        href="javascript:;"
        className={cx(
          this.props.className,
          {
            'active': this.props.selected,
            'disabled': this.props.disabled
          }
        )}
        role="tab"
        data-index={this.props.index}
      >
        {this.props.children}
      </a>
    );
  }
});
