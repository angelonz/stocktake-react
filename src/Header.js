import React from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ showHeader }) => {
    return (
        <header id="header" className={showHeader === false ? 'alt' : ''}>
            <h1><Link to="/">StockTake</Link></h1>
            <Navigation />
        </header>
    );
};

const mapStateToProps = (state) => {
    return {
        showHeader: state.showHeader
    }
};

export default connect(mapStateToProps)(Header);
