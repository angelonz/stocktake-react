import React from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ showHeader }) => {
    return (
        <header id="header" className={showHeader === true ? '' : 'alt'}>
            <h1>
                <Link to="/">StockTake</Link>
            </h1>
            
            <Navigation />
        </header>
    );
};

const mapStateToProps = (state) => {
    const { showHeader } = state.ui;
    return {
        showHeader
    }
};

export default connect(mapStateToProps)(Header);
