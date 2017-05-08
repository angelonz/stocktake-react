import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

class App extends Component {

    render() {
        return (
            <div id="page-wrapper">
                <Header />
                <Main />
                <Footer />
            </div>
        );
    }
};

export default App;
