import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import FormField from './FormField';
import { connect } from 'react-redux';
import queryString from 'query-string';

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.submitHandler = this.submitHandler.bind(this);
    }

    componentDidMount() {
        if (this.props.pathname && this.props.pathname === '/verify') { // came from email verification link

            if (this.props.search) {
                let params = queryString.parse(this.props.search);
                console.log('params', params);
            }

        } else { // directly used /login path

        }
    }
    
    submitHandler(values) {

    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <section>
                <h3>Login</h3>
                <form onSubmit={handleSubmit(this.submitHandler)}>
                    <div className="row uniform">
                        <FormField type="email" name="email" id="email" value="" placeholder="Email" cssClass="6u$ 12u$(xsmall)" />
                        <FormField type="password" name="password" id="password" value="" placeholder="Password" cssClass="6u$ 12u$(xsmall)" />
                        
                        <div className="12u$">
                            <ul className="actions">
                                <li><input type="submit" value="Login" className="special" /></li>
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
            
        }
    };
}

const mapStateToProps = (state) => {
    const { pathname, search } = state.router.location;
    return {
        pathname,
        search
    };
}

// Decorate the form component
LoginForm = reduxForm({
  form: 'login' // a unique name for this form
  
})(LoginForm);

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
