import request from 'superagent';
import authUtil from '../utils/authUtil';
import HttpStatus from 'http-status-codes';

const addSite = (formValues) => {
    return (dispatch) => {

        if (!authUtil.isAuthenticated()) {
            dispatch({
                type: 'NOT_AUTHENTICATED',
                errorMessage: 'Session expired.  Please log in again.'
            });
            return;
        }

        const site = formValues.site.toLowerCase();

        request.post(`/api/${site}`)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', `Bearer ${authUtil.getJWT()}`)
            .send(formValues)
            .end((err, res) => {

                if (err || res.status !== HttpStatus.CREATED) {
                    dispatch({
                        type: 'ADD_SITE_FAILED',
                        errorMessage: res.body.error
                    });
                } else {
                    dispatch({
                        type: 'ADD_SITE_SUCCESS',
                        sites: res.body.sites
                    });
                }

            });

    };    
};

const fetchBalance = (site) => {
    return (dispatch) => {
        request.get(`/api/${site}`)
            .set('Authorization', `Bearer ${authUtil.getJWT()}`)
            .end((err, res) => {

                console.log('fetchBalance', res);

            });
    }
}

export {
    addSite,
    fetchBalance
}
