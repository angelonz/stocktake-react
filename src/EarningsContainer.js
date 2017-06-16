import React from 'react';
import Site from './Site';
import { isEmpty } from 'lodash';

const EarningsContainer = ({ userSites }) => {
    
    let display;

    if (isEmpty(userSites)) {
        display = <p>You have no sites yet.  Get started by adding a site.</p>
    } else {
        display = userSites.map((website) => <Site siteName={website.site} key={website.site}/>);
    }

    return (
        <section>
            <h3>Your Earnings</h3>
            <div className="row uniform 50%">
                { display }
            </div>
        </section>
    );
};

export default EarningsContainer;
