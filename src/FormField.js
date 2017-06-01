import React from 'react';
import { Field } from 'redux-form';

const FormField = ({ cssClass, type, name, id, placeholder, value, autoFocus }) => {
    return (
        <div className={cssClass}>
            <Field type={type} name={name} id={id} value={value} placeholder={placeholder} component="input" autoFocus={autoFocus}/>
        </div>
    );
};

export default FormField;
