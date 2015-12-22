import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import BookList from './booklist/BookList';

export default class Book extends Component {

    render(){

        return (
            <div>
                <BookList datas={[{},{},{}]}/>
            </div>
        );
    }
}


