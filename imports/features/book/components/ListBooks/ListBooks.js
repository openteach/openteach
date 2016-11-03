import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Radium from 'radium';

class ListBooks extends React.Component {
    renderBooks() {
        let books = this.props.bookList; //Books.find({}).fetch();

        return books.map((book) => {
            let href = FlowRouter.path("courseRoute", {"courseId" : book._id});
            return (
            <li key={book._id}><a href={href}>{book.title}</a></li>
            );
        });
    }

    render() {
        return (
         <div className="listOfCourses">
          <ul className="listOfCourses__list">
           {this.renderBooks()}
          </ul>
         </div>
        )
    }
}

ListBooks.propTypes = {
    bookList: React.PropTypes.array,
    loading: React.PropTypes.bool,
};

export default Radium(ListBooks)
