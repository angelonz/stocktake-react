import request from 'superagent';

const addSite = (formValues) => {
    return (dispatch) => {

        request.post(`/api/${formValues.site.toLowerCase()}`)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send(formValues)
            .end((err, res) => {

                console.log('response', res.status);

            });

    };    
}

export {
    addSite
}
