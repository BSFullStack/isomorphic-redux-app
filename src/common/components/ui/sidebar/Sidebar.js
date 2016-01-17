import React, { Component, PropTypes } from 'react';
import HotTopic from  './HotTopic';
import TagList from '../topicDetail/TagList';

export default class Sidebar extends Component {

    _getHotTopics(hotTopics){
             return hotTopics.map((arr,index)=>{
                return <HotTopic {...arr} key={index}/>
            })

    }
    render(){

         let dataArr=[
                 {title:"222",answers:10,isSolved:true,href:"222.com"}
                ,{title:"222",answers:10,isSolved:true,href:"222.com"}
                ,{title:"222",answers:10,isSolved:true,href:"222.com"}
                ,{title:"222",answers:10,isSolved:true,href:"222.com"}
        ]


        return (
            <div className="col-xs-12 col-md-3 side mt30">
                <div className="widget-box">
                    <h2 className="h4 widget-box__title">全部标签 <a href="javascript:;" title="更多">»</a></h2>
                     <TagList className="mb20" tags={[{id:"123",name:"talentjs"},{id:"456",name:"nodejs"}]}/>
                </div>
                <div className="widget-box">

                        <h2 className="h4 widget-box__title">最近热门的</h2>
                        <ul className="widget-links list-unstyled">

                            {this._getHotTopics(dataArr)}
                        </ul>
                </div>

            </div>
        );
    }
}
