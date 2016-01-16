import React, { Component, PropTypes } from 'react';
import HotTopic from  './HotTopic';
import TagList from '../topicDetail/TagList';

export default class Sidebar extends Component {
    
    render(){
        
        return (
            <div className="col-xs-12 col-md-3 side mt30">
                <div className="widget-box">
                    <h2 className="h4 widget-box__title">关注了3个标签 <a href="/tags" title="更多">»</a></h2>
                     <TagList className="mb20" tags={[{},{},{}]}/>
                </div>
                <div className="widget-box">
                    <h2 className="h4 widget-box__title">热议标签 <a href="/tags" title="更多">»</a></h2>
                     <TagList className="mb20" tags={[{},{},{}]}/>
                </div>
                <div className="widget-box">
                    <h2 className="h4 widget-box__title">最近热门的</h2>
                    <ul className="widget-links list-unstyled">
                        
                        <HotTopic data={this.props.data}/>
                    </ul>
                </div>
                
            </div>
        );
    }
}
