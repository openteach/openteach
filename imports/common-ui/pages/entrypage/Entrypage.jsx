import React from 'react';

import Navigation from './Navigation.jsx';
import MainContent from './MainContent.jsx';
import Footer from './Footer.jsx';

export default class Entrypage extends React.Component {
    render() {
        return(
            <div>

                <Navigation />

                <MainContent />

                <Footer />

            </div>
        )
    }
}
