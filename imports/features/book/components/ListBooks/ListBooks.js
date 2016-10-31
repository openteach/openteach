import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Radium from 'radium';

import { Books } from '../../../../collections/books.js';

class ListBooks extends React.Component {
    renderBooks() {
        let books = Books.find({}).fetch();

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


export default Radium(ListBooks)
