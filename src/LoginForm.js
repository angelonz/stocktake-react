import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class LoginForm extends Component {

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div className="row uniform">
                    <div className="6u$ 12u$(xsmall)">
                        <Field type="text" name="username" id="username" value="" placeholder="Name" component="input" />
                    </div>
                    <div className="6u$ 12u$(xsmall)">
                        <Field type="email" name="email" id="email" value="" placeholder="Email" component="input" />
                    </div>
                    <div className="6u$ 12u$(xsmall)">
                        <Field type="password" name="password" id="password" value="" placeholder="Password" component="input" />
                    </div>
                    <div className="6u$ 12u$(xsmall)">
                        <Field type="text" name="secret" id="secret" value="" placeholder="Secret" component="input" />
                    </div>
                    <div className="12u$">
                        <ul className="actions">
                            <li><input type="submit" value="Register" className="special" /></li>
                            <li><input type="reset" value="Reset" /></li>
                        </ul>
                    </div>
                </div>    
            </form>
        );
    }
}

// Decorate the form component
LoginForm = reduxForm({
  form: 'login' // a unique name for this form
})(LoginForm);

export default LoginForm;
