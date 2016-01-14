/**
 * 问题详情页
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import TopHeader from './ui/topicDetail/TopHeader';

import Header from './layout/Header';

class Topic extends Component {

    constructor(props) {
        super(props);


    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {


    }

    render () {


        return (
            <div>
                <Header />
                <div className="wrap">
                    <TopHeader />
                </div>
            </div>
        );
    }
    handlerCategoryChange(nextCategory){

        this.props.selectCategory(nextCategory);


    }
}



export default Topic;
