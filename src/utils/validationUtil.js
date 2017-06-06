/* eslint-disable no-useless-escape */

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
            presence: true,
            length: {
                maximum: 35
            }
        },
        lastName: {
            presence: true,
            length: {
                maximum: 35
            }
        },
        email: {
            presence: true,
            email: true
        },
        password: {
            presence: true,
            format: {
                pattern: "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\\s).{8,15}$",
                message: "should be between 8 to 15 characters, contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character"
            },
            length: {
                maximum: 15
            }
        },
        "confirm-password": {
            presence: true,
            equality: "password"
        },
        secret: {
            presence: true,
            length: {
                minimum: 8,
                tooShort: "needs to have %{count} characters or more"
            }
        }
    };

    return runChecks(values, constraints);

};

export default {
    validateRegistrationForm,
    validateLoginForm
}
