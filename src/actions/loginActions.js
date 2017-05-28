import request from 'superagent';
import HttpStatus from 'http-status-codes';
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
                    // save the token in localStorage
                    authUtil.storeToken(res.body.jwt);
                    dispatch({ 
                        type: 'LOGIN_SUCCESS'
                    });
                    
                }

            });

    }
};

export default login;
