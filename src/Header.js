import React from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import { string } from 'prop-types';

const Header = (props) => {
    console.log('Header', props);
    return (
        <header id="header" className={props.cssClass}>
            <h1><Link to="/">StockTake</Link></h1>
            <Navigation />
        </header>
    );
};

Header.propTypes = {
    cssClass: string
};

export default Header;
