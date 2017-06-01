import React from 'react';
import MenuItem from './MenuItem';
import { connect } from 'react-redux';

const Menu = (props) => {

    let loginMenuItem = <MenuItem path="/login" text="Log in" />;
    let signUpMenuItem = <MenuItem path="/register" text="Register" />;

    if (props.authenticated) {
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

const mapStateToProps = (state) => {
    const { authenticated } = state.user;
    return {
        authenticated
    };
}

export default connect(mapStateToProps)(Menu);
