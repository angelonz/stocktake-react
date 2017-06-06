import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import FormField from './FormField';
import { assign } from 'lodash';
import { connect } from 'react-redux';
import register from './actions/registrationActions';
import FormMessage from './FormMessage';
import validationUtil from './utils/validationUtil';

class RegistrationForm extends Component {

    constructor(props) {
        super(props);
        this.submitHandler = this.submitHandler.bind(this);
    }
    
    submitHandler(values) {

        console.log('submit handler called!');

        // we don't need the confirm-password property
        let formValues = assign({}, values);
        if (formValues['confirm-password']) {
            delete formValues['confirm-password'];
        }

        this.props.dispatch(register(formValues));

    }

    render() {
        
        const { handleSubmit, registration, submitFailed } = this.props;
        const { registrationStatus, errorMessage } = registration;

        let formMessage = null;
        if (registrationStatus === 'failed') {
            formMessage = <FormMessage message={errorMessage} />;
        }

        return (
            <section>
                <h3>Register</h3>
                <form onSubmit={handleSubmit(this.submitHandler)}>
                    <div className="row uniform">
                        {formMessage}
                        <FormField type="text" name="firstName" id="firstName" value="" placeholder="First Name" cssClass="6u$ 12u$(xsmall)" autoFocus submitFailed={submitFailed}/>
                        <FormField type="text" name="lastName" id="lastName" value="" placeholder="Last Name" cssClass="6u$ 12u$(xsmall)" submitFailed={submitFailed}/>
                        <FormField type="email" name="email" id="email" value="" placeholder="Email" cssClass="6u$ 12u$(xsmall)" submitFailed={submitFailed}/>
                        <FormField type="password" name="password" id="password" value="" placeholder="Password" cssClass="6u$ 12u$(xsmall)" submitFailed={submitFailed}/>
                        <FormField type="password" name="confirm-password" id="confirm-password" value="" placeholder="Confirm Password" cssClass="6u$ 12u$(xsmall)" submitFailed={submitFailed}/>
                        <FormField type="text" name="secret" id="secret" value="" placeholder="Secret" cssClass="6u$ 12u$(xsmall)"submitFailed={submitFailed} />
                        
                        <div className="12u$">
                            <ul className="actions">
                                <li><input type="submit" value="Register" className="special" /></li>
                            </ul>
                        </div>
                    </div>    
                </form>
            </section>
            
        );
    }
}

const mapStateToProps = (state) => {
    const { registration } = state;
    return {
        registration
    } 
};

// Decorate the form component
RegistrationForm = reduxForm({
  form: 'register', // a unique name for this form
  validate: validationUtil.validateRegistrationForm
})(RegistrationForm);

export default connect(mapStateToProps)(RegistrationForm);
