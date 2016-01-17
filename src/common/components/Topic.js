import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Topics from './topic/Topics';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Sidebar from './ui/sidebar/Sidebar';
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

        return (
            <div>
                <Header />
                <div className="wrap" style={{"minHeight":"500px"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-md-9 main">
                                <p className="main-title hidden-xs">
                                    把你的问题告诉交给我们！
                                </p>
                                <ul className="nav nav-tabs nav-tabs-zen mb10">
                                    <li className="active"><a href="/topics">最新的</a></li>
                                    <li className="disabled"><a href="javascript:;">热门的</a></li>
                                    <li className="disabled"><a href="javascript:;">未回答</a></li>
                                </ul>
                                <p className="main-title hidden-xs"></p>
                                <Topics topics={topics} handlerClickTitle={::this.handlerClickTitle}></Topics>
                            </div>
                            <Sidebar />
                        </div>
                        
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
    handlerClickTitle(id){

       return this.props.history.push("/t/"+id);
    }
    handlerCategoryChange(nextCategory){

        this.props.selectCategory(nextCategory);


    }
}



export default Topic;
