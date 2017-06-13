import React from 'react';
import SiteInput from './SiteInput';
import Earnings from './Earnings';
import { connect } from 'react-redux';

const Dashboard = ({ sites }) => {
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
                    <SiteInput />
                    <Earnings sites={sites}/>
                </div>
                
            </section>

        </div>
        

    );
};

const mapStateToProps = (state) => {
    return {
        sites: state.sites
    }
};

export default connect(mapStateToProps)(Dashboard);
