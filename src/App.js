import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Banner from './Banner';
import Section from './Section';

const App = () => {
    return (
        <div id="page-wrapper">
            <Header />
            <Banner />
            <Section />
            <Footer />
        </div>
    );
};

export default App;