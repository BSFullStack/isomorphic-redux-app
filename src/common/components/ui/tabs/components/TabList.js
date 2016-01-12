import React, {PropTypes} from 'react';
import cx from 'classnames';
import _ from 'lodash'
module.exports = React.createClass({
  displayName: 'TabList',

  propTypes: {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array
    ])
  },

  render() {
    const { children } = this.props;
    let activeIndex = 0;
    React.Children.forEach(children,(item,index)=>{
        const { selected } = item.props;
        if(selected){
            activeIndex = index;
        }
    });

    return (
        <div
            className={cx(
              'navs-slider',

              this.props.className
            )}
            data-active-index={activeIndex}
            role="tablist"
        >
        {this.props.children}
        <span className="navs-slider-bar"></span>
        </div>
    );
  }
});
