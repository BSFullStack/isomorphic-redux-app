import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Topics from './topic/Topics';


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
    }

    componentDidMount() {
        const { selectedCategory } = this.props;
        //this.props.fetchTopicsIfNeeded(selectedCategory);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedCategory !== this.props.selectedCategory) {
            const { selectedCategory } = nextProps;
            this.props.fetchTopicsIfNeeded(selectedCategory);
        }
    }

    render () {
        const { selectedCategory, topics , isFetching , lastUpdated , error } = this.props;
        return (
            <div>
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
        );
    }
}



export default Topic;
