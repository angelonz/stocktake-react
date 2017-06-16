import React, { Component } from 'react';
import { fetchBalance } from './actions/dashboardActions';
import { connect } from 'react-redux';

class Site extends Component {

    componentDidMount() {
        console.log(`fetching ${this.props.siteName}`);
        this.props.fetchBalance(this.props.siteName);
    }

    render() {
        const { siteName, userSites } = this.props;
        const { balances } = userSites;

        /*
        const matchedSite = sites.find((detail) => {
            return detail.site === siteName;
        });
        */

        let balanceComponent = null;
        /*
        if (matchedSite && matchedSite.isBalanceBeingFetched === true) {
            balanceComponent = <i className="fa fa-spinner fa-pulse fa-2x" aria-hidden="true" />;
        }
        */

        const matchedBalance = balances.find((detail) => {
            return detail.site === siteName;
        });

        if (matchedBalance) {
            balanceComponent = matchedBalance.balance;
        } else {
            balanceComponent = <i className="fa fa-spinner fa-pulse fa-2x" aria-hidden="true" />;
        }

        return (
            <div className="4u">
                <span className="image fit">
                    <div className="earnings-box">
                        <header>
                            <h5>{siteName}</h5>
                        </header>
                        <p>{ balanceComponent }</p>
                        <a href="#" className="button special small">Edit</a>
                    
                    </div>
                </span>
            </div>
        );
    }

    
};

const mapStateToProps = (state) => {
    return {
        userSites: state.sites
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBalance: (site) => {
            dispatch(fetchBalance(site));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Site);
