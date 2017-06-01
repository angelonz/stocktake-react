import React from 'react';
import LoginForm from './LoginForm';
import FormWrapper from './FormWrapper';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import authUtil from './utils/authUtil';

const Login = (props) => {

    if (authUtil.isAuthenticated()) {
        return <Redirect to='/dashboard' />;
    }

    // listen for changes to login.redirectToReferrer in the store.
    // login.redirectToReferrer becomes true on successful login.
    if (props.redirectToReferrer) {
        const { state } = props.location;
        // we redirect to the login page if a protected page is being navigated to without logging in.
        // in this case, state.from's value is set to the protected page being attempted.
        // we redirect to state.from if it is set, otherwise we use the /dashboard route as the default 
        // destination after logging in.
        return <Redirect to={ state && state.from ? state.from : '/dashboard'} />;
    }

    return (
        <FormWrapper>
            <LoginForm />
        </FormWrapper>
    );
};

const mapStateToProps = (state) => {
    const { redirectToReferrer } = state.login;
    return {
        redirectToReferrer
    }
};

export default connect(mapStateToProps)(Login);
