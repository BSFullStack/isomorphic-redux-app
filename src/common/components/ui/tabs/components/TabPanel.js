import React, {PropTypes} from 'react';
import cx from 'classnames';

module.exports = React.createClass({
  displayName: 'TabPanel',



  contextTypes: {
    forceRenderTabPanel: PropTypes.bool
  },

  getDefaultProps() {
    return {
      selected: false,
      id: null,
      tabId: null
    };
  },

  render() {
    const children = (this.context.forceRenderTabPanel || this.props.selected) ?
      this.props.children :
      null;

    return (
      <div
        className={cx(
          'view',
          this.props.className,
          {
            'selected': this.props.selected
          }
        )}
        role="tabpanel"
        id={this.props.id}
        aria-labeledby={this.props.tabId}
        style={{display: this.props.selected ? null : 'none'}}
      >
        {children}
      </div>
    );
  }
});
