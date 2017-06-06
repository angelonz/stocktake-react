import React from 'react';
import SitesInput from './SitesInput';

const Dashboard = () => {
    return (
        <div>   

            <section id="one" className="wrapper style1 special">
                <div className="inner">
                    <header className="major">
                        <h2>This is the Dashboard.</h2>
                    </header>
                </div>

            </section>

            <section className="wrapper style5">   
                <div className="inner">
                    <SitesInput />
                </div>
                
            </section>

        </div>
        

    );
};

export default Dashboard;
