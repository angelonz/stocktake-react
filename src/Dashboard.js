import React from 'react';
import SiteInput from './SiteInput';
import EarningsContainer from './EarningsContainer';
import { connect } from 'react-redux';
import authUtil from './utils/authUtil';
import { Redirect } from 'react-router-dom';

const Dashboard = ({ sites }) => {

    if (!authUtil.isAuthenticated()) {
        return (
            <Redirect to='/login' />
        );
    }

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
                    <EarningsContainer userSites={sites}/>
                    <hr/>
                    <SiteInput />
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
