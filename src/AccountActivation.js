import React from 'react';
import { connect } from 'react-redux';

const AccountActivation = (props) => {
    return (
        <section id="three" className="wrapper style3 special">
            <div className="inner">
                <header className="major">
                    <h2>Activate Your Account</h2>
                    <p>Thanks for signing up!</p>

                    <p>A confirmation email has been sent to <b>{props.email}</b>.
                        <br/>  Click on the link in the email to activate your account.
                        <br/>  The link will expire in 30 minutes.
                    </p>
                </header>
            </div>
        </section>         
    );
};

const mapStateToProps = ({registration}) => {
    return {
        email: registration.email
    };
}

export default connect(mapStateToProps)(AccountActivation);