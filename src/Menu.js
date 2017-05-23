import React from 'react';
import MenuItem from './MenuItem';
import { connect } from 'react-redux';

const Menu = (props) => {

    let loginMenuItem = <MenuItem path="/login" text="Log in" />;
    if (props.authenticated === true) {
        loginMenuItem = <MenuItem path="/logout" text="Log out" />;
    }

    return (
        <div id="menu">
            <ul>
                <MenuItem path="/" text="Home" />
                <MenuItem path="/register" text="Sign Up" />
                {loginMenuItem}
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        authenticated: state.login.authenticated
    };
}

export default connect(mapStateToProps)(Menu);
