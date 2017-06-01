import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import isUndefined from 'lodash/isUndefined';

const AccountActivation = (props) => {
    const { email, authenticated, location } = props;

    if (authenticated) {
        return <Redirect to='/dashboard' />;
    }

    // we can only get to here as a result of a successful registration
    if (isUndefined(location.state) || location.state.from !== '/register') {
        return <Redirect to='/' />;
    }

    return (
        <section id="three" className="wrapper style3 special">
            <div className="inner">
                <header className="major">
                    <h2>Activate Your Account</h2>
                    <p>Thanks for signing up!</p>

                    <p>A confirmation email has been sent to <b>{email}</b>.
                        <br/>  Click on the link in the email to activate your account.
                        <br/>  The link will expire in 30 minutes.
                    </p>
                </header>
            </div>
        </section>         
    );
};

const mapStateToProps = ({user}) => {
    const { email, authenticated } = user;
    return {
        email,
        authenticated
    };
}

export default connect(mapStateToProps)(AccountActivation);