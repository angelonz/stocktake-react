import React from 'react';
import { Field } from 'redux-form';

const inputField = ({input, label, type, cssClass, placeholder, meta: {touched, error, submitFailed}}) => (
    <div className={cssClass}>
      <input {...input} placeholder={placeholder} type={type} />
      {touched &&
                (error && <p className="validation-error">{error}</p>)}
    </div>            
)

const FormField = (props) => {
    return (
      <Field {...props} name={props.name} component={inputField}/>
    );
};

export default FormField;
