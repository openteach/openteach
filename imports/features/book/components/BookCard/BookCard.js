import React, { Component } from 'react';
import Remarkable from 'remarkable';
import Meta from 'remarkable-meta';
import Radium from 'radium';

class BookCard extends Component {

    render() {
        let book = this.props.book;
        return (
            <div className="large-6 medium-6 small-12 columns">
                <div className="card">
                    <div className="content">
                        <span className="title">{book.title}</span>
                        <p>Resume of the book here.</p>
                    </div>
                    <div className="action">
                        <a href={FlowRouter.path("bookRoute", {"id" : book.slug})}>Open</a>
                    </div>
                </div>
            </div>);
    }
}


BookCard.propTypes = {
    book : React.PropTypes.object,
};

BookCard.defaultProps = {};

export default Radium(BookCard)
