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

class ListBooks extends Component {
    renderBooks() {
        let books = this.props.bookList;
        const rows = array_chunk(books, 2);
        let rowidx = 0;

        return rows.map((cols) => (
            <div key={rowidx++} className="row">
                {cols.map((book) => (<BookCard key={book._id} book={book} />))}
            </div>));
    }

    render() {
        return (
            <div>
                <div className="expanded row text-center" style={styles.header}>
                    <div className="large-12 columns">
                        <h1>Teachers notes</h1>
                        <p style={styles.tagline}>Teachers material for students</p>
                    </div>
                </div>
                <div className="listOfCourses">
                    {this.renderBooks()}
                </div>
            </div>
        )
    }
}

ListBooks.propTypes = {
    bookList: React.PropTypes.array,
    loading: React.PropTypes.bool,
}

ListBooks.defaultProps = {};

const styles = {
    header: {
        'paddingTop': '3em',
        'height': '12.5em',
        'backgroundColor': '#ecf0f1',
        'marginBottom': '4em'
    },
    tagline: {
        'fontSize': '1.2em'
    }
}

export default Radium(ListBooks)
