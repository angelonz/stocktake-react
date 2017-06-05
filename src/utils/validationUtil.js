import validate from 'validate.js';
import forIn from 'lodash/forIn';

const runChecks = (values, constraints) => {
    const errors = {};
    const result = validate(values, constraints);

    forIn(result, (value, key) => {
        errors[key] = value[0];
    });

    return errors;
};

const validateLoginForm = (values) => {
    const constraints = {
        email: {
            presence: true,
            email: true
        },
        password: {
            presence: true
        }
    };

    return runChecks(values, constraints);

};

const validateRegistrationForm = (values) => {
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
            presence: true,
            format: {
                pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
            }
        },
        "confirm-password": {
            presence: true,
            equality: "password"
        },
        secret: {
            presence: true
        }
    };

    return runChecks(values, constraints);

};

export default {
    validateRegistrationForm,
    validateLoginForm
}
