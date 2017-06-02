import validate from 'validate.js';
import forIn from 'lodash/forIn';


const validateRegistrationForm = (values) => {
    const errors = {};
    const constraints = {
        firstName: {
            presence: true
        },
        lastName: {
            presence: true
        },
        email: {
            presence: true,
            email: true
        },
        password: {
            presence: true
        },
        "confirm-password": {
            presence: true,
            equality: "password"
        },
        secret: {
            presence: true
        }
    };

    const result = validate(values, constraints);

    forIn(result, (value, key) => {
        errors[key] = value[0];
    });

    return errors;
};

export default {
    validateRegistrationForm
}
