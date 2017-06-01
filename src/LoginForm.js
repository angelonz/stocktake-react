import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import FormField from './FormField';
import { connect } from 'react-redux';
//import queryString from 'query-string';
import verify from './actions/verificationActions' 
import login from './actions/loginActions' 
import FormMessage from './FormMessage';
import { push } from 'react-router-redux';
import isUndefined from 'lodash/isUndefined';

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.submitHandler = this.submitHandler.bind(this);
    }

    componentDidMount() {

        const { pathname, search } = this.props;

        if (pathname && pathname === '/verify') { // came from email verification link
            this.props.verify(search);
        } 


    }
    
    submitHandler(values) {
        this.props.login(values);
    }

    render() {
        const { handleSubmit } = this.props;
        let formMessage = null;

        const { verificationInProgress, verificationStatus } = this.props.verification;
        const { loginState, user } = this.props;

        if (!verificationInProgress && verificationStatus === 'success') {
            formMessage = <FormMessage message='You have successfully verified your account.  You may now log in.'/>;
        }

        if (!user.authenticated && !loginState.loginInProgress && !isUndefined(loginState.errorMessage)) {
            formMessage = <FormMessage message={loginState.errorMessage}/>;
        }

        return (
            <section>
                <h3>Log In</h3>
                
                <form onSubmit={handleSubmit(this.submitHandler)}>
                    <div className="row uniform">
                        {formMessage}
                        <FormField type="email" name="email" id="email" value="" placeholder="Email" cssClass="6u$ 12u$(xsmall)" autoFocus/>
                        <FormField type="password" name="password" id="password" value="" placeholder="Password" cssClass="6u$ 12u$(xsmall)" />
                        
                        <div className="12u$">
                            <ul className="actions">
                                <li><input type="submit" value="Log In" className="special" /></li>
                            </ul>
                        </div>
                    </div>    
                </form>
            </section>
            
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (formValues) => {
            dispatch(login(formValues));
        },
        verify: (urlParams) => {
            if (urlParams) {
                dispatch(verify(urlParams));
            } else {
                // no-match is not a real path, it just forces a redirect to the 404 page
                dispatch(push('/no-match'));
            }
            
        }
    };
}

const mapStateToProps = (state) => {
    const { pathname, search } = state.router.location;
    const { verification, user } = state;
    return {
        pathname,
        search,
        verification,
        loginState: state.login,
        user
    };
}

// Decorate the form component
LoginForm = reduxForm({
  form: 'login' // a unique name for this form
  
})(LoginForm);

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
