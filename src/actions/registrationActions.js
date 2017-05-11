import { request } from 'superagent';

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
                console.log('in register');
                let action = 'REGISTER_SUCCESS';
                if (err) {
                    action = 'REGISTER_FAILED';
                } 

                dispatch({
                    type: action
                });

            });

    }
};

export default register;
