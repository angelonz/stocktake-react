import React from 'react';
import MenuItem from './MenuItem';
import authUtil from './utils/authUtil';

const Menu = () => {

    let loginMenuItem = <MenuItem path="/login" text="Log in" />;
    let signUpMenuItem = <MenuItem path="/register" text="Register" />;

    if (authUtil.isAuthenticated()) {
        loginMenuItem = <MenuItem path="/logout" text="Log out" />;
        signUpMenuItem = null;
    } 

    return (
        <div id="menu">
            <ul>
                <MenuItem path="/" text="Home" />
                { signUpMenuItem }
                { loginMenuItem }
            </ul>
        </div>
    );
};



export default Menu;
