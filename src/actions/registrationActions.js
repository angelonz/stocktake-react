import request from 'superagent';
import HttpStatus from 'http-status-codes';

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

                let action = 'REGISTER_SUCCESS';
                if (err || res.status !== HttpStatus.OK) {
                    action = 'REGISTER_FAILED';
                } 

                dispatch({
                    type: action
                });

            });

    }
};

export default register;
