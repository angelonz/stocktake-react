import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import FormField from './FormField';
import { addSite } from './actions/dashboardActions';

class SiteInput extends Component {

    constructor(props) {
        super(props);
        this.addSiteHandler = this.addSiteHandler.bind(this);
    }

    addSiteHandler(values) {
        this.props.addSite(values);
    }

    render() {

        const { handleSubmit, submitFailed } = this.props;

        

        return (
            <section>
                <h3>Add To My Sites</h3>
                <form onSubmit={handleSubmit(this.addSiteHandler)}>
                    <div className="row uniform">
                        <div className="6u$ 12u$(xsmall)">
                            <div className="select-wrapper">
                                <Field name="site" id="site" component="select">
                                    <option value="">- Sites -</option>
                                    <option value="fotolia">Fotolia</option>
                                    <option value="gettyimages">Getty Images</option>
                                    <option value="123rf">123RF</option>
                                    <option value="dreamstime">Dreamstime</option>
                                </Field>
                            </div>
                        </div>

                        <FormField type="text" name="username" id="username" value="" placeholder="Username" cssClass="6u$ 12u$(xsmall)" submitFailed={submitFailed}/>
                        <FormField type="password" name="password" id="password" value="" placeholder="Password" cssClass="6u$ 12u$(xsmall)" submitFailed={submitFailed}/>

                        <div className="4u$ 12u$(xsmall)">
                            <ul className="actions">
                                <li><input type="submit" value="Add Site" className="button" /></li>
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
        addSite: (formValues) => {
            dispatch(addSite(formValues));
        }
    };
}

// Decorate the form component
SiteInput = reduxForm({
  form: 'dashboard' // a unique name for this form
})(SiteInput);

export default connect(null, mapDispatchToProps)(SiteInput);
