import React, { Component } from 'react';
import Radium from 'radium';
import Tabs from 'react-tabs-navigation';

import BookTab from '../../../book/components/BookTab/'
import ApprenticeshipTab from '../../../apprenticeship/components/ApprenticeshipTab/'
import LecturesTab from '../../../lectures/components/LecturesTab/'

class Dashboard extends Component {

    handleChange(idx){
        if(idx === 0){
            FlowRouter.withReplaceState(function() {
                FlowRouter.go("dashboardApprenticeship");
            });
        } else if(idx === 1){
            FlowRouter.withReplaceState(function() {
                FlowRouter.go("dashboardBooks");
            });
        } else if (idx === 2) {
            FlowRouter.withReplaceState(function() {
                FlowRouter.go("dashboardLectures");
            });
        }
    }

    render() {
        return(
            <div className="DashboardBackground" style={styles}>
                <Tabs
                selected={this.props.selected}
                onTabChange={this.handleChange}
                tabs={[
                    {
                        children: () => (
                            <ApprenticeshipTab>
                                {this.props.children}
                            </ApprenticeshipTab>
                        ),
                        displayName: 'Apprenticeship'
                    }, {
                        children: () => (
                            <BookTab>
                                {this.props.children}
                            </BookTab>
                        ),
                        displayName: 'Books'
                    }, {
                        children: () => (
                            <LecturesTab>
                                {this.props.children}
                            </LecturesTab>
                        ),
                        displayName: 'Lectures'
                    }
                ]}/>
            </div>)
  }
}

Dashboard.propTypes = {
    children  : React.PropTypes.object,
    select : React.PropTypes.number
};

Dashboard.defaultProps = {};

const styles = {
    height: '100%'
}

export default Radium(Dashboard)
