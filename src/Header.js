import React from 'react';
import Navigation from './Navigation';

const Header = () => {
    return (
        <header id="header" className="alt">
            <h1><a href="index.html">StockTake</a></h1>
            <Navigation />
        </header>
    );
};

export default Header;