import React from 'react';
import Navigation from './Navigation';

const Header = (props) => {
    return (
        <div>
            <div className="App-header">
                <h1>{props.title}</h1>
                <Navigation />
            </div>
        </div>
    );
};

export default Header;