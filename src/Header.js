import React from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import { connector } from './reducers';

const Header = ({ showHeader }) => {
    return (
        <header id="header" className={showHeader === true ? '' : 'alt'}>
            <h1><Link to="/">StockTake</Link></h1>
            <Navigation />
        </header>
    );
};

export default connector(Header);
