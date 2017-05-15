import React from 'react';
import MenuItem from './MenuItem';

const Menu = () => {
    return (
        <div id="menu">
            <ul>
                <MenuItem path="/" text="Home" />
                <MenuItem path="/register" text="Sign Up" />
                <MenuItem path="/login" text="Log in" />
            </ul>
        </div>
    );
};

export default Menu;
