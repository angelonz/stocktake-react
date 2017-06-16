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

                    // adding an isBalanceBeingFetched property
                    const enhancedSites = res.body.sites.map((site) => {
                        return {
                            ...site,
                            isBalanceBeingFetched: true
                        }
                    });

                    dispatch({
                        type: 'ADD_SITE_SUCCESS',
                        sites: enhancedSites
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

                if (res.status === HttpStatus.OK || res.status === HttpStatus.NOT_MODIFIED) {
                    dispatch({
                        type: 'SITE_BALANCE_FETCHED',
                        balance: res.body[site],
                        site
                    });
                }

            });
    }
}

export {
    addSite,
    fetchBalance
}
