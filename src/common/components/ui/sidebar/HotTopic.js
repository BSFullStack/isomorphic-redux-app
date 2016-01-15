import React, { Component, PropTypes } from 'react';


export default class HotTopic extends Component {
	
	//  dataArr=[
	//	{title:"",answers:10,isSolved:true,href:""}	
	//	]	
    render(){
    	 var dataArr = this.props.data;
    	var str=''
    	for(var i =0 ; i++;i<dataArr.length){
    		
    		str += '<li className="widget-links__item">'
                +   ' <a href='+dataArr[i].href+'>'+dataArr[i].title+'</a>'
                +   ' <small className="text-muted">'+dataArr[i].answers+' 回答 | '+dataArr[i].isSolved?"已解决":"未解决"+'</small>'
                +  '</li>'
    	}

       

        return (
            {str}
        );
    }
}
