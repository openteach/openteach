import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Radium from 'radium';


class ListChapters extends React.Component {
    render() {
        return (
         <div className="">

         </div>
        )
    }
}

ListChapters.propTypes = {
    chapters: React.PropTypes.array,
};

export default Radium(ListChapters)
