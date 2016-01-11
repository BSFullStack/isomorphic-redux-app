import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Topics from './topic/Topics';

import Header from './layout/Header';
import CategoryBar from './topic/CategoryBar';
import CategoryItem from './topic/CategoryItem';
class Topic extends Component {
    static propTypes = {
        selectedCategory: PropTypes.string.isRequired,
        topics: PropTypes.array.isRequired,
        error: PropTypes.object,
        isFetching: PropTypes.bool.isRequired,
        lastUpdated: PropTypes.number
    }
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
                <Header></Header>
                <div className="wp cl">

                    <div className="main cl">
                <div className="wp cl">
                    <div className="main cl">
                        <div className="main tit">
                            <div className="h1">
                                <p><a href="javascript:;">话题首页</a></p>
                                <span>共152个话题</span>
                            </div>
                            <CategoryBar activeKey={selectedCategory}  onSelectCategory={::this.handlerCategoryChange}>
                                <CategoryItem cateKey="hot" link="/topics/hot" text="本周热门"/>
                                <CategoryItem cateKey="new" link="/topics/new" text="最新发表"/>
                                <CategoryItem cateKey="reply" link="/topics/reply" text="最新回复"/>
                            </CategoryBar>
                        </div>
                    </div>
                </div>
                {
                  isFetching && topics.length === 0 &&
                      <h3>正在加载...</h3>
                }
                {
                  !isFetching && error && topics.length === 0 &&
                      <h3 className="topic-error">出错啦！</h3>
                }
                {
                  !isFetching && !error && topics.length === 0 &&
                      <h3>Empty</h3>
                }
                {
                  topics.length > 0 &&
                      <div style={{ opacity: isFetching ? 0.5 : 1 }}>
                          <Topics topics={topics} />
                      </div>
                }
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
