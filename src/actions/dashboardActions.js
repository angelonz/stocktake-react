import request from 'superagent';
import authUtil from '../utils/authUtil';
import HttpStatus from 'http-status-codes';

const addSite = (formValues) => {
    return (dispatch) => {

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
                        site
                    });
                }

            });

    };    
}

export {
    addSite
}
