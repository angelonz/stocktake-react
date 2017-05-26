import request from 'superagent';
import HttpStatus from 'http-status-codes';
import { push } from 'react-router-redux';

const register = (formValues) => {

    // return a function
    return (dispatch) => {
        dispatch({ 
            type: 'REGISTER'
        });

        request.post('/register')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send(formValues)
            .end((err, res) => {

                if (err || res.status !== HttpStatus.OK) {
                    
                    dispatch({ 
                        type: 'REGISTER_FAILED',
                        errorMessage: res.body.error
                     });

                } else {
                    dispatch({ 
                        type: 'REGISTER_SUCCESS',
                        email: formValues.email
                    });
                    dispatch(push('/activate'));
                }

            });

    }
};

export default register;
