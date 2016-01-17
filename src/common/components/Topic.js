import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Topics from './topic/Topics';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Sidebar from './ui/sidebar/Sidebar';
class Topic extends Component {

    constructor(props) {

        super(props);
        this.pageIndex = 1;
        this.state={
            category:props.params.category || "hot"
        }

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

        const {
            selectedCategory ,
            topics ,
            user,
            count ,
            isFetching ,
            lastUpdated ,
            error
        } = this.props;
        let moreComponent ;

        if(count>0 && count > topics.length){
            moreComponent = (
                <div className="text-center">
                    <ul className="pager">
                        <li><a href="javascript:;" className=" btn-large" onClick={::this.handlerLoaderMore}>点击加载更多</a></li>
                    </ul>
                </div>
            );
        }else{
            moreComponent = null;
        }
        return (
            <div>
                <Header user={user}/>
                <div className="wrap" style={{"minHeight":"500px"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-md-9 main">
                                <p className="main-title hidden-xs">
                                    把你的问题告诉交给我们！
                                </p>
                                <ul className="nav nav-tabs nav-tabs-zen mb10">
                                    <li className="active"><a href="javascript:;">最新</a></li>
                                    <li className="disabled"><a href="javascript:;">推荐</a></li>
                                    <li className="pull-right ">
                                        <a href="javascript" className="countNum">
                                            共{count}个
                                        </a>
                                    </li>
                                </ul>
                                <p className="main-title hidden-xs"></p>
                                <Topics topics={topics} handlerClickTitle={::this.handlerClickTitle}></Topics>
                                { moreComponent }
                            </div>
                            <Sidebar />
                        </div>

                    </div>
                </div>
                <Footer />
            </div>
        );
    }
    //加载更多
    handlerLoaderMore(e){
        const { topics } = this.props;
        let lastTopic = topics[topics.length -1];

        const { createTime } = lastTopic;
        this.pageIndex = this.pageIndex+1
        this.props.getTopics({
            pageIndex:this.pageIndex,
            pageSize:15,
            lastTime:createTime
        });
    }
    handlerClickTitle(id){

       return this.props.history.push("/t/"+id);
    }
    handlerCategoryChange(nextCategory){

        this.props.selectCategory(nextCategory);


    }
}



export default Topic;
