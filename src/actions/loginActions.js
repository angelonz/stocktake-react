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
                    dispatch({ 
                        type: 'LOGIN_FAILED',
                        errorMessage: res.body.error
                    });
                } else {
                    // save the token in localStorage
                    authUtil.storeToken(res.body.jwt);
                    dispatch({ 
                        type: 'LOGIN_SUCCESS',
                        firstName: res.body.firstName,
                        lastName: res.body.lastName
                    });

                    // adding an isBalanceBeingFetched property
                    const enhancedSites = res.body.sites.map((site) => {
                        return {
                            ...site,
                            isBalanceBeingFetched: true
                        }
                    });

                    dispatch({
                        type: 'SITES_FETCHED',
                        sites: enhancedSites
                    });
                    
                }

            });

    }
};

export default login;
