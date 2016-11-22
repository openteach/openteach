import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Radium from 'radium';
import BookCard from '../BookCard';

const array_chunk = function chunks(arr, size) {
    if (!Array.isArray(arr)) {
        throw new TypeError('Input should be Array');
    }

    if (typeof size !== 'number') {
        throw new TypeError('Size should be a Number');
    }

    var result = [];
    for (var i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, size + i));
    }

    return result;
};

class ListBooks extends React.Component {
    renderBooks() {
        let books = this.props.bookList;
        const rows = array_chunk(books, 2);
        let rowidx = 0;

        return rows.map((cols) => (
            <div key={rowidx++} className="row expanded">
                {cols.map((book) => (<BookCard key={book._id} book={book} />))}
            </div>));
    }

    render() {
        return (
         <div className="listOfCourses">
            {this.renderBooks()}
         </div>
        )
    }
}

ListBooks.propTypes = {
    bookList: React.PropTypes.array,
    loading: React.PropTypes.bool,
};

export default Radium(ListBooks)
