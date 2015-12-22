import { bindActionCreators } from 'redux';
import React, { Component} from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';
import * as BookActions from '../actions/book';

//Data that needs to be called before rendering the component
//This is used for server side rending via the fetchComponentDataBeforeRending() method
Book.need = [
    BookActions.fetchBooks
]

function mapStateToProps(state) {
   /* let { selectedType, booksByType  } = state;

    const {
        isFetching,
        lastUpdated,
        error,
        items:books
    } = booksByType[selectedType] || {
        isFetching: true,
        error:{},
        items: []
    };

  return {
      selectedType,
      books,
      isFetching,
      lastUpdated,
      error
  };*/
    return {
        counter: state.counter
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(BookActions, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Book);
