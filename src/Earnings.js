import React from 'react';

const Earnings = ({sites}) => {
    console.log(sites);
    return (
        <section>
            <h3>This is the Earnings page.</h3>
            <div className="row uniform">
                { sites.map((site) => {
                        return (
                            <div className="4u" key={site.site}>
                                <span className="image fit"><img src="images/pic01.jpg" alt="" /></span>
                            </div>
                        )   
                    })
                }
                
            </div>
        </section>
    );
};

export default Earnings;
