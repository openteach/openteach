import React, { Component } from 'react';
import Remarkable from 'remarkable';
import Meta from 'remarkable-meta';
import Radium from 'radium';

class BookCard extends Component {

    render() {
        let book = this.props.book;
        let price = book.getPrice();
        return (
            <div className="large-6 medium-6 small-12 columns">
                <div className="card">
                    <div className="content">
                        <span className="title">{book.title}</span>
                        <p>{book.description}</p>
                    </div>
                    <div className="action row">
                        <div className="large-8 small-8 columns"><a href={FlowRouter.path("bookRoute", {"id" : book.slug})}>Open</a></div>
                        <div className="large-4 columns text-right pull-right">{price}</div>
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
