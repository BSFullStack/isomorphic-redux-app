import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Topics from './topic/Topics';

import Header from './layout/Header';
import CategoryBar from './topic/CategoryBar';
import CategoryItem from './topic/CategoryItem';
class Topic extends Component {

    constructor(props) {
        super(props);

        /*this.state={
            category:props.params.category || "hot"
        }*/
    }

    componentDidMount() {


        const { selectedCategory } = this.props;
        this.props.fetchTopicsIfNeeded(selectedCategory);


    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.selectedCategory !== this.props.selectedCategory) {
            const { selectedCategory } = nextProps;
            this.props.fetchTopicsIfNeeded(selectedCategory);
        }
    }

    render () {
        const { selectedCategory , topics ,  isFetching , lastUpdated , error } = this.props;
        console.log(topics);
        return (
            <div>
                <Header />
                <div className="wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-md-9 main">
                                <p className="main-title hidden-xs"></p>
                                <Topics topics={topics}></Topics>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    handlerCategoryChange(nextCategory){

        this.props.selectCategory(nextCategory);


    }
}



export default Topic;
