import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import FormField from './FormField';

class LoginForm extends Component {

    render() {
        console.log('props', this.props);
        const { handleSubmit, reset } = this.props;
        return (
            <form onSubmit={handleSubmit}>
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
        );
    }
}

const submitHandler = (values) => {
    console.log('submit', values);
}

// Decorate the form component
LoginForm = reduxForm({
  form: 'login', // a unique name for this form
  onSubmit: submitHandler
})(LoginForm);

export default LoginForm;
