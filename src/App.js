import React from 'react';
import Header from './Header';
import Footer from './Footer';

import Main from './Main';

const App = () => {
    return (
        <div id="page-wrapper">
            <Header />
            <Main />
            <Footer />
        </div>
    );
};

export default App;