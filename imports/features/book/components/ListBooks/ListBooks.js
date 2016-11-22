import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Radium from 'radium';

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
        let books = this.props.bookList; //Books.find({}).fetch();

        const rows = array_chunk(books, 2);

        let rowidx = 0;

        return rows.map((cols) => (
            <div key={rowidx++} className="row">
                {
                cols.map((book) =>
                    (<div key={book._id} className="medium-6 columns">
                        <div className="card">
                            <div className="content">
                                <span className="title">{book.title}</span>
                                <p>Resume of the book here.</p>
                            </div>
                            <div className="action">
                                <a href={FlowRouter.path("bookRoute", {"id" : book.urlTitle})}>Open</a>
                            </div>
                        </div>
                    </div>)

                )

                }

            </div>));

    }

    render() {
        return (
         <div className="listOfCourses row">
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
