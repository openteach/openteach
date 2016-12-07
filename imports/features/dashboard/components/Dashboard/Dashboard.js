import React, { Component } from 'react';
import Radium from 'radium';
import Tabs from 'react-tabs-navigation';

import BookTab from '../../../book/components/BookTab/'
import ApprenticeshipTab from '../../../apprenticeship/components/ApprenticeshipTab/'
import LecturesTab from '../../../lectures/components/LecturesTab/'

class Dashboard extends Component {
    render() {
        return(
            <div className="DashboardBackground" id="main-dashboard">
                <Tabs
                selected={this.props.selected}
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

export default Radium(Dashboard)
