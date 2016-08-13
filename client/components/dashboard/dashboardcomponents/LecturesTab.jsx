import React from 'react';

export default class ApprenticeshipTab extends React.Component {
    componentDidMount() {
        FlowRouter.go("dashboardRoute", {show : 2});
    }

    render() {
        return (
            <div className="lectures">
                <div className="expanded row">
                    <h5 className="coming-soon__headline">
                        Coming later
                    </h5>
                </div>
                <div className="expanded row lecture__btn--apply">
                    <input
                        type="submit"
                        className="apply__btn"
                        value="I want lectures"
                    />
                </div>
            </div>
        )
    }
}
