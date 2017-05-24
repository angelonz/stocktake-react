import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import FormField from './FormField';
import { assign } from 'lodash';
import { connect } from 'react-redux';
import register from './actions/registrationActions' 

class RegistrationForm extends Component {

    constructor(props) {
        super(props);
        this.submitHandler = this.submitHandler.bind(this);
    }
    
    submitHandler(values) {

        // we don't need the confirm-password property
        let formValues = assign({}, values);
        if (formValues['confirm-password']) {
            delete formValues['confirm-password'];
        }

        this.props.registerUser(formValues);

    }

    render() {
        const { handleSubmit, reset } = this.props;
        return (
            <section>
                <h3>Register</h3>
                <form onSubmit={handleSubmit(this.submitHandler)}>
                    <div className="row uniform">
                        <FormField type="text" name="username" id="username" value="" placeholder="Name" cssClass="6u$ 12u$(xsmall)" />
                        <FormField type="email" name="email" id="email" value="" placeholder="Email" cssClass="6u$ 12u$(xsmall)" />
                        <FormField type="password" name="password" id="password" value="" placeholder="Password" cssClass="6u$ 12u$(xsmall)" />
                        <FormField type="password" name="confirm-password" id="confirm-password" value="" placeholder="Confirm Password" cssClass="6u$ 12u$(xsmall)" />
                        <FormField type="text" name="secret" id="secret" value="" placeholder="Secret" cssClass="6u$ 12u$(xsmall)" />
                        
                        <div className="12u$">
                            <ul className="actions">
                                <li><input type="submit" value="Register" className="special" /></li>
                                <li><input type="reset" value="Reset" onClick={reset}/></li>
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
        registerUser: (formValues) => {
            dispatch(register(formValues));
        }
    };
}

// Decorate the form component
RegistrationForm = reduxForm({
  form: 'register' // a unique name for this form
  
})(RegistrationForm);

export default connect(null, mapDispatchToProps)(RegistrationForm);
