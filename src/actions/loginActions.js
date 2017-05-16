import request from 'superagent';
import HttpStatus from 'http-status-codes';
import { push } from 'react-router-redux';
import authUtil from '../utils/authUtil';

const login = (formValues) => {

    // return a function
    return (dispatch) => {
        dispatch({ 
            type: 'LOGIN'
        });

        request.post('/login')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send(formValues)
            .end((err, res) => {

                if (err || res.status !== HttpStatus.OK) {
                    dispatch({ type: 'LOGIN_FAILED' });
                } else {
                    dispatch({ 
                        type: 'LOGIN_SUCCESS'
                    });
                    // save the token in localStorage
                    authUtil.storeToken(res.body.jwt);
                    dispatch(push('/activate'));
                }

            });

    }
};

export default login;
