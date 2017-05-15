import request from 'superagent';
import HttpStatus from 'http-status-codes';

const verify = (queryString) => {

    return (dispatch) => {
        dispatch({
            type: 'VERIFY'
        });

        request.get(`/verify${queryString}`)
            .send()
            .end((err, res) => {

                if (err || res.status !== HttpStatus.OK) {
                    dispatch({ type: 'VERIFY_FAILED' });
                } else {
                    dispatch({ 
                        type: 'VERIFY_SUCCESS'
                    });
                }

            });

    }

};

export default verify;
