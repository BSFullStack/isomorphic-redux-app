import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import BookList from './booklist/BookList';
import * as BookActions from '../actions/book';
export default class Book extends Component {
    static need = [
        BookActions.fetchBooks
    ]
    render(){

        return (
            <div>
                <BookList datas={[{},{},{}]}/>
            </div>
        );
    }
}


