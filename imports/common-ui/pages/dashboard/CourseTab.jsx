import React from 'react';
import ListBooks from '../../../features/book/components/ListBooks';

export default class CourseTab extends React.Component {
    componentDidMount() {
        FlowRouter.withReplaceState(function() {
            FlowRouter.go("dashboardBooks");
        });
    }
    render() {
        return (
            <div className="dashboard">
                {this.props.children}
            </div>
        )
    }
}


CourseTab.propTypes = {
    innerComponent : React.PropTypes.object
};

CourseTab.defaultProps = {  };
